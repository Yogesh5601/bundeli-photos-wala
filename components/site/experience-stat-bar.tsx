import Link from "next/link";
import { Reveal } from "@/components/site/reveal";

const stats = [
  { value: "20+", label: "Years of experience" },
  { value: "01", label: "Makeup studio + academy" },
  { value: "∞", label: "Personalized beauty experiences" },
];

export function ExperienceStatBar() {
  return (
    <section className="experience-stat-bar relative overflow-hidden px-6 py-9 text-[#f4ebdd] md:px-[clamp(24px,8vw,130px)] md:py-11">
      <Reveal className="relative z-1 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-[repeat(3,1fr)_auto] lg:items-center lg:gap-7">
        {stats.map((stat, index) => (
          <div
            key={stat.value}
            className={`experience-stat-item flex items-baseline gap-3 border-b border-[rgba(229,201,139,0.25)] pb-4 sm:border-b-0 sm:pb-0 lg:pb-0 ${index < 2 ? "lg:border-r lg:border-[rgba(229,201,139,0.4)] lg:pr-6" : ""}`}
          >
            <strong className="font-serif text-[44px] leading-none font-medium text-gold2 md:text-[52px]">{stat.value}</strong>
            <span className="max-w-[150px] text-[10px] leading-snug tracking-[0.12em] uppercase">{stat.label}</span>
          </div>
        ))}
        <Link
          href="/book"
          className="inline-flex w-fit items-center gap-2 self-start border border-[rgba(229,203,148,0.55)] bg-[rgba(239,211,155,0.06)] px-5 py-4 text-[9px] tracking-[0.18em] whitespace-nowrap uppercase transition hover:border-gold2 hover:bg-gold2 hover:text-ink lg:justify-self-end"
        >
          Book your appointment ↗
        </Link>
      </Reveal>
    </section>
  );
}
