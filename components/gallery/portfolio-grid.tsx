"use client";

import { useMemo, useRef, useState } from "react";
import { Search, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { galleryCategories } from "@/lib/content";
import { Input } from "@/components/ui/input";
import { EmptyState } from "@/components/ui/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { PaginationControls } from "@/components/site/pagination-controls";
import { useGalleryListState } from "@/hooks/use-gallery-list-state";
import type { GallerySort } from "@/lib/gallery-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";

function GalleryGridSkeleton({ count }: { count: number }) {
  return (
    <div
      className="grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[260px]"
      aria-hidden
    >
      {Array.from({ length: count }).map((_, i) => (
        <Skeleton key={i} className="h-full min-h-[240px] rounded-none" />
      ))}
    </div>
  );
}

export function PortfolioGrid() {
  const {
    items,
    meta,
    category,
    query,
    sort,
    isPending,
    paramError,
    setCategory,
    setQuery,
    setSort,
    setPage,
    setPageSize,
    resetFilters,
  } = useGalleryListState();

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const searchDebounceRef = useRef<number | undefined>(undefined);

  const gridKey = `${category}-${meta.currentPage}-${sort}-${query}`;

  const handleSearchChange = (value: string) => {
    window.clearTimeout(searchDebounceRef.current);
    searchDebounceRef.current = window.setTimeout(() => setQuery(value), 350);
  };

  const showSkeleton = isPending;

  const resultSummary = useMemo(() => {
    if (meta.total === 0) return "No results";
    return `${meta.total} look${meta.total === 1 ? "" : "s"}`;
  }, [meta.total]);

  return (
    <>
      <div className="gallery-toolbar space-y-6">
        <div className="flex flex-col gap-4 border-b border-[rgba(119,91,51,0.15)] pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="relative max-w-md flex-1">
            <Search
              className="pointer-events-none absolute top-1/2 left-0 size-4 -translate-y-1/2 text-prose-muted"
              aria-hidden
            />
            <Input
              key={`gallery-search-${query}`}
              type="search"
              defaultValue={query}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by look or category…"
              className="field-editorial h-11 rounded-none border-0 border-b border-[rgba(119,91,51,0.35)] bg-transparent pl-7 shadow-none"
              aria-label="Search gallery"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] tracking-[0.12em] text-prose-muted uppercase">{resultSummary}</span>
            <Select
              value={sort}
              onValueChange={(v) => {
                if (typeof v === "string") setSort(v as GallerySort);
              }}
            >
              <SelectTrigger
                className="field-editorial h-9 w-[11rem] rounded-none border-[rgba(119,91,51,0.35)] bg-transparent text-[10px] tracking-[0.1em] uppercase shadow-none"
                aria-label="Sort gallery"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default order</SelectItem>
                <SelectItem value="title-asc">Title A–Z</SelectItem>
                <SelectItem value="title-desc">Title Z–A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="gallery-filter-scroll" role="group" aria-label="Filter gallery by category">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              disabled={isPending}
              aria-pressed={category === cat.id}
              className={cn("filter-chip", category === cat.id && "filter-chip-active")}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {paramError && (
        <p
          className="mt-8 border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive"
          role="alert"
        >
          {paramError}
        </p>
      )}

      <div className="mt-8">
        {showSkeleton ? (
          <GalleryGridSkeleton count={meta.limit} />
        ) : items.length === 0 ? (
          <EmptyState
            title="No looks match your filters"
            description="Try a different category, search term, or reset filters to browse the full portfolio."
            action={
              <Button
                type="button"
                variant="outline"
                className="rounded-none border-[rgba(119,91,51,0.45)] bg-transparent text-[10px] tracking-[0.16em] uppercase"
                onClick={() => resetFilters()}
              >
                Reset filters
              </Button>
            }
          />
        ) : (
          <div
            key={gridKey}
            className="gallery-grid-flow grid auto-rows-[240px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[260px]"
          >
            {items.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className={cn(
                  "group gallery-card gallery-card-enter",
                  item.layout === "tall" && "sm:row-span-2",
                  item.layout === "wide" && "sm:col-span-2",
                )}
                style={{ animationDelay: `${(index % 9) * 50}ms` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-[center_24%] transition duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
                <span className="gallery-card-overlay" aria-hidden />
                <span className="gallery-card-meta flex items-end justify-between gap-3 text-left">
                  <span>
                    <span className="block text-[9px] tracking-[0.18em] text-gold2 uppercase">{item.category}</span>
                    <span className="mt-1 line-clamp-2 font-serif text-base leading-snug text-cream">{item.alt}</span>
                  </span>
                  <span className="grid size-9 shrink-0 place-items-center border border-white/25 bg-black/30 text-cream transition group-hover:border-gold2 group-hover:bg-gold2/20">
                    <ZoomIn className="size-4" aria-hidden />
                  </span>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      <PaginationControls
        className="mt-12"
        meta={meta}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
        isLoading={isPending}
      />

      <GalleryLightbox
        items={items}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </>
  );
}
