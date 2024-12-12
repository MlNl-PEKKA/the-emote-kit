import type { FeedbackNextProps } from "@/feedback/types";
import { getWidgetUrl } from "@/lib/getWidgetUrl";
import Script from "next/script";

const Page = async (props: FeedbackNextProps["page"]) => {
  const { feedback } = await props.params;
  return (
    <>
      {feedback}
      <Script src={getWidgetUrl()} />
      <emote-kit-widget id="xyz" theme="dark"></emote-kit-widget>
    </>
  );
};

export default Page;
