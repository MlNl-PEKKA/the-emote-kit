import { createTRPCRouter } from "@/trpc/server";
import { user } from "./user";
import { emotes } from "@/emotes/api";
import { forms } from "@/forms/api";

export const protectedAPI = createTRPCRouter({
  user,
  emotes,
  forms,
});
