"use client";

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
  getPaginationRange,
  PAGE_SIZE_OPTIONS,
  type PageSizeOption,
  type PaginationMeta,
} from "@/lib/pagination";

type PaginationControlsProps = {
  meta: PaginationMeta;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: PageSizeOption) => void;
  isLoading?: boolean;
  className?: string;
  id?: string;
};

export function PaginationControls({
  meta,
  onPageChange,
  onPageSizeChange,
  isLoading = false,
  className,
  id = "pagination",
}: PaginationControlsProps) {
  const range = getPaginationRange(meta.currentPage, meta.totalPages);
  const showPageSize = Boolean(onPageSizeChange);

  if (meta.total === 0) return null;

  return (
    <nav
      id={id}
      aria-label="Pagination"
      className={cn("flex flex-col gap-4 border-t border-[rgba(119,91,51,0.18)] pt-6", className)}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] tracking-[0.14em] text-prose-muted uppercase">
          Showing{" "}
          <span className="text-ink">
            {meta.total === 0
              ? 0
              : (meta.currentPage - 1) * meta.limit + 1}
            –{Math.min(meta.currentPage * meta.limit, meta.total)}
          </span>{" "}
          of <span className="text-ink">{meta.total}</span>
        </p>
        {showPageSize && (
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.12em] text-prose-muted uppercase">Per page</span>
            <Select
              value={String(meta.limit)}
              onValueChange={(v) => {
                if (typeof v === "string") onPageSizeChange?.(Number.parseInt(v, 10) as PageSizeOption);
              }}
              disabled={isLoading}
            >
              <SelectTrigger
                size="sm"
                className="h-8 min-w-[4.5rem] rounded-none border-[rgba(119,91,51,0.35)] bg-transparent text-[10px] tracking-[0.1em] uppercase shadow-none"
                aria-label="Items per page"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {PAGE_SIZE_OPTIONS.map((size) => (
                  <SelectItem key={size} value={String(size)}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-center text-[11px] tracking-[0.12em] text-prose-muted sm:text-left md:hidden">
          Page {meta.currentPage} of {meta.totalPages}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-1 sm:justify-end">
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="rounded-none border-[rgba(119,91,51,0.35)] bg-transparent"
            onClick={() => onPageChange(1)}
            disabled={!meta.hasPreviousPage || isLoading}
            aria-label="First page"
          >
            <ChevronsLeft className="size-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="rounded-none border-[rgba(119,91,51,0.35)] bg-transparent"
            onClick={() => onPageChange(meta.currentPage - 1)}
            disabled={!meta.hasPreviousPage || isLoading}
            aria-label="Previous page"
          >
            <ChevronLeft className="size-4" />
          </Button>

          <div className="hidden items-center gap-1 md:flex" aria-live="polite">
            {range.map((token, index) =>
              token === "ellipsis" ? (
                <span key={`ellipsis-${index}`} className="px-2 text-prose-muted" aria-hidden>
                  …
                </span>
              ) : (
                <Button
                  key={token}
                  type="button"
                  variant={token === meta.currentPage ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    "min-w-9 rounded-none text-[10px] tracking-[0.08em]",
                    token === meta.currentPage
                      ? "bg-gold2 text-ink hover:bg-gold2/90"
                      : "border-[rgba(119,91,51,0.35)] bg-transparent",
                  )}
                  onClick={() => onPageChange(token)}
                  disabled={isLoading || token === meta.currentPage}
                  aria-current={token === meta.currentPage ? "page" : undefined}
                  aria-label={`Page ${token}`}
                >
                  {token}
                </Button>
              ),
            )}
          </div>

          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="rounded-none border-[rgba(119,91,51,0.35)] bg-transparent"
            onClick={() => onPageChange(meta.currentPage + 1)}
            disabled={!meta.hasNextPage || isLoading}
            aria-label="Next page"
          >
            <ChevronRight className="size-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className="rounded-none border-[rgba(119,91,51,0.35)] bg-transparent"
            onClick={() => onPageChange(meta.totalPages)}
            disabled={!meta.hasNextPage || isLoading}
            aria-label="Last page"
          >
            <ChevronsRight className="size-4" />
          </Button>
        </div>
      </div>

      {isLoading && (
        <p className="text-center text-[10px] tracking-[0.14em] text-gold uppercase" role="status">
          Loading…
        </p>
      )}
    </nav>
  );
}
