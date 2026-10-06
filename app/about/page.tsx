import { LightboxTrigger } from "@/components/gallery/lightbox-trigger";
import { Eyebrow, GoldButton, PageHero, PageSpace, SectionLabel } from "@/components/site/editorial";
import { credentials } from "@/lib/content";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("about");

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/uploads/86488a41-aa16-4d3f-8488-e0447766feb8.png"
        imageAlt="Shital Gurav in her makeup studio"
        eyebrow="The founder story"
        title={
          <>
            The artist
            <br />
            <em>behind the beauty</em>
          </>
        }
        subtitle="SHITAL GURAV · MAKEUP ARTIST · FOUNDER · BEAUTY PROFESSIONAL"
      />
      <PageSpace flow>
        <SectionLabel index="01" title="The founder" />
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/uploads/312423ae-0d55-4b72-8985-571cb09539b7.png" alt="Shital Gurav holding a recognition trophy" className="min-h-[570px] w-full object-cover" />
          <div className="max-w-[530px]">
            <Eyebrow>Meet Shital Gurav</Eyebrow>
            <h2 className="heading-display mt-6">
              Beauty,
              <br />
              <em className="text-gold italic">with intention</em>
            </h2>
            <div className="my-7 h-px w-[90px] bg-gold" />
            <p className="font-serif text-[27px] leading-snug">Driven by an eye for detail and a passion for beauty, Shital Gurav has built her artistry around creating refined, personalized looks that enhance individuality.</p>
            <p className="mt-6 font-serif text-lg text-[#5e5245]">Her work is grounded in the belief that makeup should feel considered, comfortable and completely personal — a quiet expression of confidence for every occasion.</p>
          </div>
        </div>
      </PageSpace>
      <PageSpace dark>
        <Eyebrow className="text-[#d4af6d]">The philosophy</Eyebrow>
        <h2 className="heading-display mt-6 text-center text-[#f4eadb]">
          Enhance what is yours.
          <br />
          <em className="text-gold2 italic">Refine every detail.</em>
        </h2>
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-[10px] tracking-[0.16em] text-gold2 uppercase">
          {["Natural features", "Personalized artistry", "Elegance over excess", "Confidence through beauty"].map((t) => (
            <span key={t} className="border-t border-gold/35 pt-4">
              {t}
            </span>
          ))}
        </div>
      </PageSpace>
      <PageSpace flow>
        <SectionLabel index="02" title="The journey" />
        <Eyebrow className="mt-10">Always learning, always evolving</Eyebrow>
        <h2 className="heading-display mt-6">
          A practice
          <br />
          <em className="text-gold italic">in progress</em>
        </h2>
        <div className="mt-14 grid border-t border-gold/35 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Artistry", "Developing a refined approach to makeup and beauty."],
            ["02", "Experience", "Growing through real clients, occasions and continuous learning."],
            ["03", "Education", "Expanding professional knowledge through advanced beauty training."],
            ["04", "Recognition", "Celebrating achievements and professional recognition."],
          ].map(([num, title, desc]) => (
            <article key={num} className="border-b border-gold/35 py-8 pr-6 sm:border-r sm:last:border-r-0">
              <b className="text-xs tracking-[0.15em] text-gold">{num}</b>
              <h3 className="mt-16 font-serif text-4xl">{title}</h3>
              <p className="mt-3 max-w-[205px] font-serif text-lg text-[#796b5b]">{desc}</p>
            </article>
          ))}
        </div>
      </PageSpace>
      <PageSpace dark>
        <SectionLabel index="03" title="The record" />
        <Eyebrow className="mt-10 text-[#d4af6d]">A career in photographs</Eyebrow>
        <h2 className="heading-display mt-6 text-[#f4eadb]">
          Recognition &
          <br />
          <em className="text-gold2 italic">achievements</em>
        </h2>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <LightboxTrigger wide src="/uploads/6e0aae31-d973-4b88-8765-1dbb615353c6.png" alt="Professional recognition ceremony" label="Professional recognition ↗" />
          <LightboxTrigger src="/uploads/561f8c31-aaf5-4716-8aa0-1d25bc836b3a.png" alt="Achievement award presentation" label="Achievement ↗" />
          <LightboxTrigger src="/uploads/d73bf82a-ff95-4c00-9dac-6bf7a313b83d.png" alt="Certificate of professional training" label="Certificate of training ↗" />
          <LightboxTrigger src="/uploads/312423ae-0d55-4b72-8985-571cb09539b7.png" alt="Recognition trophy held by Shital Gurav" label="Professional recognition ↗" />
        </div>
      </PageSpace>
      <PageSpace flow>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/uploads/d73bf82a-ff95-4c00-9dac-6bf7a313b83d.png" alt="Professional beauty training certificate" className="min-h-[630px] w-full object-cover" />
          <div className="max-w-[530px]">
            <Eyebrow>The next chapter</Eyebrow>
            <h2 className="heading-display mt-6">
              Always learning.
              <br />
              <em className="text-gold italic">Always evolving.</em>
            </h2>
            <p className="mt-6 font-serif text-[27px] leading-snug">A considered practice keeps moving — through continuous learning, advanced beauty knowledge, professional development and the refinement of skill.</p>
            <p className="mt-6 font-serif text-lg text-[#5e5245]">Every new perspective becomes part of a more thoughtful, more confident beauty experience.</p>
          </div>
        </div>
      </PageSpace>
      <PageSpace dark>
        <Eyebrow className="text-[#d4af6d]">Along the way</Eyebrow>
        <h2 className="heading-display mt-6 text-[#f4eadb]">
          Moments
          <br />
          <em className="text-gold2 italic">that matter</em>
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["/uploads/072de8c8-6a34-4f05-a985-69f287867e79.png", "Shital Gurav with a studio associate"],
            ["/uploads/a4947fa8-3c01-4cc6-8b83-7ecf0b2e74a8.png", "Shital Gurav with a client in the studio"],
            ["/uploads/4dcdaa06-a70e-47e8-b759-4aeaa204583a.png", "Shital Gurav with a professional associate"],
          ].map(([src, alt]) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src as string} src={src as string} alt={alt as string} className="h-[420px] w-full object-cover md:nth-2:mt-0 nth-2:mt-0 nth-2:md:mt-[90px]" />
          ))}
        </div>
      </PageSpace>
      <PageSpace flow>
        <SectionLabel index="04" title="Professional development" />
        <Eyebrow className="mt-10">The knowledge behind the artistry</Eyebrow>
        <h2 className="heading-display mt-6">
          Professional certifications
          <br />
          <em className="text-gold italic">& advanced training</em>
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((c, i) => (
            <article key={c.num} className={`min-h-[230px] border border-[rgba(119,91,51,0.3)] bg-[#f5ecdd] p-7 ${i === 3 ? "sm:col-span-2" : ""}`}>
              <b className="text-[10px] tracking-[0.2em] text-gold">{c.num}</b>
              <h3 className="mt-10 font-serif text-3xl leading-tight">{c.title}</h3>
              <p className="mt-3 font-serif text-[15px] text-[#776958]">{c.description}</p>
            </article>
          ))}
        </div>
      </PageSpace>
      <PageSpace dark className="text-center">
        <Eyebrow className="text-[#d4af6d]">Your story, next</Eyebrow>
        <h2 className="heading-display mt-6 text-[#f4eadb]">
          Let your beauty
          <br />
          <em className="text-gold2 italic">tell your story</em>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <GoldButton href="/book">Book an appointment ↗</GoldButton>
          <GoldButton href="/studio" variant="outline" className="border-white/20 text-[#f4eadb]">
            Explore the studio ↗
          </GoldButton>
        </div>
      </PageSpace>
    </>
  );
}
