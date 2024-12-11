import { api } from "@/trpc/client/react";
import type { Read } from "@/feedbacks/api/read";
import { useFeedbacksStore } from "@/feedbacks/store";
import { useRouter } from "next/navigation";
import { useToast } from "@/lib/hooks/use-toast";

export const useFeedbacksRead = (): Read["output"] => {
  const title = useFeedbacksStore((store) => store.title);
  const status = useFeedbacksStore((store) => store.status);
  return api.protected.feedbacks.read.useSuspenseQuery({ title, status })[0];
};

export const useFeedbacksCreate = () => {
  const { toast } = useToast();
  const router = useRouter();
  return api.protected.feedbacks.create.useMutation({
    onSuccess: ({ id }) => {
      toast({
        title: "Successfully created feedback project",
      });
      router.push(`/feedbacks/${id}`);
    },
    onError: ({ message }) =>
      toast({
        title: "Unable to create feedback project",
        description: message,
      }),
  });
};
