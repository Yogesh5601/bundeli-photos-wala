import { BookingForm } from "@/components/booking/booking-form";
import { Eyebrow, PageSpace } from "@/components/site/editorial";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("book");

export default function BookPage() {
  return (
    <div className="min-h-[calc(100svh-var(--site-header-height))] bg-[#f4eadb]">
      <PageSpace className="py-12 md:py-16">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-[9vw]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/uploads/5M2A3117.JPG.jpg" alt="Bridal makeup consultation look" loading="lazy" className="mb-10 max-h-[420px] w-full object-cover" />
            <Eyebrow>A considered appointment</Eyebrow>
            <h1 className="heading-display mt-8 text-[clamp(3.2rem,7vw,6.5rem)]">
              Book your
              <br />
              <em className="text-gold italic">appointment</em>
            </h1>
            <p className="mt-10 max-w-[350px] font-serif text-2xl text-[#665747]">Your occasion deserves a look created just for you.</p>
            <div className="mt-16 flex max-w-[330px] gap-5 border-t border-gold/35 pt-4">
              <span className="text-[10px] tracking-[0.2em] text-gold">01</span>
              <p className="font-serif text-lg text-[#756452]">Share a few details and we will continue the conversation with you on WhatsApp.</p>
            </div>
          </div>
          <BookingForm />
        </div>
      </PageSpace>
    </div>
  );
}
