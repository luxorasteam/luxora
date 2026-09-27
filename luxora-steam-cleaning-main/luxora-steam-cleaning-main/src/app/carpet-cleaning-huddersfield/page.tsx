import type { Metadata } from "next";
import CarpetCleaningHuddersfieldPage from "@/components/CarpetCleaningHuddersfieldPage";

const BASE_URL = "https://luxorasteamcleaning.co.uk";
const PAGE_PATH = "/carpet-cleaning-huddersfield";

export const metadata: Metadata = {
  title: "Carpet Cleaning Huddersfield | Luxora Steam Cleaning",
  description:
    "Professional carpet cleaning in Huddersfield for homes and businesses. Deep cleaning, stain treatment and flexible appointments. Get a free quote.",
  alternates: {
    canonical: `${BASE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Carpet Cleaning Huddersfield | Luxora Steam Cleaning",
    description:
      "Professional carpet cleaning in Huddersfield for homes and businesses. Deep cleaning, stain treatment and flexible appointments. Get a free quote.",
    url: `${BASE_URL}${PAGE_PATH}`,
    siteName: "Luxora Steam Cleaning",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/services/carpet-services-section.jpg`,
        width: 1200,
        height: 630,
        alt: "Professional carpet cleaning in Huddersfield by Luxora Steam Cleaning",
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
      name: "Carpet Cleaning Huddersfield",
      provider: { "@id": `${BASE_URL}/#business` },
      serviceType: "Carpet Cleaning",
      areaServed: { "@type": "City", name: "Huddersfield" },
      description:
        "Professional carpet cleaning for homes and businesses in Huddersfield. Deep cleaning, stain treatment and flexible appointments.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${BASE_URL}/service-areas` },
        { "@type": "ListItem", position: 3, name: "Huddersfield", item: `${BASE_URL}/service-areas/huddersfield` },
        { "@type": "ListItem", position: 4, name: "Carpet Cleaning", item: `${BASE_URL}${PAGE_PATH}` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does carpet cleaning cost in Huddersfield?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The price depends on factors such as the number and size of rooms, carpet condition and whether there are stains or areas requiring extra treatment. Contact Luxora for a free quote based on your property.",
          },
        },
        {
          "@type": "Question",
          name: "How long do carpets take to dry after cleaning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Drying time varies depending on the carpet material, room ventilation, temperature and cleaning required. Many carpets typically dry within approximately 2 to 4 hours, although some may take longer.",
          },
        },
        {
          "@type": "Question",
          name: "Can you remove every carpet stain?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No professional carpet cleaner can responsibly guarantee removal of every stain. Results depend on what caused the stain, how long it has been present, previous treatments and the carpet fibres. We assess stains and aim for the best safe result possible.",
          },
        },
        {
          "@type": "Question",
          name: "Do you clean carpets in homes with pets?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We clean carpets in homes with pets and can pay additional attention to pet-related marks, hair and problem areas.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer commercial carpet cleaning in Huddersfield?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We can provide carpet cleaning for suitable offices and commercial properties as well as residential homes.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book carpet and sofa cleaning together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Luxora offers both carpet and sofa cleaning. Tell us which items you need cleaned when requesting your quote so the work can be planned together.",
          },
        },
        {
          "@type": "Question",
          name: "Which parts of Huddersfield do you cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide carpet cleaning across Huddersfield and nearby areas. Send us your postcode if you would like us to confirm coverage for your property.",
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
      <CarpetCleaningHuddersfieldPage />
    </>
  );
}
