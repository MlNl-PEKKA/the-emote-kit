"use client";

import type { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Code as CodeIcon, Puzzle } from "lucide-react";
import { Component } from "./Component";
import {
  Previews,
  PreviewTabsContent,
  PreviewTabsList,
  PreviewTabsTrigger,
} from "./Previews";
import { Code } from "./Code";

export const Preview = ({
  className,
  ...props
}: Parameters<typeof Card>[0]) => {
  return (
    <div
      className={cn(
        "relative flex flex-col w-full h-full p-4 items-center justify-center gap-2 dotted",
        className
      )}
      {...props}
    >
      <Previews defaultValue="component">
        <span className="absolute top-0 right-0 mx-4 my-4">
          <Switch />
        </span>
        <PreviewTabsContent value="component">
          <Component />
        </PreviewTabsContent>
        <PreviewTabsContent value="code">
          <Code />
        </PreviewTabsContent>
      </Previews>
    </div>
  );
};

const Switch = () => (
  <PreviewTabsList>
    <PreviewTabsTrigger value="component" className="gap-2">
      <Puzzle size={16} />
      Preview
    </PreviewTabsTrigger>
    <PreviewTabsTrigger value="code" className="gap-2">
      <CodeIcon size={16} />
      Code
    </PreviewTabsTrigger>
  </PreviewTabsList>
);
