import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
};

export function EmptyState({ title, description, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center border border-[rgba(119,91,51,0.2)] bg-[rgba(255,255,255,0.45)] px-6 py-16 text-center",
        className,
      )}
      role="status"
    >
      <p className="font-serif text-2xl text-ink">{title}</p>
      {description && <p className="body-lead mt-3 max-w-md text-prose-muted">{description}</p>}
      {action && <div className="mt-8">{action}</div>}
    </div>
  );
}
