import { Widget } from "@/components/Widget";
import styles from "./index.css?inline";
import { WidgetProvider } from "./providers/WidgetProvider";
import { cn } from "./lib/utils";
import type { EmoteKitWidgetProps } from "@repo/types";

function App({ theme = "dark", ...props }: EmoteKitWidgetProps) {
  return (
    <>
      <style>{styles}</style>
      <span className={cn("widget", theme)}>
        <WidgetProvider {...props}>
          <Widget />
        </WidgetProvider>
      </span>
    </>
  );
}

export default App;
