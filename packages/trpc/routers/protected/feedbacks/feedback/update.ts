import { updateSchema } from "@repo/utils/schema/feedbacks";
import { feedbackProcedure } from "./procedure";

export const update = feedbackProcedure
  .input(updateSchema)
  .mutation(async ({ ctx, input: { id, ...input } }) => {
    await ctx.db
      .from("feedback_project")
      .update(input)
      .eq("id", id)
      .eq("user_id", ctx.user.id)
      .throwOnError();
  });
