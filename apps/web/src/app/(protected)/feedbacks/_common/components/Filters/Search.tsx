"use client";

import { Input } from "@/components/ui/input";
import { useFeedbacksStore } from "@/feedbacks/store";
import { useEffect, useRef } from "react";

export const Search = () => {
  const initialRef = useRef(true);
  const placeholderTitle = useFeedbacksStore((store) => store.placeholderTitle);
  const { setTitle, setPlaceholderTitle } = useFeedbacksStore(
    (store) => store.actions
  );

  useEffect(() => {
    if (initialRef.current) {
      initialRef.current = false;
      return;
    }
    const timeout = setTimeout(() => setTitle(placeholderTitle), 400);
    return () => clearTimeout(timeout);
  }, [placeholderTitle, setTitle]);

  return (
    <Input
      placeholder="Search feedbacks"
      type="text"
      value={placeholderTitle}
      onChange={(e) => setPlaceholderTitle(e.target.value)}
    />
  );
};
