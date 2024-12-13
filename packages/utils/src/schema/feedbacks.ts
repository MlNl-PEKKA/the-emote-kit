import { feedbackProjectRowSchema } from "@repo/database/zod";
import { z } from "zod";

export const createSchema = feedbackProjectRowSchema.pick({ title: true });

export const readSchema = feedbackProjectRowSchema
  .pick({ title: true, status: true })
  .extend({ status: z.array(feedbackProjectRowSchema.shape.status) })
  .partial()
  .optional();
