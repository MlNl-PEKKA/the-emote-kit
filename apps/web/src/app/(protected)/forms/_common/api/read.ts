import { protectedProcedure } from "@/trpc/server";
import type { ProtectedProcedure } from "@/trpc/server";
import { TRPCError } from "@trpc/server";

const query = async ({ ctx }: ProtectedProcedure) => {
  const projects = (
    await ctx.db.from("form").select().eq("user_id", ctx.user.id).throwOnError()
  ).data;
  if (!projects)
    throw new TRPCError({ code: "NOT_FOUND", message: "Forms not found" });
  return projects;
};

export const read = protectedProcedure.query(query);
