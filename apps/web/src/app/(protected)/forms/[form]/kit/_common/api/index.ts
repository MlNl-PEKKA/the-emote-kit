import { createTRPCRouter } from "@/trpc/server";
import { emotes } from "./emotes";

export const kit = createTRPCRouter({
  emotes,
});
