import { EMOTE_KIT_WIDGETS } from "@repo/constants";
import { FeedbackWidget } from "./components/Feedback/index.wc";
import { BannerWidget } from "./components/Banner/index.wc";

customElements.define(EMOTE_KIT_WIDGETS["feedback"], FeedbackWidget);
customElements.define(EMOTE_KIT_WIDGETS["banner"], BannerWidget);
