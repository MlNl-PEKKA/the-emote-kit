import { feedbackProcedure } from "./procedure";

export const remove = feedbackProcedure.mutation(async ({ ctx, input }) => {
  await ctx.db
    .from("feedback_project")
    .delete()
    .eq("id", input.id)
    .eq("user_id", ctx.user.id)
    .throwOnError();
});
