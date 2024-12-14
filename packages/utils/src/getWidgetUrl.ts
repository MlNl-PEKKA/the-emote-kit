import { EMOTE_KIT } from "@repo/constants";

export const getWidgetUrl = () => {
  return `${process.env.NEXT_PUBLIC_WIDGET_URL}/${EMOTE_KIT}.umd.js`;
};
