import { createTRPCRouter } from "../../..";
import { read } from "./read";

export const feedback = createTRPCRouter({
  read,
});
