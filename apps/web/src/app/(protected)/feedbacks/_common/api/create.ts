import type { ProtectedProcedure } from "@/trpc/server";
import { protectedProcedure } from "@/trpc/server";
import { feedbackProjectRowSchema } from "@repo/database/zod";

const schema = feedbackProjectRowSchema.pick({ title: true });

const mutation = async ({ ctx, input }: ProtectedProcedure<typeof schema>) =>
  await ctx.db
    .from("feedback_project")
    .insert({
      user_id: ctx.user.id,
      title: input.title,
    })
    .throwOnError();

export const create = protectedProcedure.input(schema).mutation(mutation);
