import { useFeedback } from "@/feedback/hooks";
import { getWidgetUrl } from "@repo/utils/src/getWidgetUrl";
import Script from "next/script";

export const Component = () => {
  const { feedback } = useFeedback();
  return (
    <>
      <Script src={getWidgetUrl()} />
      <emote-kit-feedback id={feedback} theme="dark"></emote-kit-feedback>
    </>
  );
};
