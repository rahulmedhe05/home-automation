import { businesses, getBusinessBySlug, getAreaDisplayName, vadodaraAreas } from "@/lib/business-config";
import { businessKeywords, getKeywordBySlug } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Generate static params for all business + area combinations AND keyword combinations
export async function generateStaticParams() {
  const params: { business: string; slug: string }[] = [];
  
  // Add area pages
  businesses.forEach((business) => {
    business.areas.forEach((area) => {
      params.push({
        business: business.slug,
        slug: area,
      });
    });
    
    // Add keyword pages
    const keywords = businessKeywords[business.slug] || [];
    keywords.forEach((keyword) => {
      params.push({
        business: business.slug,
        slug: keyword.slug,
      });
    });
  });
  
  return params;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ business: string; slug: string }>;
}): Promise<Metadata> {
  const { business: businessSlug, slug } = await params;
  const business = getBusinessBySlug(businessSlug);
  
  if (!business) {
    return { title: "Page Not Found" };
  }
  
  // Check if slug is an area or a keyword
  const isArea = vadodaraAreas.includes(slug);
  const keywordConfig = !isArea ? getKeywordBySlug(businessSlug, slug) : null;
  
  if (isArea) {
    // Area page metadata
    const areaName = getAreaDisplayName(slug);
    return {
      title: `Best ${business.name} in ${areaName}, Vadodara | Top Rated Services`,
      description: `Looking for the best ${business.name.toLowerCase()} in ${areaName}, Vadodara? Get professional ${business.name.toLowerCase()} services with experienced experts. Call now for free consultation!`,
      keywords: [
        `${business.name} in ${areaName}`,
        `${business.name} ${areaName} Vadodara`,
        `Best ${business.name} in ${areaName}`,
        `Top ${business.name} in Vadodara`,
        `${business.name} services ${areaName}`,
        `${business.name} near me`,
        ...business.services.map((s) => `${s} in ${areaName}`),
      ],
      openGraph: {
        title: `Best ${business.name} in ${areaName}, Vadodara`,
        description: `Professional ${business.name.toLowerCase()} services in ${areaName}, Vadodara. Expert team, affordable prices, free consultation.`,
        type: "website",
        locale: "en_IN",
      },
    };
  } else if (keywordConfig) {
    // Keyword page metadata
    return {
      title: `${keywordConfig.title} | ${business.name}`,
      description: keywordConfig.metaDescription,
      keywords: `${keywordConfig.title}, ${business.name}, Vadodara, Gujarat`,
      openGraph: {
        title: keywordConfig.title,
        description: keywordConfig.metaDescription,
        type: "website",
        locale: "en_IN",
      },
    };
  }
  
  return { title: "Page Not Found" };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ business: string; slug: string }>;
}) {
  const { business: businessSlug, slug } = await params;
  const business = getBusinessBySlug(businessSlug);
  
  if (!business) {
    notFound();
  }
  
  // Check if slug is an area or a keyword
  const isArea = vadodaraAreas.includes(slug);
  const keywordConfig = !isArea ? getKeywordBySlug(businessSlug, slug) : null;
  
  if (isArea) {
    // Render area page
    const content = getBusinessContent(businessSlug, slug);
    return <BusinessPageTemplate business={business} area={slug} content={content} />;
  } else if (keywordConfig) {
    // Render keyword page
    const content = getBusinessContent(businessSlug, "vadodara");
    return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
  }
  
  notFound();
}
