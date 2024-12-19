"use client";

import { useFeedback } from "@/feedback/hooks";
import { getWidgetUrl } from "@repo/utils/src/getWidgetUrl";
import Script from "next/script";

export const Preview = () => {
  const { feedback } = useFeedback();
  return (
    <div className="flex w-full h-full items-center justify-center dotted">
      <Script src={getWidgetUrl()} />
      <emote-kit-feedback id={feedback} theme="dark"></emote-kit-feedback>
    </div>
  );
};
