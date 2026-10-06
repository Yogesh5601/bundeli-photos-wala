"use client";

import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { GalleryItem } from "@/lib/content";

type GalleryLightboxProps = {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

const SWIPE_THRESHOLD_PX = 48;

export function GalleryLightbox({ items, index, onClose, onIndexChange }: GalleryLightboxProps) {
  const open = index !== null && index >= 0 && index < items.length;
  const current = open ? items[index] : null;
  const touchStartX = useRef<number | null>(null);

  const goPrev = useCallback(() => {
    if (index === null) return;
    onIndexChange(index <= 0 ? items.length - 1 : index - 1);
  }, [index, items.length, onIndexChange]);

  const goNext = useCallback(() => {
    if (index === null) return;
    onIndexChange(index >= items.length - 1 ? 0 : index + 1);
  }, [index, items.length, onIndexChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, goPrev, goNext]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const diff = endX - touchStartX.current;
    if (Math.abs(diff) >= SWIPE_THRESHOLD_PX) {
      if (diff > 0) goPrev();
      else goNext();
    }
    touchStartX.current = null;
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent
        className="gallery-lightbox max-w-[96vw] gap-0 border border-gold/25 bg-[rgba(4,3,2,0.97)] p-0 sm:max-w-6xl"
        showCloseButton
      >
        <DialogTitle className="sr-only">Portfolio image viewer</DialogTitle>
        {current && (
          <div
            className="relative touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {items.length > 1 && index !== null && (
              <p
                className="lightbox-counter-pill absolute top-3 left-1/2 z-10 -translate-x-1/2 sm:hidden"
                aria-live="polite"
              >
                {index + 1} / {items.length}
              </p>
            )}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={current.src}
              src={current.src}
              alt={current.alt}
              className="gallery-lightbox-image mx-auto max-h-[min(82vh,900px)] w-full object-contain"
              draggable={false}
            />
            <div className="flex flex-col gap-2 border-t border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[9px] tracking-[0.2em] text-gold2 uppercase">{current.category}</p>
                <p className="mt-1 font-serif text-lg text-cream">{current.alt}</p>
              </div>
              <p className="hidden text-[10px] tracking-[0.14em] text-cream-muted uppercase sm:block">
                {index !== null ? index + 1 : 0} / {items.length}
              </p>
            </div>
            {items.length > 1 && (
              <>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 text-cream hover:bg-gold2/20 hover:text-gold2"
                  onClick={goPrev}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-5" />
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 text-cream hover:bg-gold2/20 hover:text-gold2"
                  onClick={goNext}
                  aria-label="Next image"
                >
                  <ChevronRight className="size-5" />
                </Button>
              </>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
