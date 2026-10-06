"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function LightboxTrigger({
  src,
  alt,
  label,
  className,
  wide,
}: {
  src: string;
  alt: string;
  label: string;
  className?: string;
  wide?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative overflow-hidden border-0 bg-transparent p-0 text-left text-[#f4eadb]",
          wide && "md:row-span-2",
          className,
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className={cn("h-[320px] w-full object-cover transition duration-1000 group-hover:scale-104 md:h-[350px]", wide && "md:h-[700px]")} />
        <span className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
        <span className="absolute bottom-4 left-4 text-[9px] tracking-[0.13em] text-gold2 uppercase">{label}</span>
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[95vw] border-none bg-[rgba(4,3,2,0.95)] p-2 sm:max-w-5xl">
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="mx-auto max-h-[85vh] max-w-full object-contain" />
        </DialogContent>
      </Dialog>
    </>
  );
}
