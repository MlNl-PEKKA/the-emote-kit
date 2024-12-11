import { createTRPCRouter } from "@/trpc/server";
import { read } from "./read";

export const feedback = createTRPCRouter({
  read,
});
