/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDom from "react-dom/client";
import { Button } from "@/components/ui/button";
import tailwindStyles from "../index.css?inline";
import { ThemeProvider } from "@/components/theme-provider";

export const Widget = () => {
  return (
    <ThemeProvider>
      <style>{tailwindStyles}</style>
      <Button variant="outline">Buttons</Button>
    </ThemeProvider>
  );
};

const normalizeAttribute = (attribute: string) => {
  return attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

class WidgetWebComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const props = this.getPropsFromAttributes();
    const root = ReactDom.createRoot(this.shadowRoot!);
    root.render(<Widget {...props} />);
  }

  getPropsFromAttributes() {
    const props: Record<string, unknown> = {};
    for (const { name, value } of this.attributes) {
      props[normalizeAttribute(name)] = value;
    }
    return props;
  }
}

export default WidgetWebComponent;
