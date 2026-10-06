import Link from "next/link";

export function MobileBookBar() {
  return (
    <div
      data-slot="mobile-book-bar"
      className="mobile-book-bar fixed inset-x-0 bottom-0 z-30 border-t border-gold/25 bg-[rgba(8,6,5,0.92)] px-4 py-3 backdrop-blur-md md:hidden"
    >
      <Link
        href="/book"
        className="flex w-full items-center justify-center gap-2 border border-[rgba(239,211,155,0.75)] bg-[rgba(239,211,155,0.1)] py-3.5 text-[10px] font-medium tracking-[0.2em] text-gold2 uppercase transition hover:border-gold2 hover:bg-gold2 hover:text-[#1a1210] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold2/70"
      >
        Book appointment ↗
      </Link>
    </div>
  );
}
