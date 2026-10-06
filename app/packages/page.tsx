import { Eyebrow, GoldButton, PageHero, PageSpace, SectionLabel } from "@/components/site/editorial";
import { bridalPackages, preBridalPackages } from "@/lib/content";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("packages");

export default function PackagesPage() {
  return (
    <>
      <PageHero
        image="/uploads/5M2A8926.JPG.jpg"
        imageAlt="Bridal makeup package look by Shital Gurav"
        eyebrow="The occasion edit"
        title={
          <>
            Choose your
            <br />
            <em>experience</em>
          </>
        }
        subtitle="BRIDAL MAKEUP & PRE-BRIDAL PACKAGES"
      />
      <PageSpace flow>
        <SectionLabel index="01" title="Bridal makeup" />
        <Eyebrow className="mt-10">A considered beauty experience</Eyebrow>
        <h2 className="heading-display mt-6">
          Makeup,
          <br />
          <em className="text-gold italic">beautifully composed</em>
        </h2>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bridalPackages.map((pkg) => (
            <article
              key={pkg.title}
              className={`interactive-card flex min-h-[310px] flex-col p-7 ${pkg.featured ? "border-gold bg-[#15100d] text-cream" : "border-[rgba(119,91,51,0.2)] bg-[rgba(255,255,255,0.35)]"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={pkg.image} alt={pkg.alt} loading="lazy" className="mb-4 h-40 w-full object-cover" />
              <span className="text-[9px] tracking-[0.18em] text-gold">{pkg.num}</span>
              <h3 className="mt-10 font-serif text-4xl">{pkg.title}</h3>
              <strong className="mt-6 font-serif text-4xl text-gold">{pkg.price}</strong>
              <small className="mt-2 text-[9px] tracking-[0.14em] uppercase">Per session</small>
              <GoldButton href="/book" className="mt-auto pt-6">
                Book your appointment ↗
              </GoldButton>
            </article>
          ))}
        </div>
      </PageSpace>
      <PageSpace dark>
        <SectionLabel index="02" title="Pre-bridal" />
        <Eyebrow className="mt-10 text-[#d4af6d]">A ritual before the moment</Eyebrow>
        <h2 className="heading-display mt-6 text-[#f4eadb]">
          Pre-bridal
          <br />
          <em className="text-gold2 italic">packages</em>
        </h2>
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {preBridalPackages.map((pkg) => (
            <article key={pkg.title} className="interactive-card min-h-[300px] border-gold/35 p-8 md:p-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={pkg.image} alt={pkg.alt} loading="lazy" className="mb-6 h-48 w-full object-cover" />
              <small className="text-[9px] tracking-[0.18em] text-gold uppercase">{pkg.tag}</small>
              <h3 className="mt-12 font-serif text-[42px]">{pkg.title}</h3>
              <strong className="mt-4 block font-serif text-4xl text-gold2">{pkg.price}</strong>
              <p className="mt-4 max-w-[300px] font-serif text-lg text-[#b9a996]">{pkg.description}</p>
              <GoldButton href="/contact" variant="outline" className="mt-8 border-gold2/40 text-gold2">
                Enquire now ↗
              </GoldButton>
            </article>
          ))}
        </div>
      </PageSpace>
      <PageSpace className="text-center">
        <Eyebrow>Your day, your way</Eyebrow>
        <h2 className="heading-display mt-6">
          Begin with
          <br />
          <em className="text-gold italic">the right feeling</em>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <GoldButton href="/book">Book your appointment ↗</GoldButton>
          <GoldButton href="/contact" variant="outline">
            Enquire now ↗
          </GoldButton>
        </div>
      </PageSpace>
    </>
  );
}
