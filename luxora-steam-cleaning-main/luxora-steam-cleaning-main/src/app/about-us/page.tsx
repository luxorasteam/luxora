import type { Metadata } from "next";
import AboutUsPage from "@/components/AboutUsPage";

const BASE_URL = "https://luxorasteamcleaning.co.uk";

export const metadata: Metadata = {
  title: "About Us | Luxora Steam Cleaning Ltd — Professional Cleaners in Huddersfield",
  description:
    "Learn about Luxora Steam Cleaning Ltd — 15+ years of professional steam cleaning experience across the UK. Fully insured, eco-friendly, 100% satisfaction guaranteed.",
  alternates: { canonical: `${BASE_URL}/about-us` },
  openGraph: {
    title: "About Us | Luxora Steam Cleaning Ltd",
    description:
      "15+ years of professional steam cleaning across Huddersfield and the UK. Eco-friendly, fully insured, satisfaction guaranteed.",
    url: `${BASE_URL}/about-us`,
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
                "@id": `${BASE_URL}/about-us`,
                url: `${BASE_URL}/about-us`,
                name: "About Us",
                isPartOf: { "@id": BASE_URL },
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                    { "@type": "ListItem", position: 2, name: "About Us", item: `${BASE_URL}/about-us` },
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
                foundingDate: "2009",
                description:
                  "Professional steam cleaning services for carpets, sofas, mattresses, curtains and upholstery across Huddersfield and the UK.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "24 Thornhill Avenue",
                  addressLocality: "Huddersfield",
                  postalCode: "HD3 3DR",
                  addressCountry: "GB",
                },
                areaServed: [
                  "Huddersfield", "Leeds", "Manchester", "Bradford", "Sheffield",
                  "Liverpool", "York", "Hull", "Nottingham", "Newcastle",
                ],
              },
            ],
          }),
        }}
      />
      <AboutUsPage />
    </>
  );
}
