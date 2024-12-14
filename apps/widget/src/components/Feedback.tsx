"use client";

import { Button } from "@/components/ui/button";
import { useWidget } from "@/providers/WidgetProvider";

const useFeedback = () => useWidget("feedback");

export const Feedback = () => {
  const { bro, hello } = useFeedback();
  return (
    <Button variant="outline">
      {hello} Feedback {bro}
    </Button>
  );
};
