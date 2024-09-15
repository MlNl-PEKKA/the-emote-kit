/* eslint-disable @typescript-eslint/no-explicit-any */
export type CustomizableTypes<T extends "Array" | "Object"> = T extends "Array"
  ? Record<string, any>[]
  : Record<string, any>;

export type Custom<
  T extends CustomizableTypes<"Array"> | CustomizableTypes<"Object">,
  U extends T extends CustomizableTypes<"Array">
    ? Partial<{ [id in keyof T[number]]: any }>
    : Partial<{ [id in keyof T]: any }>,
> =
  T extends CustomizableTypes<"Array">
    ? (Omit<T[number], keyof U> &
        Required<Pick<U, Extract<keyof RequiredOnly<T[number]>, keyof U>>> &
        Partial<Pick<U, Extract<keyof PartialOnly<T[number]>, keyof U>>>)[]
    : T extends CustomizableTypes<"Object">
      ? Omit<T, keyof U> &
          Required<Pick<U, Extract<keyof RequiredOnly<T>, keyof U>>> &
          Partial<Pick<U, Extract<keyof PartialOnly<T>, keyof U>>>
      : never;

export type RequiredOnly<T extends CustomizableTypes<"Object">> = Pick<
  T,
  {
    [id in keyof T]-?: undefined extends T[id] ? never : id;
  }[keyof T]
>;

export type PartialOnly<T extends CustomizableTypes<"Object">> = Omit<
  T,
  keyof RequiredOnly<T>
>;