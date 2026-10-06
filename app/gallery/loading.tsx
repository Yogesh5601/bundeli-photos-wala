import { Skeleton } from "@/components/ui/skeleton";

export default function GalleryLoading() {
  return (
    <div className="section-pad bg-paper">
      <Skeleton className="mb-8 h-4 w-40 rounded-none" />
      <Skeleton className="h-16 w-full max-w-lg rounded-none" />
      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-[250px] rounded-none" />
        ))}
      </div>
    </div>
  );
}
