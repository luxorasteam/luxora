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

export default function HomePage() {
  return (
    <div className="min-h-screen">
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
