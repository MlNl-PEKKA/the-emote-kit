import { protectedProcedure } from "@/trpc/server";
import type { ProtectedProcedure } from "@/trpc/server";

const mutation = async ({ ctx }: ProtectedProcedure) =>
  await ctx.db.auth.signOut({ scope: "local" });

export const logout = protectedProcedure.mutation(mutation);
