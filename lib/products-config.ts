export interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  images: string[];
  features: string[];
  specs: { label: string; value: string }[];
  badge?: string;
}

export const products: Product[] = [
  {
    slug: "wifi-zigbee-touch-panel",
    name: "WiFi & Zigbee Touch Panel",
    category: "Touch Panels",
    tagline: "Control your home from anywhere with WiFi & Zigbee dual-protocol",
    badge: "Best Seller",
    description:
      "The VARNI DIGITAL WiFi & Zigbee Touch Panel is a premium smart switch that works on both WiFi and Zigbee protocols, giving you the best of both worlds. Compatible with Alexa, Google Home, and our own app — automate your lights, fans, and appliances with a single touch or voice command.",
    image: "https://bizimages.withfloats.com/actual/fa610dc1926447f2a3e4c9e341c6e763.jpg",
    images: [
      "https://bizimages.withfloats.com/actual/fa610dc1926447f2a3e4c9e341c6e763.jpg",
      "https://bizimages.withfloats.com/actual/a86258fbee3a41139ace545a75ea7c43.jpg",
    ],
    features: [
      "WiFi + Zigbee dual protocol support",
      "Works with Alexa & Google Home",
      "Mobile app control (iOS & Android)",
      "Scene & schedule automation",
      "Capacitive glass touch surface",
      "Works without internet (local control)",
      "1 Year warranty",
    ],
    specs: [
      { label: "Protocol", value: "WiFi 2.4GHz + Zigbee 3.0" },
      { label: "Compatibility", value: "Alexa, Google Home, Tuya" },
      { label: "Load", value: "Up to 10A per switch" },
      { label: "Input Voltage", value: "100–250V AC" },
      { label: "Material", value: "Tempered Glass" },
      { label: "Warranty", value: "1 Year" },
    ],
  },
  {
    slug: "glass-touch-panel",
    name: "Glass Touch Panel",
    category: "Touch Panels",
    tagline: "Premium tempered glass finish for a luxury smart home look",
    description:
      "Upgrade your home's aesthetics with VARNI DIGITAL's Glass Touch Panel. Featuring a premium tempered glass surface with a sleek backlit design, these panels replace conventional switches while adding a luxury touch to every room. Compatible with all major smart home ecosystems.",
    image: "https://bizimages.withfloats.com/actual/a9f1d28f8afc4f77863c65183e0bfcdd.jpg",
    images: [
      "https://bizimages.withfloats.com/actual/a9f1d28f8afc4f77863c65183e0bfcdd.jpg",
      "https://bizimages.withfloats.com/actual/b8adbd72da8f42d2a2128c58cb957a4d.jpg",
    ],
    features: [
      "Tempered glass premium finish",
      "Backlit touch buttons",
      "App & voice control ready",
      "Works with existing wiring",
      "Overload & short-circuit protection",
      "Child safety lock feature",
      "1 Year warranty",
    ],
    specs: [
      { label: "Surface", value: "Tempered Glass" },
      { label: "Protocol", value: "WiFi 2.4GHz" },
      { label: "Compatibility", value: "Alexa, Google Home, Tuya" },
      { label: "Input Voltage", value: "100–250V AC" },
      { label: "Load", value: "Up to 10A per switch" },
      { label: "Warranty", value: "1 Year" },
    ],
  },
  {
    slug: "touch-4-switch-1-socket",
    name: "Touch 4 Switch 1 Socket",
    category: "Touch Switches",
    tagline: "4 smart switches + 1 power socket in one elegant panel",
    description:
      "The VARNI DIGITAL Touch 4 Switch 1 Socket combines 4 smart touch switches and 1 power socket in a single modular panel. Perfect for bedrooms, living rooms, and offices — control lights, fans, and charge your devices, all from one beautifully designed panel.",
    image: "https://bizimages.withfloats.com/actual/d6278900544641649ce6f68fa0525c3d.jpg",
    images: [
      "https://bizimages.withfloats.com/actual/d6278900544641649ce6f68fa0525c3d.jpg",
    ],
    features: [
      "4 touch switches + 1 power socket",
      "Capacitive touch technology",
      "App, voice & manual control",
      "Modular design (fits standard boxes)",
      "LED indicator for each switch",
      "Short-circuit protection",
      "1 Year warranty",
    ],
    specs: [
      { label: "Switches", value: "4 Touch + 1 Socket" },
      { label: "Protocol", value: "WiFi 2.4GHz" },
      { label: "Compatibility", value: "Alexa, Google Home" },
      { label: "Input Voltage", value: "100–250V AC" },
      { label: "Socket Rating", value: "16A" },
      { label: "Warranty", value: "1 Year" },
    ],
  },
  {
    slug: "touch-10-switch-1-fan",
    name: "Touch 10 Switch 1 Fan",
    category: "Touch Switches",
    tagline: "10 switches + fan speed control — ideal for large rooms",
    description:
      "VARNI DIGITAL's Touch 10 Switch 1 Fan panel is designed for larger spaces like halls, villas, and commercial setups. Control 10 lights and a fan speed (5-step) all from one stunning panel. Schedule automations, use voice commands, or control from the app remotely.",
    image: "https://productimages.withfloats.com/serviceimages/actual/641ae3a3472ae5787103de55Touch10Switch1Fan2Socket",
    images: [
      "https://productimages.withfloats.com/serviceimages/actual/641ae3a3472ae5787103de55Touch10Switch1Fan2Socket",
      "https://bizimages.withfloats.com/actual/d2497e8b05284c1c87bf2625f89579a4.jpg",
    ],
    features: [
      "10 smart touch switches",
      "Fan speed control (5-step)",
      "App & voice control",
      "Scene automation support",
      "Elegant backlit panel",
      "Surge protection built-in",
      "1 Year warranty",
    ],
    specs: [
      { label: "Switches", value: "10 Touch" },
      { label: "Fan Control", value: "5-Speed Regulation" },
      { label: "Protocol", value: "WiFi 2.4GHz" },
      { label: "Compatibility", value: "Alexa, Google Home, Tuya" },
      { label: "Input Voltage", value: "100–250V AC" },
      { label: "Warranty", value: "1 Year" },
    ],
  },
  {
    slug: "capacitive-touch-switch",
    name: "Capacitive Touch Switch",
    category: "Touch Switches",
    tagline: "Ultra-sensitive capacitive touch — feel the difference",
    badge: "Popular",
    description:
      "Experience the smoothest touch response with VARNI DIGITAL's Capacitive Touch Switch. Using advanced capacitive sensing technology, these switches respond to the lightest finger touch. Available in multiple configurations — 1, 2, 4, 6, and 8 gang — for every room in your home.",
    image: "https://bizimages.withfloats.com/actual/fa610dc1926447f2a3e4c9e341c6e763.jpg",
    images: [
      "https://bizimages.withfloats.com/actual/fa610dc1926447f2a3e4c9e341c6e763.jpg",
    ],
    features: [
      "Ultra-sensitive capacitive touch",
      "Available in 1–8 gang configurations",
      "Smart app & voice control",
      "Glass/acrylic finish options",
      "LED status indicator",
      "Works on existing wiring",
      "1 Year warranty",
    ],
    specs: [
      { label: "Technology", value: "Capacitive Touch" },
      { label: "Configurations", value: "1, 2, 4, 6, 8 Gang" },
      { label: "Protocol", value: "WiFi 2.4GHz" },
      { label: "Compatibility", value: "Alexa, Google Home" },
      { label: "Input Voltage", value: "100–250V AC" },
      { label: "Warranty", value: "1 Year" },
    ],
  },
  {
    slug: "smart-touch-switch",
    name: "Smart Touch Switch WiFi",
    category: "Smart Switches",
    tagline: "Your conventional switch, now smarter",
    description:
      "The VARNI DIGITAL Smart Touch Switch WiFi is a drop-in replacement for your existing switches. No new wiring needed. Connect to your home WiFi, set up in minutes, and start controlling your lights and fans from your phone or with voice commands. Works even during internet outages.",
    image: "https://bizimages.withfloats.com/actual/dee658c844764c1599d8f6051546b8a3.jpg",
    images: [
      "https://bizimages.withfloats.com/actual/dee658c844764c1599d8f6051546b8a3.jpg",
      "https://bizimages.withfloats.com/actual/fa610dc1926447f2a3e4c9e341c6e763.jpg",
    ],
    features: [
      "Fits existing switch boxes",
      "No neutral wire required (most models)",
      "WiFi control from anywhere",
      "Schedule & timer automation",
      "Alexa & Google voice control",
      "App control (iOS & Android)",
      "1 Year warranty",
    ],
    specs: [
      { label: "Protocol", value: "WiFi 2.4GHz" },
      { label: "Compatibility", value: "Alexa, Google Home, Tuya" },
      { label: "Neutral Wire", value: "Not required (most models)" },
      { label: "Load", value: "Up to 10A" },
      { label: "Input Voltage", value: "100–250V AC" },
      { label: "Warranty", value: "1 Year" },
    ],
  },
  {
    slug: "modular-touch-switch",
    name: "Modular Touch Switch",
    category: "Touch Switches",
    tagline: "Modular design — mix & match to build your perfect panel",
    description:
      "VARNI DIGITAL's Modular Touch Switch system lets you design your own switch panel. Mix switches, dimmers, sockets, USB ports, and fan regulators in any combination. The modular system fits standard electrical boxes and works with all major smart home platforms.",
    image: "https://bizimages.withfloats.com/actual/a9f1d28f8afc4f77863c65183e0bfcdd.jpg",
    images: [
      "https://bizimages.withfloats.com/actual/a9f1d28f8afc4f77863c65183e0bfcdd.jpg",
    ],
    features: [
      "Fully modular design",
      "Mix switches, sockets & dimmers",
      "Fits standard electrical boxes",
      "Smart app & voice control",
      "Multiple finish options",
      "Easy installation",
      "1 Year warranty",
    ],
    specs: [
      { label: "Design", value: "Modular (Mix & Match)" },
      { label: "Protocol", value: "WiFi 2.4GHz" },
      { label: "Compatibility", value: "Alexa, Google Home, Tuya" },
      { label: "Finish", value: "Glass / Acrylic / ABS" },
      { label: "Input Voltage", value: "100–250V AC" },
      { label: "Warranty", value: "1 Year" },
    ],
  },
  {
    slug: "edge-touch-switch",
    name: "Edge Touch Switch",
    category: "Touch Switches",
    tagline: "Edge-lit design for a futuristic smart home look",
    badge: "New",
    description:
      "VARNI DIGITAL's Edge Touch Switch features a stunning edge-lit design that glows softly around the panel edges. This premium switch brings a futuristic ambiance to any room while offering the same smart control features — app, voice, schedule, and scene automation.",
    image: "https://bizimages.withfloats.com/actual/fa610dc1926447f2a3e4c9e341c6e763.jpg",
    images: [
      "https://bizimages.withfloats.com/actual/fa610dc1926447f2a3e4c9e341c6e763.jpg",
    ],
    features: [
      "Unique edge-lit illumination",
      "Capacitive glass touch surface",
      "App & voice control",
      "Adjustable LED brightness",
      "Scene & schedule support",
      "Premium build quality",
      "1 Year warranty",
    ],
    specs: [
      { label: "Design", value: "Edge-Lit Glass" },
      { label: "Protocol", value: "WiFi 2.4GHz" },
      { label: "Compatibility", value: "Alexa, Google Home, Tuya" },
      { label: "LED", value: "Adjustable RGB Edge Light" },
      { label: "Input Voltage", value: "100–250V AC" },
      { label: "Warranty", value: "1 Year" },
    ],
  },
  {
    slug: "touch-switch-with-socket",
    name: "Touch Switch With Socket",
    category: "Touch Switches",
    tagline: "Smart switches and power socket in one unified panel",
    description:
      "The VARNI DIGITAL Touch Switch With Socket combines smart touch switches and power sockets in one beautiful panel. Perfect for bedrooms, living rooms, and kitchens where you need both lighting control and charging points in the same spot.",
    image: "https://bizimages.withfloats.com/actual/a9f1d28f8afc4f77863c65183e0bfcdd.jpg",
    images: [
      "https://bizimages.withfloats.com/actual/a9f1d28f8afc4f77863c65183e0bfcdd.jpg",
      "https://bizimages.withfloats.com/actual/b3197c619c854c6b8ec63cc88d58c202.jpg",
    ],
    features: [
      "Smart touch switches + power socket",
      "Available with USB-A & USB-C ports",
      "App & voice control for switches",
      "16A socket rating",
      "Surge protection built-in",
      "Elegant unified design",
      "1 Year warranty",
    ],
    specs: [
      { label: "Configuration", value: "2/4 Switch + 1/2 Socket" },
      { label: "Socket Rating", value: "16A" },
      { label: "USB", value: "Optional (Type-A & Type-C)" },
      { label: "Protocol", value: "WiFi 2.4GHz" },
      { label: "Input Voltage", value: "100–250V AC" },
      { label: "Warranty", value: "1 Year" },
    ],
  },
  {
    slug: "hotel-automation",
    name: "Hotel Automation",
    category: "Commercial",
    tagline: "Complete hotel room & lobby automation system",
    badge: "Commercial",
    description:
      "VARNI DIGITAL's Hotel Automation system transforms hotel rooms and lobbies with a complete smart automation solution. From room control panels (DND, MUR, energy saving) to lobby ambiance control — everything managed centrally. Trusted by hotels across Gujarat.",
    image: "https://bizimages.withfloats.com/actual/556e1bc9f32a4dfb9699d6ff56921187.jpg",
    images: [
      "https://bizimages.withfloats.com/actual/556e1bc9f32a4dfb9699d6ff56921187.jpg",
      "https://bizimages.withfloats.com/actual/f03adaf8fc6c495684c63413229b5aaf.jpg",
    ],
    features: [
      "Room control panel (DND / MUR)",
      "Card-based energy saving system",
      "Lobby & common area automation",
      "Centralized management dashboard",
      "Guest WiFi control integration",
      "Curtain & AC automation",
      "Dedicated after-sales support",
    ],
    specs: [
      { label: "System", value: "Centralized Hotel Management" },
      { label: "Room Panel", value: "DND, MUR, Energy Saver" },
      { label: "Protocol", value: "WiFi + Zigbee + Wired" },
      { label: "Integration", value: "PMS / HMS Compatible" },
      { label: "Scale", value: "5 to 500+ rooms" },
      { label: "Warranty", value: "1 Year + AMC available" },
    ],
  },
  {
    slug: "curtain-control",
    name: "Curtain Control",
    category: "Automation",
    tagline: "Automate your curtains — open at sunrise, close at sunset",
    description:
      "VARNI DIGITAL's Curtain Control system lets you automate your curtains and blinds effortlessly. Schedule them to open with sunrise and close at sunset, control from your phone, or set scenes. Works with roller blinds, Roman shades, and motorized curtain tracks.",
    image: "https://bizimages.withfloats.com/actual/79cb64c8e2c84a949b4a31d4b3ad554a.jpg",
    images: [
      "https://bizimages.withfloats.com/actual/79cb64c8e2c84a949b4a31d4b3ad554a.jpg",
    ],
    features: [
      "Open/close/stop from app or voice",
      "Schedule by time or sunrise/sunset",
      "Works with existing motor tracks",
      "Alexa & Google Home compatible",
      "Scene & mood integration",
      "Supports roller & Roman blinds",
      "1 Year warranty",
    ],
    specs: [
      { label: "Motor Compatibility", value: "AC & DC Curtain Motors" },
      { label: "Protocol", value: "WiFi 2.4GHz / Zigbee" },
      { label: "Compatibility", value: "Alexa, Google Home, Tuya" },
      { label: "Control", value: "App, Voice, Touch Panel" },
      { label: "Input Voltage", value: "100–250V AC" },
      { label: "Warranty", value: "1 Year" },
    ],
  },
  {
    slug: "ir-blaster",
    name: "IR Blaster",
    category: "Automation",
    tagline: "Control any IR device — AC, TV, set-top box — from your phone",
    description:
      "VARNI DIGITAL's IR Blaster turns any IR-controlled device into a smart device. Control your AC, TV, set-top box, projector, or any IR appliance from your smartphone or with voice commands. No need to replace your existing AC — just add the IR Blaster.",
    image: "https://bizimages.withfloats.com/actual/1fc73739a5bb49a8ba6a48ec9ac4ca70.jpg",
    images: [
      "https://bizimages.withfloats.com/actual/1fc73739a5bb49a8ba6a48ec9ac4ca70.jpg",
    ],
    features: [
      "Controls any IR device (AC, TV, etc.)",
      "15+ meter IR range",
      "Supports 100,000+ device models",
      "App & voice control",
      "Schedule & timer support",
      "No wiring required",
      "1 Year warranty",
    ],
    specs: [
      { label: "Range", value: "Up to 15 meters" },
      { label: "Protocol", value: "WiFi 2.4GHz" },
      { label: "IR Frequency", value: "38KHz" },
      { label: "Compatibility", value: "Alexa, Google Home, Tuya" },
      { label: "Power", value: "USB powered" },
      { label: "Warranty", value: "1 Year" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return products.slice(0, count);
  return products.filter((p) => p.slug !== slug && p.category === product.category).slice(0, count).concat(
    products.filter((p) => p.slug !== slug && p.category !== product.category)
  ).slice(0, count);
}
