"use client";

import { Button } from "@/components/ui/button";
import { useWidget, WidgetProvider } from "@/providers/WidgetProvider";

export const Banner = (props: Parameters<typeof WidgetProvider>[0]) => {
  return (
    <WidgetProvider {...props}>
      <Content />
    </WidgetProvider>
  );
};

const Content = () => {
  const { id } = useWidget();
  return <Button variant="outline">Banner {id}</Button>;
};
