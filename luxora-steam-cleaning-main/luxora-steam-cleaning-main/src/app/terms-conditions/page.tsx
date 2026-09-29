import type { Metadata } from "next";
import TermsConditionsPage from "@/components/TermsConditionsPage";

const BASE_URL = "https://luxorasteamcleaning.co.uk";

export const metadata: Metadata = {
  title: "Terms & Conditions | Luxora Steam Cleaning Ltd",
  description:
    "Read the Terms and Conditions governing use of the Luxora Steam Cleaning Ltd website and our professional cleaning services.",
  alternates: { canonical: `${BASE_URL}/terms-conditions` },
  openGraph: {
    title: "Terms & Conditions | Luxora Steam Cleaning Ltd",
    description:
      "Terms governing our cleaning services and website, governed by the laws of England and Wales.",
    url: `${BASE_URL}/terms-conditions`,
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
                "@id": `${BASE_URL}/terms-conditions`,
                url: `${BASE_URL}/terms-conditions`,
                name: "Terms & Conditions",
                isPartOf: { "@id": BASE_URL },
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                    { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: `${BASE_URL}/terms-conditions` },
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
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "24 Thornhill Avenue",
                  addressLocality: "Huddersfield",
                  postalCode: "HD3 3DR",
                  addressCountry: "GB",
                },
              },
            ],
          }),
        }}
      />
      <TermsConditionsPage />
    </>
  );
}
