import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToHash from "@/components/ScrollToHash";

const BASE_URL = "https://luxorasteamcleaning.co.uk";

export const metadata: Metadata = {
  title: "Steam Cleaning Services | Luxora Steam Cleaning",
  description:
    "Steam cleaning services for homes and businesses across the UK. Carpet, sofa, mattress and curtain cleaning. Get a free quote today.",
  alternates: { canonical: `${BASE_URL}/` },
  openGraph: {
    title: "Steam Cleaning Services | Luxora Steam Cleaning",
    description:
      "Steam cleaning services for homes and businesses across the UK. Carpet, sofa, mattress and curtain cleaning. Get a free quote today.",
    url: `${BASE_URL}/`,
    siteName: "Luxora Steam Cleaning Ltd",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steam Cleaning Services | Luxora Steam Cleaning",
    description:
      "Steam cleaning services for homes and businesses across the UK. Carpet, sofa, mattress and curtain cleaning. Get a free quote today.",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": `${BASE_URL}/`,
                url: `${BASE_URL}/`,
                name: "Steam Cleaning Services | Luxora Steam Cleaning",
                description:
                  "Steam cleaning services for homes and businesses across the UK. Carpet, sofa, mattress and curtain cleaning. Get a free quote today.",
                isPartOf: { "@id": BASE_URL },
              },
              {
                "@type": ["LocalBusiness", "CleaningService"],
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
                areaServed: {
                  "@type": "Country",
                  name: "United Kingdom",
                },
                serviceType: [
                  "Carpet Cleaning",
                  "Sofa Cleaning",
                  "Mattress Cleaning",
                  "Curtain Cleaning",
                  "Chair and Dining Cleaning",
                ],
              },
            ],
          }),
        }}
      />
      <Suspense fallback={null}>
        <ScrollToHash />
      </Suspense>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Process />
      <BeforeAfter />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
