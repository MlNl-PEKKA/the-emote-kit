import { createTRPCRouter, publicProcedure } from "../..";

export const widget = createTRPCRouter({
  hello: publicProcedure.query(() => `Hello`),
});
