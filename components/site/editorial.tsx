import Link from "next/link";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-eyebrow", className)}>{children}</p>;
}

export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="text-eyebrow">
      {index} <span className="mx-2.5 inline-block h-px w-9 bg-gold/40 align-middle" /> {title}
    </div>
  );
}

export function GoldButton({
  href,
  children,
  className,
  variant = "gold",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "gold" | "outline" | "outline-light";
}) {
  const styles =
    variant === "gold"
      ? "rounded-none bg-gold2 text-ink hover:bg-[#f4dca5] text-[9px] uppercase tracking-[0.18em] h-auto px-5 py-4"
      : variant === "outline-light"
        ? "rounded-none border border-[rgba(229,203,148,0.55)] bg-[rgba(239,211,155,0.06)] text-[#f4ebdd] hover:border-gold2 hover:bg-gold2 hover:text-ink text-[9px] uppercase tracking-[0.18em] h-auto px-5 py-4"
        : "rounded-none border border-gold/35 bg-transparent text-inherit hover:border-gold2 hover:text-gold2 text-[9px] uppercase tracking-[0.18em] h-auto px-5 py-4";

  const shared = cn(
    "btn-link-motion inline-flex items-center gap-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold2/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    styles,
    className,
  );

  if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={shared}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={shared}>
      {children}
    </Link>
  );
}

export function TextLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "text-link-motion inline-block border-b border-gold2/50 pb-2 text-[9px] uppercase tracking-[0.18em] transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  subtitle,
  dark = true,
  children,
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "relative flex min-h-[min(78vh,calc(100svh-var(--site-header-height)))] items-end overflow-hidden",
        dark && "bg-ink text-[#f4eadb]",
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={imageAlt}
          className="page-hero-image h-full w-full object-cover object-[center_22%] saturate-[0.78]"
        />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(5,3,2,0.4)] via-transparent to-[rgba(5,3,2,0.85)] bg-linear-to-r from-[rgba(5,3,2,0.82)] to-transparent" />
      <div className="relative z-10 px-6 pb-20 md:px-[10vw] md:pb-24">
        <div className="hero-enter">
          <Eyebrow className="text-gold2">{eyebrow}</Eyebrow>
        </div>
        <h1 className="heading-display hero-enter-delay mt-6 max-w-4xl text-cream [&_em]:font-normal [&_em]:text-gold2 [&_em]:italic">
          {title}
        </h1>
        {subtitle && (
          <p className="hero-enter-delay-2 mt-8 text-[9px] uppercase tracking-[0.3em] text-gold2">{subtitle}</p>
        )}
        {children && <div className="hero-enter-delay-2">{children}</div>}
      </div>
    </section>
  );
}

export function PageSpace({
  children,
  className,
  dark,
  flow,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  flow?: boolean;
}) {
  return (
    <div className={cn("section-pad", dark && "bg-ink text-cream", flow && "page-content-flow", className)}>
      {children}
    </div>
  );
}
