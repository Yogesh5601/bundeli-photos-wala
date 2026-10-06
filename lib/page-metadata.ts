import type { Metadata } from "next";
import { site } from "./content";

export const pageTitles: Record<string, string> = {
  about: "About Shital Gurav Makeup Studio | Founder Story",
  studio: "Makeup Studio in Sangli | Shital Gurav Makeup Studio",
  academy: "Professional Makeup Academy in Sangli | Shital Gurav",
  packages: "Bridal Makeup Packages in Sangli | Shital Gurav",
  gallery: "Makeup Portfolio Gallery | Shital Gurav Makeup Studio",
  contact: "Contact Shital Gurav Makeup Studio in Sangli",
  book: "Book Your Appointment | Shital Gurav Makeup Studio",
};

export function pageMetadata(slug: keyof typeof pageTitles): Metadata {
  return {
    title: pageTitles[slug],
    description: site.description,
  };
}
