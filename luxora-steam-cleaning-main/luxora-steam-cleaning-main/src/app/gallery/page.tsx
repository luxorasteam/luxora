import type { Metadata } from "next";
import GalleryPage from "@/components/GalleryPage";

const BASE_URL = "https://luxorasteamcleaning.co.uk";

export const metadata: Metadata = {
  title: "Gallery | Luxora Steam Cleaning Ltd — Real Cleaning Results",
  description:
    "Browse real before-and-after cleaning results from Luxora Steam Cleaning Ltd. Professional carpet, sofa, mattress and upholstery cleaning in Huddersfield and across the UK.",
  alternates: { canonical: `${BASE_URL}/gallery` },
  openGraph: {
    title: "Gallery | Luxora Steam Cleaning Ltd",
    description:
      "Real cleaning results from professional steam cleaning across Huddersfield and the UK.",
    url: `${BASE_URL}/gallery`,
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
                "@id": `${BASE_URL}/gallery`,
                url: `${BASE_URL}/gallery`,
                name: "Gallery",
                isPartOf: { "@id": BASE_URL },
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                    { "@type": "ListItem", position: 2, name: "Gallery", item: `${BASE_URL}/gallery` },
                  ],
                },
              },
            ],
          }),
        }}
      />
      <GalleryPage />
    </>
  );
}
