import type { FeedbackNextProps } from "@/feedback/types";

const Page = async (props: FeedbackNextProps["page"]) => {
  const { feedback } = await props.params;
  return <>{feedback}</>;
};

export default Page;
