import { productCollections, ProductCollection } from "@/lib/data/product-catalog.generated";

export type { ProductCollection, StudioModule, RealPhoto } from "@/lib/data/product-catalog.generated";
export { productCollections };

export function getCollectionBySlug(slug: string): ProductCollection | undefined {
  return productCollections.find((c) => c.slug === slug);
}

export function getModule(collectionSlug: string, moduleSlug: string) {
  const collection = getCollectionBySlug(collectionSlug);
  const module = collection?.studioModules.find((m) => m.slug === moduleSlug);
  if (!collection || !module) return undefined;
  return { collection, module };
}

export function getRelatedModules(collectionSlug: string, moduleSlug: string, count = 4) {
  const collection = getCollectionBySlug(collectionSlug);
  if (!collection) return [];
  const current = collection.studioModules.find((m) => m.slug === moduleSlug);
  const pool = collection.studioModules.filter((m) => m.slug !== moduleSlug);
  if (!current) return pool.slice(0, count);
  const sameCategory = pool.filter((m) => m.category === current.category);
  const rest = pool.filter((m) => m.category !== current.category);
  return [...sameCategory, ...rest].slice(0, count);
}
