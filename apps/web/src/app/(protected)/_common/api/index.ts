import { createTRPCRouter } from "@/trpc/server";
import { user } from "./user";

export const protectedAPI = createTRPCRouter({
  user,
});
