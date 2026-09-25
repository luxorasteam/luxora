"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone, CheckCircle2, ChevronDown, Zap, Leaf, Clock, Wrench, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import Contact from "./Contact";
import { type ServiceData } from "../data/services";

const whyCards = [
  { icon: Wrench,             title: "Expert Technicians",    desc: "Fully trained, DBS checked and insured professionals." },
  { icon: Leaf,               title: "Eco-Friendly Products", desc: "Biodegradable, non-toxic — safe for children and pets." },
  { icon: Zap,                title: "Fast Drying",           desc: "Most surfaces dry within 2 to 4 hours." },
  { icon: Clock,              title: "Fast Turnaround",       desc: "Quick, efficient service with minimal disruption." },
  { icon: Wrench,             title: "Professional Equipment",desc: "Industrial-grade steam machines up to 180°C." },
  { icon: ThumbsUp,           title: "100% Satisfaction",     desc: "Not happy? We return and re-clean at no extra cost." },
];

export default function ServiceLayout({ service }: { service: ServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[65vh] min-h-[480px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={service.heroImage} alt={service.title} className="absolute inset-0 w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link href="/services" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">{service.title}</h1>
            <p className="text-lg text-white/70 max-w-xl mb-8">{service.shortDesc}</p>
            <div className="flex flex-wrap gap-4">
              <a href="/#contact">
                <Button size="lg" className="gap-2 rounded-xl px-8">Get Free Quote <ArrowRight className="w-5 h-5" /></Button>
              </a>
              <a href="tel:07543958332">
                <button className="inline-flex items-center gap-2 text-base px-8 py-3 rounded-xl glass-dark text-white hover:bg-white/15 transition-all font-medium">
                  <Phone className="w-4 h-4" /> 07543 958332
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">About The Service</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">About Our {service.title} Service</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-8">{service.fullDesc}</p>
              <div className="grid grid-cols-2 gap-3">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={service.supportingImage} alt={service.title} className="rounded-2xl shadow-xl w-full object-cover aspect-video" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service sections */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Our {service.title} Services</h2>
          </motion.div>
          <div className="max-w-6xl mx-auto space-y-20">
            {service.sections.map((sec, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="grid lg:grid-cols-2 gap-12 items-center">
                {i % 2 === 0 ? (
                  <>
                    <div>
                      <span className="text-7xl font-black text-primary/10 block mb-2">0{i + 1}</span>
                      <h3 className="text-2xl font-extrabold mb-4">{sec.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{sec.content}</p>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={i === 0 ? service.heroImage : service.contentImage} alt={sec.title} className="rounded-2xl shadow-lg w-full object-cover aspect-video" loading="lazy" />
                  </>
                ) : (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.contentImage} alt={sec.title} className="rounded-2xl shadow-lg w-full object-cover aspect-video order-2 lg:order-1" loading="lazy" />
                    <div className="order-1 lg:order-2">
                      <span className="text-7xl font-black text-primary/10 block mb-2">0{i + 1}</span>
                      <h3 className="text-2xl font-extrabold mb-4">{sec.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{sec.content}</p>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Luxora */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Why Choose Luxora</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyCards.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-base mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Large image */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={service.supportingImage} alt={`${service.title} results`} className="w-full max-w-6xl mx-auto rounded-3xl shadow-2xl object-cover aspect-[21/8]" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Frequently Asked Questions</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {service.faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="border-b border-border">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left font-semibold text-base py-5 hover:text-primary transition-colors">
                  {faq.q}
                  <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 ml-4 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="pb-5 text-muted-foreground leading-relaxed text-sm">{faq.a}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-14 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Ready for a Spotless {service.title}?</h2>
          <p className="text-white/70 mb-8">Get your free, no-obligation quote today. We respond within 2 hours.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/#contact">
              <Button size="lg" variant="secondary" className="gap-2 rounded-xl px-8">Get Free Quote <ArrowRight className="w-5 h-5" /></Button>
            </a>
            <a href="tel:07543958332">
              <button className="inline-flex items-center gap-2 text-base px-8 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all font-medium border border-white/20">
                <Phone className="w-4 h-4" /> 07543 958332
              </button>
            </a>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
