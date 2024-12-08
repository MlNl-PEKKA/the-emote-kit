import type { DetailedHTMLProps, HTMLAttributes } from "react";
import Script from "next/script";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "emote-widget": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
export const Widget = () => (
  <>
    <Script
      src="http://localhost:5173/dist/emote-widget.umd.js"
      strategy="lazyOnload"
      onLoad={() => {
        console.log("Widget script loaded!");
      }}
    ></Script>
    <emote-widget></emote-widget>
  </>
);
