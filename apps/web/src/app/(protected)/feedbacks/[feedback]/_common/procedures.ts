import type { Procedure } from "@/trpc/server";
import { protectedProcedure } from "@/trpc/server";
import { feedbackProjectRowSchema } from "@repo/database/src/zod";

const schema = feedbackProjectRowSchema.pick({ id: true });

export const feedbackProcedure = protectedProcedure.input(schema);

export type FeedbackProcedure = Procedure<typeof feedbackProcedure>;
