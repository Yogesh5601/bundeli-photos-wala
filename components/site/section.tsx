import { cn } from "@/lib/utils";

const toneStyles = {
  intro: "bg-intro-section text-ink",
  paper: "bg-paper text-ink",
  dark: "bg-experiences text-cream",
  bridal: "bg-bridal-section text-ink",
  hair: "bg-hair-styling text-cream",
  showcase: "bg-showcase text-cream",
  gallery: "bg-gallery-preview text-ink",
  ink: "bg-ink text-cream",
  plain: "",
} as const;

export type SectionTone = keyof typeof toneStyles;

export function Section({
  id,
  tone = "paper",
  pad = "default",
  className,
  children,
}: {
  id?: string;
  tone?: SectionTone;
  pad?: "default" | "home" | "none";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        pad === "default" && "section-pad",
        pad === "home" && "section-pad-home",
        toneStyles[tone],
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionIntro({
  label,
  eyebrow,
  title,
  lead,
  aside,
  dark,
  className,
}: {
  label?: React.ReactNode;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  aside?: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between", className)}>
      <div className="max-w-3xl">
        {label}
        {eyebrow}
        <h2 className={cn("heading-section mt-6", dark ? "text-cream" : "text-ink")}>{title}</h2>
        {lead && <p className={cn("body-lead mt-6 max-w-md", dark ? "text-cream-muted" : "text-prose-muted")}>{lead}</p>}
      </div>
      {aside}
    </div>
  );
}
