import { Procedure, publicProcedure } from "../..";
import { z } from "zod";

const schema = z.object({ id: z.string().uuid() });

export const widgetProcedure = publicProcedure.input(schema);

export type WidgetProcedure = Procedure<typeof widgetProcedure>;
