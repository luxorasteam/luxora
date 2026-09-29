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
  { icon: Wrench,   title: "Professional Equipment",   desc: "We use professional cleaning equipment suited to upholstered chairs and dining seating." },
  { icon: Leaf,     title: "Eco-Friendly Products",    desc: "Biodegradable, non-toxic solutions — safe for the whole household." },
  { icon: Zap,      title: "Fabric-Appropriate Method",desc: "We assess the fabric and padding of each chair before cleaning." },
  { icon: Clock,    title: "Flexible Appointments",    desc: "Appointments arranged to suit your timetable, including evenings." },
  { icon: Home,     title: "Local Huddersfield Team",  desc: "Based in Huddersfield, serving the town and nearby areas." },
  { icon: ThumbsUp, title: "Satisfaction-Focused",     desc: "We encourage you to raise any concerns — your satisfaction matters." },
];

const process = [
  { n: "01", title: "Tell Us About Your Chairs",          body: "Contact us with details about the chair types, fabric, the number of items and any specific stains or problem areas." },
  { n: "02", title: "Fabric and Condition Assessment",    body: "We check the fabric, padding and overall condition of each chair before cleaning to choose the right approach." },
  { n: "03", title: "Pre-Spot Treatment",                 body: "Visible stains and soiled areas are treated before the main clean where appropriate." },
  { n: "04", title: "Professional Chair Cleaning",        body: "We use professional equipment to clean the upholstery and remove loosened dirt from the fabric." },
  { n: "05", title: "Final Check",                       body: "Once the cleaning is complete, the chairs are checked and you can review the results before the team leaves." },
];

const relatedServices = [
  { label: "Carpet Cleaning",    slug: "carpet-cleaning",   desc: "Professional cleaning for all carpet types in homes and businesses." },
  { label: "Sofa Cleaning",      slug: "sofa-cleaning",     desc: "Professional cleaning for fabric sofas and upholstered furniture." },
  { label: "Mattress Cleaning",  slug: "mattress-cleaning", desc: "Deep cleaning to refresh mattresses and remove built-up surface dirt." },
  { label: "Curtain Cleaning",   slug: "curtain-cleaning",  desc: "Professional cleaning for suitable curtains and fabric window coverings." },
];

const chairTypes = [
  "Upholstered dining chairs", "Fabric armchairs",
  "Dining chair sets", "Accent and bedroom chairs",
  "Bar stools with fabric seats", "Office chairs with fabric upholstery",
  "Padded benches and ottomans", "Occasional and side chairs",
];

const stainTypes = [
  "Food and drink spills", "Grease and cooking residues",
  "General everyday soiling", "Pet hair and pet marks",
  "Dust and surface build-up", "Body oils from regular use",
];

const faqs = [
  { q: "How much does chair cleaning cost in Huddersfield?",        a: "The cost depends on the number of chairs, the fabric type, the overall condition and whether any individual stains require specific treatment. Contact Luxora for a free quote." },
  { q: "Can you clean a full dining chair set?",                    a: "Yes. We can clean a full dining chair set in a single visit. Let us know how many chairs and the fabric type when requesting your quote so we can plan the work accordingly." },
  { q: "How long do chairs take to dry after cleaning?",            a: "Drying time depends on the fabric, padding thickness, room ventilation and temperature. Most upholstered chairs are dry within a few hours in a well-ventilated room." },
  { q: "Can you remove food and grease stains from dining chairs?", a: "We can assess food and grease-related stains before treatment. Results depend on the stain type, how long it has been present and the fabric. We aim for the best realistic outcome for each individual chair." },
  { q: "Do you clean leather or faux-leather dining chairs?",       a: "Yes. We can clean leather and faux-leather chair upholstery. We assess the material before cleaning to use the right method and products." },
  { q: "Can I book chair cleaning with carpet or sofa cleaning?",   a: "Yes. We can clean chairs, carpets and sofas in the same appointment. Tell us what you need when requesting your quote so the visit can be planned efficiently." },
  { q: "Which parts of Huddersfield do you cover?",                 a: "We provide chair and dining cleaning across Huddersfield and surrounding areas. Send us your postcode and we will confirm whether we cover your address." },
];

export default function ChairDiningCleaningHuddersfieldPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[500px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/services/chair_dining-servicesection.jpg"
          alt="Professional chair and dining cleaning in Huddersfield — Luxora Steam Cleaning"
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
              <span className="text-white/80">Chair &amp; Dining Cleaning</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Professional Chair &amp; Dining<br className="hidden md:block" /> Cleaning in Huddersfield
            </h1>
            <p className="text-lg text-white/70 max-w-xl mb-8">
              Refresh your dining chairs, armchairs and upholstered seating with professional chair cleaning in Huddersfield — fabric, leather and all upholstery types considered.
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
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Huddersfield Chair Cleaners</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Professional Chair &amp; Dining Cleaning for Homes in Huddersfield</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Luxora Steam Cleaning provides professional chair and upholstered dining seating cleaning for homes across Huddersfield and surrounding areas. Dining chairs are used at every meal and accumulate food residues, grease, general soiling and everyday wear that can be difficult to remove with standard household cleaning.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We assess the fabric type and condition of each chair before cleaning to use the right method and products. Whether you have a matching set of upholstered dining chairs, individual armchairs or a mix of seating types, we can advise on the best approach.
              </p>
              <p className="text-sm font-semibold mb-4">We clean:</p>
              <div className="grid grid-cols-2 gap-2.5">
                {chairTypes.map((r) => (
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
                src="/images/services/dining-cleaning-2.png"
                alt="Chair and dining cleaning in a Huddersfield home — clean, refreshed upholstery"
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
                src="/images/services/dining-cleaning-end.png"
                alt="Professional chair cleaning in Huddersfield — upholstery deep cleaned and refreshed"
                width={800}
                height={450}
                className="rounded-2xl shadow-xl w-full object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Deep Cleaning</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Deep Chair &amp; Dining Cleaning in Huddersfield</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Upholstered dining chairs can look heavily soiled after months of regular use even when wiped down regularly between meals. Food particles, grease and body oils work their way into the fabric and padding and are not removed by surface wiping alone.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A professional deep clean is designed to extract built-up dirt from the upholstery fibres and treat visible stains where possible. We clean the seat, backrest and any other upholstered areas of the chair as appropriate to the design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We can also clean matching benches, padded stools and other upholstered dining or seating items at the same visit.
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
              <h2 className="text-2xl font-extrabold mb-4">Chair Stain and Spot Treatment</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dining chairs and upholstered seating are prone to a wide range of stains from daily use. We can assess and treat stains from:
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
                Results vary depending on the stain type, fabric and how long the mark has been there. We assess each chair individually and aim for the best realistic outcome without taking unnecessary risks with the material.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-8 shadow-sm">
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Domestic &amp; Commercial</p>
              <h2 className="text-2xl font-extrabold mb-4">Chair Cleaning for Homes and Businesses</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We provide chair and dining cleaning for private homes as well as small businesses where upholstered seating receives regular use from customers or staff.
              </p>
              <p className="text-sm font-semibold mb-3">Suitable for:</p>
              <ul className="space-y-2 mb-8">
                {[
                  "Dining rooms and kitchen-diners",
                  "Living rooms and reception rooms",
                  "Holiday lets and rental properties",
                  "Small restaurants and cafés",
                  "Waiting rooms and reception areas",
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
            <h2 className="text-3xl md:text-4xl font-extrabold">Our Chair Cleaning Process</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A clear, straightforward process from enquiry through to a fresher set of chairs.
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
            <h2 className="text-3xl md:text-4xl font-extrabold">Why Choose Luxora for Chair Cleaning in Huddersfield?</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Professional, careful cleaning from a local team that takes time to assess each item before starting work.
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
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Chair &amp; Dining Cleaning Across Huddersfield</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Luxora Steam Cleaning is based at <strong>24 Thornhill Avenue, Huddersfield, HD3 3DR</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We provide chair and upholstered dining seating cleaning across Huddersfield and surrounding communities. Contact us with your postcode if you would like us to confirm coverage for your address.
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
              Luxora also provides carpet, sofa, mattress and curtain cleaning across Huddersfield.
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
            <Link href="/services/chair-dining-cleaning" className="text-primary font-semibold hover:underline">
              Chair &amp; Dining Cleaning
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
            <h2 className="text-3xl md:text-4xl font-extrabold">Frequently Asked Questions About Chair &amp; Dining Cleaning in Huddersfield</h2>
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
            Get a Free Chair Cleaning Quote in Huddersfield
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Tell us about your chairs, the fabric type, how many items need cleaning and your Huddersfield postcode. We will respond with a free, no-obligation quote.
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
