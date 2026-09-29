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
  { icon: Wrench,   title: "Professional Equipment",  desc: "We use professional cleaning equipment designed for deeper upholstery cleaning." },
  { icon: Leaf,     title: "Eco-Friendly Products",   desc: "Biodegradable, non-toxic solutions — safe for children and pets." },
  { icon: Zap,      title: "Careful on All Fabrics",  desc: "We assess the sofa fabric before cleaning to use the right method." },
  { icon: Clock,    title: "Flexible Appointments",   desc: "Appointments arranged around your schedule, including evenings." },
  { icon: Home,     title: "Local Huddersfield Team", desc: "Based in Huddersfield, serving the town and surrounding areas." },
  { icon: ThumbsUp, title: "Satisfaction-Focused",    desc: "We encourage you to raise any concerns — your satisfaction matters." },
];

const process = [
  { n: "01", title: "Tell Us About Your Sofa",       body: "Contact us with details about your sofa type, fabric, size and any specific stains or problem areas you would like us to look at." },
  { n: "02", title: "Fabric Assessment",             body: "We check the sofa fabric and its condition before cleaning so the right approach can be chosen." },
  { n: "03", title: "Pre-Spot Treatment",            body: "Visible stains and heavily soiled areas are treated before the main clean where appropriate." },
  { n: "04", title: "Professional Sofa Cleaning",   body: "We use professional equipment to clean the upholstery thoroughly and remove loosened dirt and residues." },
  { n: "05", title: "Final Check",                  body: "Once the cleaning is done, the sofa is checked and you can review the result with our team before we leave." },
];

const relatedServices = [
  { label: "Carpet Cleaning",          slug: "carpet-cleaning",         desc: "Professional cleaning for all carpet types in homes and businesses." },
  { label: "Mattress Cleaning",        slug: "mattress-cleaning",       desc: "Deep cleaning designed to refresh mattresses and remove built-up surface dirt." },
  { label: "Chair & Dining Cleaning",  slug: "chair-dining-cleaning",   desc: "Cleaning for upholstered dining chairs and other fabric seating." },
  { label: "Curtain Cleaning",         slug: "curtain-cleaning",        desc: "Professional cleaning for suitable curtains and fabric window coverings." },
];

const sofaTypes = [
  "Fabric sofas", "Leather and faux-leather sofas", "Corner and L-shaped sofas",
  "Sofa beds", "Two and three-seater sofas", "Modular sofas",
  "Armchairs and accent chairs", "Sofa sets",
];

const stainTypes = [
  "Food and drink spills", "Tea and coffee marks",
  "Grease and general dirt", "Pet hair and pet marks",
  "Everyday wear and body oils", "Dust and surface build-up",
];

const faqs = [
  { q: "How much does sofa cleaning cost in Huddersfield?",   a: "The cost depends on the size and type of sofa, its fabric, overall condition and whether there are stains requiring individual treatment. Contact Luxora for a free, no-obligation quote for your sofa." },
  { q: "How long does it take for a sofa to dry after cleaning?", a: "Drying time varies depending on the fabric type, thickness of the upholstery, room ventilation and temperature. Most sofas are dry within a few hours, though thicker fabrics may take a little longer." },
  { q: "Can you clean leather sofas?",                         a: "Yes. We can clean leather and faux-leather sofas. We assess the material before cleaning to make sure the right method and products are used." },
  { q: "Do you clean sofas with pet hair and pet smells?",     a: "Yes. We can pay additional attention to areas with pet hair, marks and odours and clean the upholstery according to its condition and material." },
  { q: "Can I book sofa and carpet cleaning at the same time?", a: "Yes. Luxora offers both sofa and carpet cleaning. Let us know when requesting your quote and both can be arranged in a single appointment." },
  { q: "Is professional sofa cleaning better than hiring a machine?", a: "Professional cleaning equipment is generally more powerful and better suited to different fabric types than domestic hire machines. We also assess the fabric first to reduce the risk of damage or over-wetting." },
  { q: "Which parts of Huddersfield do you cover?",            a: "We provide sofa cleaning across Huddersfield and nearby areas. Send us your postcode if you would like us to confirm coverage for your address." },
];

export default function SofaCleaningHuddersfieldPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[500px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/services/sofa-cleaning-services-section.jpg"
          alt="Professional sofa cleaning in Huddersfield — Luxora Steam Cleaning"
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
              <span className="text-white/80">Sofa Cleaning</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Professional Sofa Cleaning<br className="hidden md:block" /> in Huddersfield
            </h1>
            <p className="text-lg text-white/70 max-w-xl mb-8">
              Refresh your sofa and upholstered furniture with professional sofa cleaning in Huddersfield — fabric, leather and all upholstery types considered.
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
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Huddersfield Sofa Cleaners</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Professional Sofa Cleaning for Homes in Huddersfield</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Luxora Steam Cleaning provides professional sofa and upholstery cleaning for homes across Huddersfield and surrounding areas. Sofas are used every day and can collect dust, skin cells, food particles, pet hair and general household dirt that regular vacuuming cannot fully remove.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We assess the fabric type and condition of your sofa before cleaning so the most appropriate method and products are used. Whether you have a fabric sofa, a leather corner unit or a sofa bed, we can discuss the best approach for your specific item.
              </p>
              <p className="text-sm font-semibold mb-4">We clean:</p>
              <div className="grid grid-cols-2 gap-2.5">
                {sofaTypes.map((r) => (
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
                src="/images/services/sofa-cleaning-2.png"
                alt="Sofa cleaning in a Huddersfield home — clean, refreshed upholstery"
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
                src="/images/services/sofa-cleaning-3.png"
                alt="Deep sofa cleaning in Huddersfield — upholstery fibres cleaned thoroughly"
                width={800}
                height={450}
                className="rounded-2xl shadow-xl w-full object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Deep Cleaning</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Deep Sofa Cleaning in Huddersfield</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Sofas absorb far more than visible surface dirt. Over time, everyday use causes oils, dead skin cells, pet dander, dust and spill residues to build up inside the upholstery fibres. This can make a sofa look dull, feel less fresh and contribute to unpleasant smells.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A professional deep clean can make a noticeable difference to sofas that have seen regular use over months or years. Our process is designed to clean the upholstery without unnecessary harsh treatment that could affect the fabric or colour.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cushions, seat pads, armrests and backrests are all cleaned as part of the service where the fabric allows.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stains + Pet Owners ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 shadow-sm">
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Stain Treatment</p>
              <h2 className="text-2xl font-extrabold mb-4">Sofa Stain and Spot Treatment</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Upholstery stains vary significantly depending on what caused them and how long they have been present. We can assess common sofa stains from:
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
                No professional cleaner can guarantee removal of every stain. Results depend on the stain type, fabric, how long the mark has been there and whether previous cleaning attempts have affected it. We aim for the best realistic outcome for each individual situation.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-8 shadow-sm">
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Pet Owners</p>
              <h2 className="text-2xl font-extrabold mb-4">Sofa Cleaning for Pet Owners</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pets spend a lot of time on sofas, and over time this leads to a build-up of pet hair, dander, muddy marks and unpleasant odours in the upholstery. A professional clean can help refresh sofas that receive regular use from dogs, cats and other animals.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We pay particular attention to areas where pet-related dirt has built up and clean the fabric according to its material and condition.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                If there is a specific pet stain or area of concern, let us know when you request your quote so it can be assessed properly.
              </p>
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
            <h2 className="text-3xl md:text-4xl font-extrabold">Our Sofa Cleaning Process</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A straightforward process from first contact to a freshly cleaned sofa.
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
            <h2 className="text-3xl md:text-4xl font-extrabold">Why Choose Luxora for Sofa Cleaning in Huddersfield?</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              When you invite a cleaning team into your home, you want people who are careful, communicate clearly and take your property seriously.
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
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Sofa Cleaning Across Huddersfield</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Luxora Steam Cleaning is based at <strong>24 Thornhill Avenue, Huddersfield, HD3 3DR</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We provide sofa and upholstery cleaning across Huddersfield and surrounding areas. If you are unsure whether we cover your postcode, contact us with your location and we will confirm.
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
              Need more than your sofa cleaned? Luxora also provides professional cleaning for carpets, mattresses and other upholstered surfaces.
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
            <Link href="/services/sofa-cleaning" className="text-primary font-semibold hover:underline">
              Sofa Cleaning
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
            <h2 className="text-3xl md:text-4xl font-extrabold">Frequently Asked Questions About Sofa Cleaning in Huddersfield</h2>
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
            Get a Free Sofa Cleaning Quote in Huddersfield
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Tell us about your sofa, your Huddersfield postcode and any stains or areas of concern. We will come back to you with a free, no-obligation quote.
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
