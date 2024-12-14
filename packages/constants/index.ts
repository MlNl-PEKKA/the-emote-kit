export const EMOTE_KIT = "emote-kit";

type Widgets = "feedback" | "reaction" | "banner";

type WidgetNames = {
  [id in Widgets]: `emote-kit-${id}`;
};

export const EMOTE_KIT_WIDGETS = {
  banner: "emote-kit-banner",
  feedback: "emote-kit-feedback",
  reaction: "emote-kit-reaction",
} satisfies WidgetNames;
