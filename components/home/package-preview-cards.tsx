import { packagePreview } from "@/lib/content";
import { GoldButton } from "@/components/site/editorial";
import { Reveal } from "@/components/site/reveal";

export function PackagePreviewBlock() {
  return (
    <div className="package-inner mx-auto w-full max-w-[1120px]">
      <Reveal>
        <p className="text-eyebrow text-gold2">Your occasion, considered</p>
        <h2 className="heading-section mt-6 text-cream">
          Choose your
          <br />
          <em className="font-normal text-gold2 italic">experience</em>
        </h2>
        <p className="body-lead mx-auto mt-6 max-w-xl text-cream-muted">
          Curated makeup experiences tailored to your occasion.
        </p>
      </Reveal>
      <div className="package-preview-grid">
        {packagePreview.map((pkg, i) => (
          <Reveal key={pkg.title} delay={i * 70} className="h-full">
            <article className={`package-preview-card relative h-full ${pkg.featured ? "featured" : ""}`}>
              {pkg.featured && <span className="package-ribbon">Most chosen</span>}
              <span>{pkg.num}</span>
              <h3>{pkg.title}</h3>
              <strong>{pkg.price}</strong>
              <p>{pkg.description}</p>
              {"includes" in pkg && pkg.includes && (
                <ul className="package-includes mt-4 space-y-1.5 border-t border-[rgba(239,211,155,0.2)] pt-4">
                  {pkg.includes.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="flex justify-center" delay={200}>
        <GoldButton href="/packages" variant="outline-light" className="mt-2">
          View packages ↗
        </GoldButton>
      </Reveal>
    </div>
  );
}
