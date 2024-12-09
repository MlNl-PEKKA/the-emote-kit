import { createTRPCRouter } from "@/trpc/server";
import { read } from "./read";
import { create } from "./create";

export const feedbacks = createTRPCRouter({
  read,
  create,
});
