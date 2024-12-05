import { formRowSchema } from "@repo/database/zod";
import { protectedProcedure } from "@/trpc/server";
import type { Procedure } from "@/trpc/server";
import { z } from "zod";

const schema = formRowSchema
  .pick({ id: true })
  .extend({ id: z.string().uuid() });

export const formProcedure = protectedProcedure.input(schema);

export type FormProcedure<T = undefined> = Procedure<typeof formProcedure, T>;
