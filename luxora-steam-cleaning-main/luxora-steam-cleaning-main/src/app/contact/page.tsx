import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

const BASE_URL = "https://luxorasteamcleaning.co.uk";

export const metadata: Metadata = {
  title: "Contact Us | Luxora Steam Cleaning Ltd — Free Quote Huddersfield",
  description:
    "Contact Luxora Steam Cleaning Ltd for a free, no-obligation quote. Call 07543 958332 or fill in our form. Same-day appointments available 24/7 across Huddersfield and the UK.",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: "Contact Us | Luxora Steam Cleaning Ltd",
    description:
      "Get a free quote for professional steam cleaning in Huddersfield. Call 07543 958332. Same-day appointments available.",
    url: `${BASE_URL}/contact`,
    siteName: "Luxora Steam Cleaning Ltd",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": `${BASE_URL}/contact`,
                url: `${BASE_URL}/contact`,
                name: "Contact Us",
                isPartOf: { "@id": BASE_URL },
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                    { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE_URL}/contact` },
                  ],
                },
              },
              {
                "@type": "LocalBusiness",
                "@id": BASE_URL,
                name: "Luxora Steam Cleaning Ltd",
                url: BASE_URL,
                telephone: "+447543958332",
                email: "Steamcleaningserviceltd@gmail.com",
                openingHours: "Mo-Su 00:00-23:59",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "24 Thornhill Avenue",
                  addressLocality: "Huddersfield",
                  postalCode: "HD3 3DR",
                  addressCountry: "GB",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 53.6607,
                  longitude: -1.7861,
                },
                hasMap: "https://www.google.com/maps/place/Luxora+Steam+Cleaning+ltd",
              },
            ],
          }),
        }}
      />
      <ContactPage />
    </>
  );
}
