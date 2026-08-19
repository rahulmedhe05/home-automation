import { productCollections, getModule, getRelatedModules } from "@/lib/collections";
import { ModuleDetailClient } from "@/components/module-detail-client";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string; moduleSlug: string }>;
}

export async function generateStaticParams() {
  return productCollections.flatMap((c) =>
    c.studioModules.map((m) => ({ slug: c.slug, moduleSlug: m.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, moduleSlug } = await params;
  const found = getModule(slug, moduleSlug);
  if (!found) return { title: "Product Not Found" };
  const { collection, module } = found;
  return {
    title: `${module.title} | VARNI DIGITAL ${collection.name} Series`,
    description: `VARNI DIGITAL ${collection.name} Series — ${module.title} in ${module.material} finish. Request pricing and availability on WhatsApp.`,
  };
}

export default async function ModulePage({ params }: Props) {
  const { slug, moduleSlug } = await params;
  const found = getModule(slug, moduleSlug);
  if (!found) notFound();

  const related = getRelatedModules(slug, moduleSlug, 4);

  return (
    <ModuleDetailClient collection={found!.collection} module={found!.module} related={related} />
  );
}
