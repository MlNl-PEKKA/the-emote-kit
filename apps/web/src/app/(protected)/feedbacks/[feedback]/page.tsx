import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Configurations } from "@/feedback/components/Configurations";
import { Preview } from "@/feedback/components/Preview";

const Page = async () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border bg-card text-card-foreground shadow-sm w-full h-full"
    >
      <ResizablePanel defaultSize={55}>
        <Configurations />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <Preview />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Page;
