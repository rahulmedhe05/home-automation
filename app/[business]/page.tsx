import { businesses, getBusinessBySlug, getAreaDisplayName } from "@/lib/business-config";
import { getBusinessContent } from "@/lib/content-generator";
import { BusinessPageTemplate } from "@/components/business-page-template";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Generate static params for all businesses
export async function generateStaticParams() {
  return businesses.map((business) => ({
    business: business.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ business: string }>;
}): Promise<Metadata> {
  const { business: businessSlug } = await params;
  const business = getBusinessBySlug(businessSlug);
  
  if (!business) {
    return {
      title: "Page Not Found",
    };
  }
  
  const content = getBusinessContent(businessSlug, "vadodara");
  
  return {
    title: `Best ${business.name} in Vadodara | Top Rated ${business.name} Services`,
    description: `Looking for the best ${business.name.toLowerCase()} in Vadodara? Get professional ${business.name.toLowerCase()} services with experienced experts. Serving Alkapuri, Manjalpur, Gotri & all areas. Call now!`,
    keywords: [
      `${business.name} in Vadodara`,
      `Best ${business.name} in Vadodara`,
      `Top ${business.name} in Vadodara`,
      `${business.name} services Vadodara`,
      `${business.name} near me`,
      ...business.services.map((s) => `${s} in Vadodara`),
      ...business.areas.map((a) => `${business.name} in ${getAreaDisplayName(a)}`),
    ],
    openGraph: {
      title: content.heroTitle,
      description: content.heroSubtitle,
      type: "website",
      locale: "en_IN",
    },
  };
}

export default async function BusinessMainPage({
  params,
}: {
  params: Promise<{ business: string }>;
}) {
  const { business: businessSlug } = await params;
  const business = getBusinessBySlug(businessSlug);
  
  if (!business) {
    notFound();
  }
  
  // Main business page defaults to Vadodara
  const content = getBusinessContent(businessSlug, "vadodara");
  
  return <BusinessPageTemplate business={business} area="vadodara" content={content} />;
}
