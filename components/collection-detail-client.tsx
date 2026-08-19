"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ProductCollection } from "@/lib/collections";
import { BusinessNav } from "@/components/business-nav";
import { MegaFooter } from "@/components/mega-footer";
import { CatalogueDownloads } from "@/components/catalogue-downloads";
import { Download, Phone, ImageIcon, LayoutGrid } from "lucide-react";

const PAGE_SIZE = 16;

interface Props {
  collection: ProductCollection;
  others: ProductCollection[];
}

export function CollectionDetailClient({ collection, others }: Props) {
  const [tab, setTab] = useState<"studio" | "real">("studio");
  const [material, setMaterial] = useState<string>("All");
  const [category, setCategory] = useState<string>("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filteredStudio = useMemo(() => {
    return collection.studioModules.filter(
      (m) =>
        (material === "All" || m.material === material) &&
        (category === "All" || m.category === category)
    );
  }, [collection, material, category]);

  const shown = filteredStudio.slice(0, visible);

  const whatsappMsg = encodeURIComponent(
    `Hi, I'm interested in the VARNI DIGITAL ${collection.name} Series. Please share pricing & availability.`
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <BusinessNav />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-pink-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-pink-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{collection.name} Series</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center max-w-6xl mx-auto">
            <div>
              <span className="inline-block text-xs font-semibold text-pink-400 bg-white/10 px-3 py-1 rounded-full mb-4">
                VARNI DIGITAL &middot; {collection.name.toUpperCase()} SERIES
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-3">{collection.name} Series</h1>
              <p className="text-lg text-gray-300 mb-6 max-w-xl">{collection.tagline}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={collection.catalogueFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-xl font-bold transition-all shadow-md"
                >
                  <Download className="w-4 h-4" /> Open {collection.name} Catalogue (Google Drive)
                </a>
                <a
                  href={`https://wa.me/919978713458?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3 rounded-xl font-bold transition-all"
                >
                  <Phone className="w-4 h-4" /> Request Spec Sheet &amp; Quote
                </a>
              </div>
            </div>
            {collection.heroImage && (
              <div className="hidden md:flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 p-6 w-64 h-64">
                <img
                  src={collection.heroImage}
                  alt={`${collection.name} Series`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {collection.comingSoon ? (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Product Photography Coming Soon</h2>
            <p className="text-gray-600 mb-6">
              The {collection.name} Series is in production. Here are the configurations available to order today:
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {collection.manualVariants.map((v) => (
                <span
                  key={v}
                  className="text-sm font-medium bg-gray-100 text-gray-700 px-4 py-2 rounded-full border border-gray-200"
                >
                  {v}
                </span>
              ))}
            </div>
            <a
              href={`https://wa.me/919978713458?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-md"
            >
              Ask About {collection.name} Availability
            </a>
          </div>
        </section>
      ) : (
        <>
          {/* Materials */}
          {collection.materials.length > 0 && (
            <section className="bg-white border-b border-gray-100 py-6">
              <div className="container mx-auto px-4 max-w-6xl">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">
                  Available Finishes
                </h3>
                <div className="flex flex-wrap gap-2">
                  {collection.materials.map((m) => (
                    <span
                      key={m}
                      className="text-sm font-semibold bg-pink-50 text-pink-700 px-3 py-1.5 rounded-full border border-pink-100"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Tabs */}
          <section className="py-10 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
              <div className="flex items-center gap-2 mb-6">
                <button
                  onClick={() => setTab("studio")}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    tab === "studio"
                      ? "bg-pink-600 text-white"
                      : "bg-white text-gray-600 border border-gray-200 hover:border-pink-300"
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                  Studio Catalog ({collection.studioModules.length})
                </button>
                {collection.realPhotos.length > 0 && (
                  <button
                    onClick={() => setTab("real")}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                      tab === "real"
                        ? "bg-pink-600 text-white"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-pink-300"
                    }`}
                  >
                    <ImageIcon className="w-4 h-4" />
                    Real Photos ({collection.realPhotos.length})
                  </button>
                )}
              </div>

              {tab === "studio" ? (
                <>
                  {/* Filters */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["All", ...collection.materials].map((m) => (
                      <button
                        key={m}
                        onClick={() => {
                          setMaterial(m);
                          setVisible(PAGE_SIZE);
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                          material === m
                            ? "bg-gray-900 text-white border-gray-900"
                            : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                    <span className="w-px bg-gray-300 mx-1" />
                    {["All", ...collection.categories].map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          setCategory(c);
                          setVisible(PAGE_SIZE);
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                          category === c
                            ? "bg-pink-600 text-white border-pink-600"
                            : "bg-white text-gray-600 border-gray-200 hover:border-pink-300"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>

                  {shown.length === 0 ? (
                    <p className="text-gray-500 text-center py-12">No modules match this filter.</p>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                      {shown.map((mod, i) => (
                        <Link
                          href={`/products/series/${collection.slug}/${mod.slug}`}
                          key={mod.slug || `${mod.material}-${mod.title}-${i}`}
                          className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 transition-all"
                        >
                          <div className="relative aspect-square bg-gray-900 flex items-center justify-center p-4">
                            <img
                              src={mod.image}
                              alt={`${collection.name} ${mod.title} (${mod.material})`}
                              loading="lazy"
                              className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                            <span className="absolute bottom-2 left-2 right-2 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <span className="text-white text-xs font-semibold bg-pink-600 px-3 py-1 rounded-full">
                                View & Enquire →
                              </span>
                            </span>
                          </div>
                          <div className="p-3">
                            <p className="text-xs font-semibold text-pink-600 mb-0.5">{mod.material}</p>
                            <p className="text-sm font-semibold text-gray-800 leading-tight">{mod.title}</p>
                            <p className="text-[11px] text-gray-400 mt-1">{mod.category}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}

                  {visible < filteredStudio.length && (
                    <div className="text-center mt-8">
                      <button
                        onClick={() => setVisible((v) => v + PAGE_SIZE)}
                        className="bg-gray-900 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-bold transition-all"
                      >
                        Load More ({filteredStudio.length - visible} remaining)
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {collection.realPhotos.map((photo, i) => (
                    <div
                      key={i}
                      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 transition-all"
                    >
                      <div className="relative aspect-square bg-gray-100 overflow-hidden">
                        <img
                          src={photo.image}
                          alt={`${collection.name} installation - ${photo.label}`}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3">
                        <p className="text-xs text-gray-500 leading-tight">{photo.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* WhatsApp CTA */}
      <section className="py-14 bg-green-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Want a {collection.name} Series Quote?
          </h2>
          <p className="text-white/90 mb-6 max-w-xl mx-auto">
            Tell us your module counts and finish preference on WhatsApp &mdash; we'll send pricing and availability.
          </p>
          <a
            href={`https://wa.me/919978713458?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-600 font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-lg text-lg"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Other collections */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Explore Other Series</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {others.map((c) => (
              <Link
                key={c.slug}
                href={`/products/series/${c.slug}`}
                className="group bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:border-pink-300 hover:shadow-md transition-all"
              >
                <div className="aspect-square bg-gray-900 flex items-center justify-center p-4">
                  {c.heroImage ? (
                    <img
                      src={c.heroImage}
                      alt={c.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  ) : (
                    <span className="text-white/40 text-xs">Coming Soon</span>
                  )}
                </div>
                <div className="p-3">
                  <p className="font-semibold text-sm text-gray-800 group-hover:text-pink-600 transition-colors">
                    {c.name} Series
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue Downloads */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Download Official Catalogues</h2>
          <CatalogueDownloads variant="light" />
        </div>
      </section>

      <MegaFooter />
    </div>
  );
}
