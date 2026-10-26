import { areas, faqs, pricing, reviews, services, site } from "@/data/site";

export function buildJsonLd() {
  const businessId = `${site.siteUrl}/#electrician`;

  const electrician = {
    "@type": "Electrician",
    "@id": businessId,
    name: site.name,
    alternateName: "VoltCraft",
    description: site.description,
    url: site.siteUrl,
    telephone: `+44${site.phone.replace(/^0/, "")}`,
    email: site.email,
    image: `${site.siteUrl}/images/hero-electrician.jpg`,
    logo: `${site.siteUrl}/icon.svg`,
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Card, Bank transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "42 North Street",
      addressLocality: site.town,
      addressRegion: site.county,
      postalCode: site.postcode,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: areas.map((area) => ({
      "@type": "City",
      name: area.name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating,
      reviewCount: site.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewBody: review.quote,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Electrical services in Guildford",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          areaServed: `${site.town}, ${site.county}`,
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "GBP",
          minPrice: service.from.replace(/[^\d.]/g, ""),
        },
      })),
    },
    knowsAbout: [
      "Emergency electrical repairs",
      "Consumer unit upgrades",
      "House rewires",
      "EV charger installation",
      "Electrical installation condition reports",
    ],
    sameAs: [site.mapsUrl],
  };

  const serviceSchemas = services.map((service) => ({
    "@type": "Service",
    "@id": `${site.siteUrl}/#service-${service.id}`,
    name: service.title,
    description: service.description,
    serviceType: service.title,
    provider: { "@id": businessId },
    areaServed: areas.map((area) => ({
      "@type": "City",
      name: area.name,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      price: service.from.replace(/[^\d.]/g, ""),
      availability: "https://schema.org/InStock",
      url: `${site.siteUrl}/#quote`,
    },
  }));

  const offers = pricing.map((plan) => ({
    "@type": "Offer",
    name: plan.name,
    description: plan.description,
    priceCurrency: "GBP",
    price: plan.price.replace(/[^\d.]/g, ""),
    url: `${site.siteUrl}/#pricing`,
  }));

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${site.siteUrl}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${site.siteUrl}/#website`,
    url: site.siteUrl,
    name: site.name,
    description: site.description,
    publisher: { "@id": businessId },
    inLanguage: "en-GB",
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${site.siteUrl}/#webpage`,
    url: site.siteUrl,
    name: "Electrician in Guildford | VoltCraft Electrical",
    description: site.description,
    isPartOf: { "@id": `${site.siteUrl}/#website` },
    about: { "@id": businessId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${site.siteUrl}/images/og.jpg`,
    },
    inLanguage: "en-GB",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      electrician,
      website,
      webpage,
      faqPage,
      ...serviceSchemas,
      ...offers,
    ],
  };
}
