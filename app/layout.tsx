import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { FloatActions } from "@/components/site/float-actions";
import { MobileBookBar } from "@/components/site/mobile-book-bar";
import { IntroOverlay } from "@/components/site/intro-overlay";
import { HashRedirect } from "@/components/site/hash-redirect";
import { beautySalonJsonLd } from "@/lib/schema";
import { site } from "@/lib/content";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: site.defaultTitle,
  description: site.description,
  metadataBase: new URL("https://shitalgurav.com"),
  openGraph: {
    title: site.name,
    description: site.tagline,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#080706",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(beautySalonJsonLd) }}
        />
      </head>
      <body className="min-h-full">
        <HashRedirect />
        <IntroOverlay />
        <div className="relative bg-paper" id="site">
          <SiteHeader />
          <main className="site-header-offset pb-[72px] md:pb-0">{children}</main>
          <SiteFooter />
        </div>
        <FloatActions />
        <MobileBookBar />
      </body>
    </html>
  );
}
