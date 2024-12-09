import { api } from "@/trpc/client/react";
import type { Read } from "@/feedbacks/api/read";
import { useFeedbacksStore } from "@/feedbacks/store";

export const useFeedbacksRead = (): Read["output"] => {
  const title = useFeedbacksStore((store) => store.search);
  return api.protected.feedbacks.read.useSuspenseQuery({ title })[0];
};

export const useFeedbacksCreate = () => {
  return api.protected.feedbacks.create.useMutation();
};
