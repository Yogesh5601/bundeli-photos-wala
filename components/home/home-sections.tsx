import Link from "next/link";
import { experienceCards, hairStylingItems, site } from "@/lib/content";
import { Eyebrow, GoldButton, SectionLabel, TextLink } from "@/components/site/editorial";
import { ExperienceStatBar } from "@/components/site/experience-stat-bar";
import { PackagePreviewBlock } from "@/components/home/package-preview-cards";
import { Reveal } from "@/components/site/reveal";
import { Section, SectionIntro } from "@/components/site/section";

const galleryPreview = [
  "/uploads/5M2A3131.JPG.jpg",
  "/uploads/5M2A3117.JPG.jpg",
  "/uploads/5M2A3268.JPG.jpg",
  "/uploads/5M2A3653.JPG.jpg",
  "/uploads/5M2A3242.JPG.jpg",
  "/uploads/5M2A8926.JPG.jpg",
  "/uploads/5M2A3496.JPG.jpg",
  "/uploads/5M2A3612.JPG.jpg",
];

export function HomeSections() {
  return (
    <>
      <section
        className="relative min-h-[calc(100svh-var(--site-header-height))] overflow-hidden bg-ink text-cream"
        id="home"
      >
        <div className="absolute inset-0 -top-[4%]">
          <video
            aria-label="Shital Gurav Makeup Studio beauty video"
            autoPlay
            loop
            muted
            playsInline
            poster="/uploads/5M2A3131.JPG.jpg"
            preload="auto"
            className="h-full w-full object-cover object-[center_27%] saturate-[0.86]"
          >
            <source src="/uploads/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-[rgba(4,3,2,0.74)] via-[rgba(4,3,2,0.18)] to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-[rgba(4,3,2,0.65)] to-transparent" />
        <div className="relative z-2 max-w-[670px] px-6 pt-[clamp(120px,24vh,260px)] md:ml-[13vw]">
          <div className="hero-enter">
            <Eyebrow className="text-[#d4af6d]">Professional makeup artistry & beauty education</Eyebrow>
          </div>
          <h1 className="heading-hero hero-enter-delay mt-6 text-cream">
            SHITAL
            <br />
            <em className="font-normal text-gold2 italic">GURAV</em>
          </h1>
          <p className="hero-enter-delay-2 mt-9 text-[11px] tracking-[0.48em] text-gold2">MAKEUP STUDIO</p>
          <p className="hero-enter-delay-2 mt-8 font-serif text-lg tracking-wide">{site.tagline}</p>
          <div className="hero-enter-delay-2 mt-10 flex flex-wrap items-center gap-6">
            <GoldButton href="/contact">Book an appointment ↗</GoldButton>
            <TextLink href="/gallery" className="text-cream">
              Explore our work ↘
            </TextLink>
          </div>
        </div>
      </section>

      <Section id="about" tone="intro" pad="home">
        <Reveal>
          <SectionLabel index="01" title="The studio" />
        </Reveal>
        <div className="mt-7 grid items-center gap-8 md:mt-9 md:grid-cols-2 md:gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.72fr)_minmax(280px,0.58fr)] lg:gap-[clamp(28px,4vw,62px)]">
          <Reveal className="md:col-start-1 md:row-start-1 lg:col-start-1">
            <Eyebrow>A considered approach</Eyebrow>
            <h2 className="mt-6 font-serif text-[clamp(3.5rem,9vw,10rem)] leading-[0.7] font-medium tracking-tight">
              The art
              <br />
              <em className="font-normal text-gold italic">of beauty</em>
            </h2>
          </Reveal>

          <Reveal className="max-w-[390px] font-serif md:col-start-2 md:row-start-1 lg:col-start-2" delay={80}>
            <p className="text-[clamp(1.35rem,2.2vw,26px)] leading-snug text-ink">
              Shital Gurav Makeup Studio brings together refined makeup artistry, personalized looks and professional beauty education.
            </p>
            <p className="mt-6 text-lg leading-[1.48] text-prose-muted">
              Every face is approached as its own canvas — with a thoughtful eye for balance, light and the details that make a look unmistakably yours.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-[rgba(126,91,48,0.24)] pt-4">
              <span className="text-[8px] font-medium tracking-[0.18em] text-[#806640] uppercase">Makeup artistry</span>
              <span className="text-[8px] font-medium tracking-[0.18em] text-[#806640] uppercase">Bridal • Party • Occasions</span>
            </div>
            <TextLink href="/about" className="mt-8 inline-block text-ink">
              Discover our story ↗
            </TextLink>
          </Reveal>

          <Reveal
            className="media-hover relative min-h-[390px] overflow-hidden border border-[rgba(122,87,45,0.22)] bg-[#eadfd2] md:col-span-2 md:min-h-[min(62vw,520px)] lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:min-h-[475px] lg:h-[min(31vw,475px)]"
            delay={120}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/uploads/shital-founder-award.png"
              alt="Shital Gurav, founder and makeup artist"
              className="h-full w-full object-cover object-[center_16%] saturate-[0.88]"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent from-[58%] to-[rgba(14,9,7,0.58)]" />
            <div className="absolute right-6 bottom-5 left-6 z-2 flex items-end justify-between gap-4 text-white">
              <strong className="font-serif text-[25px] leading-none font-medium">Shital Gurav</strong>
              <span className="text-right text-[8px] leading-snug tracking-[0.18em] text-[#ead39f] uppercase">
                Founder · Makeup Artist
              </span>
            </div>
          </Reveal>
        </div>
      </Section>

      <ExperienceStatBar />

      <Section id="work" tone="dark">
        <Reveal>
          <SectionLabel index="02" title="The artistry" />
        </Reveal>
        <Reveal delay={60}>
          <SectionIntro
            dark
            className="mt-8"
            eyebrow={<Eyebrow className="text-[#d4af6d]">For every kind of moment</Eyebrow>}
            title={
              <>
                Makeup, refined
                <br />
                <em className="text-gold2 italic">for every occasion</em>
              </>
            }
            aside={
              <p className="max-w-[300px] font-serif text-lg text-cream-muted">
                From the first brushstroke to the final detail, each look is designed to feel effortless, elevated and entirely your own.
              </p>
            }
          />
        </Reveal>
        <div className="experience-grid mt-14">
          {experienceCards.map((card) => (
            <Link key={card.title} href={card.href} className="group experience-card text-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image}
                alt={card.alt}
                loading="lazy"
                className="experience-card-image"
                style={{ objectPosition: card.focus ?? "center 28%" }}
              />
              <div className="experience-card-caption">
                <small className="text-[9px] tracking-[0.16em] text-gold2">{card.num}</small>
                <h3 className="mt-3 font-serif text-[clamp(1.65rem,3.2vw,2.625rem)] leading-tight">{card.title}</h3>
                <p className="mt-1 text-[10px] tracking-[0.1em] uppercase text-cream-muted">{card.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="bridal">
        <Reveal>
          <SectionLabel index="03" title="Bridal edit" />
        </Reveal>
        <Reveal delay={60}>
          <SectionIntro
            className="mt-8 gap-6 md:flex-row md:items-end"
            eyebrow={<Eyebrow>The signature collection</Eyebrow>}
            title={
              <span className="block text-[clamp(4rem,6.8vw,7rem)] leading-[0.78]">
                Signature
                <br />
                <em className="text-gold italic">bridal looks</em>
              </span>
            }
            aside={<TextLink href="/gallery">View bridal gallery ↗</TextLink>}
          />
        </Reveal>
        <div className="bridal-grid mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.65fr_0.65fr] lg:items-start">
          <Reveal delay={80}>
            <figure className="media-hover m-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/uploads/signature-red-bridal.jpg"
                alt="Signature red saree bridal look"
                className="block h-[min(115vw,520px)] w-full object-cover object-[center_28%] lg:h-[min(42vw,560px)]"
              />
              <figcaption className="mt-2.5 text-[8px] tracking-[0.2em] text-[#89714b] uppercase">01 / Signature bridal</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <figure className="media-hover m-0 overflow-hidden lg:mt-[125px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/uploads/5M2A3613-1.jpg.jpg"
                alt="Bridal makeup with a bouquet of red roses"
                className="block h-[min(88vw,460px)] w-full object-cover object-[center_24%] lg:h-[min(31vw,410px)]"
              />
              <figcaption className="mt-2.5 text-[8px] tracking-[0.2em] text-[#89714b] uppercase">02 / A little romance</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={160}>
            <figure className="media-hover m-0 overflow-hidden lg:mt-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/uploads/5M2A3117.JPG.jpg"
                alt="Bridal beauty close-up"
                className="block h-[min(88vw,460px)] w-full object-cover object-[center_24%] lg:h-[min(31vw,410px)]"
              />
              <figcaption className="mt-2.5 text-[8px] tracking-[0.2em] text-[#89714b] uppercase">03 / The final detail</figcaption>
            </figure>
          </Reveal>
        </div>
      </Section>

      <section className="grid lg:grid-cols-2" id="studio">
        <div className="relative min-h-[650px] bg-[#18120f] text-[#f4eadb] lg:min-h-[750px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/uploads/5M2A3496.JPG.jpg" alt="Makeup studio artistry" className="absolute inset-0 h-full w-full object-cover saturate-[0.72]" />
          <div className="absolute inset-0 bg-linear-to-t from-[rgba(8,5,4,0.92)] to-transparent" />
          <div className="absolute bottom-10 left-6 max-w-[370px] md:left-[5vw] md:bottom-16">
            <Eyebrow className="text-[#d4af6d]">The experience</Eyebrow>
            <h2 className="heading-display mt-5 text-[#f4eadb]">
              Makeup
              <br />
              <em className="text-gold2 italic">studio</em>
            </h2>
            <p className="mt-5 font-serif text-lg text-[#d7c9b4]">Personalized makeup artistry for bridal, engagement, reception, party and special occasions.</p>
            <GoldButton href="/studio" variant="outline" className="mt-6 border-white/20 text-[#f4eadb]">
              Explore studio ↗
            </GoldButton>
          </div>
        </div>
        <div className="relative min-h-[650px] border-t border-white/15 bg-[#18120f] text-[#f4eadb] lg:min-h-[750px] lg:border-t-0 lg:border-l" id="academy">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/uploads/4dcdaa06-a70e-47e8-b759-4aeaa204583a.png" alt="Professional makeup education" className="absolute inset-0 h-full w-full object-cover saturate-[0.72]" />
          <div className="absolute inset-0 bg-linear-to-t from-[rgba(8,5,4,0.92)] to-transparent" />
          <div className="absolute bottom-10 left-6 max-w-[370px] md:left-[5vw] md:bottom-16">
            <Eyebrow className="text-[#d4af6d]">The craft</Eyebrow>
            <h2 className="heading-display mt-5 text-[#f4eadb]">
              Professional
              <br />
              <em className="text-gold2 italic">makeup academy</em>
            </h2>
            <p className="mt-5 font-serif text-lg text-[#d7c9b4]">Learn professional makeup artistry through structured, hands-on beauty education.</p>
            <GoldButton href="/academy" variant="outline" className="mt-6 border-white/20 text-[#f4eadb]">
              Explore academy ↗
            </GoldButton>
          </div>
        </div>
      </section>

      <section className="section-pad bg-hair-styling overflow-hidden text-[#f4eadb]" id="hair-styling">
        <div className="hair-styling-head mb-[clamp(42px,5vw,72px)] grid items-end gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.65fr)] lg:gap-[8vw]">
          <div>
            <SectionLabel index="04" title="Hair artistry" />
            <Eyebrow className="mt-6 text-gold2">Styled by Shital Gurav</Eyebrow>
            <h2 className="mt-5 font-serif text-[clamp(4.5rem,8.5vw,9.4rem)] leading-[0.72] font-medium tracking-[-0.035em] text-[var(--paper)]">
              Hair styling,
              <br />
              <em className="font-normal text-gold2 italic">
                beautifully
                <br />
                detailed
              </em>
            </h2>
          </div>
          <div className="max-w-[390px] pb-2">
            <p className="m-0 font-serif text-[22px] leading-[1.35] text-[#eadfce]">
              Signature hairstyling created with patience, precision and an eye for the smallest detail.
            </p>
            <p className="hair-styling-note mt-6 border-t border-[rgba(229,203,148,0.3)] pt-5 text-xs leading-relaxed tracking-[0.12em] text-[#bcae9b] uppercase">
              A selection of hairstyling work from Shital Gurav Makeup Studio.
            </p>
          </div>
        </div>
        <div className="hair-grid grid grid-cols-1 items-start gap-3.5 sm:grid-cols-2 lg:grid-cols-12">
          {hairStylingItems.map((item, index) => (
            <figure
              key={item.num}
              className={`relative m-0 overflow-hidden border border-[rgba(239,211,155,0.18)] bg-[#120d0c] shadow-[0_18px_48px_rgba(0,0,0,0.2)] ${item.tall ? "h-[clamp(450px,50vw,700px)]" : "h-[clamp(390px,43vw,610px)]"} ${index === 3 ? "lg:col-start-2 lg:col-span-4" : "lg:col-span-4"} ${index === 5 ? "lg:mt-10" : ""} sm:col-span-1`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={`block h-full w-full object-cover saturate-[0.88] transition duration-1000 hover:scale-[1.045] hover:saturate-100 ${index === 0 ? "object-[center_44%]" : index === 1 ? "object-[center_43%]" : index === 3 ? "object-[center_48%]" : index === 4 ? "object-[center_52%]" : index === 5 ? "object-[center_47%]" : "object-[center_50%]"}`}
              />
              <span className="pointer-events-none absolute inset-0 bg-linear-to-t from-[rgba(7,5,4,0.82)] from-0% to-transparent to-55%" />
              <figcaption className="absolute right-6 bottom-5 left-6 z-2 flex items-end justify-between gap-4 text-white">
                <span className="text-[10px] tracking-[0.18em] text-gold2">{item.num}</span>
                <strong className="text-right font-serif text-[clamp(20px,2vw,28px)] leading-none font-normal">{item.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-pad bg-showcase text-[#f4eadb]">
        <SectionLabel index="05" title="The visual diary" />
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow className="text-[#d4af6d]">A slow study in beauty</Eyebrow>
            <h2 className="heading-display mt-6 text-[#f4eadb]">
              In the
              <br />
              <em className="text-gold2 italic">light</em>
            </h2>
            <p className="mt-6 max-w-md font-serif text-lg text-[#d3c4ad]">An ongoing visual journal of artistry, expression and the details that stay with you.</p>
            <TextLink href="/gallery" className="mt-8 text-[#f4eadb]">
              Explore the visual archive ↗
            </TextLink>
          </div>
          <div className="relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/uploads/0a4bad55-bdb6-43b2-a9d2-f642b0a3f438.jpg" alt="Editorial beauty portrait" className="min-h-[420px] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-pad grid items-center gap-12 bg-paper lg:grid-cols-[0.85fr_1fr]">
        <div className="relative min-h-[580px] overflow-hidden lg:min-h-[680px]">
          <video autoPlay loop muted playsInline preload="auto" className="h-full w-full object-cover" aria-label="Meet Shital Gurav video">
            <source src="/uploads/meet-shital-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="max-w-[490px]">
          <Eyebrow>The person behind the brush</Eyebrow>
          <h2 className="heading-display mt-6">
            Meet
            <br />
            <em className="text-gold italic">Shital Gurav</em>
          </h2>
          <p className="mt-6 font-serif text-[26px] leading-snug">Beauty is not a mask. It is the quiet confidence of feeling completely yourself.</p>
          <p className="mt-6 font-serif text-lg text-[#534a3d]">
            With a love for considered detail and the artistry of transformation, the studio creates beauty experiences that feel personal, polished and lasting.
          </p>
          <TextLink href="/contact" className="mt-8 inline-block">
            Know more ↗
          </TextLink>
        </div>
      </section>

      <section className="section-pad flex flex-col gap-12 bg-ink text-[#f4eadb] lg:flex-row lg:items-center lg:justify-between" id="academy-preview">
        <div className="max-w-[620px]">
          <Eyebrow className="text-[#d4af6d]">A craft worth mastering</Eyebrow>
          <h2 className="heading-display mt-6 text-[#f4eadb]">
            Master the
            <br />
            <em className="text-gold2 italic">art of makeup</em>
          </h2>
          <p className="mt-10 font-serif text-xl text-[#d7c9b4]">
            Professional training, practical learning, makeup artistry and career-focused education — thoughtfully shaped for the next generation of beauty professionals.
          </p>
          <GoldButton href="/academy" className="mt-8">
            Explore academy ↗
          </GoldButton>
        </div>
        <div className="relative min-h-[360px] flex-1 overflow-hidden">
          <video autoPlay loop muted playsInline poster="/uploads/shital-gurav-founder.jpg" preload="metadata" className="h-full w-full object-cover">
            <source src="/uploads/academy-award-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <Section id="gallery" tone="gallery">
        <Reveal>
          <SectionIntro
            eyebrow={<Eyebrow>The image archive</Eyebrow>}
            title={
              <>
                A glimpse of
                <br />
                <em className="text-gold italic">our artistry</em>
              </>
            }
            aside={<TextLink href="/gallery">View full gallery ↗</TextLink>}
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:grid-rows-2">
          {galleryPreview.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 45}
              className={`${i === 0 ? "lg:row-span-2" : ""} ${i === 3 ? "lg:col-span-2" : ""}`}
            >
              <Link href="/gallery" className="gallery-preview-cell block h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt="Portfolio preview"
                  loading="lazy"
                  className={i === 0 ? "lg:h-full lg:min-h-[520px]" : ""}
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="packages"
        tone="showcase"
        className="flex min-h-[500px] items-center justify-center text-center"
      >
        <PackagePreviewBlock />
      </Section>

      <section className="relative h-[720px] overflow-hidden text-white" id="contact">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/uploads/5M2A3613-1.jpg.jpg" alt="Bridal makeup artistry" className="absolute inset-0 h-full w-full object-cover object-[center_38%] saturate-[0.72]" />
        <div className="absolute inset-0 bg-linear-to-r from-[rgba(5,3,2,0.82)] to-transparent" />
        <Reveal className="relative z-10 px-6 py-36 md:px-[13vw]">
          <Eyebrow className="text-[#d4af6d]">A beautiful beginning</Eyebrow>
          <h2 className="heading-section mt-6 text-cream">
            Your moment.
            <br />
            Your look.
            <br />
            <em className="text-gold2 italic">Your beauty.</em>
          </h2>
          <p className="mt-10 font-serif text-xl text-[#e9d9bd]">Let us create a look that feels unmistakably yours.</p>
          <GoldButton href="/book" className="mt-8">
            Book your appointment ↗
          </GoldButton>
        </Reveal>
      </section>
    </>
  );
}
