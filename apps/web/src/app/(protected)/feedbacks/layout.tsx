import { api, HydrateClient } from "@/trpc/client/server";

import type { FeedbacksNextProps } from "@/feedbacks/types";
import { FeedbacksStoreProvider } from "@/feedbacks/store";

import { connection } from "next/server";

const Layout = async (props: FeedbacksNextProps["layout"]) => {
  await connection();
  void api.protected.feedbacks.read.prefetch({
    title: "",
  });
  return (
    <FeedbacksStoreProvider>
      <HydrateClient>{props.children}</HydrateClient>
    </FeedbacksStoreProvider>
  );
};

export default Layout;
