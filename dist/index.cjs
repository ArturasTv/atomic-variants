"use strict";

const { transform } = require("@swc/core");
const fs = require("fs");
const path = require("path");
const { fileURLToPath, pathToFileURL } = require("url");

const ATOMIC_TAG = "__atomic_generated";
const ATOMIC_REGEX = new RegExp(`/\\*\\s*${ATOMIC_TAG}:([^*]+)\\s*\\*/`, "g");

function atomicVariants() {
  const extracted = new Set();
  let viteCacheRoot;

  return {
    name: "vite-plugin",
    configResolved(config) {
      viteCacheRoot = config.cacheDir;
    },
    async transform(code, id) {
      if (!/\.(t|j)sx?$/.test(id)) return null;

      const isTS = id.endsWith(".ts") || id.endsWith(".tsx");
      const isTSX = id.endsWith(".tsx");
      const currentDir = path.dirname(__filename);

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
              [path.join(currentDir, "../swc-plugin/swc_plugin_atomic_variants.wasm"), { tag: ATOMIC_TAG }],
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

function writeExtractedClasses(extracted) {
  if (extracted.size > 0) {
    const currentDir = path.dirname(__filename);
    fs.writeFileSync(
      path.resolve(currentDir, "../atomic-variants.css"),
      `@source inline("${Array.from(extracted).join(" ")}");`
    );
  }
}

module.exports = atomicVariants;
