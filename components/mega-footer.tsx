"use client";

import Link from "next/link";
import { businesses, getAreaDisplayName, vadodaraAreas } from "@/lib/business-config";
import { homeAutomationKeywords } from "@/lib/keywords-config";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export function MegaFooter() {
  const business = businesses[0]; // Home Automation

  return (
    <footer className="bg-gray-900 text-white">
      {/* Area Links */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <h3 className="text-sm font-semibold text-gray-400 mb-3">Home Automation Service Areas in Vadodara</h3>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {vadodaraAreas.map((area) => (
              <Link
                key={area}
                href={`/${area}`}
                className="text-xs text-gray-500 hover:text-blue-400 transition-colors"
              >
                Home Automation in {getAreaDisplayName(area)}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Keyword Links */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <h3 className="text-sm font-semibold text-gray-400 mb-3">Our Smart Home Services</h3>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {homeAutomationKeywords.map((keyword) => (
              <Link
                key={keyword.slug}
                href={`/${keyword.slug}`}
                className="text-xs text-gray-500 hover:text-blue-400 transition-colors"
              >
                {keyword.title.replace(" in Vadodara", "").replace(" Vadodara", "").replace(" | ", " - ").split(" | ")[0]}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-gray-400">+91 98765 43210</p>
                <p className="text-gray-400">+91 98765 43211</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-gray-400">info@smarthomevadodara.in</p>
                <p className="text-gray-400">sales@smarthomevadodara.in</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Visit Us</h4>
                <p className="text-gray-400">123, Business Hub,</p>
                <p className="text-gray-400">Alkapuri, Vadodara - 390007</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <p className="text-gray-400">Mon - Sat: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-400">Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links & Copyright */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-blue-500 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Smart Home Vadodara. All Rights Reserved. | smarthomevadodara.in
          </p>
        </div>
      </div>
    </footer>
  );
}
