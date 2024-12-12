import { Widget } from "@/components/Widget";
import styles from "./index.css?inline";
import { WidgetProvider } from "./providers/WidgetProvider";

type Props = Omit<Parameters<typeof WidgetProvider>[0], "children">;

function App(props: Props) {
  return (
    <>
      <style>{styles}</style>
      <span className="widget dark">
        <WidgetProvider {...props}>
          <Widget />
        </WidgetProvider>
      </span>
    </>
  );
}

export default App;
