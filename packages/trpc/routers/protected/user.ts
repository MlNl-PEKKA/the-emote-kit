import { protectedProcedure } from "../..";
import type { ProtectedProcedure } from "../..";

const query = async ({ ctx }: ProtectedProcedure) => ctx.user;

export const user = protectedProcedure.query(query);
