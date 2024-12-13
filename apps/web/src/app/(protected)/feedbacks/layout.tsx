import { api, HydrateClient } from "@/trpc-client/server";

import { READ } from "@/feedbacks/constants/read";
import { FeedbacksStoreProvider } from "@/feedbacks/store";
import type { FeedbacksNextProps } from "@/feedbacks/types";

import { connection } from "next/server";

const Layout = async (props: FeedbacksNextProps["layout"]) => {
  await connection();
  void api.protected.feedbacks.read.prefetch(READ);
  return (
    <FeedbacksStoreProvider>
      <HydrateClient>{props.children}</HydrateClient>
    </FeedbacksStoreProvider>
  );
};

export default Layout;
