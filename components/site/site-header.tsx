"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navLinks, site } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", open);
    return () => document.body.classList.remove("mobile-nav-open");
  }, [open]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-20 flex items-center justify-between px-[clamp(18px,4vw,68px)] py-5 text-white backdrop-blur-md transition-[background,box-shadow] duration-300 md:py-[22px]",
        scrolled
          ? "border-b border-white/5 bg-[rgba(16,12,11,0.88)] shadow-[0_8px_35px_rgba(0,0,0,0.22)]"
          : "border-b border-transparent bg-linear-to-b from-[rgba(10,7,6,0.5)] to-transparent",
      )}
    >
      <Link href="/" className="grid grid-cols-[48px_auto] items-center gap-x-3" aria-label={`${site.name} home`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.logo}
          alt=""
          className="row-span-2 size-12 rounded-full border border-[rgba(239,211,155,0.7)] bg-[#050403] object-contain shadow-[0_0_25px_rgba(239,211,155,0.12)]"
        />
        <span className="font-serif text-[19px] leading-none tracking-[0.16em]">SHITAL GURAV</span>
        <small className="text-[7px] font-medium tracking-[0.35em] text-gold2 uppercase">Makeup Studio</small>
      </Link>

      <nav className="hidden items-center gap-[clamp(12px,1.8vw,28px)] text-[9px] uppercase tracking-[0.16em] lg:flex" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "relative px-0 py-2 opacity-80 transition hover:text-gold2 hover:opacity-100",
              isActive(link.href) && "text-gold2 opacity-100",
              "after:absolute after:right-0 after:bottom-px after:left-0 after:h-px after:bg-gold2 after:transition-all",
              isActive(link.href) ? "after:w-full" : "after:w-0 hover:after:w-full",
            )}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/book"
          className="border border-[rgba(239,211,155,0.75)] bg-[rgba(239,211,155,0.06)] px-[18px] py-3.5 shadow-[inset_0_0_0_1px_rgba(239,211,155,0.06)] transition hover:bg-gold2 hover:text-ink"
        >
          Book appointment
        </Link>
      </nav>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon-lg"
              className="lg:hidden text-white hover:bg-white/10 hover:text-gold2"
              aria-label="Open menu"
            />
          }
        >
          <Menu className="size-6" />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="flex h-full w-[min(100vw,20rem)] flex-col gap-0 border-gold/20 bg-[rgba(8,6,5,0.98)] p-0 text-[#f4eadb] sm:max-w-xs"
          showCloseButton
        >
          <SheetHeader className="border-b border-white/10 px-6 pt-8 pb-5">
            <SheetTitle className="font-serif text-2xl tracking-[0.12em] text-gold2">Menu</SheetTitle>
          </SheetHeader>
          <nav
            className="flex flex-1 flex-col gap-5 overflow-y-auto px-6 py-8 text-xs uppercase tracking-[0.16em]"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn("sheet-nav-link", isActive(link.href) && "text-gold2")}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <SheetFooter className="mt-auto border-t border-white/10 px-6 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
            <Link href="/book" onClick={() => setOpen(false)} className="sheet-cta">
              Book appointment ↗
            </Link>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </header>
  );
}
