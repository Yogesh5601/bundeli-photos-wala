import type { GalleryCategory, GalleryItem } from "@/lib/content";

export type GallerySort = "default" | "title-asc" | "title-desc";

export function filterAndSortGalleryItems(
  items: GalleryItem[],
  category: "all" | GalleryCategory,
  query: string,
  sort: GallerySort,
): GalleryItem[] {
  let result = items;

  if (category !== "all") {
    result = result.filter((item) => item.category === category);
  }

  const normalizedQuery = query.trim().toLowerCase();
  if (normalizedQuery) {
    result = result.filter(
      (item) =>
        item.alt.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery),
    );
  }

  if (sort === "title-asc") {
    result = [...result].sort((a, b) => a.alt.localeCompare(b.alt));
  } else if (sort === "title-desc") {
    result = [...result].sort((a, b) => b.alt.localeCompare(a.alt));
  }

  return result;
}

export function isGallerySort(value: string | null): value is GallerySort {
  return value === "default" || value === "title-asc" || value === "title-desc";
}
