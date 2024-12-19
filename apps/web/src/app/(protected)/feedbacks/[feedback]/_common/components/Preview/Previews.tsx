"use client";
import {
  Tabs,
  TabsContent,
  TabsList as PreviewTabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

type Mode = "component" | "code";

type PreviewWrapperProps = Omit<Parameters<typeof Tabs>[0], "defaultValue"> & {
  defaultValue: Mode;
};

export const Previews = (props: PreviewWrapperProps) => {
  return <Tabs {...props}>{props.children}</Tabs>;
};

type PreviewTabsTriggerProps = Omit<
  Parameters<typeof TabsTrigger>[0],
  "value"
> & {
  value: Mode;
};

export const PreviewTabsTrigger = (props: PreviewTabsTriggerProps) => (
  <TabsTrigger {...props}>{props.children}</TabsTrigger>
);

type PreviewTabsContentProps = Omit<
  Parameters<typeof TabsContent>[0],
  "value"
> & {
  value: Mode;
};

export const PreviewTabsContent = (props: PreviewTabsContentProps) => (
  <TabsContent {...props}>{props.children}</TabsContent>
);

export { PreviewTabsList };
