import { getBusinessBySlug, getAreaDisplayName, allAreas } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

// Home Automation business config
const business = getBusinessBySlug("home-automation")!;
const content = getBusinessContent("home-automation", "vadodara");

// SEO Metadata for Home Page
export const metadata: Metadata = {
  title: "Home Automation in Vadodara | Smart Home Solutions | #1 Provider | 2026",
  description: "Transform your home with smart automation in Vadodara. Control lights, AC, curtains & security from your phone. Alexa & Google Home compatible. Serving Alkapuri, Gotri, Manjalpur & all areas. ☎️ Call for free demo!",
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
    "AC Automation Vadodara",
    "Curtain Automation Vadodara",
    "Smart Security Vadodara",
    ...allAreas.map((a) => `Home Automation in ${getAreaDisplayName(a)}`),
  ],
  openGraph: {
    title: "Home Automation in Vadodara | Smart Home Solutions",
    description: "Transform your home into a smart, connected living space. Control everything from your phone or voice.",
    type: "website",
    locale: "en_IN",
    url: "https://smarthomevadodara.in",
    siteName: "Smart Home Vadodara",
    images: [
      {
        url: "https://smarthomevadodara.in/images/home-automation/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "Home Automation in Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Automation in Vadodara | Smart Home Solutions",
    description: "Transform your home into a smart, connected living space.",
    images: ["https://smarthomevadodara.in/images/home-automation/hero-1.jpg"],
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
