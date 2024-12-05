import { formUpdateSchema } from "@repo/database/zod";

export const schema = formUpdateSchema.pick({
  name: true,
});
