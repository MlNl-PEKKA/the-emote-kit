import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Configurations } from "@/feedback/components/Configurations";
import { Preview } from "@/feedback/components/Preview";
import { Code } from "@/feedback/components/Code";
import { cn } from "@/lib/utils";

const Page = async () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="text-card-foreground w-full h-full"
    >
      <Card className="border-none" defaultSize={60}>
        <Configurations />
      </Card>
      <Handle />
      <Card className="border-none" defaultSize={40}>
        <ResizablePanelGroup direction="vertical">
          <Card defaultSize={70}>
            <Preview />
          </Card>
          <Handle />
          <Card defaultSize={30}>
            <Code />
          </Card>
        </ResizablePanelGroup>
      </Card>
    </ResizablePanelGroup>
  );
};

export default Page;

const Card = ({
  children,
  className,
  ...props
}: Parameters<typeof ResizablePanel>[0]) => {
  return (
    <ResizablePanel
      className={cn("rounded-lg border shadow-sm", className)}
      {...props}
    >
      {children}
    </ResizablePanel>
  );
};

const Handle = ({
  className,
  ...props
}: Parameters<typeof ResizableHandle>[0]) => {
  return (
    <ResizableHandle
      className={cn("bg-background p-2", className)}
      {...props}
    />
  );
};
