import { formInsertSchema } from "@repo/database/zod";

export const schema = formInsertSchema.pick({
  name: true,
});
