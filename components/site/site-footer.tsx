import Link from "next/link";
import { footerServices, navLinks, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="grid gap-10 border-t border-white/5 bg-[#090706] px-6 py-16 text-[#ded2c0] md:grid-cols-2 md:px-[8vw] lg:grid-cols-[1.5fr_0.8fr_1fr_1fr]">
      <div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={site.logo} alt="Urvi Pro Salon & Academy logo" className="mb-4 size-12 object-contain" />
        <span className="block font-serif text-[33px] tracking-[0.12em]">SHITAL GURAV</span>
        <small className="mt-2 block text-[8px] tracking-[0.35em] text-gold">MAKEUP STUDIO</small>
        <p className="mt-6 text-[9px] uppercase tracking-[0.14em] text-[#8c8170]">URVI PRO SALON & ACADEMY</p>
        <p className="mt-4 max-w-[260px] text-[9px] leading-relaxed text-[#8c8170]">
          Refined makeup artistry and professional beauty education for moments that matter.
        </p>
      </div>
      <div className="flex flex-col gap-3 text-[9px] uppercase tracking-[0.1em] text-[#a4937e]">
        <b className="mb-2 font-normal tracking-[0.18em] text-gold2">Quick links</b>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-gold2">
            {link.label}
          </Link>
        ))}
        <Link href="/book" className="hover:text-gold2">
          Book appointment
        </Link>
      </div>
      <div className="flex flex-col gap-3 text-[9px] uppercase tracking-[0.1em] text-[#a4937e]">
        <b className="mb-2 font-normal tracking-[0.18em] text-gold2">Services</b>
        {footerServices.map((item) => (
          <Link key={item.label} href={item.href} className="hover:text-gold2">
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col gap-3 text-[9px] uppercase tracking-[0.1em] text-[#a4937e]">
        <b className="mb-2 font-normal tracking-[0.18em] text-gold2">Contact</b>
        <a href={`tel:${site.phone}`} className="hover:text-gold2">
          {site.phoneDisplay}
        </a>
        <a href={`mailto:${site.email}`} className="hover:text-gold2">
          {site.email}
        </a>
        <span>
          {site.hours}
          <br />
          {site.hoursDetail}
        </span>
        <div className="mt-2 flex gap-4">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="text-gold2 hover:underline">
            Instagram
          </a>
          <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-gold2 hover:underline">
            Facebook
          </a>
          <a href={`https://wa.me/${site.phone.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="text-gold2 hover:underline">
            WhatsApp
          </a>
        </div>
      </div>
      <div className="col-span-full flex flex-col justify-between gap-2 border-t border-white/15 pt-5 text-[9px] uppercase tracking-[0.13em] text-[#827667] md:flex-row">
        <span>© 2026 Shital Gurav Makeup Studio. All Rights Reserved.</span>
        <span>Sangli, Maharashtra</span>
      </div>
    </footer>
  );
}
