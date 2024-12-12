import type { EmoteKitWidgetProps } from "@repo/types";
import type { PropsWithChildren } from "react";
import { createContext, useContext } from "react";

type Request = Pick<EmoteKitWidgetProps, "id">;

type Responses =
  | {
      type: "banner";
      title: string;
    }
  | {
      type: "feedback";
      bro: string;
    };

const useDefaults = (props: Request): Responses => {
  if (props.id !== "abc")
    return {
      type: "feedback",
      bro: "Shit",
    };
  return {
    type: "banner",
    title: "hello",
  };
};

const WidgetContext = createContext<Responses | undefined>(undefined);

export const WidgetProvider = (props: PropsWithChildren<Request>) => {
  const value = useDefaults(props);
  return (
    <WidgetContext.Provider value={value}>
      {props.children}
    </WidgetContext.Provider>
  );
};

type Response<T extends Responses["type"] | undefined> = T extends undefined
  ? Responses
  : Extract<Responses, { type: T }>;

export const useWidget = <T extends Responses["type"] | undefined>(
  type?: T
) => {
  const value = useContext(WidgetContext);
  if (!value) throw new Error("WidgetContext not found as a provider");
  if (!type) return value as Response<T>;
  if (value.type !== type) throw new Error("Widget type mismatch");
  return value as Response<T>;
};
