import type { FeedbackNextProps } from "@/feedback/types";
import { getWidgetUrl } from "@repo/utils/getWidgetUrl";
import Script from "next/script";

const Page = async (props: FeedbackNextProps["page"]) => {
  const { feedback } = await props.params;
  return (
    <>
      {feedback}
      <Script src={getWidgetUrl()} />
      <emote-kit-feedback id={feedback} theme="dark"></emote-kit-feedback>
      <emote-kit-banner id={feedback} theme="dark"></emote-kit-banner>
    </>
  );
};

export default Page;
