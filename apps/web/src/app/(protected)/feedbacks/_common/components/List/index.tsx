"use client";

import { useFeedbacksRead } from "@/feedbacks/hooks";
import { Card } from "./Card";

export const List = () => {
  const feedbacks = useFeedbacksRead();
  return (
    <>
      KKKK
      {feedbacks.map((feedback) => (
        <Card key={feedback.id} {...feedback} />
      ))}
    </>
  );
};
