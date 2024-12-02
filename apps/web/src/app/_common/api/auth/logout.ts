import { protectedProcedure } from "@/server/trpc";
import type { ProtectedProcedure } from "@/server/trpc";

const mutation = async ({ ctx }: ProtectedProcedure) =>
  await ctx.db.auth.signOut({ scope: "local" });

export const logout = protectedProcedure.mutation(mutation);
