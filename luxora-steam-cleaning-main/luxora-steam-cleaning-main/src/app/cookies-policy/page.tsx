import type { Metadata } from "next";
import CookiesPolicyPage from "@/components/CookiesPolicyPage";

const BASE_URL = "https://luxorasteamcleaning.co.uk";

export const metadata: Metadata = {
  title: "Cookies Policy | Luxora Steam Cleaning Ltd",
  description:
    "Learn about the cookies used on the Luxora Steam Cleaning website and how to manage your preferences in line with UK PECR regulations.",
  alternates: { canonical: `${BASE_URL}/cookies-policy` },
  openGraph: {
    title: "Cookies Policy | Luxora Steam Cleaning Ltd",
    description:
      "Cookies used on our website and how to manage your preferences under UK PECR.",
    url: `${BASE_URL}/cookies-policy`,
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
                "@id": `${BASE_URL}/cookies-policy`,
                url: `${BASE_URL}/cookies-policy`,
                name: "Cookies Policy",
                isPartOf: { "@id": BASE_URL },
                breadcrumb: {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
                    { "@type": "ListItem", position: 2, name: "Cookies Policy", item: `${BASE_URL}/cookies-policy` },
                  ],
                },
              },
            ],
          }),
        }}
      />
      <CookiesPolicyPage />
    </>
  );
}
