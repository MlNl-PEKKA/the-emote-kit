import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";
import { Project } from "./Project";
import { Widget } from "./Widget";

export const Configurations = ({
  className,
  ...props
}: Parameters<typeof Tabs>[0]) => {
  return (
    <Tabs
      className={cn(
        "flex flex-col w-full h-full items-center gap-2",
        className
      )}
      defaultValue="project"
      {...props}
    >
      <TabsList className="flex w-full flex-row justify-evenly">
        <TabsTrigger className="w-full" value="project">
          Project
        </TabsTrigger>
        <TabsTrigger className="w-full" value="widget">
          Widget
        </TabsTrigger>
      </TabsList>
      <Content />
    </Tabs>
  );
};

const ContentWrapper = (props: PropsWithChildren<{ value: string }>) => {
  return (
    <TabsContent className="w-full h-full" {...props}>
      {props.children}
    </TabsContent>
  );
};

const Content = () => {
  return (
    <>
      <ContentWrapper value="project">
        <Project />
      </ContentWrapper>
      <ContentWrapper value="widget">
        <Widget />
      </ContentWrapper>
    </>
  );
};
