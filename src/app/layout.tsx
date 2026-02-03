import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "JimmyTech | Expert Informatique & Web à Auterive et Toulouse",
    template: "%s | JimmyTech"
  },
  description: "Technicien informatique expert à Auterive et Toulouse. Dépannage PC, maintenance, sécurité et création de sites web sur mesure. Intervention rapide sur site ou à distance.",
  keywords: ["Informatique", "Jimmy", "Technicien", "Auterive", "Toulouse", "Dépannage informatique", "Maintenance", "Création site web", "Réparation PC", "Assistance informatique", "Développeur Web", "Haute-Garonne"],
  authors: [{ name: "Jimmy Ramsamynaick" }],
  creator: "Jimmy Ramsamynaick",
  publisher: "JimmyTech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://jimmy-pro.duckdns.org",
    siteName: "JimmyTech",
    title: "JimmyTech | Services Informatiques & Web - Auterive / Toulouse",
    description: "Besoin d'un technicien informatique ou d'un site web ? JimmyTech vous accompagne à Auterive, Toulouse et à distance. Expertise et réactivité garanties.",
    images: [
      {
        url: "/og-image.jpg", // We might need to create this later or just leave it as placeholder
        width: 1200,
        height: 630,
        alt: "JimmyTech - Solutions Informatiques",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JimmyTech | Expert Informatique & Web",
    description: "Dépannage, maintenance et création web à Auterive et Toulouse.",
    creator: "@JimmyTech", // Placeholder if no twitter
  },
  verification: {
    google: "google-site-verification-code", // Placeholder
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "JimmyTech",
  "image": "https://jimmy-pro.duckdns.org/logo.png",
  "description": "Services de dépannage informatique, maintenance et développement web à Auterive et Toulouse.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Auterive",
    "addressRegion": "Occitanie",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 43.3524, 
    "longitude": 1.4755 
  },
  "url": "https://jimmy-pro.duckdns.org",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
