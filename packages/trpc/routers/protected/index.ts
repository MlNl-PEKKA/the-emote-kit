import { createTRPCRouter } from "../..";
import { user } from "./user";
import { feedbacks } from "./feedbacks";

export const protectedAPI = createTRPCRouter({
  user,
  feedbacks,
});
