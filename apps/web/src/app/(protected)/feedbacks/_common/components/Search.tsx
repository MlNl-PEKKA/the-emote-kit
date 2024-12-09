"use client";

import { Input } from "@/components/ui/input";
import { useFeedbacksStore } from "@/feedbacks/store";
import { useEffect, useRef, useState } from "react";

export const Search = () => {
  const search = useFeedbacksStore((store) => store.search);
  const initialRef = useRef(true);
  const setSearch = useFeedbacksStore((store) => store.actions.setSearch);
  const [value, setValue] = useState(search);
  useEffect(() => {
    if (initialRef.current) {
      initialRef.current = false;
      return;
    }
    const timeout = setTimeout(() => setSearch(value), 400);
    return () => clearTimeout(timeout);
  }, [value, setSearch]);
  return (
    <Input
      placeholder="Search feedbacks"
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
