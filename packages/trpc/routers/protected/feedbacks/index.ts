import { createTRPCRouter } from "../../..";
import { read } from "./read";
import { create } from "./create";
import { feedback } from "./feedback";

export const feedbacks = createTRPCRouter({
  read,
  create,
  feedback,
});
