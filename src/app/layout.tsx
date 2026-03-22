import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://toponlimo.com'),
  title: "TopOn Limo | Premium Luxury Limousine Service",
  description: "TopOn Limo offers premium luxury limousine services for airport transfers, weddings, corporate travel, and special events. Professional chauffeurs, world-class fleet, 24/7 service. Book your ride today!",
  keywords: [
    "limo service", "limousine rental", "airport transfer", "wedding limo", 
    "corporate transportation", "luxury car service", "chauffeur service",
    "party bus rental", "executive car service", "black car service",
    "prom limo", "VIP transportation", "luxury travel"
  ],
  authors: [{ name: "TopOn Limo Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "TopOn Limo | Premium Luxury Limousine Service",
    description: "Experience world-class luxury transportation. Airport transfers, weddings, corporate travel & special events. 24/7 service, professional chauffeurs.",
    url: "https://toponlimo.com",
    siteName: "TopOn Limo",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-premium.png",
        width: 1440,
        height: 720,
        alt: "TopOn Limo Luxury Fleet",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "TopOn Limo | Premium Luxury Limousine Service",
    description: "Experience world-class luxury transportation. Professional chauffeurs, premium fleet, 24/7 service.",
    images: ["/images/hero-premium.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-verification-code",
  }
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TopOn Limo",
  "description": "Premium luxury limousine service for airport transfers, weddings, corporate travel, and special events.",
  "image": "/images/hero-premium.png",
  "url": "https://toponlimo.com",
  "telephone": "+1-888-555-LIMO",
  "email": "reservations@toponlimo.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Executive Drive",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10001",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "500"
  },
  "sameAs": [
    "https://facebook.com/toponlimo",
    "https://instagram.com/toponlimo",
    "https://twitter.com/toponlimo"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
