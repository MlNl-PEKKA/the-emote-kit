import { createTRPCRouter } from "../../../..";
import { read } from "./read";
import { remove } from "./remove";
import { update } from "./update";

export const feedback = createTRPCRouter({
  read,
  update,
  remove,
});
