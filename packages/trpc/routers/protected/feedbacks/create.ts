import type { ProtectedProcedure } from "../../..";
import { protectedProcedure } from "../../..";

import { createSchema } from "@repo/utils/schema/feedbacks";
import { TRPCError } from "@trpc/server";

const mutation = async ({
  ctx,
  input,
}: ProtectedProcedure<typeof createSchema>) => {
  const { data } = await ctx.db
    .from("feedback_project")
    .insert({
      user_id: ctx.user.id,
      title: input.title,
    })
    .select("id")
    .single()
    .throwOnError();
  if (!data)
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Feedback project not found",
    });
  return data;
};

export const create = protectedProcedure.input(createSchema).mutation(mutation);
