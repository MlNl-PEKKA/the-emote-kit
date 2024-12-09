import { feedbackProjectRowSchema } from "@repo/database/src/zod";

export const createSchema = feedbackProjectRowSchema.pick({ title: true });
