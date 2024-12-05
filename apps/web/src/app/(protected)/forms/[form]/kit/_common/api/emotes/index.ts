import { createTRPCRouter } from "@/trpc/server";
import { insert } from "./insert";
import { options } from "./options";
import { read } from "./read";
import { remove } from "./remove";

export const emotes = createTRPCRouter({
  insert,
  options,
  read,
  remove,
});
