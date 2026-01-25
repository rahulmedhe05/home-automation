"use client";

import { BusinessConfig, getAreaDisplayName, vadodaraAreas } from "@/lib/business-config";
import { businessKeywords, KeywordConfig } from "@/lib/keywords-config";
import { BusinessNav } from "./business-nav";
import { MegaFooter } from "./mega-footer";
import { BusinessWhatsAppFloat } from "./business-whatsapp-float";
import { HomeAutomationForm } from "./forms/home-automation-form";
import { 
  Phone, Mail, MapPin, CheckCircle, Star, Users, Award, Clock, Tag, 
  Sparkles, Lightbulb, Wifi, Shield, Thermometer, Volume2, Home as HomeIcon,
  Smartphone, Eye, Lock, Sun, Zap, Settings, Play, Camera, Music
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface KeywordPageTemplateProps {
  business: BusinessConfig;
  keyword: KeywordConfig;
  content: {
    heroTitle: string;
    heroSubtitle: string;
    aboutContent: string;
    whyChooseUs: string[];
    detailedServices: { title: string; description: string; icon?: string }[];
    areaSpecificContent: string;
    faqItems: { question: string; answer: string }[];
    processSteps: { title: string; description: string }[];
    testimonials?: { name: string; location: string; rating: number; comment: string }[];
    packages?: { name: string; price: string; features: string[]; popular?: boolean }[];
    stats?: { value: string; label: string }[];
  };
}

// Local home automation images
const localImages = {
  hero1: "/images/home-automation/hero-1.jpg",
  hero2: "/images/home-automation/hero-2.jpg",
  hero3: "/images/home-automation/hero-3.jpg",
  smartLighting: "/images/home-automation/smart-lighting.jpg",
  voiceAssistant: "/images/home-automation/voice-assistant.jpg",
  smartHomeInterior: "/images/home-automation/smart-home-interior.jpg",
  smartThermostat: "/images/home-automation/smart-thermostat.jpg",
  homeTheatre: "/images/home-automation/home-theatre.jpg",
  smartLock: "/images/home-automation/smart-lock.jpg",
  modernKitchen: "/images/home-automation/modern-kitchen.jpg",
  livingRoom: "/images/home-automation/living-room.jpg",
};

// Service icons mapping
const serviceIcons: Record<string, React.ReactNode> = {
  lighting: <Lightbulb className="w-8 h-8" />,
  voice: <Volume2 className="w-8 h-8" />,
  security: <Shield className="w-8 h-8" />,
  climate: <Thermometer className="w-8 h-8" />,
  entertainment: <Music className="w-8 h-8" />,
  smart: <Smartphone className="w-8 h-8" />,
  wifi: <Wifi className="w-8 h-8" />,
  camera: <Camera className="w-8 h-8" />,
  lock: <Lock className="w-8 h-8" />,
  energy: <Zap className="w-8 h-8" />,
  default: <Settings className="w-8 h-8" />,
};

const getServiceIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("light")) return serviceIcons.lighting;
  if (lowerTitle.includes("voice") || lowerTitle.includes("assistant")) return serviceIcons.voice;
  if (lowerTitle.includes("security") || lowerTitle.includes("alarm")) return serviceIcons.security;
  if (lowerTitle.includes("climate") || lowerTitle.includes("ac") || lowerTitle.includes("temperature")) return serviceIcons.climate;
  if (lowerTitle.includes("theatre") || lowerTitle.includes("entertainment") || lowerTitle.includes("audio")) return serviceIcons.entertainment;
  if (lowerTitle.includes("smart") || lowerTitle.includes("app")) return serviceIcons.smart;
  if (lowerTitle.includes("wifi") || lowerTitle.includes("network")) return serviceIcons.wifi;
  if (lowerTitle.includes("cctv") || lowerTitle.includes("camera")) return serviceIcons.camera;
  if (lowerTitle.includes("lock") || lowerTitle.includes("door")) return serviceIcons.lock;
  if (lowerTitle.includes("energy") || lowerTitle.includes("solar") || lowerTitle.includes("power")) return serviceIcons.energy;
  return serviceIcons.default;
};

export function KeywordPageTemplate({ business, keyword, content }: KeywordPageTemplateProps) {
  const gradientClass = business.colors.gradient;
  const keywords = businessKeywords[business.slug] || [];
  const keywordName = keyword.keyword || keyword.title;

  // Gallery images for this keyword
  const galleryImages = [
    { src: localImages.smartLighting, alt: `${keywordName} - Smart Lighting` },
    { src: localImages.voiceAssistant, alt: `${keywordName} - Voice Control` },
    { src: localImages.smartHomeInterior, alt: `${keywordName} - Smart Interior` },
    { src: localImages.smartThermostat, alt: `${keywordName} - Climate Control` },
    { src: localImages.homeTheatre, alt: `${keywordName} - Home Theatre` },
    { src: localImages.smartLock, alt: `${keywordName} - Smart Security` },
    { src: localImages.modernKitchen, alt: `${keywordName} - Smart Kitchen` },
    { src: localImages.livingRoom, alt: `${keywordName} - Smart Living Room` },
  ];

  // Default stats if not provided
  const stats = content.stats || [
    { value: "1500+", label: "Smart Homes" },
    { value: "15+", label: "Years Experience" },
    { value: "4.9/5", label: "Customer Rating" },
    { value: "24/7", label: "Support" },
  ];

  // Default testimonials if not provided
  const testimonials = content.testimonials || [
    { name: "Rajesh Patel", location: "Alkapuri, Vadodara", rating: 5, comment: `The ${keywordName.toLowerCase()} installation was flawless. Our home is now fully automated and energy-efficient. Highly recommend their services!` },
    { name: "Priya Shah", location: "Sayajigunj, Vadodara", rating: 5, comment: `Exceptional work on our ${keywordName.toLowerCase()} project. The team was professional, knowledgeable, and completed the work on time.` },
    { name: "Amit Mehta", location: "Fatehgunj, Vadodara", rating: 5, comment: `Best home automation company in Vadodara! Their ${keywordName.toLowerCase()} solutions transformed our living experience completely.` },
  ];

  // Default packages if not provided
  const packages = content.packages || [
    { name: "Basic Package", price: "₹49,999", features: ["Smart Lighting (1 Room)", "Voice Assistant Setup", "Mobile App Control", "1 Year Warranty", "Free Installation"], popular: false },
    { name: "Premium Package", price: "₹99,999", features: ["Smart Lighting (3 Rooms)", "Voice Assistant Setup", "Smart AC Control", "Security Camera", "3 Year Warranty", "Priority Support"], popular: true },
    { name: "Ultimate Package", price: "₹1,99,999", features: ["Whole Home Automation", "Voice Control All Rooms", "Complete Security System", "Home Theatre Setup", "5 Year Warranty", "24/7 Support"], popular: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <BusinessNav currentBusiness={business} currentArea="vadodara" />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={localImages.hero1}
            alt={`${keywordName} in Vadodara`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <span className="inline-block px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold mb-4">
                #1 {keywordName} in Vadodara
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {keyword.h1}
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 max-w-xl">
                {keyword.metaDescription}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                  <Users className="w-5 h-5" />
                  <span>1500+ Happy Customers</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                  <Award className="w-5 h-5" />
                  <span>15+ Years Experience</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+916353583148"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/916353583148?text=Hi, I'm interested in ${keywordName} services in Vadodara`}
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
                >
                  WhatsApp Quote
                </a>
              </div>
            </div>
            
            {/* Inquiry Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Get Free Quote</h2>
                <p className="text-gray-600">Fill the form for instant callback</p>
              </div>
              <HomeAutomationForm keyword={keywordName} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="font-bold text-3xl md:text-4xl text-blue-400">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <span className="text-blue-600 font-semibold mb-2 block">About Our Services</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {keyword.title}
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="whitespace-pre-line">{content.aboutContent}</p>
                
                {/* SEO Keyword Rich Content */}
                <p className="mt-4">
                  Looking for the best <strong>{keywordName}</strong> services in Vadodara? We are the leading 
                  provider of <strong>{keywordName}</strong> solutions across all areas of Vadodara including 
                  Alkapuri, Sayajigunj, Fatehgunj, Manjalpur, Karelibaug, and more. Our expert team specializes 
                  in <strong>{keywordName}</strong> to deliver outstanding results for homes and businesses throughout Gujarat.
                </p>
              </div>
              
              {/* Quick Features */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {content.whyChooseUs.slice(0, 4).map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={localImages.smartHomeInterior}
                alt={`${keywordName} installation in Vadodara`}
                className="w-full h-80 md:h-[450px] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold mb-2 block">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our {keywordName} Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive home automation services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {content.detailedServices.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {getServiceIcon(service.title)}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold mb-2 block">Our Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {keywordName} Project Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              View our recent projects completed across Vadodara
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative group overflow-hidden rounded-xl shadow-lg",
                  index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
                )}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={cn(
                    "w-full object-cover group-hover:scale-110 transition-transform duration-500",
                    index === 0 || index === 5 ? "h-64 md:h-full" : "h-48 md:h-56"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold">{image.alt}</p>
                    <p className="text-sm opacity-80">Vadodara, Gujarat</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img
                src={localImages.voiceAssistant}
                alt={`Why choose us for ${keywordName}`}
                className="w-full h-80 md:h-[500px] object-cover rounded-2xl"
              />
            </div>
            <div>
              <span className="text-blue-400 font-semibold mb-2 block">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why We're the Best for {keywordName}?
              </h2>
              <div className="space-y-4">
                {content.whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/10 rounded-xl backdrop-blur">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <p className="text-gray-200">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold mb-2 block">Our Packages</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {keywordName} Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package for your smart home needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative bg-white rounded-2xl shadow-xl p-8 border-2 transition-transform hover:-translate-y-2",
                  pkg.popular ? "border-blue-600" : "border-gray-100"
                )}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-4xl font-bold text-blue-600 mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/916353583148?text=Hi, I'm interested in ${pkg.name} for ${keywordName}`}
                  className={cn(
                    "block text-center py-3 rounded-full font-bold transition-colors",
                    pkg.popular 
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  )}
                >
                  Get This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold mb-2 block">Client Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Customers Say About {keywordName}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold mb-2 block">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How {keywordName} Works
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {content.processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  {index < content.processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200" />
                  )}
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 relative z-10">
                    {index + 1}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold mb-2 block">Service Areas</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {keywordName} Available Across Vadodara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide our services in all major areas of Vadodara city
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {vadodaraAreas.map((area) => (
              <Link
                key={area}
                href={`/${area}`}
                className="px-4 py-2 bg-white hover:bg-blue-600 hover:text-white rounded-full text-gray-700 transition-colors shadow-sm border border-gray-200 hover:border-blue-600"
              >
                {keywordName} in {getAreaDisplayName(area)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-600 font-semibold mb-2 block">FAQs</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions - {keyword.title}
              </h2>
            </div>
            
            <div className="space-y-4">
              {content.faqItems.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md group"
                >
                  <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                    {faq.question}
                    <span className="text-2xl text-blue-600 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <img
          src={localImages.hero2}
          alt={`${keywordName} CTA`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Automate Your Home?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get expert {keywordName.toLowerCase()} services in Vadodara. Transform your living space today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+916353583148"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call: +91 63535 83148
            </a>
            <a
              href={`https://wa.me/916353583148?text=Hi, I need ${keywordName} services in Vadodara`}
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all"
            >
              Get Free Quote on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Related Keywords */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Related Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of home automation services
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {keywords
              .filter((k) => k.slug !== keyword.slug)
              .slice(0, 15)
              .map((k) => (
                <Link
                  key={k.slug}
                  href={`/${k.slug}`}
                  className="px-4 py-2 bg-white hover:bg-blue-600 hover:text-white rounded-full text-gray-700 transition-colors border border-gray-200 hover:border-blue-600"
                >
                  {k.title.replace(" in Vadodara", "").replace(" Vadodara", "")}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contact Us for {keyword.title}
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Ready to get started? Contact us today for a free consultation and quote.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <a
                href="tel:+916353583148"
                className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors backdrop-blur"
              >
                <Phone className="w-10 h-10 mb-3" />
                <p className="font-bold text-lg">Call Us</p>
                <p className="opacity-90">+91 63535 83148</p>
              </a>
              <a
                href="mailto:info@smarthomevadodara.in"
                className="flex flex-col items-center p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-colors backdrop-blur"
              >
                <Mail className="w-10 h-10 mb-3" />
                <p className="font-bold text-lg">Email Us</p>
                <p className="opacity-90">info@smarthomevadodara.in</p>
              </a>
              <div className="flex flex-col items-center p-6 bg-white/10 rounded-xl backdrop-blur">
                <MapPin className="w-10 h-10 mb-3" />
                <p className="font-bold text-lg">Visit Us</p>
                <p className="opacity-90">Vadodara, Gujarat</p>
              </div>
            </div>
            
            <a
              href={`https://wa.me/916353583148?text=Hi, I'm interested in ${keyword.title}`}
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>

      <MegaFooter />
      
      {/* WhatsApp Floating Button */}
      <BusinessWhatsAppFloat business={business} area="vadodara" keyword={keyword.title} />
    </div>
  );
}
