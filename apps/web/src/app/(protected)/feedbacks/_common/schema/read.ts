import { feedbackProjectRowSchema } from "@repo/database/src/zod";
import { z } from "zod";

export const readSchema = feedbackProjectRowSchema
  .pick({ title: true, status: true })
  .extend({ status: z.array(feedbackProjectRowSchema.shape.status) })
  .partial()
  .optional();
