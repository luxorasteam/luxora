import type { Metadata } from "next";
import CarpetCleaningHuddersfieldPage from "@/components/CarpetCleaningHuddersfieldPage";

const BASE_URL = "https://www.luxorastreamcleaning.co.uk";
const PAGE_PATH = "/carpet-cleaning-huddersfield";

export const metadata: Metadata = {
  title: "Carpet Cleaning Huddersfield | Luxora Steam Cleaning",
  description:
    "Professional carpet cleaning in Huddersfield for homes and businesses. Deep cleaning, stain treatment and local service. Get a free quote.",
  alternates: {
    canonical: `${BASE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Carpet Cleaning Huddersfield | Luxora Steam Cleaning",
    description:
      "Professional carpet cleaning in Huddersfield for homes and businesses. Deep cleaning, stain treatment and local service. Get a free quote.",
    url: `${BASE_URL}${PAGE_PATH}`,
    siteName: "Luxora Steam Cleaning",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/huddersfield/carpet-cleaning-huddersfield.webp`,
        width: 1400,
        height: 788,
        alt: "Professional carpet cleaning in Huddersfield by Luxora Steam Cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carpet Cleaning Huddersfield | Luxora Steam Cleaning",
    description:
      "Professional carpet cleaning in Huddersfield for homes and businesses. Deep cleaning, stain treatment and local service. Get a free quote.",
    images: [{
      url: `${BASE_URL}/images/huddersfield/carpet-cleaning-huddersfield.webp`,
      alt: "Professional carpet cleaning in Huddersfield by Luxora Steam Cleaning",
    }],
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
      "@id": `${BASE_URL}${PAGE_PATH}#service`,
      name: "Carpet Cleaning in Huddersfield",
      url: `${BASE_URL}${PAGE_PATH}`,
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
        { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "Carpet Cleaning", item: `${BASE_URL}/services/carpet-cleaning` },
        { "@type": "ListItem", position: 4, name: "Carpet Cleaning Huddersfield", item: `${BASE_URL}${PAGE_PATH}` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
  {
    "@type": "Question",
    "name": "How much does carpet cleaning cost in Huddersfield?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The cost of carpet cleaning in Huddersfield depends on factors such as the number and size of rooms, carpet condition and whether there are stains or heavily used areas requiring extra attention. Contact Luxora for a tailored quote based on your property."
    }
  },
  {
    "@type": "Question",
    "name": "How long do carpets take to dry after cleaning?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Drying time varies depending on the carpet material, room temperature, ventilation and cleaning method used. We will provide suitable drying guidance after the work is complete."
    }
  },
  {
    "@type": "Question",
    "name": "Can you remove old carpet stains?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We can treat many common stains, but no responsible carpet cleaning company in Huddersfield should guarantee that every stain will disappear completely. Results depend on the stain type, how long it has been present, the carpet fibres and any previous treatments."
    }
  },
  {
    "@type": "Question",
    "name": "Do you clean carpets in homes with pets?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. We clean carpets in homes with pets and can pay extra attention to areas affected by pet hair, muddy marks and suitable pet-related stains. Let us know about any specific problem areas when requesting your quote."
    }
  },
  {
    "@type": "Question",
    "name": "Do you clean stairs and landings?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. Carpeted stairs and landings are often some of the busiest areas in a home. They can be included as part of your house carpet cleaning in Huddersfield."
    }
  },
  {
    "@type": "Question",
    "name": "Which areas of Huddersfield do you cover?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We provide local carpet cleaning in Huddersfield and nearby areas. Send us your postcode when requesting a quote and we can confirm whether your property is within our current service area."
    }
  }
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
