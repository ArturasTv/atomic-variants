import fs from "fs";
import atomicVariantsPlugin from "../src";
import { ATOMIC_TAG } from "@atomic-variants/constants";

describe("atomicVariantsPlugin (Vite)", () => {
  let plugin: ReturnType<typeof atomicVariantsPlugin>;

  beforeEach(() => {
    plugin = atomicVariantsPlugin();
  });

  it("collects __atomic_generated classes and writes to .atomic-variants/.extracted", async () => {
    const input = `
      import { atomic } from "atomic-variants";
      /* ${ATOMIC_TAG}: text-blue-500 */
      const btn = atomic({ base: "text-blue-500" });
    `;
    const transformFn = plugin.transform as (
      code: string,
      id: string
    ) => Promise<{ code: string; map?: any }>;
    const buildEndFn = plugin.buildEnd as () => void;

    // Manually call transform() like Vite does
    const result = await transformFn(input, "Button.tsx");
    expect(result?.code).toContain(ATOMIC_TAG);

    // Trigger buildEnd() hook to write file
    buildEndFn();

    const contents = fs.readFileSync("atomic-variants.css", "utf8");
    expect(contents.trim()).toContain(`@source inline("text-blue-500")`);
  });
});
