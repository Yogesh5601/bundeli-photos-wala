export type PaginationMeta = {
  total: number;
  totalPages: number;
  currentPage: number;
  limit: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 9;
export const PAGE_SIZE_OPTIONS = [6, 9, 12, 18] as const;

export type PageSizeOption = (typeof PAGE_SIZE_OPTIONS)[number];

export function parsePositiveInt(value: string | null, fallback: number): number {
  if (!value) return fallback;
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n) || n < 1) return fallback;
  return n;
}

export function parsePageSize(value: string | null, fallback: PageSizeOption = DEFAULT_PAGE_SIZE): PageSizeOption {
  const n = parsePositiveInt(value, fallback);
  return (PAGE_SIZE_OPTIONS as readonly number[]).includes(n) ? (n as PageSizeOption) : fallback;
}

export function createPaginationMeta(total: number, page: number, limit: number): PaginationMeta {
  const safeLimit = Math.max(1, limit);
  const totalPages = Math.max(1, Math.ceil(total / safeLimit) || 1);
  const currentPage = Math.min(Math.max(1, page), totalPages);

  return {
    total,
    totalPages,
    currentPage,
    limit: safeLimit,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
  };
}

export function slicePage<T>(items: T[], meta: PaginationMeta): T[] {
  const start = (meta.currentPage - 1) * meta.limit;
  return items.slice(start, start + meta.limit);
}

export type PageToken = number | "ellipsis";

/** Compact page list, e.g. `1 2 3 … 8 9 10` */
export function getPaginationRange(currentPage: number, totalPages: number, delta = 1): PageToken[] {
  if (totalPages <= 1) return [1];

  const range: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
      range.push(i);
    }
  }

  const withEllipsis: PageToken[] = [];
  let previous: number | undefined;

  for (const page of range) {
    if (previous !== undefined) {
      if (page - previous === 2) withEllipsis.push(previous + 1);
      else if (page - previous !== 1) withEllipsis.push("ellipsis");
    }
    withEllipsis.push(page);
    previous = page;
  }

  return withEllipsis;
}
