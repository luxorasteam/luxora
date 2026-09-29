"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { num: "15+", label: "Years Experience" },
  { num: "24/7", label: "Availability" },
  { num: "UK-Wide", label: "Coverage" },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden min-h-screen">
      {/* Background */}
      <img
        src="https://images.fillout.com/764675/9ea7pkyjur/generated-images/14UfjHpWvkDnyCWvt4ZpMz/img_-hq-KpZlsD2L1xc5.jpg"
        alt="Professional steam cleaning — clean modern living space"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Content — starts close to top, clear of the nav */}
      <div className="relative flex flex-col justify-start min-h-screen px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-10 md:pt-12 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl lg:max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-300 shrink-0" />
            <span className="text-white/90 text-sm font-medium">Professional Steam Cleaning Services</span>
          </motion.div>

          {/* H1 — exactly two lines */}
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-5">
            Steam Cleaning Services for<br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Homes &amp; Businesses
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-white/70 max-w-lg leading-relaxed mb-7">
            Professional steam cleaning for carpets, sofas, mattresses, curtains and upholstery. Serving homes and businesses across the UK.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="/contact">
              <Button size="lg" className="gap-2 text-base px-7 py-6 rounded-xl shadow-lg">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#services">
              <button className="inline-flex items-center gap-2 text-base px-7 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all font-medium">
                View Our Services
              </button>
            </a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-8 md:gap-12"
          >
            {stats.map((s, i) => (
              <div key={i}>
                <p className="text-2xl md:text-3xl font-bold text-white leading-none">{s.num}</p>
                <p className="text-white/50 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
