import { Reveal } from "@/components/site/reveal";
import { Eyebrow, SectionLabel } from "@/components/site/editorial";

export function PageIntro({
  index,
  sectionTitle,
  eyebrow,
  title,
  lead,
}: {
  index: string;
  sectionTitle: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: string;
}) {
  return (
    <div className="page-intro">
      <Reveal>
        <SectionLabel index={index} title={sectionTitle} />
      </Reveal>
      <Reveal delay={60}>
        <Eyebrow className="mt-10">{eyebrow}</Eyebrow>
        <h2 className="heading-display mt-6">{title}</h2>
        {lead && <p className="body-lead mt-6 max-w-xl text-prose-muted">{lead}</p>}
      </Reveal>
    </div>
  );
}
