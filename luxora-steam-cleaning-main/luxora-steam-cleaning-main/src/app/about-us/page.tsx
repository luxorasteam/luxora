import type { Metadata } from "next";
import AboutUsPage from "@/components/AboutUsPage";

const BASE_URL = "https://www.luxorastreamcleaning.co.uk";

export const metadata: Metadata = {
  title: "About Luxora Steam Cleaning | Our Story & Team",
  description:
    "Meet Luxora Steam Cleaning Ltd, a Huddersfield-based team with over 15 years of industry experience. Learn about our story, values and careful approach.",
  alternates: { canonical: `${BASE_URL}/about-us` },
  openGraph: {
    title: "About Us | Luxora Steam Cleaning Ltd",
    description:
      "Learn about our story, experienced team and commitment to careful service, honest advice and clear communication.",
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
                "@type": "AboutPage",
                "@id": `${BASE_URL}/about-us`,
                url: `${BASE_URL}/about-us`,
                name: "About Luxora Steam Cleaning",
                isPartOf: { "@id": BASE_URL },
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                    { "@type": "ListItem", position: 2, name: "About Luxora Steam Cleaning", item: `${BASE_URL}/about-us` },
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
                description:
                  "UK-based cleaning company focused on careful, reliable service for homes and businesses, with more than 15 years of industry experience.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "24 Thornhill Avenue",
                  addressLocality: "Huddersfield",
                  postalCode: "HD3 3DR",
                  addressCountry: "GB",
                },
                areaServed: { "@type": "Country", name: "United Kingdom" },
              },
            ],
          }),
        }}
      />
      <AboutUsPage />
    </>
  );
}
