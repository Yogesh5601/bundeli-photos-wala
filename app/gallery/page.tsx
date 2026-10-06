import { Suspense } from "react";
import { PortfolioGrid } from "@/components/gallery/portfolio-grid";
import { PageHero, PageSpace } from "@/components/site/editorial";
import { PageIntro } from "@/components/site/page-intro";
import { pageMetadata } from "@/lib/page-metadata";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata = pageMetadata("gallery");

export default function GalleryPage() {
  return (
    <>
      <PageHero
        image="/uploads/5M2A3131.JPG.jpg"
        imageAlt="Bridal makeup artistry portfolio by Shital Gurav"
        eyebrow="The image archive"
        title={
          <>
            The art of
            <br />
            <em>the look</em>
          </>
        }
        subtitle="SHITAL GURAV MAKEUP STUDIO · PORTFOLIO"
      />
      <PageSpace className="bg-paper" flow>
        <PageIntro
          index="01"
          sectionTitle="Selected work"
          eyebrow="A study in beauty"
          title={
            <>
              Makeup,
              <br />
              <em className="text-gold italic">in the light</em>
            </>
          }
          lead="Browse bridal, reception, editorial and occasion looks — filter, search, and view full-size with smooth navigation."
        />
        <div>
          <Suspense
            fallback={
              <div className="space-y-6">
                <Skeleton className="h-11 max-w-md rounded-none" />
                <div className="flex gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-9 w-20 rounded-none" />
                  ))}
                </div>
                <Skeleton className="h-[480px] w-full rounded-none" />
              </div>
            }
          >
            <PortfolioGrid />
          </Suspense>
        </div>
      </PageSpace>
    </>
  );
}
