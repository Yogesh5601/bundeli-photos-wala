import { Eyebrow, GoldButton, PageHero, PageSpace, SectionLabel } from "@/components/site/editorial";
import { defaultEnquiryMessage, site, whatsAppUrl } from "@/lib/content";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/uploads/86488a41-aa16-4d3f-8488-e0447766feb8.png"
        imageAlt="Shital Gurav Makeup Studio interior"
        eyebrow="Let's connect"
        title={
          <>
            Come into
            <br />
            <em>the light</em>
          </>
        }
        subtitle="SHITAL GURAV MAKEUP STUDIO · URVI PRO SALON & ACADEMY"
      />
      <PageSpace flow>
        <SectionLabel index="01" title="Contact details" />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <Eyebrow>A beautiful beginning</Eyebrow>
            <h2 className="heading-display mt-6">
              We would love
              <br />
              <em className="text-gold italic">to hear from you</em>
            </h2>
          </div>
          <p className="max-w-[360px] font-serif text-xl text-[#645748]">
            For appointments, course enquiries or simply to begin a conversation about your occasion, reach out directly through the details below.
          </p>
        </div>
        <div className="mt-12 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          <a href={`tel:${site.phone}`} className="contact-card">
            <small className="text-[9px] tracking-[0.2em] text-gold uppercase">Phone</small>
            <strong className="mt-9 font-serif text-[27px] leading-tight">{site.phoneDisplay}</strong>
            <span className="mt-auto text-[9px] tracking-[0.14em] uppercase">Call the studio ↗</span>
          </a>
          <a href={whatsAppUrl(defaultEnquiryMessage)} target="_blank" rel="noopener noreferrer" className="contact-card">
            <small className="text-[9px] tracking-[0.2em] text-gold uppercase">WhatsApp</small>
            <strong className="mt-9 font-serif text-[27px] leading-tight">Start a conversation</strong>
            <span className="mt-auto text-[9px] tracking-[0.14em] uppercase">Message us ↗</span>
          </a>
          <a href={`mailto:${site.email}`} className="contact-card">
            <small className="text-[9px] tracking-[0.2em] text-gold uppercase">Email</small>
            <strong className="mt-9 break-words font-serif text-[27px] leading-tight">{site.email}</strong>
            <span className="mt-auto text-[9px] tracking-[0.14em] uppercase">Send an enquiry ↗</span>
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="contact-card">
            <small className="text-[9px] tracking-[0.2em] text-gold uppercase">Instagram</small>
            <strong className="mt-9 font-serif text-[27px] leading-tight">{site.instagramHandle}</strong>
            <span className="mt-auto text-[9px] tracking-[0.14em] uppercase">View artistry ↗</span>
          </a>
          <a href={site.parentInstagram} target="_blank" rel="noopener noreferrer" className="contact-card">
            <small className="text-[9px] tracking-[0.2em] text-gold uppercase">Instagram</small>
            <strong className="mt-9 font-serif text-[27px] leading-tight">{site.parentInstagramHandle}</strong>
            <span className="mt-auto text-[9px] tracking-[0.14em] uppercase">Visit parent brand ↗</span>
          </a>
          <div className="flex min-h-[190px] flex-col border border-ink bg-ink p-7 text-[#f4eadb]">
            <small className="text-[9px] tracking-[0.2em] text-gold uppercase">Working hours</small>
            <strong className="mt-9 font-serif text-[27px] leading-tight">{site.hours}</strong>
            <span className="mt-auto text-[9px] tracking-[0.14em] text-gold2 uppercase">{site.hoursDetail}</span>
          </div>
        </div>
      </PageSpace>
      <PageSpace dark>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.2fr] lg:items-center">
          <div>
            <Eyebrow className="text-[#d4af6d]">Find us</Eyebrow>
            <h2 className="heading-display mt-6 text-[#f4eadb]">
              Visit our
              <br />
              <em className="text-gold2 italic">studio</em>
            </h2>
            <p className="mt-8 font-serif text-2xl text-[#d1c2ae]">
              {site.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <GoldButton href={site.mapsUrl} className="mt-8">
              Get directions ↗
            </GoldButton>
          </div>
          <div className="relative h-[360px] overflow-hidden border border-gold2/40 md:h-[470px]">
            <iframe
              title="Google Maps location for Urvi Pro Salon and Academy"
              src={site.mapsEmbed}
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </PageSpace>
      <PageSpace className="text-center">
        <Eyebrow>Your occasion deserves attention</Eyebrow>
        <h2 className="heading-display mt-6">
          Ready to begin
          <br />
          <em className="text-gold italic">your look?</em>
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <GoldButton href="/book">Book your appointment ↗</GoldButton>
          <GoldButton href={whatsAppUrl(defaultEnquiryMessage)} variant="outline">
            Enquire now ↗
          </GoldButton>
        </div>
      </PageSpace>
    </>
  );
}
