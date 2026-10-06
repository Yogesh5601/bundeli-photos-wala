export const site = {
  name: "Shital Gurav Makeup Studio",
  parentOrg: "Urvi Pro Salon & Academy",
  tagline: "Where timeless beauty meets refined artistry.",
  defaultTitle:
    "Shital Gurav Makeup Studio in Sangli | Bridal Makeup & Professional Academy",
  description:
    "Shital Gurav Makeup Studio in Sangli, Maharashtra — premium bridal, HD, airbrush, party and occasion makeup, plus professional makeup academy training.",
  phone: "+917767887555",
  phoneDisplay: "+91 77678 87555",
  email: "sheetalpgurav@gmail.com",
  hours: "Monday – Sunday",
  hoursDetail: "10:00 AM – 7:00 PM",
  addressLines: [
    "Urvi Pro Salon & Academy",
    "Capital Court, Neminathnagar,",
    "Vishrambag, Sangli,",
    "Maharashtra 416415",
  ],
  mapsUrl: "https://maps.app.goo.gl/k7eiSNCEA7B3qrUe8?g_st=awb",
  mapsEmbed:
    "https://www.google.com/maps?q=Urvi%20Pro%20Salon%20%26%20Academy%2C%20Capital%20Court%2C%20Neminathnagar%2C%20Vishrambag%2C%20Sangli%2C%20Maharashtra%20416415&output=embed&z=16",
  logo: "/uploads/IMG-20260711-WA0024.jpg.jpeg",
  instagram: "https://www.instagram.com/makeup_by_shital_gurav/",
  instagramHandle: "@makeup_by_shital_gurav",
  parentInstagram: "https://www.instagram.com/urvi_pro_salon_academy/",
  parentInstagramHandle: "@urvi_pro_salon_academy",
  facebook: "https://www.facebook.com/105885250924617",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/studio", label: "Studio" },
  { href: "/#hair-styling", label: "Hair Styling" },
  { href: "/academy", label: "Academy" },
  { href: "/gallery", label: "Gallery" },
  { href: "/packages", label: "Packages" },
  { href: "/contact", label: "Contact" },
] as const;

export type GalleryCategory =
  | "bridal"
  | "reception"
  | "engagement"
  | "traditional"
  | "party"
  | "editorial";

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
  layout?: "tall" | "wide";
};

export const galleryCategories: { id: "all" | GalleryCategory; label: string }[] =
  [
    { id: "all", label: "All" },
    { id: "bridal", label: "Bridal" },
    { id: "reception", label: "Reception" },
    { id: "engagement", label: "Engagement" },
    { id: "traditional", label: "Traditional" },
    { id: "party", label: "Party" },
    { id: "editorial", label: "Editorial" },
  ];

export const galleryItems: GalleryItem[] = [
  { src: "/uploads/1003241437.jpg.jpg", alt: "Red sari bridal makeup look", category: "bridal", layout: "tall" },
  { src: "/uploads/5M2A3496.JPG.jpg", alt: "Copper party makeup look", category: "party" },
  { src: "/uploads/555556.jpg.jpg", alt: "Soft engagement makeup look", category: "engagement", layout: "wide" },
  { src: "/uploads/d1e7f58e-caab-4b6a-b536-05ee6a6d7877.jpg", alt: "Editorial burgundy makeup look", category: "editorial" },
  { src: "/uploads/547458.jpg.jpg", alt: "Mint engagement makeup look", category: "engagement" },
  { src: "/uploads/5M2A8982.JPG.jpg", alt: "Traditional red bridal makeup look", category: "traditional", layout: "wide" },
  { src: "/uploads/0a4bad55-bdb6-43b2-a9d2-f642b0a3f438.jpg", alt: "Editorial burgundy portrait", category: "editorial" },
  { src: "/uploads/NPS_0780 copy.jpg.jpg", alt: "Traditional reception makeup portrait", category: "reception" },
  { src: "/uploads/5M2A8926.JPG.jpg", alt: "Red bridal jewellery and makeup", category: "bridal" },
  { src: "/uploads/5M2A3063.JPG.jpg", alt: "Green sari bridal makeup portrait", category: "bridal" },
  { src: "/uploads/5M2A3653.JPG.jpg", alt: "Red traditional reception makeup portrait", category: "traditional", layout: "wide" },
  { src: "/uploads/5M2A3268.JPG.jpg", alt: "Warm copper party makeup portrait", category: "party" },
  { src: "/uploads/5M2A3242.JPG.jpg", alt: "Editorial traditional makeup portrait", category: "editorial" },
  { src: "/uploads/5M2A3121.JPG.jpg", alt: "Engagement bridal makeup look", category: "engagement" },
  { src: "/uploads/5M2A3117.JPG.jpg", alt: "Reception makeup close-up", category: "reception" },
  { src: "/uploads/ganesh-chaturthi-look-01.jpg", alt: "Ganesh Chaturthi traditional makeup look", category: "traditional", layout: "tall" },
  { src: "/uploads/ganesh-chaturthi-look-02.jpg", alt: "Ganesh Chaturthi traditional makeup look", category: "traditional" },
  { src: "/uploads/ganesh-chaturthi-look-03.jpg", alt: "Ganesh Chaturthi traditional makeup look", category: "traditional", layout: "wide" },
  { src: "/uploads/white-look-01.jpg", alt: "Elegant white dress makeup look", category: "party" },
  { src: "/uploads/white-look-02.jpg", alt: "Elegant white dress makeup look", category: "party", layout: "tall" },
];

export const experienceCards = [
  {
    href: "/gallery",
    image: "/uploads/5M2A3063.JPG.jpg",
    alt: "Real Maharashtrian makeup look with green blouse",
    num: "01",
    title: "Real Maharashtrian Look",
    subtitle: "Authentic Maharashtrian beauty, refined.",
    focus: "center 22%",
  },
  {
    href: "/gallery",
    image: "/uploads/5M2A3121.JPG.jpg",
    alt: "Elegant engagement makeup look",
    num: "02",
    title: "Engagement",
    subtitle: "Soft radiance for a new beginning.",
    focus: "center 28%",
  },
  {
    href: "/gallery",
    image: "/uploads/maharashtrian-bridal-replacement.jpg",
    alt: "Maharashtrian bridal makeup look by Shital Gurav",
    num: "03",
    title: "Maharashtrian Bridal Look",
    subtitle: "Traditional bridal artistry, beautifully composed.",
    focus: "center 24%",
  },
  {
    href: "/gallery",
    image: "/uploads/5M2A3653.JPG.jpg",
    alt: "Reception makeup look in a red sari",
    num: "04",
    title: "Reception",
    subtitle: "Statement beauty, beautifully composed.",
    focus: "center 26%",
  },
  {
    href: "/gallery",
    image: "/uploads/5M2A3496.JPG.jpg",
    alt: "Party makeup with a warm copper look",
    num: "05",
    title: "Party",
    subtitle: "Confidence with a little more glow.",
    focus: "center 30%",
  },
  {
    href: "/gallery",
    image: "/uploads/NPS_0780 copy.jpg.jpg",
    alt: "Radha Rani inspired traditional beauty look",
    num: "06",
    title: "Special occasions",
    subtitle: "A graceful, expressive beauty story.",
    focus: "center 20%",
  },
];

export const hairStylingItems = [
  { src: "/uploads/hair-styling-01.png", alt: "Signature hairstyling by Shital Gurav", num: "01", title: "Signature waves", tall: true },
  { src: "/uploads/hair-styling-02.png", alt: "Elegant half-up hairstyling by Shital Gurav", num: "02", title: "Soft half-up styling" },
  { src: "/uploads/hair-styling-03.png", alt: "Detailed long hairstyling by Shital Gurav", num: "03", title: "Long-hair artistry", tall: true },
  { src: "/uploads/hair-styling-04.jpg", alt: "Decorated waves hairstyling by Shital Gurav", num: "04", title: "Embellished waves" },
  { src: "/uploads/hair-styling-05.png", alt: "Braided hairstyling by Shital Gurav", num: "05", title: "Statement braid" },
  { src: "/uploads/hair-styling-06.png", alt: "Elegant updo hairstyling by Shital Gurav", num: "06", title: "Classic updo", tall: true },
];

export const packagePreview = [
  { num: "01", title: "BRIDAL 3D", price: "₹15,000", description: "Refined bridal artistry for your wedding day." },
  { num: "02", title: "HD BRIDAL", price: "₹18,000", description: "A polished, camera-ready bridal finish.", featured: true },
  { num: "03", title: "AIR BRUSH", price: "₹25,000", description: "Lightweight, seamless beauty for your celebration." },
];

export const bridalPackages = [
  { num: "01", title: "3D Makeup", price: "₹15,000", image: "/uploads/1003241437.jpg.jpg", alt: "3D bridal makeup look" },
  { num: "02", title: "HD Makeup", price: "₹18,000", image: "/uploads/5M2A8926.JPG.jpg", alt: "HD bridal makeup look", featured: true },
  { num: "03", title: "Air Brush", price: "₹25,000", image: "/uploads/547458.jpg.jpg", alt: "Air brush makeup look" },
  { num: "04", title: "Ideal Groom Makeup", price: "₹5,000", image: "/uploads/23ce4de3-4de1-4d65-a01a-57343a5e9ee5.png", alt: "Groom makeup styling" },
  { num: "05", title: "Trial Makeup", price: "₹3,000", image: "/uploads/d1e7f58e-caab-4b6a-b536-05ee6a6d7877.jpg", alt: "Trial makeup editorial look" },
];

export const preBridalPackages = [
  { title: "Premium Luxury Package", price: "₹24,999", tag: "Signature edit", description: "Curated beauty care for a considered pre-bridal experience.", image: "/uploads/5M2A8982.JPG.jpg", alt: "Premium pre-bridal traditional makeup look" },
  { title: "Normal Package", price: "₹9,999", tag: "Essential edit", description: "A thoughtfully priced pre-bridal beauty experience.", image: "/uploads/555556.jpg.jpg", alt: "Pre-bridal beauty look" },
];

export const courses = [
  {
    num: "01 / Diploma",
    title: "Diploma in Basic to Advanced Hair, Skin & Makeup",
    overview: "A comprehensive pathway through the essentials and advanced principles of professional beauty artistry.",
    learn: ["Hair styling fundamentals", "Skin preparation & skincare knowledge", "Professional makeup techniques", "Product, tool & hygiene knowledge"],
    fee: "₹80,000",
    feeNote: "Regular fee ₹90,000",
    image: "/uploads/5M2A3496.JPG.jpg",
    featured: false,
  },
  {
    num: "02 / Professional",
    title: "Professional Degree Course",
    overview: "A focused, career-minded course for developing confidence across professional makeup and beauty practice.",
    learn: ["Face analysis & suitable makeup selection", "Bridal and occasion makeup knowledge", "Client consultation and handling", "Professional grooming & etiquette"],
    fee: "₹1,00,000",
    feeNote: "Duration · 6 months",
    image: "/uploads/555556.jpg.jpg",
    featured: true,
  },
];

export const studioServices = [
  { title: "Bridal makeup", description: "Refined beauty for the beginning of something unforgettable.", image: "/uploads/1003241437.jpg.jpg", alt: "Bridal makeup service" },
  { title: "Engagement makeup", description: "Soft radiance for a moment worth remembering.", image: "/uploads/555556.jpg.jpg", alt: "Engagement makeup service" },
  { title: "Reception makeup", description: "Statement beauty with an elegant finish.", image: "/uploads/547458.jpg.jpg", alt: "Reception makeup service" },
  { title: "Party makeup", description: "Confidence, composed with a little more glow.", image: "/uploads/5M2A3496.JPG.jpg", alt: "Party makeup service" },
  { title: "Traditional makeup", description: "Heritage interpreted with a contemporary eye.", image: "/uploads/5M2A8926.JPG.jpg", alt: "Traditional makeup service" },
  { title: "Special occasion", description: "A look created around your moment.", image: "/uploads/0a4bad55-bdb6-43b2-a9d2-f642b0a3f438.jpg", alt: "Special occasion makeup service" },
];

export const credentials = [
  { num: "01", title: "Certified by Javed Habib Academy", description: "Professional beauty education and training." },
  { num: "02", title: "Certified by International Hair & Makeup by Surynetra, Rita Gada", description: "Advanced hair and makeup training." },
  { num: "03", title: "Certified by Jignesh Virani — Pyropeel Skin Academy", description: "Aesthetic Mastercourse · August 2023" },
  { num: "04", title: "Diploma in Cosmetology & Trichology", description: "International School of Clinical Aesthetics (ISCA) · Dr. Trishna Gupte · The Cosmo-Secure Clinic, Pune" },
  { num: "05", title: "MEDIGO Aesthetics Training Certification", description: "Dr. Chetana Shetty" },
];

export function whatsAppUrl(text: string) {
  return `https://wa.me/917767887555?text=${encodeURIComponent(text)}`;
}

export const defaultEnquiryMessage =
  "Hello Shital Gurav Makeup Studio, I would like to make an enquiry.";
