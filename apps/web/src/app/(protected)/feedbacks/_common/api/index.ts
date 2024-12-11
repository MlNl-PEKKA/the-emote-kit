import { createTRPCRouter } from "@/trpc/server";
import { read } from "./read";
import { create } from "./create";
import { feedback } from "@/feedback/api";

export const feedbacks = createTRPCRouter({
  read,
  create,
  feedback,
});
