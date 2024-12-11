import type { FeedbackProcedure } from "@/feedback/procedures";
import { feedbackProcedure } from "@/feedback/procedures";
import { TRPCError } from "@trpc/server";

const query = async ({ ctx, input }: FeedbackProcedure) => {
  const data = (
    await ctx.db
      .from("feedback_project")
      .select()
      .eq("id", input.id)
      .single()
      .throwOnError()
  ).data;
  if (!data)
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Feedback project not found",
    });
  return data;
};

export const read = feedbackProcedure.query(query);
