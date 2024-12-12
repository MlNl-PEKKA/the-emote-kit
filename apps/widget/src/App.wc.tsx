import React from "react";
import ReactDOM from "react-dom/client";
import r2wc from "react-to-webcomponent";
import App from "./App";

export const EmoteKitWidget = r2wc(App, React, ReactDOM, {
  props: {
    id: "string",
    theme: "string",
  },
});
