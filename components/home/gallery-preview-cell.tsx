import Link from "next/link";
import { ZoomIn } from "lucide-react";
import type { GalleryCategory } from "@/lib/content";
import { galleryCategories } from "@/lib/content";

function categoryLabel(category: GalleryCategory) {
  return galleryCategories.find((c) => c.id === category)?.label ?? category;
}

export function GalleryPreviewCell({
  src,
  alt,
  category,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  category: GalleryCategory;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <Link href="/gallery" className={`gallery-preview-cell group block h-full ${className ?? ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" className={imageClassName} />
      <span className="gallery-preview-overlay" aria-hidden />
      <span className="gallery-preview-meta">
        <span className="text-[9px] tracking-[0.18em] text-gold2 uppercase">{categoryLabel(category)}</span>
        <span className="grid size-9 place-items-center border border-gold2/50 bg-black/35 text-gold2 transition duration-300 group-hover:border-gold2 group-hover:bg-gold2/15">
          <ZoomIn className="size-4" />
        </span>
      </span>
    </Link>
  );
}
