"use client";

import Link from "next/link";
import { ChevronRight, CheckCircle2, ArrowRight, MapPin, Phone, ShieldCheck, Leaf, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

const benefits = [
  {
    title: "Advanced Steam Cleaning Equipment",
    detail:
      "Our industrial-grade steam machines reach 150–180 °C, penetrating deep into fibres to eliminate dirt, bacteria, allergens and dust mites that regular vacuums cannot reach.",
  },
  {
    title: "Eco-Friendly & Safe Products",
    detail:
      "Biodegradable, non-toxic solutions — safe for children, pets and allergy sufferers in every home we visit.",
  },
  {
    title: "Experienced & Professional Team",
    detail:
      "Over 15 years of hands-on experience across residential and commercial properties throughout the UK.",
  },
  {
    title: "Flexible Same-Day Appointments",
    detail:
      "We work around your schedule. Same-day and next-day bookings available 24/7, seven days a week.",
  },
  {
    title: "Fully Insured & DBS-Checked Staff",
    detail:
      "Every team member is DBS checked, fully insured and professionally trained before entering your home.",
  },
  {
    title: "100% Satisfaction Guarantee",
    detail:
      "Not satisfied with the result? We return and re-clean at absolutely no extra charge — every time.",
  },
];

const trustItems = [
  { icon: ShieldCheck, title: "100% Satisfaction", sub: "Guaranteed" },
  { icon: Leaf,        title: "Eco-Friendly",      sub: "Cleaning Solutions" },
  { icon: Award,       title: "Trained & Insured", sub: "Professionals" },
  { icon: Clock,       title: "Fast Drying",        sub: "2 to 4 Hours" },
];

const steps = [
  { num: "1", title: "Book",     desc: "Call, email or fill in our quick online form for a free no-obligation quote." },
  { num: "2", title: "We Visit", desc: "Our team arrives on time with full professional equipment ready to work." },
  { num: "3", title: "We Clean", desc: "High-temperature steam deep-cleans every fibre, killing bacteria and allergens." },
  { num: "4", title: "You Relax",desc: "Enjoy a fresh, hygienically clean space — dry and ready in 2–4 hours." },
];

export default function AboutUsPage() {
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
            <span className="text-foreground/80">About Us</span>
          </nav>
          <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Our Story</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            Professional Steam Cleaning<br className="hidden sm:block" /> You Can Trust
          </h1>
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            Luxora Steam Cleaning Ltd is a family-run, UK-based professional cleaning company dedicated to delivering healthier, fresher spaces for homes and businesses across the country.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="relative -mt-4 z-10 px-6 pb-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-primary rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-xl">
            {trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-primary-foreground">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0 border border-white/10">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-sm md:text-base">{item.title}</p>
                  <p className="text-xs md:text-sm text-white/60">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-28"
            >
              <div className="relative">
                <img
                  src="/images/sections/why-choose_us_ke_sath_wali.jpg"
                  alt="Luxora Steam Cleaning professional team at work"
                  className="rounded-2xl shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-4 md:-right-6 glass-card rounded-2xl p-5 shadow-xl">
                  <p className="text-3xl font-extrabold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
                We Care About Your<br />Hygiene &amp; Comfort
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We use advanced steam cleaning technology and eco-friendly products to deliver a healthier, cleaner environment for you and your family. Every job — from a single sofa to a full commercial property — receives the same level of care and attention.
              </p>

              <div className="space-y-5 mb-10">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold">{b.title}</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{b.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <Button size="lg" className="gap-2 rounded-xl shadow-md">
                  Get A Free Quote <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Our Simple Cleaning Process</h2>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              From first contact to a freshly cleaned space — straightforward, transparent and always professional.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl glass-card shadow-md flex items-center justify-center mb-5 relative hover:shadow-lg transition-shadow">
                  <span className="text-2xl font-extrabold text-primary">{s.num}</span>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                    {s.num}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-primary/15" />
                )}
                <h3 className="font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 border border-primary/10">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <p className="font-bold text-primary uppercase tracking-wider text-sm">Our Coverage</p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">
              We proudly provide professional carpet, sofa, mattress, curtain, and upholstery cleaning services across the <strong className="text-foreground">North West, North East, Yorkshire &amp; the Humber, the East Midlands, the West Midlands,</strong> and <strong className="text-foreground">North Wales.</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our coverage includes <strong className="text-foreground">Manchester, Liverpool, Leeds, Sheffield, Bradford, Huddersfield, York, Hull, Nottingham, Derby, Stoke-on-Trent, Telford, Newcastle, Chester, Carlisle, Wrexham, Llandudno, Scotland</strong> and surrounding towns and villages.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl overflow-hidden aspect-video shadow-sm">
                <img src="/images/sections/below-the-whychooseus.avif" alt="Professional steam cleaning technician at work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="rounded-xl overflow-hidden aspect-video shadow-sm">
                <img src="/images/sections/whychoose-us-below.avif" alt="Spotlessly clean modern living room after steam cleaning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2 rounded-xl shadow-md">
                  Book Your Clean <ArrowRight className="w-5 h-5" />
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

      <Footer />
      <FloatingButtons />
    </div>
  );
}
