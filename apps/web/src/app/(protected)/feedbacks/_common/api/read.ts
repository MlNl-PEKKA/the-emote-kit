import type { ProcedureDefinition, ProtectedProcedure } from "@/trpc/server";
import { protectedProcedure } from "@/trpc/server";

import { TRPCError } from "@trpc/server";

import { readSchema } from "@/feedbacks/schema/read";

const query = async ({ ctx, input }: ProtectedProcedure<typeof readSchema>) => {
  const query = ctx.db
    .from("feedback_project")
    .select()
    .eq("user_id", ctx.user.id);

  if (typeof input?.title !== "undefined")
    query.ilike("title", `%${input.title}%`);

  if (typeof input?.status !== "undefined" && input.status.length !== 0)
    query.in("status", input.status);

  const feedbacks = (await query.throwOnError()).data;

  if (!feedbacks)
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "feedback_project not found",
    });

  return feedbacks;
};

export const read = protectedProcedure.input(readSchema).query(query);

export type Read = ProcedureDefinition<typeof read>;
