"use client";

import { useState } from "react";
import Link from "next/link";
import { ProductCollection, StudioModule } from "@/lib/collections";
import { BusinessNav } from "@/components/business-nav";
import { MegaFooter } from "@/components/mega-footer";
import { CheckCircle, Phone, Layers, Tag } from "lucide-react";

interface Props {
  collection: ProductCollection;
  module: StudioModule;
  related: StudioModule[];
}

const CATEGORY_FEATURES: Record<string, string[]> = {
  "Fan & Dimmer Controls": [
    "Digital fan speed regulation",
    "Capacitive touch control",
    "Compatible with dimmable loads",
  ],
  "Switch & Socket Combos": [
    "Universal power socket built in",
    "Independent switch + socket control",
    "Surge protection",
  ],
  "Switch Panels": [
    "Capacitive feather-touch switches",
    "Dual-color LED status backlight",
    "Retrofit wiring, no rewiring needed",
  ],
  Accessories: [
    "Purpose-built accessory module",
    "Fits standard modular switchboards",
    "Easy retrofit installation",
  ],
  Sockets: [
    "Heavy-load rated universal socket",
    "Overload & short-circuit protection",
    "Fits standard modular switchboards",
  ],
};

export function ModuleDetailClient({ collection, module, related }: Props) {
  const [formName, setFormName] = useState("");
  const [formMobile, setFormMobile] = useState("");
  const [formProperty, setFormProperty] = useState("");

  const productLabel = `${collection.name} Series — ${module.title} (${module.material})`;

  const handleWhatsAppSubmit = () => {
    const msg = encodeURIComponent(
      `Hi, I'm interested in *${productLabel}*!\n\nName: ${formName}\nMobile: ${formMobile}\nProperty: ${formProperty}\n\nPlease share more details and pricing.`
    );
    window.open(`https://wa.me/919978713458?text=${msg}`, "_blank");
  };

  const quickMsg = encodeURIComponent(
    `Hi, I'm interested in *${productLabel}*. Please share pricing & availability.`
  );

  const features = CATEGORY_FEATURES[module.category] || CATEGORY_FEATURES["Switch Panels"];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <BusinessNav />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <Link href="/" className="hover:text-pink-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-pink-600 transition-colors">Products</Link>
            <span>/</span>
            <Link href={`/products/series/${collection.slug}`} className="hover:text-pink-600 transition-colors">
              {collection.name} Series
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{module.title}</span>
          </div>
        </div>
      </div>

      {/* Detail */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Image */}
            <div>
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-100 flex items-center justify-center p-10 h-80 md:h-96">
                <img
                  src={module.image}
                  alt={`${collection.name} ${module.title} (${module.material})`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <span className="inline-block text-xs font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full mb-3">
                {collection.name} Series
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{module.title}</h1>
              <p className="text-lg text-gray-500 mb-5 italic">
                VARNI DIGITAL {collection.name} Series in {module.material} finish
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                  <Layers className="w-3.5 h-3.5" /> {module.material}
                </span>
                {module.module && (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                    {module.module}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full">
                  <Tag className="w-3.5 h-3.5" /> {module.category}
                </span>
              </div>

              <ul className="space-y-2 mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919978713458"
                  className="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" /> Call for Price
                </a>
                <a
                  href={`https://wa.me/919978713458?text=${quickMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-md"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry-form" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-pink-600 mb-1">
              Get a Quote for {module.title}
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Fill in your details and we'll connect with you on WhatsApp instantly
            </p>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                value={formMobile}
                onChange={(e) => setFormMobile(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Property Type <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {["Apartment", "Bungalow", "Villa", "Office", "Commercial", "Hotel"].map(
                  (type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormProperty(type)}
                      className={`px-4 py-2 rounded-full text-sm border transition-all ${
                        formProperty === type
                          ? "bg-pink-600 text-white border-pink-600"
                          : "bg-white text-gray-600 border-gray-300 hover:border-pink-400"
                      }`}
                    >
                      {type}
                    </button>
                  )
                )}
              </div>
            </div>

            <button
              onClick={handleWhatsAppSubmit}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send Enquiry on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              More from the {collection.name} Series
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              {related.map((m) => (
                <Link
                  key={m.slug}
                  href={`/products/series/${collection.slug}/${m.slug}`}
                  className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 transition-all"
                >
                  <div className="relative aspect-square bg-gray-900 flex items-center justify-center p-4">
                    <img
                      src={m.image}
                      alt={m.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-semibold text-pink-600 mb-0.5">{m.material}</p>
                    <p className="text-sm font-semibold text-gray-800 leading-tight group-hover:text-pink-600 transition-colors">
                      {m.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <MegaFooter />
    </div>
  );
}
