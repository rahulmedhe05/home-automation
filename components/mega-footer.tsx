"use client";

import Link from "next/link";
import { businesses, getAreaDisplayName, vadodaraAreas } from "@/lib/business-config";
import { homeAutomationKeywords } from "@/lib/keywords-config";
import { CatalogueDownloads } from "@/components/catalogue-downloads";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export function MegaFooter() {
  const business = businesses[0]; // Home Automation

  return (
    <footer className="bg-[#08080a] text-white">
      {/* Area Links */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6">
          <h3 className="mb-3 text-sm font-semibold text-white/70">Home Automation Service Areas in Vadodara</h3>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {vadodaraAreas.map((area) => (
              <Link
                key={area}
                href={`/${area}`}
                className="text-xs text-white/40 transition-colors hover:text-pink-300"
              >
                Home Automation in {getAreaDisplayName(area)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Keyword Links */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6">
          <h3 className="mb-3 text-sm font-semibold text-white/70">Our Smart Home Services</h3>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {homeAutomationKeywords.map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}`}
                className="text-xs text-white/40 transition-colors hover:text-pink-300"
              >
                {keyword.title.replace(" in Vadodara", "").replace(" Vadodara", "").replace(" | ", " - ").split(" | ")[0]}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Catalogue Downloads */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6">
          <h3 className="mb-3 text-sm font-semibold text-white/70">Download Official Product Catalogues</h3>
          <CatalogueDownloads variant="dark" />
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-pink-400" />
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <a href="tel:+919978713458" className="block text-white/60 hover:text-white">+91 99787 13458</a>
                <a href="tel:08048128193" className="block text-white/60 hover:text-white">08048128193</a>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-pink-400" />
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <a href="mailto:varnidigital@gmail.com" className="block text-white/60 hover:text-white">varnidigital@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-pink-400" />
              <div>
                <h4 className="font-semibold">Factory & Office</h4>
                <p className="text-sm leading-relaxed text-white/60">
                  902/3A, 3rd Floor, Nakshatra Arcade,<br />
                  Opp. Vasu Healthcare, Near Purohit Chowkdi,<br />
                  Makarpura GIDC, Vadodara – 390010
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-5">
              <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-pink-400" />
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <p className="text-white/60">Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p className="text-white/60">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/60 transition-colors hover:text-pink-300">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-pink-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-pink-300">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-pink-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 transition-colors hover:text-pink-300">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} VARNI DIGITAL. All Rights Reserved. | smarthomevadodara.in
          </p>
        </div>
      </div>
    </footer>
  );
}
