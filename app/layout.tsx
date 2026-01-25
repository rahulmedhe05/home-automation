import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

// Viewport configuration (separate from metadata in Next.js 14+)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Home Automation in Vadodara | Smart Home Solutions | smarthomevadodara.in",
    template: "%s | Smart Home Vadodara",
  },
  description: "Transform your home with smart automation in Vadodara. Control lights, AC, curtains & security from your phone. Alexa & Google Home compatible. Serving Alkapuri, Gotri, Manjalpur & all areas. ☎️ +91 63535 83148",
  keywords: [
    "Home Automation Vadodara",
    "Smart Home Vadodara",
    "Home Automation in Vadodara",
    "Smart Home Automation Vadodara",
    "Alexa Home Automation Vadodara",
    "Google Home Vadodara",
    "Smart Lighting Vadodara",
    "Home Automation Installation Vadodara",
    "Smart Switches Vadodara",
    "Wireless Home Automation Vadodara",
    "Smart Home Company Vadodara",
    "Home Automation Price Vadodara",
    "Home Automation Cost Vadodara",
    "Best Home Automation Vadodara",
    "Smart Home Solutions Vadodara",
  ],
  authors: [{ name: "Smart Home Vadodara", url: "https://smarthomevadodara.in" }],
  creator: "Smart Home Vadodara",
  publisher: "Smart Home Vadodara",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://smarthomevadodara.in"),
  alternates: {
    canonical: "https://smarthomevadodara.in",
  },
  openGraph: {
    title: "Home Automation in Vadodara | Smart Home Solutions",
    description: "Transform your home with smart automation in Vadodara. Control lights, AC, curtains & security from your phone. Alexa & Google Home compatible.",
    url: "https://smarthomevadodara.in",
    siteName: "Smart Home Vadodara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://smarthomevadodara.in/images/home-automation/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Home Automation in Vadodara - Smart Home Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Automation in Vadodara | Smart Home Solutions",
    description: "Transform your home with smart automation. Control lights, AC, curtains & security from your phone.",
    images: ["https://smarthomevadodara.in/images/home-automation/hero-1.jpg"],
    creator: "@smarthomevadodara",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  verification: {
    google: "googlec1b155cb6acd07f9",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD Structured Data for Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://smarthomevadodara.in/#organization",
    name: "Smart Home Vadodara",
    alternateName: "Home Automation Vadodara",
    image: "https://smarthomevadodara.in/images/home-automation/hero-1.jpg",
    logo: "https://smarthomevadodara.in/logo.png",
    description: "Leading home automation company in Vadodara offering smart lighting, voice control, security systems, and complete smart home solutions. Alexa & Google Home compatible.",
    url: "https://smarthomevadodara.in",
    telephone: "+916353583148",
    email: "info@smarthomevadodara.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Alkapuri",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390007",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.3072,
      longitude: 73.1812,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/smarthomevadodara",
      "https://www.instagram.com/smarthomevadodara",
      "https://www.youtube.com/@smarthomevadodara",
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, UPI, Bank Transfer",
    areaServed: {
      "@type": "City",
      name: "Vadodara",
      containedIn: "Gujarat",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Automation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Smart Lighting Automation",
            description: "Automated lighting control with dimming, colors, and scenes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Voice Control Systems",
            description: "Alexa and Google Home integration for voice-controlled homes",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Smart Security Systems",
            description: "Automated locks, cameras, and alarm systems",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Climate Control Automation",
            description: "Smart AC and temperature control systems",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1500",
      bestRating: "5",
      worstRating: "1",
    },
  }

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://smarthomevadodara.in/#website",
    url: "https://smarthomevadodara.in",
    name: "Smart Home Vadodara",
    description: "Home Automation Solutions in Vadodara",
    publisher: {
      "@id": "https://smarthomevadodara.in/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://smarthomevadodara.in/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://smarthomevadodara.in/#organization",
    name: "Smart Home Vadodara",
    url: "https://smarthomevadodara.in",
    logo: "https://smarthomevadodara.in/logo.png",
    foundingDate: "2010",
    founders: [
      {
        "@type": "Person",
        name: "Smart Home Vadodara Team",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      addressCountry: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-6353583148",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    knowsAbout: [
      "Home Automation",
      "Smart Home Solutions",
      "IoT Devices",
      "Voice Control Systems",
      "Smart Lighting",
      "Security Automation",
      "Climate Control",
    ],
  }

  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
