import { getBusinessBySlug } from "@/lib/business-config";
import { getKeywordBySlug } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { getKeywordContent } from "@/lib/keyword-content";
import { Metadata } from "next";

const business = getBusinessBySlug("home-automation")!;
const keyword = getKeywordBySlug("home-automation", "home-automation-installation-vadodara")!;
const uniqueContent = getKeywordContent("home-automation-installation-vadodara");

export const metadata: Metadata = {
  title: uniqueContent?.heroTitle || keyword.title,
  description: uniqueContent?.heroSubtitle || keyword.metaDescription,
  keywords: `Home Automation Installation, Professional Setup, Same Day Service Vadodara`,
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

export default function HomeAutomationInstallationVadodaraPage() {
  const content = getBusinessContent("home-automation", "vadodara");
  return <KeywordPageTemplate business={business} keyword={keyword} content={content} uniqueContent={uniqueContent} />;
}
