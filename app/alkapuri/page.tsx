import { getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { getAreaContent } from "@/lib/area-content";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { Metadata } from "next";

const business = getBusinessBySlug("home-automation")!;
const area = "alkapuri";
const areaName = getAreaDisplayName(area);
const areaContent = getAreaContent(area);

export const metadata: Metadata = {
  title: `${areaContent.heroTitle} | Smart Home Solutions`,
  description: `${areaContent.heroSubtitle.slice(0, 155)}...`,
  keywords: [
    `Home Automation ${areaName}`,
    `Smart Home ${areaName}`,
    `Luxury Home Automation ${areaName}`,
    `Premium Smart Home ${areaName}`,
  ],
  openGraph: {
    title: `Home Automation in ${areaName}, Vadodara | Premium Smart Homes`,
    description: areaContent.uniqueSellingPoint,
    url: `https://smarthomevadodara.in/${area}`,
    images: ["/images/home-automation/hero-1.jpg"],
  },
  alternates: {
    canonical: `https://smarthomevadodara.in/${area}`,
  },
};

export default function AlkapuriPage() {
  const content = getBusinessContent("home-automation", area);
  return <BusinessPageTemplate business={business} area={area} content={content} areaContent={areaContent} />;
}
