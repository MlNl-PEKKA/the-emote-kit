import type { EmoteKitWidgetProps } from "@repo/types";
import { createContext, useContext } from "react";
import type { PropsWithChildren } from "react";
import styles from "../index.css?inline";
import { cn } from "@/lib/utils";
import { TRPCReactProvider } from "@/trpc-client/react";

const WidgetContext = createContext<EmoteKitWidgetProps | undefined>(undefined);

export const WidgetProvider = (
  props: PropsWithChildren<EmoteKitWidgetProps>
) => {
  return (
    <>
      <style>{styles}</style>
      <span className={cn("widget", props.theme)}>
        <TRPCReactProvider>
          <WidgetContext.Provider value={props}>
            {props.children}
          </WidgetContext.Provider>
        </TRPCReactProvider>
      </span>
    </>
  );
};

export const useWidget = () => {
  const value = useContext(WidgetContext);
  if (!value) throw new Error("WidgetContext not found as a provider");
  return value;
};
