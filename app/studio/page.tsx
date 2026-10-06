import { Eyebrow, GoldButton, PageHero, PageSpace, SectionLabel, TextLink } from "@/components/site/editorial";
import { studioServices } from "@/lib/content";
import { pageMetadata } from "@/lib/page-metadata";
import { whatsAppUrl, defaultEnquiryMessage } from "@/lib/content";

export const metadata = pageMetadata("studio");

export default function StudioPage() {
  return (
    <>
      <PageHero
        image="/uploads/86488a41-aa16-4d3f-8488-e0447766feb8.png"
        imageAlt="The Shital Gurav Makeup Studio"
        eyebrow="The studio experience"
        title={
          <>
            The Shital Gurav
            <br />
            <em>Makeup Studio</em>
          </>
        }
        subtitle="WHERE ARTISTRY MEETS ELEGANCE"
      />
      <PageSpace flow>
        <SectionLabel index="01" title="The space" />
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/uploads/86488a41-aa16-4d3f-8488-e0447766feb8.png" alt="Shital Gurav inside the makeup studio" className="min-h-[570px] w-full object-cover" />
          <div className="max-w-[530px]">
            <Eyebrow>A space created for beauty</Eyebrow>
            <h2 className="heading-display mt-6">
              Personal.
              <br />
              <em className="text-gold italic">Polished.</em>
            </h2>
            <div className="my-7 h-px w-[90px] bg-gold" />
            <p className="font-serif text-[27px] leading-snug">A considered studio experience shaped around personalized attention, professional makeup artistry and the small details that make a beauty appointment feel special.</p>
            <p className="mt-6 font-serif text-lg text-[#5e5245]">Every look begins with listening — to the occasion, the desired feeling and the individual behind it.</p>
          </div>
        </div>
      </PageSpace>
      <PageSpace dark>
        <SectionLabel index="02" title="The services" />
        <Eyebrow className="mt-10 text-[#d4af6d]">For every occasion</Eyebrow>
        <h2 className="heading-display mt-6 text-[#f4eadb]">
          Makeup for
          <br />
          <em className="text-gold2 italic">every moment</em>
        </h2>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {studioServices.map((service) => (
            <article key={service.title} className="relative min-h-[390px] overflow-hidden lg:min-h-[500px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={service.image} alt={service.alt} className="absolute inset-0 h-full w-full object-cover saturate-[0.68] transition duration-1000 hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-[rgba(4,3,2,0.9)] to-transparent" />
              <div className="absolute bottom-6 left-6 right-5">
                <h3 className="font-serif text-4xl">{service.title}</h3>
                <p className="mt-2 max-w-[250px] font-serif text-lg text-[#ded0b9]">{service.description}</p>
                <a href={whatsAppUrl(defaultEnquiryMessage)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-[9px] tracking-[0.16em] text-gold2 uppercase">
                  Enquire now ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </PageSpace>
      <PageSpace flow>
        <Eyebrow>The bridal edit</Eyebrow>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="heading-display">
            Your bridal moment,
            <br />
            <em className="text-gold italic">beautifully yours</em>
          </h2>
          <TextLink href="/gallery">Explore bridal looks ↗</TextLink>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-[1.2fr_0.7fr_0.7fr]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/uploads/1003241437.jpg.jpg" alt="Bridal recognition event portrait" className="h-[500px] w-full object-cover lg:h-[620px]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/uploads/555556.jpg.jpg" alt="Editorial bridal look" className="h-[340px] w-full object-cover lg:mt-32 lg:h-[430px]" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/uploads/5M2A8926.JPG.jpg" alt="Traditional bridal styling" className="h-[340px] w-full object-cover lg:mt-9 lg:h-[530px]" />
        </div>
      </PageSpace>
      <PageSpace dark>
        <Eyebrow className="text-[#d4af6d]">The studio experience</Eyebrow>
        <h2 className="heading-display mt-6 text-[#f4eadb]">
          Detail is the
          <br />
          <em className="text-gold2 italic">difference</em>
        </h2>
        <div className="mt-16 grid gap-8 border-t border-gold/35 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Personalized consultation", "Understand the occasion and desired look."],
            ["02", "Detail-focused artistry", "Every element is carefully refined."],
            ["03", "Elegant finish", "A polished look designed to photograph beautifully."],
            ["04", "Confidence", "Makeup that complements the individual."],
          ].map(([num, title, desc]) => (
            <article key={num}>
              <b className="text-xs text-gold">{num}</b>
              <h3 className="mt-16 font-serif text-3xl text-[#f4eadb]">{title}</h3>
              <p className="mt-2 font-serif text-[#b7a995]">{desc}</p>
            </article>
          ))}
        </div>
      </PageSpace>
      <PageSpace className="text-center">
        <Eyebrow>The signature look awaits</Eyebrow>
        <h2 className="heading-display mt-6">
          Ready for your
          <br />
          <em className="text-gold italic">signature look?</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-serif text-xl text-[#766758]">Let us create a look designed around your occasion, your style and your individuality.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <GoldButton href="/book">Book an appointment ↗</GoldButton>
          <GoldButton href="/contact" variant="outline">
            Contact the studio ↗
          </GoldButton>
        </div>
      </PageSpace>
    </>
  );
}
