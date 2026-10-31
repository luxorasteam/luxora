"use client";

import Link from "next/link";
import { ChevronRight, CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

const values = [
  ["Care", "We treat customers' homes, furniture and workplaces with respect throughout the visit."],
  ["Honest Advice", "Not every mark, stain or material behaves in the same way. We explain what is realistic rather than making promises that cannot be guaranteed."],
  ["Clear Communication", "From the first enquiry to the completed job, we aim to keep the process simple and easy to understand."],
  ["Suitable Cleaning Methods", "Our team considers the material, condition and cleaning requirements before choosing an appropriate approach."],
  ["Consistent Standards", "Whether we are working in a family home or a commercial property, we aim to provide the same level of attention and care."],
];
const steps = [
  ["We Listen", "We start by understanding what the customer wants cleaned and whether there are any specific concerns."],
  ["We Assess", "The condition and material are considered before deciding how the work should be approached."],
  ["We Explain", "If there are limitations or areas that may need special attention, we explain them clearly."],
  ["We Work Carefully", "Our team carries out the agreed work while taking care around the property and its contents."],
  ["We Check the Result", "Before finishing, we review the cleaned areas and provide any relevant aftercare guidance."],
];
function Paragraphs({ items }: { items: string[] }) {
  return <div className="space-y-4 text-muted-foreground leading-relaxed">{items.map(text => <p key={text}>{text}</p>)}</div>;
}
function Points({ items }: { items: string[] }) {
  return <ul className="space-y-3 my-6">{items.map(text => <li key={text} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><span className="text-muted-foreground leading-relaxed">{text}</span></li>)}</ul>;
}
const heading = "text-3xl md:text-4xl font-extrabold mb-5 leading-tight";

export default function AboutUsPage() {
  return <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/60 to-background" />
        <div className="container mx-auto px-6 relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-muted-foreground text-xs mb-6 flex-wrap"><Link href="/" className="hover:text-primary transition-colors">Home</Link><ChevronRight className="w-3 h-3" /><span className="text-foreground/80" aria-current="page">About Us</span></nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">About Luxora Steam Cleaning</h1>
          <div className="max-w-3xl mb-8"><Paragraphs items={[
            "Luxora Steam Cleaning Ltd is a UK-based cleaning company focused on providing careful, reliable service for homes and businesses.",
            "For us, good cleaning is not only about equipment. It is about understanding the property, treating each job with care and giving customers clear, realistic expectations from the start.",
            "With more than 15 years of experience, our team has worked across a wide range of residential and commercial properties while keeping the same simple approach: do the job properly, respect the property and communicate clearly.",
          ]} /></div>
          <Link href="/contact"><Button size="lg" className="gap-2 rounded-xl shadow-md">Get in Touch <ArrowRight className="w-5 h-5" /></Button></Link>
        </div>
      </section>

      <section className="py-20 md:py-28"><div className="container mx-auto px-6"><div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:sticky lg:top-28"><div className="relative">
          <img src="/images/sections/why-choose_us_ke_sath_wali.jpg" alt="Luxora Steam Cleaning professional team at work" className="rounded-2xl shadow-xl w-full" loading="lazy" />
          <div className="absolute -bottom-6 -right-4 md:-right-6 glass-card rounded-2xl p-5 shadow-xl"><p className="text-3xl font-extrabold text-primary">15+</p><p className="text-sm text-muted-foreground font-medium">Years Experience</p></div>
        </div></motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><h2 className={heading}>Our Story</h2><Paragraphs items={[
          "Luxora Steam Cleaning was built around a simple idea: customers should be able to book a cleaning company they can trust inside their home or workplace.",
          "Over the years, we have gained hands-on experience working with different properties, materials and cleaning requirements.",
          "That experience has helped us develop a practical way of working. We look at what each customer actually needs rather than treating every job in exactly the same way.",
          "Today, Luxora continues to serve homeowners, landlords and businesses while keeping personal service at the centre of how we work.",
        ]} /></motion.div>
      </div></div></section>

      <section className="py-20 md:py-24 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" /><div className="container mx-auto px-6 relative max-w-5xl">
        <h2 className={heading}>What We Stand For</h2><p className="text-muted-foreground leading-relaxed mb-8">The way we work matters just as much as the finished result.</p>
        <div className="space-y-5">{values.map(([title, text]) => <div key={title} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" /><div><h3 className="font-bold text-lg mb-2">{title}</h3><p className="text-muted-foreground leading-relaxed">{text}</p></div></div>)}</div>
      </div></section>

      <section className="py-20 md:py-24"><div className="container mx-auto px-6 max-w-5xl"><h2 className={heading}>Experience Built Over More Than 15 Years</h2><Paragraphs items={[
        "Cleaning different properties over many years teaches you that no two jobs are exactly the same.",
        "Luxora has more than 15 years of hands-on industry experience across residential and commercial environments.",
        "Our experience includes working with a variety of fabrics, furnishings and heavily used areas where careful assessment is important.",
        "This knowledge helps our experienced cleaning team make sensible decisions before work begins and avoid using a one-size-fits-all approach.",
      ]} /></div></section>

      <section className="py-16 md:py-20"><div className="container mx-auto px-6"><div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 border border-primary/10"><h2 className={heading}>Our Team</h2><Paragraphs items={[
        "The people entering your property are an important part of the service.",
        "Our team is trained and insured, with a focus on professional behaviour, care and clear communication.",
        "We want customers to feel comfortable asking questions before, during and after the work.",
        "Our approach is straightforward:",
      ]} /><Points items={["Arrive prepared", "Respect the property", "Assess the job carefully", "Explain what can realistically be achieved", "Use a suitable cleaning approach", "Leave the work area tidy"]} /><p className="text-muted-foreground leading-relaxed">For us, professionalism means more than simply completing the cleaning.</p></div></div></section>

      <section className="py-20 md:py-24 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" /><div className="container mx-auto px-6 relative">
        <div className="text-center mb-16"><h2 className={heading}>How We Work</h2><p className="text-muted-foreground mt-4 max-w-md mx-auto">We keep our approach simple.</p></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">{steps.map(([title, text], i) => <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center relative">
          <div className="w-20 h-20 mx-auto rounded-2xl glass-card shadow-md flex items-center justify-center mb-5 relative hover:shadow-lg transition-shadow"><span className="text-2xl font-extrabold text-primary">{i + 1}</span><span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">{i + 1}</span></div>
          <h3 className="font-bold text-lg mb-2">{title}</h3><p className="text-muted-foreground text-sm">{text}</p>
        </motion.div>)}</div>
        <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mt-10">This approach helps us deliver a service based on the actual property rather than assumptions.</p>
      </div></section>

      <section className="py-20 md:py-24"><div className="container mx-auto px-6 max-w-5xl"><h2 className={heading}>Why Customers Choose Luxora</h2><Paragraphs items={[
        "Customers choose a cleaning company for different reasons, but trust usually comes down to a few important things.",
        "With Luxora Steam Cleaning, customers can expect:",
      ]} /><Points items={["More than 15 years of industry experience", "A trained and insured team", "Clear and straightforward communication", "Careful treatment of homes and businesses", "Professional cleaning equipment", "Tailored quotes based on the work required", "A team that focuses on realistic results"]} /><p className="text-muted-foreground leading-relaxed">We believe these basics are what build long-term trust.</p></div></section>

      <section className="py-16 md:py-20"><div className="container mx-auto px-6"><div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 border border-primary/10"><MapPin className="w-5 h-5 text-primary mb-4" /><h2 className={heading}>Based in Huddersfield, Working Across the UK</h2><Paragraphs items={[
        "Luxora Steam Cleaning is based in Huddersfield and works with customers in different parts of the UK.",
        "Our Huddersfield base remains an important part of the business, while our wider coverage allows us to support customers outside the local area where availability allows.",
        "Rather than listing locations simply for search engines, we only want to represent areas that we genuinely serve.",
        "If you are unsure whether Luxora covers your location, contact our team and we can confirm availability.",
      ]} /></div></div></section>

      <section className="py-16 md:py-20"><div className="container mx-auto px-6 max-w-4xl"><h2 className={heading}>See Our Work</h2><div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
        <p>Want to see the type of work we carry out?</p><p>Visit our <Link href="/gallery" className="text-primary font-semibold hover:underline">Gallery</Link> to view examples from Luxora cleaning jobs and see the standard of care we aim to provide.</p><p>You can also explore our <Link href="/services" className="text-primary font-semibold hover:underline">Services</Link> if you would like to understand the different types of cleaning we offer.</p>
      </div><div className="grid grid-cols-2 gap-4 mb-6">
        <div className="rounded-xl overflow-hidden aspect-video shadow-sm"><img src="/images/sections/below-the-whychooseus.avif" alt="Professional steam cleaning technician at work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" /></div>
        <div className="rounded-xl overflow-hidden aspect-video shadow-sm"><img src="/images/sections/whychoose-us-below.avif" alt="Spotlessly clean modern living room after steam cleaning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" /></div>
      </div></div></section>

      <section className="py-16 md:py-20 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" /><div className="container mx-auto px-6 relative max-w-4xl"><h2 className={heading}>Speak to the Luxora Team</h2><Paragraphs items={[
        "If you would like to know more about Luxora Steam Cleaning or discuss cleaning for your home, rental property or business, get in touch with our team.",
        "Tell us what you need help with and where the property is located. We will explain the next step clearly and provide a tailored quote where appropriate.",
      ]} /><div className="flex flex-wrap gap-4 mt-8"><Link href="/contact"><Button size="lg" className="gap-2 rounded-xl shadow-md">Contact Luxora Steam Cleaning <ArrowRight className="w-5 h-5" /></Button></Link><Link href="/contact"><Button variant="outline" size="lg" className="gap-2 rounded-xl">Get a Free Quote</Button></Link></div></div></section>
    </main>
    <Footer /><FloatingButtons />
  </div>;
}
