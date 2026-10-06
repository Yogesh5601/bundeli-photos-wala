import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse rounded-md bg-[rgba(119,91,51,0.12)]", className)}
      {...props}
    />
  );
}

export { Skeleton };
