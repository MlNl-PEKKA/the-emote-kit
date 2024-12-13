import { feedbackProjectRowSchema } from "@repo/database/zod";
import type { Procedure } from "../../../..";
import { protectedProcedure } from "../../../..";

const schema = feedbackProjectRowSchema.pick({ id: true });

export const feedbackProcedure = protectedProcedure.input(schema);

export type FeedbackProcedure = Procedure<typeof feedbackProcedure>;
