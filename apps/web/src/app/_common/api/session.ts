import { publicProcedure } from "@/trpc/server";
import type { PublicProcedure } from "@/trpc/server";

const query = ({ ctx }: PublicProcedure) => ctx.session;

export const session = publicProcedure.query(query);
