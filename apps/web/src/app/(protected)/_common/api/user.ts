import { protectedProcedure } from "@/trpc/server";
import type { ProtectedProcedure } from "@/trpc/server";

const query = async ({ ctx }: ProtectedProcedure) => ctx.user;

export const user = protectedProcedure.query(query);
