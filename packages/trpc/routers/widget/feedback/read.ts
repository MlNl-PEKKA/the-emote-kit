import { TRPCError } from "@trpc/server";
import { type WidgetProcedure, widgetProcedure } from "../procedure";

const query = async ({ ctx, input }: WidgetProcedure) => {
  const data = (
    await ctx.adminDb
      .from("feedback_project")
      .select()
      .eq("id", input.id)
      .single()
      .throwOnError()
  ).data;

  if (!data)
    throw new TRPCError({
      code: "NOT_FOUND",
      message: "Feedback project not found",
    });

  return data;
};

export const read = widgetProcedure.query(query);
