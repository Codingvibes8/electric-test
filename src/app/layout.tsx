import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/data/site";

const title = "Electrician in Guildford | VoltCraft Electrical";
const description =
  "NICEIC-approved electricians in Guildford. Emergency call-outs, fuse board upgrades, rewires and EV chargers. 4.9/5 from 212 reviews. Get a free quote.";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: title,
    template: "%s | VoltCraft Electrical",
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: "Electrical services",
  keywords: [
    "electrician Guildford",
    "emergency electrician Guildford",
    "NICEIC electrician Surrey",
    "fuse board upgrade Guildford",
    "consumer unit replacement Guildford",
    "house rewiring Guildford",
    "EV charger installation Guildford",
    "electrician Godalming",
    "electrician Woking",
    "electrician Farnham",
    "electrician Cranleigh",
    "electrician Haslemere",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.siteUrl,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "VoltCraft Electrical, NICEIC-approved electricians in Guildford",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  other: {
    "geo.region": "GB-SRY",
    "geo.placename": site.town,
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1112",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="min-h-screen bg-paper font-sans text-ink antialiased pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">
        <a
          href="#main"
          className="sr-only z-[80] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
