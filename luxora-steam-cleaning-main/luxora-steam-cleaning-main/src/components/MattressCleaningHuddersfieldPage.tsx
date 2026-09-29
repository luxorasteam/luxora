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
  { icon: Wrench,   title: "Professional Equipment",   desc: "We use professional cleaning equipment suited to mattress upholstery and surface types." },
  { icon: Leaf,     title: "Eco-Friendly Products",    desc: "Biodegradable, non-toxic products — safe for the whole household." },
  { icon: Zap,      title: "Thorough Surface Cleaning",desc: "We clean top, sides and accessible areas of the mattress as appropriate." },
  { icon: Clock,    title: "Flexible Appointments",    desc: "Appointments arranged to suit your schedule, including evenings." },
  { icon: Home,     title: "Local Huddersfield Team",  desc: "Based in Huddersfield, serving the town and nearby areas." },
  { icon: ThumbsUp, title: "Satisfaction-Focused",     desc: "We encourage you to raise any concerns — your satisfaction matters." },
];

const process = [
  { n: "01", title: "Tell Us About Your Mattress",       body: "Contact us with details about the mattress size, type and any stains or problem areas you would like us to address." },
  { n: "02", title: "Mattress Assessment",               body: "We inspect the mattress fabric and condition before cleaning to choose the right approach." },
  { n: "03", title: "Pre-Spot Treatment",                body: "Visible stains and heavily soiled areas are treated appropriately before the main clean." },
  { n: "04", title: "Professional Mattress Cleaning",    body: "We use professional equipment to clean the mattress surface thoroughly and remove loosened dirt and debris." },
  { n: "05", title: "Final Check and Drying Guidance",  body: "Once cleaning is done the mattress is checked, and we provide guidance on ventilation and drying before use." },
];

const relatedServices = [
  { label: "Carpet Cleaning",         slug: "carpet-cleaning",        desc: "Professional cleaning for all carpet types in homes and businesses." },
  { label: "Sofa Cleaning",           slug: "sofa-cleaning",          desc: "Professional cleaning for fabric sofas and upholstered furniture." },
  { label: "Chair & Dining Cleaning", slug: "chair-dining-cleaning",  desc: "Cleaning for upholstered dining chairs and other fabric seating." },
  { label: "Curtain Cleaning",        slug: "curtain-cleaning",       desc: "Professional cleaning for suitable curtains and fabric window coverings." },
];

const mattressTypes = [
  "Single and small double mattresses", "Double mattresses",
  "King and super-king mattresses", "Memory foam mattresses",
  "Pocket sprung mattresses", "Children's mattresses",
  "Bunk bed mattresses", "Guest room mattresses",
];

const stainTypes = [
  "Sweat and body oils", "Food and drink spills",
  "General surface soiling", "Dust and surface build-up",
  "Everyday use residues", "Pet marks",
];

const faqs = [
  { q: "How much does mattress cleaning cost in Huddersfield?",    a: "The cost depends on the mattress size, type, overall condition and whether there are stains requiring individual attention. Contact Luxora for a free, no-obligation quote." },
  { q: "How long does a mattress take to dry after cleaning?",      a: "Drying time depends on the mattress type, fabric and ventilation in the room. We recommend allowing several hours and providing good air circulation. Avoid placing bedding on the mattress until it is fully dry." },
  { q: "How often should I have my mattress professionally cleaned?", a: "This depends on personal preference and how much the mattress is used. Many people consider having a mattress cleaned every six to twelve months, though there is no fixed rule." },
  { q: "Can mattress cleaning help with allergy sufferers?",         a: "A professional clean can remove surface dust and debris. If you have specific concerns about allergens, it is worth discussing them when requesting your quote so we can advise on what the service can realistically achieve." },
  { q: "Can you clean a mattress with significant staining?",        a: "We can assess any staining present before we begin. Results depend on the type of stain, how long it has been there, the mattress material and whether previous treatments have been applied. We aim for the best realistic outcome." },
  { q: "Do I need to remove the mattress from the bed frame?",       a: "In most cases we can clean the mattress in situ on the bed frame. If access to certain areas is important, it may help to lift the mattress, which we can discuss when arranging the appointment." },
  { q: "Which parts of Huddersfield do you cover?",                  a: "We provide mattress cleaning across Huddersfield and nearby areas. Send us your postcode if you would like us to confirm coverage for your address." },
];

export default function MattressCleaningHuddersfieldPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[500px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/services/mattress-cleaning-service-section.jpg"
          alt="Professional mattress cleaning in Huddersfield — Luxora Steam Cleaning"
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
              <span className="text-white/80">Mattress Cleaning</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Professional Mattress Cleaning<br className="hidden md:block" /> in Huddersfield
            </h1>
            <p className="text-lg text-white/70 max-w-xl mb-8">
              Keep your mattress cleaner and fresher with professional mattress cleaning in Huddersfield — all sizes and mattress types considered.
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
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Huddersfield Mattress Cleaners</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Professional Mattress Cleaning for Homes in Huddersfield</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Luxora Steam Cleaning provides professional mattress cleaning for homes across Huddersfield and surrounding areas. Mattresses are used every night and can collect sweat, body oils, skin cells, dust and general surface dirt over time, even with a mattress protector in place.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We assess the mattress type and condition before cleaning to ensure the right method is used. Whether you have a memory foam mattress, a pocket sprung mattress or a children's mattress, we can advise on what the service can achieve for your specific item.
              </p>
              <p className="text-sm font-semibold mb-4">We clean:</p>
              <div className="grid grid-cols-2 gap-2.5">
                {mattressTypes.map((r) => (
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
                src="/images/services/mattress-cleaning-2.png"
                alt="Mattress cleaning in a Huddersfield home — clean, refreshed mattress surface"
                width={800}
                height={450}
                className="rounded-2xl shadow-xl w-full object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Deep Clean ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/services/mattress-cleaning-3.png"
                alt="Deep mattress cleaning in Huddersfield — surface dirt and debris removed"
                width={800}
                height={450}
                className="rounded-2xl shadow-xl w-full object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Deep Cleaning</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Deep Mattress Cleaning in Huddersfield</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Even with regular bed linen changes, mattresses accumulate surface-level soiling over time. Sweat, dead skin cells, body oils and general dust can build up within the mattress fabric and affect how fresh and clean the surface feels.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A professional clean is designed to remove built-up surface dirt and refresh the mattress in a way that regular vacuuming or wiping cannot fully achieve. We clean the top surface and accessible sides of the mattress as appropriate.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The mattress is left to dry properly after cleaning before you put fresh bedding back on.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stains + Use Cases ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 shadow-sm">
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Stain Treatment</p>
              <h2 className="text-2xl font-extrabold mb-4">Mattress Stain and Spot Treatment</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mattress stains can be difficult to remove depending on what caused them and how long they have been left. We can assess common mattress stains from:
              </p>
              <div className="space-y-2.5 mb-6">
                {stainTypes.map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">{s}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Results vary depending on stain type, mattress material and how long the mark has been present. We assess each stain before treatment and aim for the best realistic outcome without over-wetting the mattress.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-8 shadow-sm">
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">When to Book</p>
              <h2 className="text-2xl font-extrabold mb-4">When Does a Mattress Need Professional Cleaning?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You do not need to wait for a visible stain before arranging a professional clean. A mattress that has had regular use over twelve months or more may benefit from a thorough clean even without obvious marks.
              </p>
              <p className="text-sm font-semibold mb-3">Common reasons to book:</p>
              <ul className="space-y-2 mb-8">
                {[
                  "Moving into a property and wanting a fresh start",
                  "After an illness or extended period of heavy use",
                  "Visible stains or marks that need attention",
                  "Preparing a guest room after a long period unused",
                  "General hygiene maintenance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact">
                <Button className="gap-2 rounded-xl w-full sm:w-auto">
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Our Mattress Cleaning Process</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A straightforward process from first contact to a cleaner, fresher mattress.
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
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Why Choose Luxora for Mattress Cleaning in Huddersfield?</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Professional, careful cleaning from a local Huddersfield team that treats your home and belongings with respect.
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
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-10 shadow-sm text-center">
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Our Location</p>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Mattress Cleaning Across Huddersfield</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Luxora Steam Cleaning is based at <strong>24 Thornhill Avenue, Huddersfield, HD3 3DR</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We provide mattress cleaning across Huddersfield and nearby communities. If you are unsure whether we cover your postcode, send us your location and we will confirm availability.
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
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">More Services</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">More Professional Cleaning Services</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Luxora also provides carpet, sofa, curtain and chair cleaning to keep every surface in your home looking its best.
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
            <Link href="/services/mattress-cleaning" className="text-primary font-semibold hover:underline">
              Mattress Cleaning
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
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Frequently Asked Questions About Mattress Cleaning in Huddersfield</h2>
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
            Get a Free Mattress Cleaning Quote in Huddersfield
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Tell us the mattress size, any stains or concerns and your Huddersfield postcode. We will get back to you with a free, no-obligation quote.
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
