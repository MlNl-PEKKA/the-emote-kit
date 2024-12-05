import { createTRPCRouter } from "@/trpc/server";
import { read } from "./read";
import { update } from "./update";
import { kit } from "@/form/kit/api";

export const form = createTRPCRouter({
  read,
  update,
  kit,
});
