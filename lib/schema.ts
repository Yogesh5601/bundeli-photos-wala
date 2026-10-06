import { site } from "./content";

export const beautySalonJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: site.name,
  parentOrganization: {
    "@type": "Organization",
    name: site.parentOrg,
  },
  telephone: site.phone,
  email: site.email,
  openingHours: "Mo-Su 10:00-19:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Capital Court, Neminathnagar, Vishrambag",
    addressLocality: "Sangli",
    addressRegion: "Maharashtra",
    postalCode: "416415",
    addressCountry: "IN",
  },
  sameAs: [site.instagram, site.parentInstagram, site.facebook],
};
