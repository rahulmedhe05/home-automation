import { getBusinessBySlug } from "@/lib/business-config";
import { getKeywordBySlug } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { getKeywordContent } from "@/lib/keyword-content";
import { Metadata } from "next";

const business = getBusinessBySlug("home-automation")!;
const keyword = getKeywordBySlug("home-automation", "gas-leak-detector-vadodara")!;
const uniqueContent = getKeywordContent("gas-leak-detector-vadodara");

export const metadata: Metadata = {
  title: uniqueContent?.heroTitle || keyword.title,
  description: uniqueContent?.heroSubtitle || keyword.metaDescription,
  keywords: `Gas Leak Detector, LPG Sensor, Kitchen Safety Vadodara`,
  openGraph: {
    title: keyword.title,
    description: keyword.metaDescription,
    url: `https://smarthomevadodara.in/${keyword.slug}`,
    images: ["/images/home-automation/hero-1.jpg"],
  },
  alternates: {
    canonical: `https://smarthomevadodara.in/${keyword.slug}`,
  },
};

export default function GasLeakDetectorVadodaraPage() {
  const content = getBusinessContent("home-automation", "vadodara");
  return <KeywordPageTemplate business={business} keyword={keyword} content={content} uniqueContent={uniqueContent} />;
}
