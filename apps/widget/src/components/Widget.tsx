import { useWidget } from "@/providers/WidgetProvider";
import { Feedback } from "./Feedback";
import { Banner } from "./Banner";

export const Widget = () => {
  const { type } = useWidget();
  switch (type) {
    case "feedback":
      return <Feedback />;
    case "banner":
      return <Banner />;
  }
};
