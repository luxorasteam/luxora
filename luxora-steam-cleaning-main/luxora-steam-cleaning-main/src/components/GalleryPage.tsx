"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, X, ChevronLeft, ChevronRight as ChevronRightIcon, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

const images = [
  { src: "/images/gallery/gallery-1.jpg", alt: "Clean living room with pristine carpet after steam cleaning", caption: "Carpet Cleaning" },
  { src: "/images/gallery/gallery-2.jpg", alt: "Professional carpet steam cleaning in progress", caption: "Carpet Cleaning" },
  { src: "/images/gallery/gallery-3.jpg", alt: "Fresh clean bedroom with white bedding after mattress clean", caption: "Mattress Cleaning" },
  { src: "/images/gallery/gallery-4.jpg", alt: "Freshly cleaned modern sofa — before and after results", caption: "Sofa Cleaning" },
  { src: "/images/gallery/gallery-5.jpg", alt: "Sparkling clean kitchen floor after professional steam clean", caption: "Deep Cleaning" },
  { src: "/images/gallery/gallery-6.jpg", alt: "Deep cleaned bathroom tiles and surfaces", caption: "Deep Cleaning" },
  { src: "/images/gallery/gallery-7.jpg", alt: "Clean modern kitchen after professional cleaning service", caption: "Deep Cleaning" },
  { src: "/images/gallery/gallery-8.jpg", alt: "Clean bathroom with bathtub after steam cleaning treatment", caption: "Deep Cleaning" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + images.length) % images.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft")  navigate(-1);
    if (e.key === "ArrowRight") navigate(1);
    if (e.key === "Escape")     setLightbox(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/60 to-background" />
        <div className="container mx-auto px-6 relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-muted-foreground text-xs mb-6 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground/80">Gallery</span>
          </nav>
          <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Our Work</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            Real Results, Real Homes
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Browse real cleaning results from our customers across Huddersfield and the wider UK. Every image shows professional steam cleaning at its best.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 relative"
                onClick={() => setLightbox(i)}
              >
                <div className="aspect-square">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold">{img.caption}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/30" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Ready for Results Like These?</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Book Your Professional Clean Today</h2>
            <p className="text-muted-foreground mb-8">
              Get a free, no-obligation quote. We serve Huddersfield and surrounding areas across the UK — with same-day bookings available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2 rounded-xl shadow-md">
                  Get A Free Quote <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:07543958332">
                <Button variant="outline" size="lg" className="gap-2 rounded-xl">
                  <Phone className="w-4 h-4" /> Call Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-label="Image lightbox"
            aria-modal="true"
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              aria-label="Next image"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
            <div className="absolute bottom-6 flex flex-col items-center gap-1">
              <p className="text-white font-medium text-sm">{images[lightbox].caption}</p>
              <p className="text-white/50 text-xs">{lightbox + 1} / {images.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
