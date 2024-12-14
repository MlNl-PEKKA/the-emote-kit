"use client";

import { Button } from "@/components/ui/button";
import { useWidget } from "@/providers/WidgetProvider";

const useBanner = () => useWidget("banner");

export const Banner = () => {
  const { title, hello } = useBanner();
  return (
    <Button variant="outline">
      {hello} Banner {title}
    </Button>
  );
};
