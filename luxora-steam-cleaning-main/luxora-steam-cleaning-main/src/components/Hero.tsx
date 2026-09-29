"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Phone } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { num: "15+", label: "Years Experience" },
  { num: "24/7", label: "Availability" },
  { num: "UK-Wide", label: "Coverage" },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden" style={{ minHeight: "calc(100vh - 0px)" }}>
      {/* Background image */}
      <img
        src="https://images.fillout.com/764675/9ea7pkyjur/generated-images/14UfjHpWvkDnyCWvt4ZpMz/img_-hq-KpZlsD2L1xc5.jpg"
        alt="Professional steam cleaning — clean modern living space"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient overlay — stronger on left so text is always legible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />

      {/* Content */}
      <div className="relative flex flex-col justify-center min-h-[inherit] px-6 md:px-12 lg:px-20 max-w-7xl mx-auto py-32 md:py-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-300 shrink-0" />
            <span className="text-white/90 text-sm font-medium">Professional Steam Cleaning Services</span>
          </motion.div>

          {/* H1 — two visual lines, not forced wrapping */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-5">
            Steam Cleaning Services<br className="hidden md:block" />{" "}
            for{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Homes &amp; Businesses
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 max-w-lg leading-relaxed mb-8">
            Professional steam cleaning for carpets, sofas, mattresses, curtains and upholstery. Serving homes and businesses across the UK.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="/contact">
              <Button size="lg" className="gap-2 text-base px-7 py-6 rounded-xl shadow-lg">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="tel:07543958332">
              <button className="inline-flex items-center gap-2 text-base px-7 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all font-medium">
                <Phone className="w-4 h-4" /> Call Now
              </button>
            </a>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-6 md:gap-10"
          >
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-px h-8 bg-white/20 hidden sm:block" />
                <div>
                  <p className="text-2xl font-bold text-white leading-none">{s.num}</p>
                  <p className="text-white/50 text-xs mt-1">{s.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
