import { EMOTE_KIT_WIDGET } from "@repo/constants";

export const getWidgetUrl = () => {
  return `${process.env.NEXT_PUBLIC_WIDGET_URL}/${EMOTE_KIT_WIDGET}.umd.js`;
};
