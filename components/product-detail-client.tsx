"use client";

import { useState } from "react";
import { Product } from "@/lib/products-config";
import { BusinessNav } from "@/components/business-nav";
import { MegaFooter } from "@/components/mega-footer";
import { CheckCircle, Phone, Star } from "lucide-react";
import Link from "next/link";

interface Props {
  product: Product;
  related: Product[];
}

export function ProductDetailClient({ product, related }: Props) {
  const [formName, setFormName] = useState("");
  const [formMobile, setFormMobile] = useState("");
  const [formProperty, setFormProperty] = useState("");
  const [selectedImage, setSelectedImage] = useState(product.image);

  const handleWhatsAppSubmit = () => {
    const msg = encodeURIComponent(
      `Hi, I'm interested in *${product.name}*!\n\nName: ${formName}\nMobile: ${formMobile}\nProperty: ${formProperty}\n\nPlease share more details and pricing.`
    );
    window.open(`https://wa.me/919978713458?text=${msg}`, "_blank");
  };

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
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

            {/* Left: Images */}
            <div>
              <div className="relative rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 mb-4">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                <img
                  src={selectedImage}
                  alt={product.name}
                  className="w-full h-80 md:h-96 object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://fplogoimages.withfloats.com/actual/641d2e343405ff0001e9b07c.png";
                  }}
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(img)}
                      className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === img
                          ? "border-pink-600"
                          : "border-gray-200 hover:border-pink-300"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Info */}
            <div>
              <span className="inline-block text-xs font-semibold text-pink-600 bg-pink-50 px-3 py-1 rounded-full mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>
              <p className="text-lg text-gray-500 mb-4 italic">{product.tagline}</p>

              <div className="flex items-center gap-2 mb-5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">4.9/5 · 200+ reviews</span>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

              <ul className="space-y-2 mb-8">
                {product.features.map((f, i) => (
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
                <button
                  onClick={() =>
                    document
                      .getElementById("enquiry-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-xl font-bold transition-all shadow-md"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-3 px-6 font-semibold text-gray-700 w-1/3">{spec.label}</td>
                    <td className="py-3 px-6 text-gray-600">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WhatsApp Enquiry Form */}
      <section id="enquiry-form" className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-pink-600 mb-1">
              Get a Quote for {product.name}
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

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://fplogoimages.withfloats.com/actual/641d2e343405ff0001e9b07c.png";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-pink-600 font-semibold mb-1">{p.category}</p>
                    <p className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                      {p.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{p.tagline}</p>
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
