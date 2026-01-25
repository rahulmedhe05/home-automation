import { getBusinessBySlug, getAreaDisplayName, vadodaraAreas } from "@/lib/business-config";
import { homeAutomationKeywords, getKeywordBySlug } from "@/lib/keywords-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { KeywordPageTemplate } from "@/components/keyword-page-template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const business = getBusinessBySlug("home-automation")!;

// Generate static params for all areas AND keywords
export async function generateStaticParams() {
  const params: { slug: string }[] = [];
  
  // Add area pages
  vadodaraAreas.forEach((area) => {
    params.push({ slug: area });
  });
  
  // Add keyword pages
  homeAutomationKeywords.forEach((keyword) => {
    params.push({ slug: keyword.slug });
  });
  
  return params;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  
  // Check if slug is an area or a keyword
  const isArea = vadodaraAreas.includes(slug);
  const keywordConfig = !isArea ? getKeywordBySlug("home-automation", slug) : null;
  
  if (isArea) {
    // Area page metadata
    const areaName = getAreaDisplayName(slug);
    return {
      title: `Home Automation in ${areaName} | Smart Home Solutions | Vadodara`,
      description: `Looking for home automation in ${areaName}, Vadodara? Get smart lighting, voice control, security systems & complete smart home solutions. Free consultation. Call +91 63535 83148`,
      keywords: [
        `Home Automation in ${areaName}`,
        `Smart Home ${areaName} Vadodara`,
        `Home Automation ${areaName}`,
        `Smart Lighting ${areaName}`,
        `Alexa Home ${areaName}`,
        `Google Home ${areaName}`,
        `Smart Home Company ${areaName}`,
        `Best Home Automation ${areaName}`,
        `Home Automation Price ${areaName}`,
      ],
      openGraph: {
        title: `Home Automation in ${areaName}, Vadodara | Smart Home Solutions`,
        description: `Professional home automation services in ${areaName}, Vadodara. Smart lighting, voice control, security & more. Call +91 63535 83148`,
        type: "website",
        locale: "en_IN",
        url: `https://smarthomevadodara.in/${slug}`,
        siteName: "Smart Home Vadodara",
        images: [
          {
            url: "https://smarthomevadodara.in/images/home-automation/hero-1.jpg",
            width: 1200,
            height: 630,
            alt: `Home Automation in ${areaName}, Vadodara`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `Home Automation in ${areaName}, Vadodara`,
        description: `Smart home solutions in ${areaName}. Control lights, AC & security from your phone.`,
        images: ["https://smarthomevadodara.in/images/home-automation/hero-1.jpg"],
      },
      alternates: {
        canonical: `https://smarthomevadodara.in/${slug}`,
      },
    };
  } else if (keywordConfig) {
    // Keyword page metadata
    return {
      title: keywordConfig.title,
      description: keywordConfig.metaDescription,
      keywords: `${keywordConfig.title}, Home Automation, Vadodara, Gujarat, Smart Home, Best Home Automation`,
      openGraph: {
        title: keywordConfig.title,
        description: keywordConfig.metaDescription,
        type: "website",
        locale: "en_IN",
        url: `https://smarthomevadodara.in/${slug}`,
        siteName: "Smart Home Vadodara",
        images: [
          {
            url: "https://smarthomevadodara.in/images/home-automation/hero-1.jpg",
            width: 1200,
            height: 630,
            alt: keywordConfig.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: keywordConfig.title,
        description: keywordConfig.metaDescription,
        images: ["https://smarthomevadodara.in/images/home-automation/hero-1.jpg"],
      },
      alternates: {
        canonical: `https://smarthomevadodara.in/${slug}`,
      },
    };
  }
  
  return { title: "Page Not Found" };
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Check if slug is an area or a keyword
  const isArea = vadodaraAreas.includes(slug);
  const keywordConfig = !isArea ? getKeywordBySlug("home-automation", slug) : null;
  
  if (isArea) {
    // Render area page
    const content = getBusinessContent("home-automation", slug);
    return <BusinessPageTemplate business={business} area={slug} content={content} />;
  } else if (keywordConfig) {
    // Render keyword page
    const content = getBusinessContent("home-automation", "vadodara");
    return <KeywordPageTemplate business={business} keyword={keywordConfig} content={content} />;
  }
  
  notFound();
}
