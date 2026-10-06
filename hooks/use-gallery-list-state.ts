"use client";

import { useCallback, useDeferredValue, useMemo, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { GalleryCategory } from "@/lib/content";
import { galleryItems } from "@/lib/content";
import { filterAndSortGalleryItems, isGallerySort, type GallerySort } from "@/lib/gallery-query";
import {
  createPaginationMeta,
  DEFAULT_PAGE,
  DEFAULT_PAGE_SIZE,
  parsePageSize,
  parsePositiveInt,
  slicePage,
  type PageSizeOption,
  type PaginationMeta,
} from "@/lib/pagination";

const CATEGORY_IDS = new Set<string>([
  "all",
  "bridal",
  "reception",
  "engagement",
  "traditional",
  "party",
  "editorial",
]);

function parseCategory(value: string | null): "all" | GalleryCategory {
  if (!value || value === "all") return "all";
  return CATEGORY_IDS.has(value) ? (value as GalleryCategory) : "all";
}

function parseSort(value: string | null): GallerySort {
  return isGallerySort(value) ? value : "default";
}

export type GalleryListState = {
  items: typeof galleryItems;
  meta: PaginationMeta;
  category: "all" | GalleryCategory;
  query: string;
  deferredQuery: string;
  sort: GallerySort;
  pageSize: PageSizeOption;
  isPending: boolean;
  paramError: string | null;
  setCategory: (category: "all" | GalleryCategory) => void;
  setQuery: (query: string) => void;
  setSort: (sort: GallerySort) => void;
  setPage: (page: number) => void;
  setPageSize: (size: PageSizeOption) => void;
  resetFilters: () => void;
};

export function useGalleryListState(): GalleryListState {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const category = parseCategory(searchParams.get("category"));
  const query = searchParams.get("q") ?? "";
  const deferredQuery = useDeferredValue(query);
  const sort = parseSort(searchParams.get("sort"));
  const pageSize = parsePageSize(searchParams.get("limit"), DEFAULT_PAGE_SIZE);
  const requestedPage = parsePositiveInt(searchParams.get("page"), DEFAULT_PAGE);

  const paramError = useMemo(() => {
    const rawPage = searchParams.get("page");
    const rawLimit = searchParams.get("limit");
    if (rawPage && Number.parseInt(rawPage, 10) < 1) {
      return "Invalid page number. Showing the first page.";
    }
    if (rawLimit && !["6", "9", "12", "18"].includes(rawLimit)) {
      return "Invalid page size. Using the default view.";
    }
    return null;
  }, [searchParams]);

  const filtered = useMemo(
    () => filterAndSortGalleryItems(galleryItems, category, deferredQuery, sort),
    [category, deferredQuery, sort],
  );

  const meta = useMemo(
    () => createPaginationMeta(filtered.length, requestedPage, pageSize),
    [filtered.length, requestedPage, pageSize],
  );

  const items = useMemo(() => slicePage(filtered, meta), [filtered, meta]);

  const replaceParams = useCallback(
    (updates: Record<string, string | null>, resetPage?: boolean) => {
      const params = new URLSearchParams(searchParams.toString());
      if (resetPage) params.delete("page");
      for (const [key, value] of Object.entries(updates)) {
        if (value === null || value === "") params.delete(key);
        else params.set(key, value);
      }

      const next = params.toString();
      const current = searchParams.toString();
      if (next === current) return;

      startTransition(() => {
        router.replace(next ? `${pathname}?${next}` : pathname, { scroll: false });
      });
    },
    [pathname, router, searchParams],
  );

  const setCategory = useCallback(
    (next: "all" | GalleryCategory) => {
      replaceParams({ category: next === "all" ? null : next }, true);
    },
    [replaceParams],
  );

  const setQuery = useCallback(
    (next: string) => {
      replaceParams({ q: next.trim() ? next : null }, true);
    },
    [replaceParams],
  );

  const setSort = useCallback(
    (next: GallerySort) => {
      replaceParams({ sort: next === "default" ? null : next }, true);
    },
    [replaceParams],
  );

  const setPage = useCallback(
    (page: number) => {
      const safe = Math.max(1, page);
      replaceParams({ page: safe <= 1 ? null : String(safe) });
    },
    [replaceParams],
  );

  const setPageSize = useCallback(
    (size: PageSizeOption) => {
      replaceParams({ limit: size === DEFAULT_PAGE_SIZE ? null : String(size) }, true);
    },
    [replaceParams],
  );

  const resetFilters = useCallback(() => {
    startTransition(() => {
      router.replace(pathname, { scroll: false });
    });
  }, [pathname, router]);

  return {
    items,
    meta,
    category,
    query,
    deferredQuery,
    sort,
    pageSize,
    isPending,
    paramError,
    setCategory,
    setQuery,
    setSort,
    setPage,
    setPageSize,
    resetFilters,
  };
}
