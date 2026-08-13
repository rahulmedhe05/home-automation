import { getProductBySlug, getRelatedProducts, products } from "@/lib/products-config";
import { ProductDetailClient } from "@/components/product-detail-client";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static paths for all products
export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

// Dynamic SEO metadata per product
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | VARNI DIGITAL Smart Home`,
    description: product.description.slice(0, 160),
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug, 3);

  return <ProductDetailClient product={product!} related={related} />;
}
