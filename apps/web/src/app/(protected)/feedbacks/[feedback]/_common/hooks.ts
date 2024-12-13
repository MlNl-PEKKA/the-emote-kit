import type { FeedbackNextProps } from "@/feedback/types";
import { api } from "@/trpc-client/react";
import { useParams } from "next/navigation";

export const useFeedback = () => useParams<FeedbackNextProps["params"]>();

export const useFeedbackRead = () => {
  const { feedback } = useFeedback();
  return api.protected.feedbacks.feedback.read.useSuspenseQuery({
    id: feedback,
  })[0];
};
