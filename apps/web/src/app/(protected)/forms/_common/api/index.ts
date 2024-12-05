import { createTRPCRouter } from "@/trpc/server";
import { read } from "./read";
import { create } from "@/forms/create/api/create";
import { form } from "@/form/api";

export const forms = createTRPCRouter({
  read,
  create,
  form,
});
