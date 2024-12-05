import { createTRPCRouter } from "@/trpc/server";
import { auth } from "./auth";
import { protectedAPI } from "@/protected/api";
import { session } from "./session";

export const app = createTRPCRouter({
  auth,
  protected: protectedAPI,
  session,
});
