import { auth } from "./auth";
import { protectedAPI } from "./protected";
import { session } from "./session";
import { createTRPCRouter } from "..";

export const app = createTRPCRouter({
  auth,
  protected: protectedAPI,
  session,
});
