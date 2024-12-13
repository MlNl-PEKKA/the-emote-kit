import { publicProcedure } from "..";
import type { PublicProcedure } from "..";

const query = ({ ctx }: PublicProcedure) => ctx.session;

export const session = publicProcedure.query(query);
