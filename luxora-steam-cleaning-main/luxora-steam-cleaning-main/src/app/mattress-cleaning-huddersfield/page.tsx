import type { Metadata } from "next";
import MattressCleaningHuddersfieldPage from "@/components/MattressCleaningHuddersfieldPage";

const BASE_URL = "https://luxorasteamcleaning.co.uk";
const PAGE_PATH = "/mattress-cleaning-huddersfield";

export const metadata: Metadata = {
  title: "Mattress Cleaning Huddersfield | Luxora Steam Cleaning",
  description:
    "Professional mattress cleaning in Huddersfield for homes and bedrooms. Deep cleaning, stain treatment and odour removal. Get a free quote.",
  alternates: {
    canonical: `${BASE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Mattress Cleaning Huddersfield | Luxora Steam Cleaning",
    description:
      "Professional mattress cleaning in Huddersfield for homes and bedrooms. Deep cleaning, stain treatment and odour removal. Get a free quote.",
    url: `${BASE_URL}${PAGE_PATH}`,
    siteName: "Luxora Steam Cleaning",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/services/mattress-cleaning-service-section.jpg`,
        width: 1200,
        height: 630,
        alt: "Professional mattress cleaning in Huddersfield by Luxora Steam Cleaning",
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
      name: "Mattress Cleaning Huddersfield",
      provider: { "@id": `${BASE_URL}/#business` },
      serviceType: "Mattress Cleaning",
      areaServed: { "@type": "City", name: "Huddersfield" },
      description:
        "Professional mattress cleaning for homes in Huddersfield. Deep cleaning, stain treatment and odour removal.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BASE_URL}/service-areas` },
        { "@type": "ListItem", position: 3, name: "Huddersfield", item: `${BASE_URL}/service-areas/huddersfield` },
        { "@type": "ListItem", position: 4, name: "Mattress Cleaning", item: `${BASE_URL}${PAGE_PATH}` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does mattress cleaning cost in Huddersfield?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost depends on the mattress size, type, overall condition and whether there are stains requiring individual attention. Contact Luxora for a free, no-obligation quote.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a mattress take to dry after cleaning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Drying time depends on the mattress type, fabric and ventilation in the room. We recommend allowing several hours and providing good air circulation. Avoid placing bedding on the mattress until it is fully dry.",
          },
        },
        {
          "@type": "Question",
          name: "How often should I have my mattress professionally cleaned?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "This depends on personal preference and how much the mattress is used. Many people consider having a mattress cleaned every six to twelve months, though there is no fixed rule.",
          },
        },
        {
          "@type": "Question",
          name: "Can mattress cleaning help with allergy sufferers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A professional clean can remove surface dust and debris. If you have specific concerns about allergens, it is worth discussing them when requesting your quote so we can advise on what the service can realistically achieve.",
          },
        },
        {
          "@type": "Question",
          name: "Can you clean a mattress with significant staining?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We can assess any staining present before we begin. Results depend on the type of stain, how long it has been there, the mattress material and whether previous treatments have been applied. We aim for the best realistic outcome.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to remove the mattress from the bed frame?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In most cases we can clean the mattress in situ on the bed frame. If access to certain areas is important, it may help to lift the mattress, which we can discuss when arranging the appointment.",
          },
        },
        {
          "@type": "Question",
          name: "Which parts of Huddersfield do you cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide mattress cleaning across Huddersfield and nearby areas. Send us your postcode if you would like us to confirm coverage for your address.",
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
      <MattressCleaningHuddersfieldPage />
    </>
  );
}
