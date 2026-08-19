import { Metadata } from "next";
import Link from "next/link";
import { BusinessNav } from "@/components/business-nav";
import { MegaFooter } from "@/components/mega-footer";
import { ProductsGrid } from "@/components/products-grid";
import { CatalogueDownloads } from "@/components/catalogue-downloads";
import { productCollections } from "@/lib/collections";

export const metadata: Metadata = {
  title: "Smart Home Products | VARNI DIGITAL | Touch Switches & Automation",
  description:
    "Browse VARNI DIGITAL's full range of smart touch switches, automation panels, IR blasters, curtain controllers and more. Get a free quote on WhatsApp.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <BusinessNav />

      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            India's widest range of smart touch switches, automation panels &
            home automation solutions by VARNI DIGITAL
          </p>
        </div>
      </section>

      {/* Shop by Series */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 border-l-4 border-pink-600 pl-4">
            Shop by Series
          </h2>
          <p className="text-gray-500 mb-8 pl-4">
            Six signature collections &mdash; every module configuration we manufacture, in one place.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {productCollections.map((c) => (
              <Link
                key={c.slug}
                href={`/products/series/${c.slug}`}
                className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:border-pink-300 hover:shadow-md transition-all"
              >
                <div className="aspect-square bg-gray-900 flex items-center justify-center p-4">
                  {c.heroImage ? (
                    <img
                      src={c.heroImage}
                      alt={`${c.name} Series`}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-white/40 text-xs text-center px-2">Photography Coming Soon</span>
                  )}
                </div>
                <div className="p-3">
                  <p className="font-semibold text-sm text-gray-800 group-hover:text-pink-600 transition-colors">
                    {c.name} Series
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {c.studioModules.length > 0
                      ? `${c.studioModules.length} configurations`
                      : "Coming soon"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue Downloads */}
      <section className="py-14 bg-gray-100 border-y border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 border-l-4 border-pink-600 pl-4">
            Download Official Catalogues
          </h2>
          <p className="text-gray-500 mb-8 pl-4">
            Full product brochures, technical specification sheets, and wiring diagrams.
          </p>
          <CatalogueDownloads variant="light" />
        </div>
      </section>

      {/* Legacy Featured Products Grid (client component handles interactivity) */}
      <ProductsGrid />

      {/* WhatsApp CTA */}
      <section className="py-14 bg-green-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">
            Need Help Choosing the Right Product?
          </h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Chat with our experts on WhatsApp — we'll help you pick the perfect
            smart home solution for your budget.
          </p>
          <a
            href="https://wa.me/919978713458?text=Hi, I need help choosing a smart home product!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg text-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
