import type { Metadata } from "next";
import PrivacyPolicyPage from "@/components/PrivacyPolicyPage";

const BASE_URL = "https://luxorasteamcleaning.co.uk";

export const metadata: Metadata = {
  title: "Privacy Policy | Luxora Steam Cleaning Ltd",
  description:
    "Read our Privacy Policy to understand how Luxora Steam Cleaning Ltd collects, uses and protects your personal data in accordance with UK GDPR.",
  alternates: { canonical: `${BASE_URL}/privacy-policy` },
  openGraph: {
    title: "Privacy Policy | Luxora Steam Cleaning Ltd",
    description:
      "How Luxora Steam Cleaning Ltd handles your personal data under UK GDPR.",
    url: `${BASE_URL}/privacy-policy`,
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
                "@id": `${BASE_URL}/privacy-policy`,
                url: `${BASE_URL}/privacy-policy`,
                name: "Privacy Policy",
                isPartOf: { "@id": BASE_URL },
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${BASE_URL}/privacy-policy` },
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
      <PrivacyPolicyPage />
    </>
  );
}
