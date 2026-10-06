import { Badge } from "@/components/ui/badge";
import { Eyebrow, GoldButton, PageHero, PageSpace, SectionLabel, TextLink } from "@/components/site/editorial";
import { courses, defaultEnquiryMessage, whatsAppUrl } from "@/lib/content";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("academy");

export default function AcademyPage() {
  return (
    <>
      <PageHero
        image="/uploads/4dcdaa06-a70e-47e8-b759-4aeaa204583a.png"
        imageAlt="Professional makeup academy training"
        eyebrow="The professional path"
        title={
          <>
            Professional
            <br />
            <em>makeup academy</em>
          </>
        }
        subtitle="SHITAL GURAV MAKEUP STUDIO · SANGli, MAHARASHTRA"
      >
        <div className="mt-8 flex flex-wrap gap-3">
          {["20+ YEARS", "PROFESSIONAL TRAINING", "HANDS-ON LEARNING"].map((b) => (
            <Badge key={b} variant="outline" className="rounded-none border-gold2/40 text-[9px] tracking-widest text-gold2">
              {b}
            </Badge>
          ))}
        </div>
      </PageHero>
      <PageSpace flow>
        <SectionLabel index="01" title="The academy" />
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Learn the craft. Build your confidence.</Eyebrow>
            <h2 className="heading-display mt-6">
              Beauty is a
              <br />
              <em className="text-gold italic">practice.</em>
            </h2>
          </div>
          <div className="max-w-[530px] font-serif text-lg text-[#5e5245]">
            <p className="text-[27px] leading-snug text-ink">A serious, hands-on approach to hair, skin and makeup for those ready to develop their professional artistry.</p>
            <p className="mt-6">Learn through structured practice, thoughtful technique and a clear understanding of the tools, products and people behind a beautiful result.</p>
          </div>
        </div>
      </PageSpace>
      <PageSpace dark>
        <SectionLabel index="02" title="The courses" />
        <Eyebrow className="mt-10 text-[#d4af6d]">A foundation for your future</Eyebrow>
        <h2 className="heading-display mt-6 text-[#f4eadb]">
          Choose your
          <br />
          <em className="text-gold2 italic">direction</em>
        </h2>
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {courses.map((course) => (
            <article
              key={course.title}
              className={`border p-8 md:p-10 ${course.featured ? "border-gold bg-linear-to-br from-[#1a130f] to-[#0d0b0a] text-[#f4eadb]" : "border-gold/30 bg-[#15100d] text-[#f4eadb]"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={course.image} alt="" className="mb-6 h-48 w-full object-cover" loading="lazy" />
              <div className="text-[9px] tracking-[0.2em] text-gold uppercase">{course.num}</div>
              <h3 className="mt-10 font-serif text-4xl leading-none">{course.title}</h3>
              <p className="mt-4 min-h-[78px] font-serif text-lg text-[#c8baa5]">{course.overview}</p>
              <div className="my-8 space-y-3 border-y border-gold/20 py-6 font-serif text-[#cfc0aa]">
                <b className="block text-[9px] tracking-[0.18em] text-gold uppercase">What students learn</b>
                {course.learn.map((item) => (
                  <span key={item} className="block before:mr-2 before:text-gold before:content-['—']">
                    {item}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 items-end gap-2">
                <small className="col-span-2 text-[9px] tracking-[0.18em] text-gold uppercase">Course fee</small>
                <strong className="font-serif text-4xl text-gold2">{course.fee}</strong>
                <del className="font-serif text-sm text-[#948674]">{course.feeNote}</del>
              </div>
              <p className="mt-5 font-serif text-sm text-[#9f907d]">Certificate information provided by the academy.</p>
              <GoldButton href={whatsAppUrl(defaultEnquiryMessage)} className="mt-8">
                Enquire / apply now ↗
              </GoldButton>
            </article>
          ))}
        </div>
      </PageSpace>
      <PageSpace flow>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Beyond the brush</Eyebrow>
            <h2 className="heading-display mt-6">
              Learn with
              <br />
              <em className="text-gold italic">intention</em>
            </h2>
            <p className="mt-6 max-w-[390px] font-serif text-[23px] leading-snug text-[#534a3d]">The work is practical, personal and built around the confidence to work with real clients.</p>
            <TextLink href="/contact" className="mt-8 inline-block">
              Start your beauty career ↗
            </TextLink>
          </div>
          <div className="grid grid-cols-2 border-t border-gold/35">
            {[
              "Practical hands-on learning",
              "Bridal and occasion makeup",
              "Portfolio development",
              "Client consultation and handling",
              "Product and tool knowledge",
              "Professional hygiene and setup",
              "Confidence with real clients",
              "Guidance for freelance work",
            ].map((item) => (
              <span key={item} className="border-b border-gold/35 py-5 pr-3 font-serif text-base text-[#645748] before:mr-2 before:text-[9px] before:text-gold before:content-['✦']">
                {item}
              </span>
            ))}
          </div>
        </div>
      </PageSpace>
      <PageSpace dark>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <Eyebrow className="text-[#d4af6d]">Your future, thoughtfully built</Eyebrow>
            <h2 className="heading-display mt-6 text-[#f4eadb]">
              Start your
              <br />
              <em className="text-gold2 italic">beauty career</em>
            </h2>
            <p className="mt-6 max-w-[420px] font-serif text-xl text-[#cdbda8]">Enquire about courses, learning pathways and the next step in your professional practice.</p>
            <GoldButton href={whatsAppUrl(defaultEnquiryMessage)} className="mt-8">
              Enquire about courses ↗
            </GoldButton>
          </div>
          <div className="grid min-h-[400px] place-items-center border border-gold2/35 bg-[radial-gradient(circle,rgba(199,163,101,0.12),transparent_55%)] p-6 lg:min-h-[540px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/uploads/NPS_0780 copy.jpg.jpg" alt="Makeup artistry practical learning" className="max-h-full w-full object-cover" />
          </div>
        </div>
      </PageSpace>
    </>
  );
}
