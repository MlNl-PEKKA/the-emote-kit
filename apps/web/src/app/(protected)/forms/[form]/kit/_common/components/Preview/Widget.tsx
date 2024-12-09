import type { DetailedHTMLProps, HTMLAttributes } from "react";
import Script from "next/script";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
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
      src={process.env.NEXT_PUBLIC_WIDGET_URL}
      strategy="lazyOnload"
      onLoad={() => {
        console.log("Widget script loaded!");
      }}
    ></Script>
    <emote-widget></emote-widget>
  </>
);
