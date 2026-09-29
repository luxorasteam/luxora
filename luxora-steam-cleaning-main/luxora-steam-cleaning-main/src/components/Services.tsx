"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/60 to-background" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">Our Steam Cleaning Services</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">From <a href="/services/carpet-cleaning" className="text-primary hover:underline">carpet cleaning</a> and <a href="/services/sofa-cleaning" className="text-primary hover:underline">sofa cleaning</a> to mattresses, curtains and upholstery — professional steam cleaning tailored to your home or business.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="h-52 overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.heroImage} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.shortDesc}</p>
                <div className="flex gap-3">
                  <Link href={`/services/${s.slug}`} className="text-primary text-sm font-bold flex items-center gap-1.5 hover:gap-3 transition-all">
                    Explore More <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="/contact" className="text-sm text-muted-foreground font-medium hover:text-primary transition-colors ml-auto">
                    Get Quote
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
