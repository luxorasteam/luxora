import type { Metadata } from "next";
import ChairDiningCleaningHuddersfieldPage from "@/components/ChairDiningCleaningHuddersfieldPage";

const BASE_URL = "https://luxorasteamcleaning.co.uk";
const PAGE_PATH = "/chair-dining-cleaning-huddersfield";

export const metadata: Metadata = {
  title: "Chair & Dining Cleaning Huddersfield | Luxora Steam Cleaning",
  description:
    "Professional chair and dining chair cleaning in Huddersfield for homes and businesses. Upholstery deep cleaning, stain treatment and flexible appointments. Get a free quote.",
  alternates: {
    canonical: `${BASE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Chair & Dining Cleaning Huddersfield | Luxora Steam Cleaning",
    description:
      "Professional chair and dining chair cleaning in Huddersfield for homes and businesses. Upholstery deep cleaning, stain treatment and flexible appointments. Get a free quote.",
    url: `${BASE_URL}${PAGE_PATH}`,
    siteName: "Luxora Steam Cleaning",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/services/chair_dining-servicesection.jpg`,
        width: 1200,
        height: 630,
        alt: "Professional chair and dining cleaning in Huddersfield by Luxora Steam Cleaning",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "Luxora Steam Cleaning Ltd",
      url: BASE_URL,
      telephone: "+447543958332",
      email: "Steamcleaningserviceltd@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "24 Thornhill Avenue",
        addressLocality: "Huddersfield",
        postalCode: "HD3 3DR",
        addressCountry: "GB",
      },
      areaServed: { "@type": "City", name: "Huddersfield" },
    },
    {
      "@type": "Service",
      name: "Chair & Dining Cleaning Huddersfield",
      provider: { "@id": `${BASE_URL}/#business` },
      serviceType: "Chair & Dining Cleaning",
      areaServed: { "@type": "City", name: "Huddersfield" },
      description:
        "Professional chair and dining chair cleaning for homes and businesses in Huddersfield. Deep cleaning, stain treatment and flexible appointments.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BASE_URL}/service-areas` },
        { "@type": "ListItem", position: 3, name: "Huddersfield", item: `${BASE_URL}/service-areas/huddersfield` },
        { "@type": "ListItem", position: 4, name: "Chair & Dining Cleaning", item: `${BASE_URL}${PAGE_PATH}` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does chair cleaning cost in Huddersfield?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost depends on the number of chairs, the fabric type, the overall condition and whether any individual stains require specific treatment. Contact Luxora for a free quote.",
          },
        },
        {
          "@type": "Question",
          name: "Can you clean a full dining chair set?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We can clean a full dining chair set in a single visit. Let us know how many chairs and the fabric type when requesting your quote so we can plan the work accordingly.",
          },
        },
        {
          "@type": "Question",
          name: "How long do chairs take to dry after cleaning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Drying time depends on the fabric, padding thickness, room ventilation and temperature. Most upholstered chairs are dry within a few hours in a well-ventilated room.",
          },
        },
        {
          "@type": "Question",
          name: "Can you remove food and grease stains from dining chairs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We can assess food and grease-related stains before treatment. Results depend on the stain type, how long it has been present and the fabric. We aim for the best realistic outcome for each individual chair.",
          },
        },
        {
          "@type": "Question",
          name: "Do you clean leather or faux-leather dining chairs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We can clean leather and faux-leather chair upholstery. We assess the material before cleaning to use the right method and products.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book chair cleaning with carpet or sofa cleaning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We can clean chairs, carpets and sofas in the same appointment. Tell us what you need when requesting your quote so the visit can be planned efficiently.",
          },
        },
        {
          "@type": "Question",
          name: "Which parts of Huddersfield do you cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide chair and dining cleaning across Huddersfield and surrounding areas. Send us your postcode and we will confirm whether we cover your address.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ChairDiningCleaningHuddersfieldPage />
    </>
  );
}
