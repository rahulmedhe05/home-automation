import type React from "react"
import type { Metadata, Viewport } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
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
    default: "VARNI DIGITAL | Smart Home Automation in Vadodara | Touch Switch Manufacturer",
    template: "%s | VARNI DIGITAL",
  },
  description: "VARNI DIGITAL — India's leading manufacturer of Touch Switches & Smart Home Automation in Vadodara since 2013. Control lights, AC, curtains & security from your phone. Alexa & Google Home compatible. Call +91 99787 13458.",
  keywords: [
    "VARNI DIGITAL",
    "Home Automation Vadodara",
    "Smart Home Vadodara",
    "Touch Switch Vadodara",
    "Touch Switch Manufacturer",
    "Smart Home Automation Vadodara",
    "Alexa Home Automation Vadodara",
    "Google Home Vadodara",
    "Smart Lighting Vadodara",
    "Home Automation Installation Vadodara",
    "Smart Switches Vadodara",
    "Wireless Home Automation Vadodara",
    "Smart Home Company Vadodara",
    "Hotel Automation Vadodara",
    "Capacitive Touch Switch",
  ],
  authors: [{ name: "VARNI DIGITAL", url: "https://smarthomevadodara.in" }],
  creator: "VARNI DIGITAL",
  publisher: "VARNI DIGITAL",
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
    title: "VARNI DIGITAL | Smart Home Automation in Vadodara",
    description: "India's leading Touch Switch & Smart Home Automation manufacturer since 2013. Control your home from your phone or voice.",
    url: "https://smarthomevadodara.in",
    siteName: "VARNI DIGITAL",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://smarthomevadodara.in/logo.png",
        width: 512,
        height: 512,
        alt: "VARNI DIGITAL Smart Home Automation & Touch Switches",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VARNI DIGITAL | Smart Home Automation in Vadodara",
    description: "India's leading Touch Switch & Smart Home Automation manufacturer since 2013.",
    images: ["https://smarthomevadodara.in/logo.png"],
    creator: "@varnidigital",
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
      { url: "/favicon.ico", sizes: "any" },
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
    google: "HTwrby_KBrWVwYAsXHV0xIG-YoBdvJVDl1dyG2mvWdM",
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
    name: "VARNI DIGITAL PRIVATE LIMITED",
    alternateName: "VARNI DIGITAL",
    image: "https://smarthomevadodara.in/logo.png",
    logo: "https://smarthomevadodara.in/logo.png",
    description: "India's leading manufacturer and supplier of Touch Switches, Smart Panels, and Home Automation solutions in Vadodara since 2013.",
    url: "https://smarthomevadodara.in",
    telephone: "+919978713458",
    email: "varnidigital@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "902/3A, 3rd Floor, Nakshatra Arcade, Opp. Vasu Healthcare, Near Purohit Chowkdi, Makarpura GIDC",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390010",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.2490,
      longitude: 73.1869,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "18:00",
      },
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
      name: "Smart Home & Touch Switch Products",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Smart Touch Switch Modules",
            description: "Capacitive touch switch panels, WiFi & Zigbee enabled",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Smart Home Automation",
            description: "Voice control with Alexa & Google Home, app automation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hotel Automation",
            description: "Hotel room panels, DND/MUR, master switches, and central management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Curtain & Climate Automation",
            description: "Automated curtains, motorized blinds, IR AC controllers",
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
    name: "VARNI DIGITAL",
    description: "Touch Switch & Smart Home Automation Manufacturer in Vadodara",
    publisher: {
      "@id": "https://smarthomevadodara.in/#organization",
    },
  }

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://smarthomevadodara.in/#organization",
    name: "VARNI DIGITAL PRIVATE LIMITED",
    url: "https://smarthomevadodara.in",
    logo: "https://smarthomevadodara.in/logo.png",
    foundingDate: "2013",
    founders: [
      {
        "@type": "Person",
        name: "VARNI DIGITAL Team",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Makarpura GIDC",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390010",
      addressCountry: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9978713458",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
    knowsAbout: [
      "Touch Switch Manufacturing",
      "Home Automation",
      "Hotel Automation",
      "Smart Home Solutions",
      "IoT Devices",
      "Capacitive Touch Panels",
    ],
  }

  return (
    <html lang="en" className={poppins.variable}>
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
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
