import { getBusinessBySlug, getAreaDisplayName, allAreas } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

// Home Automation business config
const business = getBusinessBySlug("home-automation")!;
const content = getBusinessContent("home-automation", "vadodara");

// SEO Metadata for Home Page
export const metadata: Metadata = {
  title: "VARNI DIGITAL | Smart Home Automation in Vadodara | Touch Switch Manufacturer",
  description: "VARNI DIGITAL — India's leading manufacturer of Touch Switches & Smart Home Automation in Vadodara since 2013. Control lights, AC, curtains & security from your phone. Alexa & Google Home compatible. Serving all areas of Vadodara. Call +91 99787 13458.",
  keywords: [
    "VARNI DIGITAL",
    "Varni Digital Smart Home",
    "Home Automation Vadodara",
    "VARNI DIGITAL",
    "Touch Switch Vadodara",
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
    "AC Automation Vadodara",
    "Curtain Automation Vadodara",
    "Smart Security Vadodara",
    ...allAreas.map((a) => `Home Automation in ${getAreaDisplayName(a)}`),
  ],
  openGraph: {
    title: "VARNI DIGITAL | Smart Home Automation in Vadodara",
    description: "India's leading Touch Switch & Smart Home Automation manufacturer. Control your home from your phone or voice. Serving Vadodara since 2013.",
    type: "website",
    locale: "en_IN",
    url: "https://smarthomevadodara.in",
    siteName: "VARNI DIGITAL",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "VARNI DIGITAL Smart Home Automation in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VARNI DIGITAL | Smart Home Automation in Vadodara",
    description: "India's leading Touch Switch & Smart Home Automation manufacturer. Control your home from your phone or voice.",
    images: ["https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200&auto=format&fit=crop"],
    creator: "@smarthomevadodara",
  },
  alternates: {
    canonical: "https://smarthomevadodara.in",
  },
  metadataBase: new URL("https://smarthomevadodara.in"),
};

export default function HomePage() {
  return <BusinessPageTemplate business={business} area="vadodara" content={content} />;
}
