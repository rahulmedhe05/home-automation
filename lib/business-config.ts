// Business Configuration with unique colors and details for each vertical

export interface BusinessConfig {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    gradient: string;
  };
  icon: string;
  services: string[];
  areas: string[];
}

// Common areas for all businesses - 21 areas total (Vadodara main + 20 localities)
export const vadodaraAreas = [
  "vadodara",
  "alkapuri",
  "akota",
  "old-padra-road",
  "gotri",
  "vasna-bhayli-road",
  "manjalpur",
  "sama",
  "karelibaug",
  "waghodia-road",
  "chhani",
  "harni",
  "kalali",
  "atladara",
  "vadsar-road",
  "tarsali",
  "sayajigunj",
  "subhanpura",
  "tandalja",
  "makarpura",
  "fatehgunj",
];

export const businesses: BusinessConfig[] = [
  {
    id: "home-automation",
    name: "Home Automation",
    slug: "home-automation",
    tagline: "Smart Home Solutions for Modern Living",
    description: "Cutting-edge home automation services in Vadodara",
    colors: {
      primary: "#7C3AED", // Purple
      secondary: "#A78BFA", // Light Purple
      accent: "#4C1D95", // Dark Purple
      gradient: "from-purple-600 to-indigo-600",
    },
    icon: "🏡",
    services: [
      "Smart Lighting",
      "Home Theatre Setup",
      "Automated Curtains",
      "Voice Control Systems",
      "Smart Security",
      "Climate Control",
      "Smart Locks",
      "Energy Management",
      "App-Based Control",
      "Whole Home Automation",
    ],
    areas: vadodaraAreas,
  },
];

export const getBusinessBySlug = (slug: string): BusinessConfig | undefined => {
  return businesses.find((b) => b.slug === slug);
};

export const getAreaDisplayName = (area: string): string => {
  const areaNames: Record<string, string> = {
    vadodara: "Vadodara",
    alkapuri: "Alkapuri",
    akota: "Akota",
    "old-padra-road": "Old Padra Road",
    gotri: "Gotri",
    "vasna-bhayli-road": "Vasna-Bhayli Road",
    manjalpur: "Manjalpur",
    sama: "Sama",
    karelibaug: "Karelibaug",
    "waghodia-road": "Waghodia Road",
    chhani: "Chhani",
    harni: "Harni",
    kalali: "Kalali",
    atladara: "Atladara",
    "vadsar-road": "Vadsar Road",
    tarsali: "Tarsali",
    sayajigunj: "Sayajigunj",
    subhanpura: "Subhanpura",
    tandalja: "Tandalja",
    makarpura: "Makarpura",
    fatehgunj: "Fatehgunj",
  };
  return areaNames[area] || area;
};

export const allAreas = [
  "vadodara",
  "alkapuri",
  "akota",
  "old-padra-road",
  "gotri",
  "vasna-bhayli-road",
  "manjalpur",
  "sama",
  "karelibaug",
  "waghodia-road",
  "chhani",
  "harni",
  "kalali",
  "atladara",
  "vadsar-road",
  "tarsali",
  "sayajigunj",
  "subhanpura",
  "tandalja",
  "makarpura",
  "fatehgunj",
];
