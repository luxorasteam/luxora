"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight, Phone, CheckCircle2, ChevronDown, ChevronRight,
  Wrench, Leaf, Clock, ThumbsUp, Zap, Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import Contact from "./Contact";

const whyCards = [
  { icon: Wrench,   title: "Professional Equipment",   desc: "We use professional equipment suited to curtain and fabric window covering cleaning." },
  { icon: Leaf,     title: "Eco-Friendly Products",    desc: "Biodegradable, non-toxic solutions safe for all household members." },
  { icon: Zap,      title: "Fabric-Appropriate Method",desc: "We assess fabric type and lining before cleaning to avoid damage or shrinkage." },
  { icon: Clock,    title: "Flexible Appointments",    desc: "Appointments arranged around your schedule, including evenings." },
  { icon: Home,     title: "Local Huddersfield Team",  desc: "Based in Huddersfield, serving the town and surrounding areas." },
  { icon: ThumbsUp, title: "Satisfaction-Focused",     desc: "We encourage you to raise any concerns — your satisfaction matters." },
];

const process = [
  { n: "01", title: "Tell Us About Your Curtains",    body: "Contact us with details about the curtain fabric, size, lining type and any areas of concern you would like addressed." },
  { n: "02", title: "Fabric and Lining Assessment",  body: "We check the curtain fabric, lining and any trim or heading tape before cleaning to choose the safest and most suitable approach." },
  { n: "03", title: "Pre-Spot Treatment",             body: "Visible dust, staining or heavily soiled areas are treated before the main clean where appropriate." },
  { n: "04", title: "Professional Curtain Cleaning",  body: "We use professional cleaning methods suited to the fabric type to clean the curtains without unnecessary risk to the material." },
  { n: "05", title: "Post-Clean Check",               body: "Once cleaning is complete, the curtains are checked and you can review the result before re-hanging." },
];

const relatedServices = [
  { label: "Carpet Cleaning",         slug: "carpet-cleaning",        desc: "Professional cleaning for all carpet types in homes and businesses." },
  { label: "Sofa Cleaning",           slug: "sofa-cleaning",          desc: "Professional cleaning for fabric sofas and upholstered furniture." },
  { label: "Mattress Cleaning",       slug: "mattress-cleaning",      desc: "Deep cleaning designed to refresh mattresses and remove built-up surface dirt." },
  { label: "Chair & Dining Cleaning", slug: "chair-dining-cleaning",  desc: "Cleaning for upholstered dining chairs and other fabric seating." },
];

const curtainTypes = [
  "Lined curtains", "Unlined curtains",
  "Eyelet and pencil pleat styles", "Voile and sheer curtains",
  "Heavy drapes and thick fabrics", "Bay window curtains",
  "Living room and bedroom curtains", "Kitchen and utility room curtains",
];

const dirtTypes = [
  "Accumulated household dust", "Cooking fumes and residues",
  "Smoke-related discolouration", "Pet hair and pet dander",
  "Mould and mildew from condensation", "General surface soiling",
];

const faqs = [
  { q: "How much does curtain cleaning cost in Huddersfield?",      a: "The cost depends on the fabric type, curtain size, lining and overall condition. Contact Luxora for a free, no-obligation quote based on your specific curtains." },
  { q: "Do you take the curtains down before cleaning?",            a: "This depends on the fabric and the cleaning method required. In many cases we can clean curtains in situ. Where taking them down is necessary or preferable, we can discuss this when arranging the appointment." },
  { q: "Can curtain cleaning cause shrinkage?",                     a: "Shrinkage risk depends on the curtain fabric. We assess the material and lining before cleaning and use a method suited to the specific fabric to minimise any risk. Certain delicate fabrics may have limited cleaning options." },
  { q: "How long do curtains take to dry after cleaning?",          a: "Drying time varies depending on the fabric weight, room ventilation and temperature. Curtains cleaned in situ typically benefit from open windows and good air flow. We can advise on drying once the clean is complete." },
  { q: "Can you clean curtains with mould or condensation damage?", a: "We can assess curtains with mould-related soiling before cleaning. Results depend on how deeply the mould has penetrated the fabric. We will let you know what the cleaning can realistically achieve." },
  { q: "Do you clean voile and sheer curtains?",                    a: "Yes, we can clean voile and sheer fabrics. These require particular care due to the delicate nature of the material. We assess them before cleaning to confirm the appropriate method." },
  { q: "Which parts of Huddersfield do you cover?",                 a: "We provide curtain cleaning across Huddersfield and nearby areas. Send us your postcode and we will confirm whether we cover your address." },
];

export default function CurtainCleaningHuddersfieldPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[500px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/services/cutain-cleaning-services_section.jpg"
          alt="Professional curtain cleaning in Huddersfield — Luxora Steam Cleaning"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-white/50 text-xs mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span>Service Areas</span>
              <ChevronRight className="w-3 h-3" />
              <span>Huddersfield</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80">Curtain Cleaning</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Professional Curtain Cleaning<br className="hidden md:block" /> in Huddersfield
            </h1>
            <p className="text-lg text-white/70 max-w-xl mb-8">
              Remove dust, odours and built-up grime from your curtains with professional curtain cleaning in Huddersfield — all fabric types and styles assessed individually.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button size="lg" className="gap-2 rounded-xl px-8">
                  Get Free Quote <ArrowRight className="w-5 h-5" />
                </Button>
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

      {/* ── Intro ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Huddersfield Curtain Cleaners</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Professional Curtain Cleaning for Homes in Huddersfield</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Luxora Steam Cleaning provides professional curtain and window covering cleaning for homes across Huddersfield and surrounding areas. Curtains collect dust, household odours, cooking fumes, pet dander and general surface grime over time, often without it being immediately obvious.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We assess the fabric type, lining and condition of your curtains before cleaning to ensure the right method is used. This is particularly important for delicate fabrics, heavyweight drapes and curtains with decorative trim or heading tape that could be damaged by an unsuitable approach.
              </p>
              <p className="text-sm font-semibold mb-4">We clean:</p>
              <div className="grid grid-cols-2 gap-2.5">
                {curtainTypes.map((r) => (
                  <div key={r} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">{r}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/services/curtain-cleaning-2.png"
                alt="Curtain cleaning in a Huddersfield home — dust and grime removed from fabric"
                width={800}
                height={450}
                className="rounded-2xl shadow-xl w-full object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Clean ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/services/curtain-cleaning-3.png"
                alt="Professional curtain cleaning in Huddersfield — fabric refreshed and dust removed"
                width={800}
                height={450}
                className="rounded-2xl shadow-xl w-full object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Why Clean Your Curtains</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">What Builds Up in Curtains Over Time</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Curtains hang in place for months or years and quietly accumulate a surprising amount of household debris. Dust settles into the fabric folds, cooking smells permeate the material, condensation near windows can lead to mould growth, and pet hair embeds itself in the weave.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">Common sources of curtain soiling include:</p>
              <div className="space-y-2.5 mb-6">
                {dirtTypes.map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">{s}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Cleaning curtains periodically can help keep the room feeling fresher and may extend the life of the fabric.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Our Curtain Cleaning Process</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A careful, fabric-appropriate process from first assessment through to a cleaner finish.
            </p>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((step, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 flex gap-6 items-start shadow-sm">
                <span className="text-4xl font-black text-primary/20 leading-none shrink-0">{step.n}</span>
                <div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Why Choose Luxora for Curtain Cleaning in Huddersfield?</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Curtains can be expensive to replace. A careful, professionally assessed clean is often a practical way to refresh them safely.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyCards.map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
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

      {/* ── Location ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 shadow-sm text-center">
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Our Location</p>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Curtain Cleaning Across Huddersfield</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Luxora Steam Cleaning is based at <strong>24 Thornhill Avenue, Huddersfield, HD3 3DR</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We provide curtain cleaning across Huddersfield and surrounding communities. If you are unsure whether we cover your postcode, send us your location and we will confirm availability.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="#contact">
                  <Button className="gap-2 rounded-xl px-8">
                    Check Your Postcode <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
                <a href="tel:07543958332">
                  <Button variant="outline" className="gap-2 rounded-xl px-8">
                    <Phone className="w-4 h-4" /> 07543 958332
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Related Services ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">More Services</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">More Professional Cleaning Services</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Luxora also provides professional carpet, sofa, mattress and chair cleaning for homes across Huddersfield.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
            {relatedServices.map((s, i) => (
              <motion.div key={s.slug}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link href={`/services/${s.slug}`}
                  className="glass-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
                  <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">{s.label}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{s.desc}</p>
                  <div className="flex items-center gap-1 text-primary text-sm font-semibold mt-4">
                    Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground text-sm">
            View all services on our{" "}
            <Link href="/services/curtain-cleaning" className="text-primary font-semibold hover:underline">
              Curtain Cleaning
            </Link>{" "}
            service page, or{" "}
            <Link href="/services" className="text-primary font-semibold hover:underline">
              browse all services
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Frequently Asked Questions About Curtain Cleaning in Huddersfield</h2>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="border-b border-border">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between text-left font-semibold text-base py-5 hover:text-primary transition-colors"
                  aria-expanded={openFaq === i}
                >
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

      {/* ── CTA Strip ── */}
      <section className="py-14 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Get a Free Curtain Cleaning Quote in Huddersfield
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Tell us about your curtains, the fabric type if known, your Huddersfield postcode and any areas of concern. We will get back to you with a free quote.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" variant="secondary" className="gap-2 rounded-xl px-8">
                Request a Free Quote <ArrowRight className="w-5 h-5" />
              </Button>
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
