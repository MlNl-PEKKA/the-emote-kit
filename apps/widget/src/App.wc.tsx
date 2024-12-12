/* eslint-disable @typescript-eslint/no-namespace */
import React from "react";
import ReactDOM from "react-dom/client";

import r2wc from "react-to-webcomponent";
import App from "./App";

export const EmoteKitWidget = r2wc(App, React, ReactDOM, {
  props: {
    id: "string",
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "emote-kit-widget": Props;
    }
  }
}

type Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> &
  Parameters<typeof App>[0];
