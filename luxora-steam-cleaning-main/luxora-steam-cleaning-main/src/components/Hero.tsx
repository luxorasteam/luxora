"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen pb-24">
      <img
        src="https://images.fillout.com/764675/9ea7pkyjur/generated-images/14UfjHpWvkDnyCWvt4ZpMz/img_-hq-KpZlsD2L1xc5.jpg"
        alt="Luxurious clean living space"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />

      <div className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-24 md:pt-28 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 glass-dark rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-white/80" />
            <span className="text-white/80 text-sm font-medium">Professional Steam Cleaning Services</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1]">
            Steam Cleaning<br />Services for<br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">Homes &amp; Businesses</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-lg leading-relaxed">
            Professional steam cleaning for carpets, sofas, mattresses, curtains and upholstery. We serve homes and businesses across the UK.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/contact">
              <Button size="lg" className="gap-2 text-base px-8 py-6 rounded-xl shadow-lg">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
            <a href="#services">
              <button className="inline-flex items-center gap-2 text-base px-8 py-3 rounded-xl glass-dark text-white hover:bg-white/15 transition-all font-medium">
                View Our Services
              </button>
            </a>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex gap-8 md:gap-12"
          >
            {[
              { num: "15+", label: "Years Experience" },
              { num: "UK-Wide", label: "Coverage" },
              { num: "24/7", label: "Availability" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-2xl md:text-3xl font-bold text-white">{s.num}</p>
                <p className="text-white/50 text-sm">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.a
          href="#trust"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/40" />
        </motion.a>
      </div>
    </section>
  );
}
