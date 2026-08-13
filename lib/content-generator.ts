import { getAreaDisplayName } from "./business-config";

export interface PageContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutContent: string;
  whyChooseUs: string[];
  detailedServices: { title: string; description: string; icon: string }[];
  areaSpecificContent: string;
  faqItems: { question: string; answer: string }[];
  processSteps: { title: string; description: string; icon: string }[];
  testimonials: { name: string; location: string; rating: number; text: string }[];
  packages: { name: string; price: string; features: string[]; popular?: boolean }[];
  stats: { value: string; label: string }[];
}

// Stock image URLs for Home Automation (using Unsplash)
export const homeAutomationImages = {
  hero: [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop", // Smart home living room
    "https://images.unsplash.com/photo-1585503418537-88331351ad99?w=1920&h=1080&fit=crop", // Smart tablet control
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop", // Modern smart home
    "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=1920&h=1080&fit=crop", // Smart home devices
  ],
  gallery: [
    "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=600&fit=crop", // Smart lighting
    "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=800&h=600&fit=crop", // Voice assistant
    "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=600&fit=crop", // Smart TV
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop", // Modern kitchen
    "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop", // Smart thermostat
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop", // Smart home interior
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop", // Living room automation
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop", // Smart bedroom
  ],
  services: {
    smartLighting: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop",
    homeTheatre: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&h=400&fit=crop",
    curtainAutomation: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600&h=400&fit=crop",
    voiceControl: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600&h=400&fit=crop",
    smartSecurity: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    climateControl: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&fit=crop",
    smartLocks: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    energyManagement: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    appControl: "https://images.unsplash.com/photo-1585503418537-88331351ad99?w=600&h=400&fit=crop",
    wholeHome: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
  },
  about: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  banner: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=600&fit=crop",
  team: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
};

// Home Automation Content Generator
export function getHomeAutomationContent(area: string): PageContent {
  const areaName = getAreaDisplayName(area);
  
  return {
    heroTitle: `Best Home Automation in ${areaName}, Vadodara`,
    heroSubtitle: `Transform your home into a smart, connected living space with Vadodara's leading home automation experts. Control lights, AC, curtains, security & more from your smartphone or voice commands.`,
    
    aboutContent: `Welcome to Vadodara's most trusted home automation company serving ${areaName} and all surrounding areas. With over 10 years of experience in smart home technology, we have transformed over 1,000+ homes across Vadodara into intelligent, connected living spaces.

At Smart Home Vadodara, we believe that technology should simplify your life, not complicate it. That's why we focus on creating intuitive, user-friendly home automation solutions that anyone can use – from tech-savvy millennials to senior citizens. Our smart home systems are designed to enhance your comfort, security, and energy efficiency while adding a touch of luxury to your everyday life.

Our home automation services in ${areaName} cover everything from basic smart lighting to complete whole-home automation. Whether you want to control your lights with voice commands, automate your curtains based on sunrise/sunset, or create the perfect home theatre experience – we have the expertise and technology to make it happen.

What sets us apart from other home automation companies in Vadodara is our commitment to quality and after-sales service. We use only premium products from trusted brands like Philips Hue, Schneider Electric, Wipro Smart, Sonoff, and more. Our installation team consists of certified technicians who ensure every system is perfectly configured and thoroughly tested before handover.

We understand that every home in ${areaName} is unique, which is why we offer customized solutions tailored to your specific needs and budget. From a simple smart switch upgrade to a complete luxury villa automation – we have packages for everyone. Our solutions are also scalable, meaning you can start small and add more features as your needs grow.

Our clients in ${areaName} love the convenience of controlling their entire home from a single app or with simple voice commands. Imagine saying "Alexa, good morning" and having your curtains open, lights turn on gradually, and your coffee maker start brewing – all automatically. That's the smart home experience we deliver.

We also prioritize energy efficiency in all our installations. Our smart systems help you save up to 30% on electricity bills by intelligently managing your lights, AC, and other appliances. Motion sensors ensure lights aren't left on in empty rooms, and smart thermostats maintain optimal temperatures while minimizing energy waste.

Security is another key focus area. Our integrated smart security solutions include smart locks, video doorbells, motion sensors, and connected cameras that you can monitor from anywhere in the world. Get instant alerts on your phone if something unusual happens at home.

For residents of ${areaName}, we offer free site visits and consultations. Our experts will assess your home, understand your requirements, and recommend the best solutions within your budget. We provide detailed quotations with no hidden costs, and our flexible payment options make home automation accessible to everyone.

Join the 1,000+ happy homeowners in Vadodara who have already made their homes smarter with us. Experience the future of living today!`,
    
    whyChooseUs: [
      "10+ years of experience in home automation in Vadodara",
      "1,000+ successful installations across all areas",
      "Certified and trained installation technicians",
      "Authorized dealer of premium smart home brands",
      "Free consultation and demo at your home",
      "Customized solutions for every budget",
      "24/7 customer support and service",
      "1-year warranty on all installations",
      "No hidden costs - transparent pricing",
      "Post-installation training and support",
      "Compatible with Alexa, Google Home & Siri",
      "Energy-saving solutions - save up to 30% on bills",
    ],
    
    detailedServices: [
      {
        title: "Smart Lighting Control",
        description: `Transform the ambiance of your ${areaName} home with intelligent lighting solutions. Control brightness, color temperature, and create custom scenes for every mood. Schedule lights to turn on/off automatically, or control them with voice commands. Our smart lighting systems can save up to 40% on your electricity bills while enhancing your home's aesthetics.`,
        icon: "💡",
      },
      {
        title: "Home Theatre & Audio",
        description: `Create the ultimate entertainment experience in your ${areaName} home with our home theatre automation solutions. One-touch control for your TV, projector, sound system, and ambient lighting. Enjoy cinema-quality experience with automated curtains, dimmable lights, and perfectly calibrated audio – all controlled from a single remote or app.`,
        icon: "🎬",
      },
      {
        title: "Automated Curtains & Blinds",
        description: `Add elegance and convenience with motorized curtains and blinds. Open and close them with voice commands, smartphone app, or set schedules based on sunrise/sunset. Our silent motors ensure whisper-quiet operation, and the systems are compatible with your existing curtain tracks in most cases.`,
        icon: "🪟",
      },
      {
        title: "Voice Control Systems",
        description: `Control your entire ${areaName} home with just your voice. We integrate your smart home with Amazon Alexa, Google Home, and Apple Siri for hands-free control. Say "Alexa, I'm leaving" and watch your lights turn off, AC adjust, and security system arm automatically.`,
        icon: "🗣️",
      },
      {
        title: "Smart Security Solutions",
        description: `Protect your ${areaName} home with intelligent security systems. Smart locks with fingerprint/PIN access, video doorbells, motion sensors, and connected cameras. Monitor your home from anywhere, receive instant alerts, and even let in guests remotely. Peace of mind, whether you're at work or on vacation.`,
        icon: "🔐",
      },
      {
        title: "Climate Control & AC Automation",
        description: `Maintain perfect temperature in your ${areaName} home while saving energy. Smart thermostats learn your preferences and adjust automatically. Control your AC from anywhere – turn it on before you reach home. Geo-fencing features automatically adjust settings when you leave or arrive.`,
        icon: "❄️",
      },
      {
        title: "Smart Door Locks",
        description: `Upgrade to keyless entry with our smart lock solutions. Multiple access methods – fingerprint, PIN code, RFID card, or smartphone. Grant temporary access to guests, track entry logs, and never worry about lost keys again. All our smart locks are robust and designed for Indian conditions.`,
        icon: "🚪",
      },
      {
        title: "Energy Management",
        description: `Monitor and optimize your home's energy consumption with smart energy management. Real-time consumption tracking, automated scheduling, and intelligent load management help you save up to 30% on electricity bills. Get insights on which appliances consume the most and optimize usage.`,
        icon: "⚡",
      },
      {
        title: "App-Based Control",
        description: `Control your entire ${areaName} home from our intuitive smartphone app. Works on both Android and iOS. Create custom scenes, set schedules, monitor energy usage, and control individual devices – all from anywhere in the world. One app for everything.`,
        icon: "📱",
      },
      {
        title: "Whole Home Automation",
        description: `The ultimate smart home experience for your ${areaName} property. Comprehensive automation covering lighting, climate, security, entertainment, curtains, garden, and more. Custom scenes for different times of day, integration with all family members' devices, and seamless operation throughout your home.`,
        icon: "🏠",
      },
    ],
    
    areaSpecificContent: `${areaName} is one of the most sought-after residential areas in Vadodara, known for its modern apartments, beautiful bungalows, and quality lifestyle. As the leading home automation provider in ${areaName}, we have extensive experience working with the diverse range of properties in this area.

We understand the unique requirements of ${areaName} residents. Whether you live in a compact 2BHK apartment or a sprawling independent bungalow, we have customized automation solutions that perfectly fit your space and lifestyle. Our team has completed numerous successful installations in ${areaName}, and many of our new clients come through referrals from satisfied customers in the area.

Our local presence in ${areaName} means faster service, quicker response times for support calls, and better understanding of the area's infrastructure. We have established relationships with electricians and contractors in ${areaName} who assist us in installations, ensuring quality workmanship.

The residents of ${areaName} appreciate quality, reliability, and excellent service – values that align perfectly with our company philosophy. We take pride in delivering premium home automation solutions that enhance the lifestyle of ${areaName} families.

Whether you want to start with a simple smart lighting setup or go all-in with complete home automation, we're here to help. Our free consultation service allows you to explore possibilities without any commitment. We'll visit your ${areaName} home, assess your requirements, and provide a customized proposal.

Many of our ${areaName} clients have transformed their homes into showcase smart homes that impress visitors and provide unmatched convenience to their families. Join them in experiencing the future of living!`,
    
    faqItems: [
      {
        question: `What is the cost of home automation in ${areaName}, Vadodara?`,
        answer: `Home automation costs in ${areaName} start from ₹15,000 for basic smart switch packages. A typical 2BHK apartment automation ranges from ₹50,000 to ₹1,50,000 depending on features. 3BHK homes typically require ₹80,000 to ₹2,50,000. Bungalows and villas can range from ₹2,00,000 to ₹10,00,000+ for complete automation. We offer customized solutions for every budget and provide detailed quotes during our free consultation.`,
      },
      {
        question: `Do I need to rewire my existing ${areaName} home for automation?`,
        answer: `No! We offer wireless home automation solutions that require no rewiring of your existing home. Our WiFi-based smart switches and devices can be retrofitted into your current electrical setup. This makes automation feasible even for rented apartments. However, for new constructions, we recommend planned wiring for optimal results.`,
      },
      {
        question: `Does home automation work with Alexa and Google Home?`,
        answer: `Yes, absolutely! All our smart home systems are compatible with Amazon Alexa, Google Home (Google Assistant), and Apple HomeKit (Siri). You can control your entire home with voice commands. We help you set up the integration and train you on using voice commands effectively.`,
      },
      {
        question: `How long does home automation installation take?`,
        answer: `Basic smart switch installations can be completed in 2-4 hours. A full 2BHK apartment automation typically takes 1-2 days. Larger homes and bungalows may require 3-5 days depending on the scope. We always work around your schedule and minimize disruption to your daily routine.`,
      },
      {
        question: `What warranty do you provide on home automation systems?`,
        answer: `We provide a comprehensive 1-year warranty on all our installations, covering both products and workmanship. Premium products we install come with their own manufacturer warranties (typically 2-5 years). We also offer Annual Maintenance Contracts (AMC) for continued support and priority service.`,
      },
      {
        question: `Is home automation safe and reliable?`,
        answer: `Absolutely! Our systems use industry-standard encryption and secure protocols. Smart locks and security devices are designed to be more secure than traditional systems. All our products are ISI certified and designed for Indian conditions. We also implement local control options, so your home remains functional even during internet outages.`,
      },
      {
        question: `Can I control my home automation when I'm away from ${areaName}?`,
        answer: `Yes! That's one of the biggest advantages. You can control and monitor your home from anywhere in the world using our smartphone app. Check if doors are locked, turn off forgotten lights, adjust AC settings, and view security cameras – all remotely. You'll never worry about your home when traveling.`,
      },
      {
        question: `Do you provide service and support after installation?`,
        answer: `Yes, we pride ourselves on excellent after-sales support. We offer 24/7 phone support, quick on-site service visits (typically within 24 hours in ${areaName}), remote troubleshooting, and regular system updates. Our AMC plans provide priority support and annual system health checks.`,
      },
    ],
    
    processSteps: [
      {
        title: "Free Consultation",
        description: "We visit your home, understand your requirements, and demonstrate possibilities. No obligations.",
        icon: "📋",
      },
      {
        title: "Custom Design",
        description: "Our team designs a personalized automation solution tailored to your home and budget.",
        icon: "✏️",
      },
      {
        title: "Professional Installation",
        description: "Certified technicians install and configure all devices with minimal disruption.",
        icon: "🔧",
      },
      {
        title: "Training & Handover",
        description: "Complete training for all family members. We ensure everyone is comfortable using the system.",
        icon: "🎓",
      },
    ],
    
    testimonials: [
      {
        name: "Rajesh Patel",
        location: areaName,
        rating: 5,
        text: "Transformed our 3BHK into a smart home. The whole family loves controlling lights and AC with voice commands. Excellent service and support!",
      },
      {
        name: "Priya Sharma",
        location: areaName,
        rating: 5,
        text: "The smart security system gives us complete peace of mind. We can monitor our home from anywhere. Very professional installation team.",
      },
      {
        name: "Amit Desai",
        location: areaName,
        rating: 5,
        text: "Started with just smart lighting, now we have complete automation. The energy savings are noticeable. Highly recommend their services!",
      },
      {
        name: "Neha Joshi",
        location: areaName,
        rating: 5,
        text: "Best decision for our new home. The curtain automation and home theatre setup is amazing. Great after-sales support too.",
      },
    ],
    
    packages: [
      {
        name: "Starter Pack",
        price: "₹15,000",
        features: [
          "4 Smart Switches",
          "App Control",
          "Voice Compatible",
          "1 Year Warranty",
          "Free Installation",
        ],
      },
      {
        name: "Comfort Pack",
        price: "₹45,000",
        features: [
          "8 Smart Switches",
          "2 Smart Plugs",
          "1 Smart IR Blaster (AC Control)",
          "Motion Sensor",
          "App & Voice Control",
          "1 Year Warranty",
        ],
        popular: true,
      },
      {
        name: "Premium Pack",
        price: "₹95,000",
        features: [
          "16 Smart Switches",
          "4 Smart Plugs",
          "2 IR Blasters",
          "Smart Door Lock",
          "Video Doorbell",
          "Complete App & Voice Control",
          "2 Year Warranty",
        ],
      },
      {
        name: "Luxury Pack",
        price: "₹1,95,000+",
        features: [
          "Whole Home Automation",
          "Smart Lighting Throughout",
          "Motorized Curtains",
          "Complete Security System",
          "Home Theatre Integration",
          "Energy Monitoring",
          "Premium Support",
          "3 Year Warranty",
        ],
      },
    ],
    
    stats: [
      { value: "1000+", label: "Homes Automated" },
      { value: "10+", label: "Years Experience" },
      { value: "4.9/5", label: "Customer Rating" },
      { value: "24/7", label: "Support Available" },
    ],
  };
}

// Main content generator function
export function getBusinessContent(businessSlug: string, area: string): PageContent {
  // Since we only have home automation now, directly return home automation content
  return getHomeAutomationContent(area);
}
