import { createTRPCRouter } from "@/trpc/server";
import { read } from "./read";

export const emotes = createTRPCRouter({
  read,
});
