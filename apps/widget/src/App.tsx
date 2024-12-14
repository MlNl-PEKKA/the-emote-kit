import { Widget } from "@/components/Widget";
import styles from "./index.css?inline";
import { WidgetProvider } from "./providers/WidgetProvider";
import { cn } from "./lib/utils";
import type { EmoteKitWidgetProps } from "@repo/types";
import { TRPCReactProvider } from "./trpc-client/react";

function App({ theme = "dark", ...props }: EmoteKitWidgetProps) {
  return (
    <>
      <style>{styles}</style>
      <span className={cn("widget", theme)}>
        <TRPCReactProvider>
          <WidgetProvider {...props}>
            <Widget />
          </WidgetProvider>
        </TRPCReactProvider>
      </span>
    </>
  );
}

export default App;
