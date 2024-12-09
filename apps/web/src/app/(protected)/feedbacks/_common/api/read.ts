import type { ProcedureDefinition, ProtectedProcedure } from "@/trpc/server";
import { protectedProcedure } from "@/trpc/server";
import { TRPCError } from "@trpc/server";
import { feedbackProjectRowSchema } from "@repo/database/zod";

const schema = feedbackProjectRowSchema
  .pick({ title: true })
  .partial({ title: true });

const query = async ({ ctx, input }: ProtectedProcedure<typeof schema>) => {
  const query = ctx.db
    .from("feedback_project")
    .select()
    .eq("user_id", ctx.user.id);

  if (input.title) query.ilike("title", `%${input.title}%`);

  const feedbacks = (await query.throwOnError()).data;

  if (!feedbacks)
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "feedback_project not found",
    });

  return feedbacks;
};

export const read = protectedProcedure.input(schema).query(query);

export type Read = ProcedureDefinition<typeof read>;
