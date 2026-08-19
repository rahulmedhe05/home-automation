import { productCollections, ProductCollection } from "@/lib/data/product-catalog.generated";

export type { ProductCollection, StudioModule, RealPhoto } from "@/lib/data/product-catalog.generated";
export { productCollections };

export function getCollectionBySlug(slug: string): ProductCollection | undefined {
  return productCollections.find((c) => c.slug === slug);
}
