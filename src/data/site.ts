export const site = {
  name: "VoltCraft Electrical",
  shortName: "VoltCraft",
  tagline: "Certified electrical work for Guildford homes.",
  description:
    "NICEIC-approved electricians in Guildford. Emergency call-outs, fuse board upgrades, rewires and EV chargers. Fixed quotes and 22 years on the tools.",
  phone: "08009876543",
  phoneDisplay: "0800 987 6543",
  email: "hello@voltcraftelectrical.co.uk",
  town: "Guildford",
  county: "Surrey",
  address: "42 North Street, Guildford, Surrey",
  postcode: "GU1 4TE",
  country: "GB",
  siteUrl: "https://voltcraftelectrical.co.uk",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=VoltCraft+Electrical+Guildford+Surrey",
  reviewUrl:
    "https://www.google.com/maps/search/?api=1&query=VoltCraft+Electrical+Guildford+Surrey",
  rating: 4.9,
  reviewCount: 212,
  yearsExperience: 22,
  founded: 2004,
  checkatradeRating: 9.8,
  hours: "Mon–Sat, 7am–7pm",
  emergencyHours: "24/7 emergency line",
  responseWindow: "15 minutes",
  emergencyResponse: "60 minutes",
  credentials: ["NICEIC Approved", "Part P Registered", "£5m Insured"],
  geo: { latitude: 51.2362, longitude: -0.5704 },
} as const;

export type ServiceIcon =
  | "lightning"
  | "circuitry"
  | "house"
  | "battery";

export type Service = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: ServiceIcon;
  badge: string;
  from: string;
  bullets: string[];
  image?: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    id: "emergency",
    number: "01",
    title: "24/7 emergency call-outs",
    shortTitle: "Emergency call-outs",
    description:
      "Power trips, burning smells, dead sockets. We find the fault, make it safe, and get the power back on — day or night.",
    icon: "lightning",
    badge: "Rapid response",
    from: "£89",
    bullets: ["Same-day visits", "Fully stocked van", "Safe isolation first"],
    image: "/images/tools.jpg",
    featured: true,
  },
  {
    id: "consumer-unit",
    number: "02",
    title: "Fuse board upgrades",
    shortTitle: "Fuse board upgrades",
    description:
      "A modern RCBO consumer unit with surge protection, clearly labelled circuits, and a certificate on completion.",
    icon: "circuitry",
    badge: "Part P compliant",
    from: "£595",
    bullets: ["18th Edition board", "Surge protection", "Full test certificate"],
  },
  {
    id: "rewire",
    number: "03",
    title: "Full & partial rewires",
    shortTitle: "House rewires",
    description:
      "Older wiring brought up to BS 7671 with a room-by-room plan, dust sheets, and as little disruption as possible.",
    icon: "house",
    badge: "BS 7671",
    from: "£2,400",
    bullets: ["Free survey", "Room-by-room plan", "Certified & tested"],
  },
  {
    id: "ev-charger",
    number: "04",
    title: "EV charger installation",
    shortTitle: "EV chargers",
    description:
      "Smart home chargers installed, load-tested, and set up with your app. Neat cable routes come as standard.",
    icon: "battery",
    badge: "7kW & 22kW",
    from: "£749",
    bullets: ["Load assessment", "App setup", "OZEV approved installer"],
    image: "/images/ev-charger.jpg",
    featured: true,
  },
];

export const areas = [
  { name: "Guildford", postcode: "GU1–GU5", primary: true },
  { name: "Godalming", postcode: "GU7", primary: false },
  { name: "Woking", postcode: "GU21", primary: false },
  { name: "Farnham", postcode: "GU9", primary: false },
  { name: "Cranleigh", postcode: "GU6", primary: false },
  { name: "Haslemere", postcode: "GU27", primary: false },
];

export const coveredOutwardCodes = [
  "GU1",
  "GU2",
  "GU3",
  "GU4",
  "GU5",
  "GU6",
  "GU7",
  "GU9",
  "GU21",
  "GU27",
];

export const trustPoints = [
  {
    label: "Google rating",
    value: "4.9",
    detail: "212 verified reviews",
    icon: "google",
  },
  {
    label: "Checkatrade score",
    value: "9.8",
    detail: "Verified local trade",
    icon: "seal",
  },
  {
    label: "Years on the tools",
    value: "22",
    detail: "Family-run since 2004",
    icon: "clock",
  },
  {
    label: "Accreditation",
    value: "NICEIC",
    detail: "Approved & Part P registered",
    icon: "shield",
  },
];

export const benefits = [
  {
    id: "price",
    title: "The price you're quoted is the price you pay.",
    body: "We survey first, then send a written fixed price. No hourly surprises, no vague estimates, no pressure to add work.",
    icon: "receipt",
    tone: "dark",
    span: "lg:col-span-7",
  },
  {
    id: "local",
    title: "One local team, start to finish.",
    body: "Guildford based, not a national call centre. The person who quotes your job is the person who signs it off.",
    icon: "pin",
    tone: "light",
    span: "lg:col-span-5",
  },
  {
    id: "certified",
    title: "Certified, tested, documented.",
    body: "Every circuit tested and every certificate emailed before we leave. Paperwork you can actually find when you need it.",
    icon: "seal",
    tone: "light",
    span: "lg:col-span-4",
  },
  {
    id: "care",
    title: "We treat your home like our own.",
    body: "Dust sheets down, cable routes planned, and a tidy finish. You shouldn't be able to tell we were there — except for the lights.",
    icon: "house",
    tone: "image",
    span: "lg:col-span-8",
    image: "/images/kitchen-lighting.jpg",
  },
];

export const reviews = [
  {
    quote:
      "They found the fault in twenty minutes, explained everything, and didn't try to sell me a rewire. Rare.",
    name: "Emma R.",
    location: "Guildford",
    service: "Emergency call-out",
    source: "Google",
    rating: 5,
    featured: true,
  },
  {
    quote:
      "Fuse board swapped, kitchen lights back on, and the certificate was in my inbox before they left.",
    name: "Tom H.",
    location: "Godalming",
    service: "Consumer unit upgrade",
    source: "Checkatrade",
    rating: 5,
    featured: false,
  },
  {
    quote:
      "The EV charger looks like it came with the house. Neat cable run, app sorted, no mess.",
    name: "Priya S.",
    location: "Woking",
    service: "EV charger installation",
    source: "Google",
    rating: 5,
    featured: false,
  },
];

export const pricing = [
  {
    id: "callout",
    name: "Call-out & fault finding",
    price: "£89",
    priceLabel: "standard call-out",
    description: "For tripped circuits, dead sockets and anything that needs a proper diagnosis.",
    features: [
      "Same-day visit where available",
      "First hour of fault finding included",
      "Written findings and next steps",
      "No call-out fee within GU postcodes",
    ],
    featured: false,
    cta: "Book a call-out",
  },
  {
    id: "consumer-unit",
    name: "Consumer unit upgrade",
    price: "£595",
    priceLabel: "from",
    description: "A safer, labelled board with modern protection. The upgrade most older homes need.",
    features: [
      "18th Edition RCBO consumer unit",
      "Surge protection included",
      "Full test and certificate",
      "12-month workmanship guarantee",
    ],
    featured: true,
    cta: "Get a fixed quote",
  },
  {
    id: "rewire",
    name: "Full house rewire",
    price: "£2,400",
    priceLabel: "from",
    description: "For homes with old rubber or fabric wiring that's ready for a full, certified refresh.",
    features: [
      "Free survey and fixed quote",
      "Room-by-room installation plan",
      "Dust protection as standard",
      "Building control notification handled",
    ],
    featured: false,
    cta: "Book a free survey",
  },
];

export const faqs = [
  {
    question: "How quickly can you get to me?",
    answer:
      "For emergencies across Guildford and the surrounding areas, we aim to be with you within 60 minutes. Planned work is usually booked within a few days, and we'll always give you a realistic window rather than an all-day maybe.",
  },
  {
    question: "Are you certified and insured?",
    answer:
      "Yes. We're NICEIC approved, Part P registered, and carry £5m public liability insurance. Every notifiable job is certified and logged, and we're happy to show our credentials before we start.",
  },
  {
    question: "Will I get a written quote before work starts?",
    answer:
      "Always. We survey the job first, then send a clear fixed price by email or WhatsApp. It includes labour, materials, and VAT, so there are no surprises when the invoice arrives.",
  },
  {
    question: "Do you cover my postcode?",
    answer:
      "We cover Guildford GU1–GU5 plus Godalming GU7, Woking GU21, Farnham GU9, Cranleigh GU6, and Haslemere GU27. If you're just outside that patch, call us — we can often still help.",
  },
  {
    question: "Do you provide electrical certificates?",
    answer:
      "Yes. Depending on the work, you'll receive an Electrical Installation Certificate, Minor Works Certificate, or EICR. We email a PDF copy and can post a printed version if you need one for a sale or rental.",
  },
  {
    question: "How do I pay?",
    answer:
      "Card, bank transfer, or cash. Most jobs don't need a deposit. For larger projects like rewires, we agree a simple staged payment plan before anything begins.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Tell us what's happening",
    body: "Call or send the form. We'll ask a few useful questions and book a visit.",
  },
  {
    number: "02",
    title: "Get a fixed price",
    body: "We survey the job and send a written quote. No obligation, no pressure.",
  },
  {
    number: "03",
    title: "We do the work",
    body: "A tidy, certified install with dust sheets down and a clear plan for the day.",
  },
  {
    number: "04",
    title: "Test, certify, hand over",
    body: "Every circuit tested, every certificate emailed, and a walkthrough before we go.",
  },
];
