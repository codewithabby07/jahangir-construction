import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jahangirconstruction.com"),
  title: {
    default: "Jahangir Construction | Construction Contractor in Delhi NCR",
    template: "%s | Jahangir Construction",
  },
  description:
    "Jahangir Construction — experienced construction contractor in Delhi NCR. Residential, commercial, civil work, RCC, waterproofing, renovation & turnkey projects. 22+ years of experience. Get a free quote today.",
  keywords: [
    "construction contractor Delhi",
    "building contractor Delhi NCR",
    "house construction contractor",
    "civil contractor Delhi",
    "residential construction contractor",
    "commercial construction contractor",
    "RCC contractor Delhi",
    "renovation contractor Delhi",
    "Jahangir Construction",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.jahangirconstruction.com",
    siteName: "Jahangir Construction",
    title: "Jahangir Construction | Building Your Vision. Creating Your Future.",
    description:
      "Construction contractor in Delhi NCR with 22+ years of experience. Residential, commercial, civil, RCC, waterproofing, renovation & turnkey projects.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jahangir Construction - Building Your Vision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahangir Construction | Construction Contractor in Delhi NCR",
    description:
      "22+ years of construction expertise. Residential, commercial, civil & turnkey projects across Delhi NCR.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.jahangirconstruction.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.jahangirconstruction.com/#organization",
  name: "Jahangir Construction",
  alternateName: "Jahangir Construction New Delhi",
  description:
    "Construction contractor in Delhi NCR with 22+ years of experience. Services include residential construction, commercial construction, civil work, RCC, waterproofing, renovation and turnkey projects.",
  url: "https://www.jahangirconstruction.com",
  telephone: ["+918595698244", "+918368015943"],
  email: "Jahangir.construction85@gmail.com",
  sameAs: [
    "https://www.instagram.com/jahangir.construction",
    "https://www.google.com/search?q=jahangir+construction+new+delhi+address&ludocid=4740317264417251491"
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Part-ll, Gali No.3, Khadda Colony, Jaitpur",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110044",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "28.5020",
    longitude: "77.3190"
  },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "New Delhi" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Gurgaon" },
    { "@type": "City", name: "Faridabad" },
    { "@type": "City", name: "Ghaziabad" },
    { "@type": "AdministrativeArea", name: "Delhi NCR" },
  ],
  serviceType: [
    "Residential Construction",
    "Commercial Construction",
    "Civil Construction",
    "RCC Work",
    "Waterproofing",
    "Renovation",
    "Demolition",
    "Excavation",
    "Turnkey Construction",
  ],
  foundingDate: "2003",
  founder: { "@type": "Person", name: "Jahangir" },
  knowsAbout: [
    "Construction",
    "Civil Engineering",
    "RCC Construction",
    "Building Construction",
    "Renovation",
    "Waterproofing",
  ],
};

import MainLayout from "@/components/MainLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-[#0c0d0e]">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
