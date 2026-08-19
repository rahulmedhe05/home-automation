import { productCollections, getCollectionBySlug } from "@/lib/collections";
import { CollectionDetailClient } from "@/components/collection-detail-client";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productCollections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: "Series Not Found" };
  return {
    title: `${collection.name} Series | VARNI DIGITAL Smart Touch Switches`,
    description: `${collection.tagline}. Browse all ${collection.studioModules.length}+ module configurations in the VARNI DIGITAL ${collection.name} Series.`,
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const others = productCollections.filter((c) => c.slug !== slug);

  return <CollectionDetailClient collection={collection!} others={others} />;
}
