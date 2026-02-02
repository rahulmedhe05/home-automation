import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { getAreaContent } from "@/lib/area-content";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const business = getBusinessBySlug("home-automation")!;
const area = "chhani";
const areaName = getAreaDisplayName(area);
const areaContent = getAreaContent(area);

export const metadata: Metadata = {
  title: `${areaContent.heroTitle} | Smart Home Vadodara`,
  description: areaContent.heroSubtitle,
  keywords: [
    `Home Automation ${areaName}`,
    `Smart Home ${areaName}`,
    `Smart Lighting ${areaName}`,
    `Home Automation Company ${areaName}`,
  ],
  openGraph: {
    title: areaContent.heroTitle,
    description: areaContent.uniqueSellingPoint,
    url: `https://smarthomevadodara.in/${area}`,
    images: ["/images/home-automation/hero-1.jpg"],
  },
  alternates: {
    canonical: `https://smarthomevadodara.in/${area}`,
  },
};

export default function ChhaniPage() {
  const content = getBusinessContent("home-automation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} areaContent={areaContent} />;
}
