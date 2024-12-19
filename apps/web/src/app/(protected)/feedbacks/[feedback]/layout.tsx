import type { FeedbackNextProps } from "@/feedback/types";
import { api, HydrateClient } from "@/trpc-client/server";
import { FeedbackStoreProvider } from "@/feedback/store";

const Layout = async (props: FeedbackNextProps["layout"]) => {
  const { feedback } = await props.params;
  void api.protected.feedbacks.feedback.read.prefetch({ id: feedback });
  return (
    <HydrateClient>
      <FeedbackStoreProvider>{props.children}</FeedbackStoreProvider>
    </HydrateClient>
  );
};

export default Layout;
