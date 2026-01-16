import { transform } from "@swc/core";
import fs from "fs";
import type { Plugin } from "vite";
const ATOMIC_TAG = "__atomic_generated";
const ATOMIC_REGEX = new RegExp(`/\\*\\s*${ATOMIC_TAG}:([^*]+)\\s*\\*/`, "g");
import path from "path";
import { fileURLToPath } from "url";

export default function atomicVariants(): Plugin {
  const extracted = new Set<string>();
  let viteCacheRoot: string;

  return {
    name: "vite-plugin",
    configResolved(config) {
      viteCacheRoot = config.cacheDir;
    },
    async transform(code, id) {
      if (!/\.(t|j)sx?$/.test(id)) return null;

      const isTS = id.endsWith(".ts") || id.endsWith(".tsx");
      const isTSX = id.endsWith(".tsx");

      const result = await transform(code, {
        filename: id,
        swcrc: false,
        sourceMaps: false,
        configFile: false,
        jsc: {
          parser: {
            syntax: isTS ? "typescript" : "ecmascript",
            tsx: isTSX,
          },
          target: "es2022",
          experimental: {
            plugins: [
              [path.join(path.dirname(fileURLToPath(import.meta.url)), "../swc-plugin/swc_plugin_atomic_variants.wasm"), { tag: ATOMIC_TAG }],
            ],
            cacheRoot: path.join(viteCacheRoot ?? "node_modules/.vite", ".swc"),
          },
        },
      });

      ATOMIC_REGEX.lastIndex = 0;
      const match = ATOMIC_REGEX.exec(result.code);
      if (match) {
        extracted.add((match?.[1] || "").trim());
        writeExtractedClasses(extracted);
      }

      return {
        code: result.code,
        map: result.map,
      };
    },

    buildEnd() {
      writeExtractedClasses(extracted);
    },
  };
}

const writeExtractedClasses = (extracted: Set<string>) => {
  if (extracted.size > 0) {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    fs.writeFileSync(
      path.resolve(__dirname, "../atomic-variants.css"),
      `@source inline("${Array.from(extracted).join(" ")}");`
    );
  }
};
