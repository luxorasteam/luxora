import type { Metadata } from "next";
import CurtainCleaningHuddersfieldPage from "@/components/CurtainCleaningHuddersfieldPage";

const BASE_URL = "https://luxorasteamcleaning.co.uk";
const PAGE_PATH = "/curtain-cleaning-huddersfield";

export const metadata: Metadata = {
  title: "Curtain Cleaning Huddersfield | Luxora Steam Cleaning",
  description:
    "Professional curtain cleaning in Huddersfield for homes and businesses. In-situ and specialist fabric cleaning, stain treatment and flexible appointments. Get a free quote.",
  alternates: {
    canonical: `${BASE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Curtain Cleaning Huddersfield | Luxora Steam Cleaning",
    description:
      "Professional curtain cleaning in Huddersfield for homes and businesses. In-situ and specialist fabric cleaning, stain treatment and flexible appointments. Get a free quote.",
    url: `${BASE_URL}${PAGE_PATH}`,
    siteName: "Luxora Steam Cleaning",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/services/cutain-cleaning-services_section.jpg`,
        width: 1200,
        height: 630,
        alt: "Professional curtain cleaning in Huddersfield by Luxora Steam Cleaning",
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
      name: "Curtain Cleaning Huddersfield",
      provider: { "@id": `${BASE_URL}/#business` },
      serviceType: "Curtain Cleaning",
      areaServed: { "@type": "City", name: "Huddersfield" },
      description:
        "Professional curtain cleaning for homes and businesses in Huddersfield. In-situ and specialist fabric cleaning with stain treatment.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BASE_URL}/service-areas` },
        { "@type": "ListItem", position: 3, name: "Huddersfield", item: `${BASE_URL}/service-areas/huddersfield` },
        { "@type": "ListItem", position: 4, name: "Curtain Cleaning", item: `${BASE_URL}${PAGE_PATH}` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does curtain cleaning cost in Huddersfield?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost depends on the fabric type, curtain size, lining and overall condition. Contact Luxora for a free, no-obligation quote based on your specific curtains.",
          },
        },
        {
          "@type": "Question",
          name: "Do you take the curtains down before cleaning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on the fabric and the cleaning method required. In many cases we can clean curtains in situ. Where taking them down is necessary or preferable, we can discuss this when arranging the appointment.",
          },
        },
        {
          "@type": "Question",
          name: "Can curtain cleaning cause shrinkage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Shrinkage risk depends on the curtain fabric. We assess the material and lining before cleaning and use a method suited to the specific fabric to minimise any risk. Certain delicate fabrics may have limited cleaning options.",
          },
        },
        {
          "@type": "Question",
          name: "How long do curtains take to dry after cleaning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Drying time varies depending on the fabric weight, room ventilation and temperature. Curtains cleaned in situ typically benefit from open windows and good air flow. We can advise on drying once the clean is complete.",
          },
        },
        {
          "@type": "Question",
          name: "Can you clean curtains with mould or condensation damage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We can assess curtains with mould-related soiling before cleaning. Results depend on how deeply the mould has penetrated the fabric. We will let you know what the cleaning can realistically achieve.",
          },
        },
        {
          "@type": "Question",
          name: "Do you clean voile and sheer curtains?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we can clean voile and sheer fabrics. These require particular care due to the delicate nature of the material. We assess them before cleaning to confirm the appropriate method.",
          },
        },
        {
          "@type": "Question",
          name: "Which parts of Huddersfield do you cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide curtain cleaning across Huddersfield and nearby areas. Send us your postcode and we will confirm whether we cover your address.",
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
      <CurtainCleaningHuddersfieldPage />
    </>
  );
}
