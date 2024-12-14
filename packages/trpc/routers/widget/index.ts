import { createTRPCRouter } from "../..";
import { feedback } from "./feedback";

export const widget = createTRPCRouter({
  feedback,
});
