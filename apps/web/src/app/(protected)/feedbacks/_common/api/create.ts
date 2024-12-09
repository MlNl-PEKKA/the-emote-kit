import type { ProtectedProcedure } from "@/trpc/server";
import { protectedProcedure } from "@/trpc/server";

import { createSchema } from "@/feedbacks/schema/create";

const mutation = async ({
  ctx,
  input,
}: ProtectedProcedure<typeof createSchema>) =>
  await ctx.db
    .from("feedback_project")
    .insert({
      user_id: ctx.user.id,
      title: input.title,
    })
    .throwOnError();

export const create = protectedProcedure.input(createSchema).mutation(mutation);
