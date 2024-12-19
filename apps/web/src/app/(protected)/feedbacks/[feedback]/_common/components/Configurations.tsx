import { cn } from "@/lib/utils";

export const Configurations = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        "flex flex-col w-full h-full items-center justify-center gap-2",
        className
      )}
      {...props}
    >
      <div>Configurations</div>
      <div>Configurations</div>
    </div>
  );
};
