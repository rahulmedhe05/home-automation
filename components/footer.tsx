"use client"

import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-3 sm:px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-8 md:mb-0">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src="https://fplogoimages.withfloats.com/actual/641d2e343405ff0001e9b07c.png"
                alt="VARNI DIGITAL"
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 font-mono leading-relaxed mb-6 text-sm">
              India's leading manufacturer of Touch Switches & Home Automation products since 2013.
              Supplying to 200+ OEMs across the world with 5,00,000+ devices manufactured.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "home" },
                { label: "About Us", id: "about" },
                { label: "Gallery", id: "gallery" },
                { label: "Products", id: "products" },
                { label: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id)
                      element?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Products</h4>
            <ul className="space-y-2 text-primary-foreground/80 font-mono text-sm">
              <li>Capacitive Touch Switch</li>
              <li>Smart Touch Switch</li>
              <li>Modular Touch Switch</li>
              <li>Touch Switch With Socket</li>
              <li>Edge Touch Switch</li>
              <li>Home Automation</li>
              <li>OEM &amp; White Labeling</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="text-primary-foreground/80 font-mono text-sm">
                    902/3A, 3rd Floor, Nakshatra Arcade,
                    <br />
                    Opp. Vasu Healthcare, Near Purohit Chowkdi,
                    <br />
                    Makarpura GIDC, Vadodara – 390010
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+919978713458"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono text-sm"
                >
                  +91 99787 13458
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:varnidigital@gmail.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono text-sm"
                >
                  varnidigital@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-4 text-center">Home Automation & Smart Touch Switch — Vadodara, Gujarat</h4>
          <p className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed">
            Serving residential, commercial and hotel projects across Vadodara including Alkapuri, Gotri, Manjalpur,
            Akota, Makarpura, Sama, Subhanpura, Karelibaug and all surrounding areas of Gujarat.
          </p>
          <p className="text-center text-accent font-mono text-sm mt-3">
            ✓ Touch Switches | ✓ Home Automation | ✓ OEM & White Labeling | ✓ Hotel Automation
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 font-mono text-sm text-center md:text-left">
              © 2026 VARNI DIGITAL PRIVATE LIMITED. All rights reserved. | Vadodara's Leading Touch Switch Manufacturer
            </p>
            <div className="flex gap-6 text-sm font-mono">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Keywords (hidden) */}
      <div className="sr-only">
        Touch Switch Vadodara, Home Automation Vadodara, Smart Touch Switch, Capacitive Touch Switch, Modular Touch Switch,
        Touch Switch Panel, Edge Touch Switch, WiFi Touch Switch, Zigbee Touch Switch, OEM Touch Switch Manufacturer India,
        VARNI DIGITAL, Touch Switch Board, Hotel Automation Vadodara, Home Automation Gujarat, VARNI DIGITAL
      </div>
    </footer>
  )
}
