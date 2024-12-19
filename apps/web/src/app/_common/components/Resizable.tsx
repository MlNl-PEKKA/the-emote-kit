import { ResizableHandle, ResizablePanel } from "@/components/ui/resizable";
import { cn } from "@/lib/utils";

export const Card = ({
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

export const Handle = ({
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
