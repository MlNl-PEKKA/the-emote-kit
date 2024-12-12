"use client";

import { Button } from "@/components/ui/button";
import { useWidget } from "@/providers/WidgetProvider";

const useFeedback = () => useWidget("feedback");

export const Feedback = () => {
  const { bro } = useFeedback();
  return <Button variant="outline">Feedback {bro}</Button>;
};
