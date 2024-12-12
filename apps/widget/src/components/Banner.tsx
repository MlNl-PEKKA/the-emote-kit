"use client";

import { Button } from "@/components/ui/button";
import { useWidget } from "@/providers/WidgetProvider";

const useBanner = () => useWidget("banner");

export const Banner = () => {
  const { title } = useBanner();
  return <Button variant="outline">Banner {title}</Button>;
};
