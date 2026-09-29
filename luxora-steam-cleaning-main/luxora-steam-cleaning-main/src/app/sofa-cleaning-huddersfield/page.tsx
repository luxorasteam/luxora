import type { Metadata } from "next";
import SofaCleaningHuddersfieldPage from "@/components/SofaCleaningHuddersfieldPage";

const BASE_URL = "https://luxorasteamcleaning.co.uk";
const PAGE_PATH = "/sofa-cleaning-huddersfield";

export const metadata: Metadata = {
  title: "Sofa Cleaning Huddersfield | Luxora Steam Cleaning",
  description:
    "Professional sofa cleaning in Huddersfield for homes and businesses. Upholstery deep cleaning, stain treatment and flexible appointments. Get a free quote.",
  alternates: {
    canonical: `${BASE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Sofa Cleaning Huddersfield | Luxora Steam Cleaning",
    description:
      "Professional sofa cleaning in Huddersfield for homes and businesses. Upholstery deep cleaning, stain treatment and flexible appointments. Get a free quote.",
    url: `${BASE_URL}${PAGE_PATH}`,
    siteName: "Luxora Steam Cleaning",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/services/sofa-cleaning-services-section.jpg`,
        width: 1200,
        height: 630,
        alt: "Professional sofa cleaning in Huddersfield by Luxora Steam Cleaning",
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
      name: "Sofa Cleaning Huddersfield",
      provider: { "@id": `${BASE_URL}/#business` },
      serviceType: "Sofa Cleaning",
      areaServed: { "@type": "City", name: "Huddersfield" },
      description:
        "Professional sofa and upholstery cleaning for homes and businesses in Huddersfield. Deep cleaning, stain treatment and flexible appointments.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BASE_URL}/service-areas` },
        { "@type": "ListItem", position: 3, name: "Huddersfield", item: `${BASE_URL}/service-areas/huddersfield` },
        { "@type": "ListItem", position: 4, name: "Sofa Cleaning", item: `${BASE_URL}${PAGE_PATH}` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does sofa cleaning cost in Huddersfield?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The cost depends on the size and type of sofa, its fabric, overall condition and whether there are stains requiring individual treatment. Contact Luxora for a free, no-obligation quote for your sofa.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take for a sofa to dry after cleaning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Drying time varies depending on the fabric type, thickness of the upholstery, room ventilation and temperature. Most sofas are dry within a few hours, though thicker fabrics may take a little longer.",
          },
        },
        {
          "@type": "Question",
          name: "Can you clean leather sofas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We can clean leather and faux-leather sofas. We assess the material before cleaning to make sure the right method and products are used.",
          },
        },
        {
          "@type": "Question",
          name: "Do you clean sofas with pet hair and pet smells?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We can pay additional attention to areas with pet hair, marks and odours and clean the upholstery according to its condition and material.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book sofa and carpet cleaning at the same time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Luxora offers both sofa and carpet cleaning. Let us know when requesting your quote and both can be arranged in a single appointment.",
          },
        },
        {
          "@type": "Question",
          name: "Is professional sofa cleaning better than hiring a machine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional cleaning equipment is generally more powerful and better suited to different fabric types than domestic hire machines. We also assess the fabric first to reduce the risk of damage or over-wetting.",
          },
        },
        {
          "@type": "Question",
          name: "Which parts of Huddersfield do you cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide sofa cleaning across Huddersfield and nearby areas. Send us your postcode if you would like us to confirm coverage for your address.",
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
      <SofaCleaningHuddersfieldPage />
    </>
  );
}
