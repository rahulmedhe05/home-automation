"use client";

import { products } from "@/lib/products-config";
import Link from "next/link";

export function ProductsGrid() {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <>
      {categories.map((category) => (
        <section key={category} className="py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-pink-600 pl-4">
              {category}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {products
                .filter((p) => p.category === category)
                .map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative overflow-hidden aspect-square">
                      {product.badge && (
                        <span className="absolute top-2 left-2 z-10 bg-pink-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                          {product.badge}
                        </span>
                      )}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://fplogoimages.withfloats.com/actual/641d2e343405ff0001e9b07c.png";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-3 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-white text-xs font-semibold bg-pink-600 px-3 py-1 rounded-full">
                          View Details →
                        </span>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="font-semibold text-gray-800 text-sm group-hover:text-pink-600 transition-colors leading-tight">
                        {product.name}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                        {product.tagline}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
