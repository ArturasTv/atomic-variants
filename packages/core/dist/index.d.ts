//#region src/index.d.ts
type GetVariants<T extends (...args: never) => unknown> = Required<Parameters<T>>[0];
type ClassNameProps<T extends string = never> = {
  className?: string;
} & { [K in T as `${K}ClassName`]?: string };
type KeysOf<T> = T extends readonly (infer K)[] ? K : never;
type ConvertBoolean<T> = T extends "true" | "false" ? boolean : T;
type HasRequiredKeys<T> = T extends true ? true : KeysOf<T> extends never ? false : true;
type ConditionalArgs<Condition extends boolean, Args> = Condition extends true ? [Args] : [Args?];
type BreakPoints = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
type VariantObject<Variant, ResponsiveVariants extends true | Array<keyof Variant>> = { [K in keyof Variant]: VariantValues<K, Variant, ResponsiveVariants> };
type VariantValues<K$1 extends keyof Variant, Variant, ResponsiveVariants extends true | Array<keyof Variant>> = ConvertBoolean<keyof Variant[K$1]> | (ResponsiveVariants extends true ? Partial<Record<BreakPoints, ConvertBoolean<keyof Variant[K$1]>>> : ResponsiveVariants extends Array<keyof Variant> ? Extract<K$1, ResponsiveVariants[number]> extends never ? undefined : Partial<Record<BreakPoints, ConvertBoolean<keyof Variant[K$1]>>> : undefined);
type VariantParams<Variant, ResponsiveVariants extends true | Array<keyof Variant>, RequiredVariants extends true | Array<keyof Variant>> = ClassNameProps & (RequiredVariants extends true ? Required<VariantObject<Variant, ResponsiveVariants>> : Partial<VariantObject<Variant, ResponsiveVariants>> & Required<Pick<VariantObject<Variant, ResponsiveVariants>, KeysOf<RequiredVariants>>>);
declare let config: {
  finalize: (result: string) => string;
};
declare function atomic<Variants extends Record<string, Record<string, string>>, ResponsiveVariants extends true | Array<keyof Variants> = [], RequiredVariants extends true | Array<keyof Variants> = []>({
  base,
  override,
  variants,
  defaultVariants,
  responsiveVariants
}: {
  base?: string;
  override?: string;
  variants?: Variants;
  defaultVariants?: VariantParams<Variants, ResponsiveVariants, RequiredVariants>;
  responsiveVariants?: ResponsiveVariants;
  requiredVariants?: RequiredVariants;
}): (...args: ConditionalArgs<HasRequiredKeys<RequiredVariants>, VariantParams<Variants, ResponsiveVariants, RequiredVariants>>) => string;
//#endregion
export { ClassNameProps, GetVariants, atomic, config };