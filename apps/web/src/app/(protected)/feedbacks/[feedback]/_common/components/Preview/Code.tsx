"use client";

import { Button } from "@/components/ui/button";
import { useFeedback } from "@/feedback/hooks";
import { useToast } from "@/lib/hooks/use-toast";
import { getWidgetUrl } from "@repo/utils/src/getWidgetUrl";
import { Clipboard } from "lucide-react";
import type { PropsWithChildren } from "react";

export const Code = () => {
  const { feedback } = useFeedback();
  return (
    <Terminal>
      <code className="flex flex-col gap-2 text-sm text-muted-foreground py-8 px-2">
        <span>
          &lt;
          <span className="text-[#9d493f] dark:text-[#569CD6]">
            script
          </span>{" "}
          <span className="#f59f7d dark:text-[#9CDCFE]">src</span>=
          <span className="text-[#c7813a] dark:text-[#CE9178]">
            &quot;{getWidgetUrl()}&quot;
          </span>
          &gt;&lt;/
          <span className="text-[#9d493f] dark:text-[#569CD6]">script</span>&gt;
        </span>
        <span>
          &lt;
          <span className="text-[#267f99] dark:text-[#4ec9b0]">
            emote-kit-feedback
          </span>{" "}
          <span className="#f59f7d dark:text-[#9CDCFE]">id</span>=
          <span className="text-[#c7813a] dark:text-[#CE9178]">
            &quot;{feedback}&quot;
          </span>{" "}
          <span className="#f59f7d dark:text-[#9CDCFE]">theme</span>=
          <span className="text-[#c7813a] dark:text-[#CE9178]">
            &quot;dark&quot;
          </span>
          &gt;&lt;/
          <span className="text-[#267f99] dark:text-[#4ec9b0]">
            emote-kit-feedback
          </span>
          &gt;
        </span>
      </code>
    </Terminal>
  );
};

const Terminal = (props: PropsWithChildren) => {
  return (
    <div className="relative flex flex-col rounded-lg border text-card-foreground shadow-sm w-full h-full px-2 pt-2 pb-4 bg-background gap-2 min-w-10">
      <Buttons />
      {props.children}
      <span className="absolute top-0 right-0 m-1">
        <Copy />
      </span>
    </div>
  );
};

const Buttons = () => {
  return (
    <div className="flex flex-row gap-1">
      <span className="w-2 h-2 rounded-full bg-red-500" />
      <span className="w-2 h-2 rounded-full bg-yellow-500" />
      <span className="w-2 h-2 rounded-full bg-green-500" />
    </div>
  );
};

const Copy = () => {
  const { feedback } = useFeedback();
  const { toast } = useToast();
  const content = `<script src="${getWidgetUrl()}"></script>
<emote-kit-feedback id="${feedback}" theme="dark"></emote-kit-feedback>`;
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        navigator.clipboard.writeText(content).then(() =>
          toast({
            title: "Code copied successfully!",
          })
        );
      }}
    >
      <Clipboard />
    </Button>
  );
};
