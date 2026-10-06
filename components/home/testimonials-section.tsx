import { testimonials } from "@/lib/content";
import { Eyebrow, SectionLabel } from "@/components/site/editorial";
import { Reveal } from "@/components/site/reveal";

export function TestimonialsSection() {
  return (
    <section className="section-pad bg-bridal-section">
      <Reveal>
        <SectionLabel index="06" title="Client reflections" />
      </Reveal>
      <Reveal delay={60}>
        <Eyebrow className="mt-8">Trusted for moments that matter</Eyebrow>
        <h2 className="heading-section mt-6 max-w-3xl">
          Kind words,
          <br />
          <em className="text-gold italic">beautifully earned</em>
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map((item, i) => (
          <Reveal key={item.name} delay={i * 80}>
            <blockquote className="testimonial-card m-0 flex h-full flex-col">
              <p className="font-serif text-[clamp(1.15rem,2vw,1.35rem)] leading-snug text-ink">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-auto border-t border-gold/25 pt-5">
                <cite className="not-italic">
                  <span className="block font-serif text-xl text-ink">{item.name}</span>
                  <span className="mt-1 block text-[9px] tracking-[0.16em] text-prose-muted uppercase">{item.occasion}</span>
                </cite>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
