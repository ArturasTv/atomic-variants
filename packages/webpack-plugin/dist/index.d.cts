import { Compiler } from "webpack";

//#region src/index.d.ts
declare class AtomicVariantsPlugin {
  private extractedClasses;
  private debug;
  private filePath?;
  constructor(options?: {
    filePath?: string;
    debug?: boolean;
  });
  private log;
  apply(compiler: Compiler): void;
}
export = AtomicVariantsPlugin;