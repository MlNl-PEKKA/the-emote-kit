import { protectedProcedure } from "../..";
import type { ProtectedProcedure } from "../..";

const mutation = async ({ ctx }: ProtectedProcedure) =>
  await ctx.db.auth.signOut({ scope: "local" });

export const logout = protectedProcedure.mutation(mutation);
