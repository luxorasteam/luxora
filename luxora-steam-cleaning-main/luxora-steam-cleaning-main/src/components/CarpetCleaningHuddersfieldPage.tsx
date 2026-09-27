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
  { icon: Wrench,   title: "Professional Equipment",  desc: "We use professional cleaning equipment designed for deeper carpet cleaning." },
  { icon: Leaf,     title: "Eco-Friendly Products",   desc: "Biodegradable, non-toxic — safe for children and pets." },
  { icon: Zap,      title: "Fast Drying",             desc: "Many carpets are dry within approximately 2 to 4 hours." },
  { icon: Clock,    title: "Flexible Appointments",   desc: "Appointments arranged around your availability." },
  { icon: Home,     title: "Local Huddersfield Team", desc: "Based in Huddersfield, serving the town and nearby areas." },
  { icon: ThumbsUp, title: "Satisfaction-Focused",    desc: "We encourage you to raise any concerns — your satisfaction matters." },
];

const process = [
  { n: "01", title: "Tell Us About Your Carpets", body: "Contact us with details about the rooms you want cleaned, your location and any specific stains or problem areas." },
  { n: "02", title: "Carpet Assessment",           body: "The carpet and its condition are checked before cleaning so that the right approach can be used." },
  { n: "03", title: "Pre-Treatment",               body: "Heavily used areas and suitable stains can be treated before the main clean where needed." },
  { n: "04", title: "Professional Carpet Cleaning",body: "We use professional equipment to clean the carpet thoroughly and extract loosened dirt." },
  { n: "05", title: "Final Check",                 body: "Once the cleaning is complete, the carpet is checked and you can review the result with our team." },
];

const relatedServices = [
  { label: "Sofa Cleaning",          slug: "sofa-cleaning",          desc: "Professional cleaning for fabric sofas and upholstered furniture." },
  { label: "Mattress Cleaning",      slug: "mattress-cleaning",       desc: "Deep cleaning designed to refresh mattresses and remove built-up surface dirt." },
  { label: "Chair & Dining Cleaning",slug: "chair-dining-cleaning",   desc: "Cleaning for upholstered dining chairs and other fabric seating." },
  { label: "Curtain Cleaning",       slug: "curtain-cleaning",        desc: "Professional cleaning for suitable curtains and fabric window coverings." },
];

const faqs = [
  { q: "How much does carpet cleaning cost in Huddersfield?",  a: "The price depends on factors such as the number and size of rooms, carpet condition and whether there are stains or areas requiring extra treatment. Contact Luxora for a free quote based on your property." },
  { q: "How long do carpets take to dry after cleaning?",       a: "Drying time varies depending on the carpet material, room ventilation, temperature and cleaning required. Many carpets typically dry within approximately 2 to 4 hours, although some may take longer." },
  { q: "Can you remove every carpet stain?",                   a: "No professional carpet cleaner can responsibly guarantee removal of every stain. Results depend on what caused the stain, how long it has been present, previous treatments and the carpet fibres. We assess stains and aim for the best safe result possible." },
  { q: "Do you clean carpets in homes with pets?",             a: "Yes. We clean carpets in homes with pets and can pay additional attention to pet-related marks, hair and problem areas." },
  { q: "Do you offer commercial carpet cleaning in Huddersfield?", a: "Yes. We can provide carpet cleaning for suitable offices and commercial properties as well as residential homes." },
  { q: "Can I book carpet and sofa cleaning together?",        a: "Yes. Luxora offers both carpet and sofa cleaning. Tell us which items you need cleaned when requesting your quote so the work can be planned together." },
  { q: "Which parts of Huddersfield do you cover?",            a: "We provide carpet cleaning across Huddersfield and nearby areas. Send us your postcode if you would like us to confirm coverage for your property." },
];

const roomTypes = ["Living rooms", "Bedrooms", "Hallways", "Stairs and landings", "Flats and apartments", "Rental properties", "Offices", "Shops", "Commercial premises"];
const stainTypes = ["Food and drinks", "Tea and coffee", "Mud", "General household spills", "Pet accidents", "Everyday foot traffic"];

export default function CarpetCleaningHuddersfieldPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[500px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/services/carpet-services-section.jpg"
          alt="Professional carpet cleaning in Huddersfield — Luxora Steam Cleaning"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />
        <div className="relative h-full flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-white/50 text-xs mb-6 flex-wrap">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span>Service Areas</span>
              <ChevronRight className="w-3 h-3" />
              <span>Huddersfield</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/80">Carpet Cleaning</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
              Professional Carpet Cleaning<br className="hidden md:block" /> in Huddersfield
            </h1>
            <p className="text-lg text-white/70 max-w-xl mb-8">
              Bring tired, stained and heavily used carpets back to a cleaner, fresher condition with professional carpet cleaning in Huddersfield.
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
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Huddersfield Carpet Cleaners</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Professional Carpet Cleaning for Homes and Businesses</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Luxora Steam Cleaning provides professional carpet cleaning for homes, landlords and businesses across Huddersfield and surrounding areas. We use professional cleaning equipment and suitable treatments to lift embedded dirt, tackle common stains and refresh carpet fibres without unnecessary harsh treatment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you need one room cleaned or carpets throughout a larger property, our team can provide a service based on the condition, material and cleaning needs of your carpets.
              </p>
              <p className="text-sm font-semibold mb-4">We clean carpets in:</p>
              <div className="grid grid-cols-2 gap-2.5">
                {roomTypes.map((r) => (
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
                src="/images/gallery/gallery-1.jpg"
                alt="Carpet cleaning in a Huddersfield home — clean, refreshed carpet"
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
                src="/images/gallery/gallery-2.jpg"
                alt="Deep carpet cleaning in Huddersfield — dirt and debris extracted from carpet fibres"
                width={800}
                height={450}
                className="rounded-2xl shadow-xl w-full object-cover aspect-video"
                loading="lazy"
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Deep Cleaning</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Deep Carpet Cleaning in Huddersfield</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Carpets collect much more than the dirt you can see on the surface. Daily foot traffic can push dust, soil, pet hair, spills and other debris deeper into the carpet fibres. Regular vacuuming is important, but it cannot always remove dirt that has become trapped below the surface.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A professional deep clean can make a noticeable difference to carpets that look dull, marked or heavily used. Our carpet cleaning process is designed to loosen and remove built-up dirt from the fibres while treating problem areas carefully.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Depending on the carpet and its condition, the service may include pre-treatment of heavily used areas and attention to visible spots and stains.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stain Treatment + Pet Owners ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Stain Treatment */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 shadow-sm">
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Stain Treatment</p>
              <h2 className="text-2xl font-extrabold mb-4">Carpet Stain and Spot Treatment</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Spills and marks are often easier to deal with when they are treated correctly. We can assess common carpet stains caused by:
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
                Different stains and carpet fibres can respond differently to treatment. We use an appropriate cleaning approach and aim for the best realistic result without taking unnecessary risks with the carpet.
              </p>
            </motion.div>

            {/* Pet Owners */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-8 shadow-sm">
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Pet Owners</p>
              <h2 className="text-2xl font-extrabold mb-4">Carpet Cleaning for Pet Owners</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Pets are part of the family, but carpets can quickly collect pet hair, muddy marks and unwanted smells. Professional carpet cleaning can help refresh carpets that receive regular use from dogs, cats and other pets.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We pay particular attention to areas where dirt and odours may have built up and clean the carpet according to its material and condition.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                If you have a specific pet stain or problem area, let us know when requesting your quote so it can be assessed properly.
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
            <h2 className="text-3xl md:text-4xl font-extrabold">Our Carpet Cleaning Process</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              We keep the process straightforward from the first enquiry to the finished clean.
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

      {/* ── Why Choose Luxora ── */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">Why Choose Luxora for Carpet Cleaning in Huddersfield?</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Choosing a carpet cleaner is not only about finding someone with a cleaning machine. You want a team that treats your property carefully and communicates clearly.
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

      {/* ── Large image break ── */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/gallery/gallery-4.jpg"
              alt="Luxora carpet cleaning results in a Huddersfield property"
              width={1400}
              height={533}
              className="w-full max-w-6xl mx-auto rounded-3xl shadow-2xl object-cover aspect-[21/8]"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Domestic + Commercial ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Domestic */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Residential</p>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Domestic Carpet Cleaning in Huddersfield</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Keeping carpets clean can make the whole room feel fresher. We provide domestic carpet cleaning for houses, flats, apartments and rental properties across Huddersfield.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                You can book us for a single carpet or arrange cleaning for several rooms at the same time.
              </p>
              <p className="text-sm font-semibold mb-3">Our service can be useful when:</p>
              <ul className="space-y-2 mb-8">
                {[
                  "Carpets are looking dull or heavily used",
                  "You have recently moved into a property",
                  "You are preparing a home for new tenants",
                  "Stains or marks have built up",
                  "You want to refresh your carpets as part of routine home maintenance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact">
                <Button variant="outline" className="gap-2 rounded-xl">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>

            {/* Commercial */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Commercial</p>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Commercial Carpet Cleaning in Huddersfield</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Carpets in offices and commercial properties often receive much heavier foot traffic than carpets at home. Entrance areas, corridors, waiting areas and workspaces can quickly begin to look worn or dirty.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Luxora provides professional carpet cleaning for suitable commercial premises in Huddersfield. We can discuss the size of the property, access requirements and preferred appointment times before arranging the work.
              </p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery/gallery-5.jpg"
                alt="Commercial carpet cleaning in a Huddersfield office or business premises"
                width={800}
                height={450}
                className="rounded-2xl shadow-lg w-full object-cover aspect-video mb-8"
                loading="lazy"
              />
              <a href="#contact">
                <Button className="gap-2 rounded-xl">
                  Get a Commercial Quote <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </motion.div>
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
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Carpet Cleaning Across Huddersfield</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Luxora Steam Cleaning is based at <strong>24 Thornhill Avenue, Huddersfield, HD3 3DR</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We provide carpet cleaning across Huddersfield and surrounding communities. If you are unsure whether we cover your postcode, contact us with your location and we can confirm availability.
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

      {/* ── More Services ── */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">More Services</p>
            <h2 className="text-3xl md:text-4xl font-extrabold">More Professional Cleaning Services</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Need more than your carpets cleaned? Luxora also provides professional cleaning for other upholstered surfaces around the home.
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
            <Link href="/services/carpet-cleaning" className="text-primary font-semibold hover:underline">
              Carpet Cleaning
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
            <h2 className="text-3xl md:text-4xl font-extrabold">Frequently Asked Questions About Carpet Cleaning in Huddersfield</h2>
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
            Get a Free Carpet Cleaning Quote in Huddersfield
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Tell us how many rooms you need cleaned, your Huddersfield postcode and any stains or problem areas that need attention.
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
