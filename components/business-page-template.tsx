"use client";

import { useState } from "react";
import { BusinessConfig, getAreaDisplayName } from "@/lib/business-config";
import { businessKeywords } from "@/lib/keywords-config";
import { PageContent } from "@/lib/content-generator";
import { AreaContent } from "@/lib/area-content";
import { products } from "@/lib/products-config";
import { BusinessNav } from "./business-nav";
import { MegaFooter } from "./mega-footer";
import { BusinessWhatsAppFloat } from "./business-whatsapp-float";
import { Phone, Mail, MapPin, CheckCircle, Star, Sparkles, Lightbulb, Shield, Thermometer, Mic, Smartphone, Home } from "lucide-react";
import Link from "next/link";

interface BusinessPageTemplateProps {
  business: BusinessConfig;
  area: string;
  content: PageContent;
  areaContent?: AreaContent;
}

// Local images for home automation
const galleryImages = [
  "/images/home-automation/smart-home-interior.jpg",
  "/images/home-automation/smart-lighting.jpg",
  "/images/home-automation/voice-assistant.jpg",
  "/images/home-automation/home-theatre.jpg",
  "/images/home-automation/smart-lock.jpg",
  "/images/home-automation/smart-thermostat.jpg",
  "/images/home-automation/modern-kitchen.jpg",
  "/images/home-automation/living-room.jpg",
];

const serviceIcons: Record<string, React.ElementType> = {
  "Smart Lighting Control": Lightbulb,
  "Home Theatre & Audio": Sparkles,
  "Automated Curtains & Blinds": Home,
  "Voice Control Systems": Mic,
  "Smart Security Solutions": Shield,
  "Climate Control & AC Automation": Thermometer,
  "Smart Door Locks": Shield,
  "Energy Management": Sparkles,
  "App-Based Control": Smartphone,
  "Whole Home Automation": Home,
};

export function BusinessPageTemplate({ business, area, content, areaContent }: BusinessPageTemplateProps) {
  const areaName = getAreaDisplayName(area);
  
  // Use unique area content if available, otherwise fall back to generated content
  const heroTitle = areaContent?.heroTitle || content.heroTitle;
  const heroSubtitle = areaContent?.heroSubtitle || content.heroSubtitle;
  const stats = areaContent?.stats || content.stats;

  // WhatsApp enquiry form state
  const [formName, setFormName] = useState("");
  const [formMobile, setFormMobile] = useState("");
  const [formProperty, setFormProperty] = useState("");
  const [formAutomation, setFormAutomation] = useState<string[]>([]);

  const toggleAutomation = (item: string) => {
    setFormAutomation(prev =>
      prev.includes(item) ? prev.filter(a => a !== item) : [...prev, item]
    );
  };

  const handleWhatsAppSubmit = () => {
    const msg = `Hi, I'm interested in Smart Home Automation!%0A%0AName: ${formName}%0AMobile: ${formMobile}%0AProperty: ${formProperty}%0ANeeds: ${formAutomation.join(", ")}%0AArea: ${areaName}`;
    window.open(`https://wa.me/919978713458?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-950">
      <BusinessNav currentBusiness={business} currentArea={area} />
      
      {/* Hero Section with Real Image + WhatsApp Form */}
      <section className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop"
            alt={`${business.name} Smart Home Automation in ${areaName}`}
            className="h-full w-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).src = "/images/home-automation/smart-home-interior.jpg"; }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.92),rgba(0,0,0,.72)_48%,rgba(0,0,0,.28))]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_.92fr] lg:gap-14">

            {/* Left: Hero Content */}
            <div className="max-w-3xl text-white">
              <span className="mb-6 inline-flex rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                🏆 #1 Rated in {areaName}
              </span>
              <h1 className="mb-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-7xl">
                {heroTitle}
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
                {heroSubtitle}
              </p>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+919978713458"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-bold text-gray-950 shadow-[0_24px_60px_rgba(0,0,0,.28)] transition-colors hover:bg-pink-600 hover:text-white"
                >
                  <Phone className="w-5 h-5" />
                  Call: +91 99787 13458
                </a>
              </div>
              <div className="flex flex-wrap gap-3 text-white/90">
                <span className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm backdrop-blur">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Free Demo
                </span>
                <span className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm backdrop-blur">
                  <CheckCircle className="w-4 h-4 text-green-400" /> Same Day Installation
                </span>
                <span className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm backdrop-blur">
                  <CheckCircle className="w-4 h-4 text-green-400" /> 1 Year Warranty
                </span>
              </div>
            </div>

            {/* Right: WhatsApp Enquiry Form */}
            <div className="mx-auto w-full max-w-md rounded-lg border border-white/40 bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,.32)] md:p-8 lg:mx-0">
              <h2 className="mb-1 text-2xl font-semibold text-gray-950">Smart Home Enquiry</h2>
              <p className="mb-5 text-sm text-gray-500">Fill in your details and we'll connect with you on WhatsApp instantly</p>

              {/* 1. Full Name */}
              <div className="mb-4">
                <label className="mb-1 block text-sm font-semibold text-gray-700">1. Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={formName}
                  onChange={e => setFormName(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* 2. Mobile Number */}
              <div className="mb-4">
                <label className="mb-1 block text-sm font-semibold text-gray-700">2. Mobile Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  value={formMobile}
                  onChange={e => setFormMobile(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              {/* 3. Property Type */}
              <div className="mb-4">
                <label className="mb-2 block text-sm font-semibold text-gray-700">3. Property Type <span className="text-red-500">*</span></label>
                <div className="flex flex-wrap gap-2">
                  {["Apartment", "Bungalow", "Villa", "Office", "Commercial"].map(type => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormProperty(type)}
                      className={`rounded-md border px-3 py-2 text-sm transition-all ${
                        formProperty === type
                          ? "border-gray-950 bg-gray-950 text-white"
                          : "border-gray-300 bg-white text-gray-600 hover:border-pink-500 hover:text-gray-950"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Automation Needed */}
              <div className="mb-6">
                <label className="mb-2 block text-sm font-semibold text-gray-700">4. Automation Needed <span className="text-red-500">*</span></label>
                <div className="flex flex-wrap gap-2">
                  {["Lighting", "AC Control", "Security", "Full Home", "Curtain Automation", "Voice Control"].map(item => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleAutomation(item)}
                      className={`rounded-md border px-3 py-2 text-sm transition-all ${
                        formAutomation.includes(item)
                          ? "border-gray-950 bg-gray-950 text-white"
                          : "border-gray-300 bg-white text-gray-600 hover:border-pink-500 hover:text-gray-950"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleWhatsAppSubmit}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3.5 text-base font-bold text-white shadow-lg transition-all hover:bg-green-600"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send on WhatsApp
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 border-y border-black/10 bg-gray-950 py-8 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-3xl font-semibold text-pink-400 md:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <h2 className="mb-6 text-3xl font-semibold leading-tight md:text-5xl">
                {areaContent?.uniqueSellingPoint ? `Why We're ${areaName}'s Choice` : `About Our ${business.name} Services in ${areaName}`}
              </h2>
              <div className="max-w-none text-lg leading-8 text-gray-700">
                {areaContent?.uniqueSellingPoint && (
                  <p className="mb-4 text-lg font-medium text-pink-600">{areaContent.uniqueSellingPoint}</p>
                )}
                {areaContent?.localInsight && (
                  <p className="mb-4">{areaContent.localInsight}</p>
                )}
                {areaContent?.neighborhoodDescription ? (
                  <p className="mb-4">{areaContent.neighborhoodDescription}</p>
                ) : (
                  content.aboutContent.split('\n\n').slice(0, 2).map((para, i) => (
                    <p key={i} className="mb-4">{para}</p>
                  ))
                )}
              </div>
              <Link
                href="#services"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-pink-600 hover:text-gray-950"
              >
                Explore Our Services →
              </Link>
            </div>
            <div>
              <img
                src="/images/home-automation/smart-home-interior.jpg"
                alt={`${business.name} in ${areaName}`}
                className="h-80 w-full rounded-lg object-cover shadow-[0_24px_70px_rgba(0,0,0,.16)] md:h-[450px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonial Section - Only if areaContent is available */}
      {areaContent?.localTestimonial && (
        <section className="bg-[#f7f7f5] py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-lg border border-black/10 bg-white p-8 shadow-sm md:p-12">
              <div className="flex items-start gap-4">
                <div className="text-6xl text-pink-200">"</div>
                <div>
                  <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
                    {areaContent.localTestimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-950 text-lg font-bold text-white">
                      {areaContent.localTestimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{areaContent.localTestimonial.name}</p>
                      <p className="text-gray-600">{areaContent.localTestimonial.property}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Popular Projects in Area - Only if areaContent is available */}
      {areaContent?.popularProjects && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-4 text-center text-3xl font-semibold md:text-5xl">
              Recent Projects in {areaName}
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Real installations we've completed for {areaName} residents
            </p>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
              {areaContent.popularProjects.map((project, i) => (
                <div key={i} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-50">
                      <CheckCircle className="w-5 h-5 text-pink-600" />
                    </div>
                    <span className="text-sm font-medium text-pink-600">Completed Project</span>
                  </div>
                  <p className="text-gray-700">{project}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section with Icons */}
      <section id="services" className="bg-[#f7f7f5] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-4 text-center text-3xl font-semibold md:text-5xl">
            Our {business.name} Services in {areaName}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Comprehensive smart home solutions tailored to your needs
          </p>
          
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {content.detailedServices.map((service, index) => {
              const IconComponent = serviceIcons[service.title] || Sparkles;
              return (
                <div
                  key={index}
                  className="group rounded-lg border border-black/10 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-950 text-white transition-colors group-hover:bg-pink-600">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-950">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-4 text-center text-3xl font-semibold md:text-5xl">
            Our Smart Home Projects in {areaName}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Take a look at some of our completed home automation projects
          </p>
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg bg-gray-100 shadow-sm">
                <img
                  src={img}
                  alt={`Smart Home Project ${i + 1} in ${areaName}`}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">Smart Home Project</p>
                    <p className="text-sm opacity-80">{areaName}, Vadodara</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section — VARNI DIGITAL */}
      <section id="products" className="bg-[#f7f7f5] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-3 text-center text-3xl font-semibold md:text-5xl">
            Our Products — Touch Switches &amp; Home Automation
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-500">
            India's widest range of smart touch switches, automation panels and home automation solutions by VARNI DIGITAL
          </p>
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {products.slice(0, 10).map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group overflow-hidden rounded-lg border border-black/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative overflow-hidden aspect-square">
                  {product.badge && (
                    <span className="absolute left-2 top-2 z-10 rounded-md bg-pink-600 px-2 py-0.5 text-xs font-bold text-white">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://fplogoimages.withfloats.com/actual/641d2e343405ff0001e9b07c.png'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details →
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors leading-tight">{product.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{product.category}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-950 px-8 py-3 font-bold text-white shadow-lg transition-colors hover:bg-pink-600"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="bg-gray-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
            <div>
              <h2 className="mb-8 text-3xl font-semibold leading-tight md:text-5xl">
                Why Choose Our {business.name} in {areaName}?
              </h2>
              <div className="space-y-4">
                {content.whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm">
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5 text-green-400" />
                    <p>{reason}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/images/home-automation/smart-thermostat.jpg"
                alt={`Why choose ${business.name} in ${areaName}`}
                className="h-[400px] w-full rounded-lg object-cover shadow-[0_24px_70px_rgba(0,0,0,.32)]"
              />
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials */}
      <section className="bg-[#f7f7f5] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-4 text-center text-3xl font-semibold md:text-5xl">
            What Our Clients in {areaName} Say
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Real feedback from satisfied customers
          </p>
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {content.testimonials.map((testimonial, i) => (
              <div key={i} className="rounded-lg border border-black/10 bg-white p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-50 font-bold text-pink-600">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-12 text-center text-3xl font-semibold md:text-5xl">
            How We Work - Our Process
          </h2>
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {content.processSteps.map((step, index) => (
                <div key={index} className="rounded-lg border border-black/10 bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-950 text-2xl font-bold text-white">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Area Specific Content */}
      <section className="bg-[#f7f7f5] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-semibold md:text-5xl">
              {business.name} in {areaName} - Local Expertise
            </h2>
            <div className="max-w-none text-lg leading-8 text-gray-700">
              {content.areaSpecificContent.split('\n\n').map((para, i) => (
                <p key={i} className="mb-4">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-semibold md:text-5xl">
              Frequently Asked Questions - {business.name} in {areaName}
            </h2>
            <div className="space-y-4">
              {content.faqItems.map((faq, index) => (
                <details key={index} className="group rounded-lg border border-black/10 bg-white p-6 shadow-sm">
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                    {faq.question}
                    <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Services / Keywords */}
      <section className="bg-[#f7f7f5] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-4 text-center text-3xl font-semibold md:text-5xl">
            Related Smart Home Services
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Explore our comprehensive range of services
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {(businessKeywords[business.slug] || []).slice(0, 15).map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}`}
                className="rounded-lg border border-black/10 bg-white px-4 py-2 text-gray-700 transition-colors hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
              >
                {keyword.h1.replace(" in Vadodara", "").replace(" Vadodara", "")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-8 text-center text-3xl font-semibold md:text-5xl">
            <MapPin className="mr-2 inline-block h-8 w-8 text-pink-600" />
            We Also Serve Other Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {business.areas
              .filter((a) => a !== area)
              .map((otherArea) => (
                <Link
                  key={otherArea}
                  href={`/${otherArea}`}
                  className="rounded-lg border border-black/10 bg-white px-4 py-2 text-gray-700 transition-colors hover:border-pink-200 hover:bg-pink-50 hover:text-pink-600"
                >
                  {business.name} in {getAreaDisplayName(otherArea)}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home-automation/hero-2.jpg"
            alt="Smart Home CTA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-950/86"></div>
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center text-white sm:px-6">
          <h2 className="mb-4 text-3xl font-semibold md:text-5xl">Ready for a Smarter Home?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free consultation for your home automation project in {areaName}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919978713458"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-black transition-all hover:bg-pink-600 hover:text-white"
            >
              <Phone className="w-5 h-5" />
              Call: +91 99787 13458
            </a>
            <a
              href={`https://wa.me/919978713458?text=Hi, I need home automation services in ${areaName}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-4 font-bold text-white transition-all hover:bg-green-600"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-semibold md:text-5xl">
              Contact Us - {business.name} in {areaName}
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to get started? Contact us today for a free consultation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a href="tel:+919978713458" className="flex flex-col items-center rounded-lg border border-white/10 bg-white/[0.06] p-6 transition-colors hover:bg-white/10">
                <Phone className="w-8 h-8 mb-3" />
                <p className="font-bold">Call Us</p>
                <p className="opacity-90">+91 99787 13458</p>
              </a>
              <a href="mailto:varnidigital@gmail.com" className="flex flex-col items-center rounded-lg border border-white/10 bg-white/[0.06] p-6 transition-colors hover:bg-white/10">
                <Mail className="w-8 h-8 mb-3" />
                <p className="font-bold">Email Us</p>
                <p className="opacity-90">varnidigital@gmail.com</p>
              </a>
              <div className="flex flex-col items-center rounded-lg border border-white/10 bg-white/[0.06] p-6">
                <MapPin className="w-8 h-8 mb-3" />
                <p className="font-bold">Service Area</p>
                <p className="opacity-90">{areaName}, Vadodara</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MegaFooter />
      <BusinessWhatsAppFloat business={business} area={area} />
    </div>
  );
}
