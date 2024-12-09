import { createTRPCRouter } from "@/trpc/server";
import { user } from "./user";
import { feedbacks } from "@/feedbacks/api";

export const protectedAPI = createTRPCRouter({
  user,
  feedbacks,
});
