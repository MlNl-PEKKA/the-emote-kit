import { api } from "@/trpc/client/react";
import type { Read } from "@/feedbacks/api/read";
import { useFeedbacksStore } from "@/feedbacks/store";

export const useFeedbacksRead = (): Read["output"] => {
  const title = useFeedbacksStore((store) => store.title);
  const status = useFeedbacksStore((store) => store.status);
  return api.protected.feedbacks.read.useSuspenseQuery({ title, status })[0];
};

export const useFeedbacksCreate = () => {
  return api.protected.feedbacks.create.useMutation();
};
