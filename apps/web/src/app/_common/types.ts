import type { Prettify } from "@repo/types";
import type { ReactNode } from "react";

type InputParams = undefined | string | readonly string[];

type OutputParams<T extends InputParams> = T extends readonly string[]
  ? Promise<{ [id in T[number]]: string }>
  : T extends string
    ? Promise<{ [id in T]: readonly string[] }>
    : never;

type InputParallelRoutes = undefined | readonly string[];

type OutpurParallelRoutes<T extends InputParallelRoutes> =
  T extends readonly string[]
    ? {
        [id in T[number]]: ReactNode;
      }
    : never;

type RootLayoutProps = {
  children: ReactNode;
};

type RootPageProps<T extends object | undefined = undefined> = {
  searchParams: T extends undefined ? undefined : Promise<object>;
};

type RootCommonProps<T extends InputParams = undefined> = {
  params: OutputParams<T>;
};

export type NextProps<
  T extends InputParams = undefined,
  U extends InputParallelRoutes = undefined,
> = {
  page: PageProps<T>;
  layout: LayoutProps<T, U>;
};

type PageProps<T extends InputParams = undefined> = T extends undefined
  ? RootPageProps
  : Prettify<RootPageProps & RootCommonProps<T>>;

type LayoutProps<
  T extends InputParams = undefined,
  U extends InputParallelRoutes = undefined,
> = T extends undefined
  ? U extends undefined
    ? RootLayoutProps
    : Prettify<RootLayoutProps & OutpurParallelRoutes<U>>
  : U extends undefined
    ? Prettify<RootLayoutProps & RootCommonProps<T>>
    : Prettify<RootLayoutProps & OutpurParallelRoutes<U> & RootCommonProps<T>>;

export type ParamProps<T extends readonly string[]> = {
  [id in T[number]]: string;
};
