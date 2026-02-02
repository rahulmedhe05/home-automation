"use client";

import { BusinessConfig, getAreaDisplayName } from "@/lib/business-config";
import { businessKeywords } from "@/lib/keywords-config";
import { homeAutomationImages, PageContent } from "@/lib/content-generator";
import { AreaContent } from "@/lib/area-content";
import { BusinessNav } from "./business-nav";
import { MegaFooter } from "./mega-footer";
import { BusinessWhatsAppFloat } from "./business-whatsapp-float";
import { Phone, Mail, MapPin, CheckCircle, Star, Users, Award, Clock, Tag, Sparkles, Lightbulb, Shield, Thermometer, Mic, Smartphone, Home } from "lucide-react";
import { cn } from "@/lib/utils";
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
  const gradientClass = business.colors.gradient;
  
  // Use unique area content if available, otherwise fall back to generated content
  const heroTitle = areaContent?.heroTitle || content.heroTitle;
  const heroSubtitle = areaContent?.heroSubtitle || content.heroSubtitle;
  const stats = areaContent?.stats || content.stats;

  return (
    <div className="min-h-screen flex flex-col">
      <BusinessNav currentBusiness={business} currentArea={area} />
      
      {/* Hero Section with Real Image */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home-automation/hero-1.jpg"
            alt={`${business.name} in ${areaName}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-purple-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl text-white">
            <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🏆 #1 Rated in {areaName}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:+916353583148"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call: +91 63535 83148
              </a>
              <a
                href={`https://wa.me/916353583148?text=Hi, I'm interested in home automation in ${areaName}`}
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                Get Free Quote
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 text-white/90">
              <span className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" /> Free Demo
              </span>
              <span className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" /> Same Day Installation
              </span>
              <span className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-400" /> 1 Year Warranty
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 bg-white shadow-lg relative -mt-12 mx-4 md:mx-8 rounded-2xl z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-3xl md:text-4xl font-bold text-purple-600">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {areaContent?.uniqueSellingPoint ? `Why We're ${areaName}'s Choice` : `About Our ${business.name} Services in ${areaName}`}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {areaContent?.uniqueSellingPoint && (
                  <p className="mb-4 text-lg font-medium text-purple-700">{areaContent.uniqueSellingPoint}</p>
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
                className="inline-flex items-center gap-2 mt-6 text-purple-600 font-semibold hover:text-purple-700"
              >
                Explore Our Services →
              </Link>
            </div>
            <div>
              <img
                src="/images/home-automation/smart-home-interior.jpg"
                alt={`${business.name} in ${areaName}`}
                className="w-full h-80 md:h-[450px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Testimonial Section - Only if areaContent is available */}
      {areaContent?.localTestimonial && (
        <section className="py-12 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="flex items-start gap-4">
                <div className="text-6xl text-purple-300">"</div>
                <div>
                  <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-6">
                    {areaContent.localTestimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
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
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Recent Projects in {areaName}
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Real installations we've completed for {areaName} residents
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {areaContent.popularProjects.map((project, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-600">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-sm text-purple-600 font-medium">Completed Project</span>
                  </div>
                  <p className="text-gray-700">{project}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section with Icons */}
      <section id="services" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our {business.name} Services in {areaName}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Comprehensive smart home solutions tailored to your needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {content.detailedServices.map((service, index) => {
              const IconComponent = serviceIcons[service.title] || Sparkles;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-purple-600"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    <h3 className="text-xl font-bold text-purple-600">
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
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our Smart Home Projects in {areaName}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Take a look at some of our completed home automation projects
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={img}
                  alt={`Smart Home Project ${i + 1} in ${areaName}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
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

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Choose Our {business.name} in {areaName}?
              </h2>
              <div className="space-y-4">
                {content.whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
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
                className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Home Automation Packages for {areaName}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choose the perfect package for your home
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {content.packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl ${
                  pkg.popular ? "bg-purple-600 text-white scale-105 shadow-xl" : "bg-white shadow-lg border border-gray-100"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className={`w-4 h-4 ${pkg.popular ? "text-green-300" : "text-green-500"}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+916353583148"
                  className={`block w-full text-center py-3 rounded-full font-bold transition-colors ${
                    pkg.popular
                      ? "bg-white text-purple-600 hover:bg-gray-100"
                      : "bg-purple-600 text-white hover:bg-purple-700"
                  }`}
                >
                  Get Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            What Our Clients in {areaName} Say
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Real feedback from satisfied customers
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {content.testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
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
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            How We Work - Our Process
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {content.processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
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
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {business.name} in {areaName} - Local Expertise
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              {content.areaSpecificContent.split('\n\n').map((para, i) => (
                <p key={i} className="mb-4">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Frequently Asked Questions - {business.name} in {areaName}
            </h2>
            <div className="space-y-4">
              {content.faqItems.map((faq, index) => (
                <details key={index} className="bg-white p-6 rounded-xl shadow-md group">
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
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
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
                className="px-4 py-2 bg-white hover:bg-purple-50 rounded-full text-gray-700 hover:text-purple-600 transition-colors border border-gray-200 hover:border-purple-200"
              >
                {keyword.h1.replace(" in Vadodara", "").replace(" Vadodara", "")}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <MapPin className="inline-block w-8 h-8 mr-2 text-purple-600" />
            We Also Serve Other Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {business.areas
              .filter((a) => a !== area)
              .map((otherArea) => (
                <Link
                  key={otherArea}
                  href={`/${otherArea}`}
                  className="px-4 py-2 bg-gray-100 hover:bg-purple-100 rounded-full text-gray-700 hover:text-purple-600 transition-colors"
                >
                  {business.name} in {getAreaDisplayName(otherArea)}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home-automation/hero-2.jpg"
            alt="Smart Home CTA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-purple-900/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready for a Smarter Home?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free consultation for your home automation project in {areaName}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call: +91 63535 83148
            </a>
            <a
              href={`https://wa.me/916353583148?text=Hi, I need home automation services in ${areaName}`}
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Us - {business.name} in {areaName}
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to get started? Contact us today for a free consultation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a href="tel:+916353583148" className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                <Phone className="w-8 h-8 mb-3" />
                <p className="font-bold">Call Us</p>
                <p className="opacity-90">+91 63535 83148</p>
              </a>
              <a href="mailto:info@smarthomevadodara.in" className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                <Mail className="w-8 h-8 mb-3" />
                <p className="font-bold">Email Us</p>
                <p className="opacity-90">info@smarthomevadodara.in</p>
              </a>
              <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl">
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
