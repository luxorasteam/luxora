import { CheckCircle2, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Advanced Steam Cleaning Equipment",
    detail: "Our industrial-grade steam machines heat water to 150–180°C, penetrating deep into fibres to break down dirt, stains, bacteria and dust mites that standard vacuums simply cannot reach. The result is a deeper, longer-lasting, healthier clean every time.",
  },
  { title: "Eco-Friendly & Safe Products", detail: "Biodegradable, non-toxic solutions — completely safe for children, pets and allergy sufferers." },
  { title: "Experienced & Professional Team", detail: "Years of hands-on experience across residential and commercial properties throughout the UK." },
  { title: "Flexible Appointments", detail: "We work around your schedule. Same-day and next-day bookings available 24/7, all week." },
  { title: "Fully Insured & Vetted Staff", detail: "All team members are DBS checked, fully insured and professionally trained." },
  { title: "100% Satisfaction Guarantee", detail: "Not happy with the result? We return and re-clean at absolutely no extra charge." },
];

const coverageImages = [
  {
    src: "/images/sections/below-the-whychooseus.avif",
    alt: "Professional steam cleaning technician at work",
  },
  {
    src: "/images/sections/whychoose-us-below.avif",
    alt: "Spotlessly clean modern living room",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <div className="relative">
              <img
                src="/images/sections/why-choose_us_ke_sath_wali.jpg"
                alt="Professional cleaning team"
                className="rounded-2xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-4 md:-right-6 glass-card rounded-2xl p-5 shadow-xl">
                <p className="text-3xl font-extrabold text-primary">15+</p>
                <p className="text-sm text-muted-foreground font-medium">Years Experience</p>
              </div>
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
              We Care About Your<br />Hygiene & Comfort
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We use advanced steam cleaning technology and eco-friendly products to deliver a healthier and cleaner environment for you and your family.
            </p>

            {/* Benefits */}
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

            {/* Coverage area */}
            <div className="glass-card rounded-2xl p-6 mb-8 border border-primary/10">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-primary" />
                <p className="text-sm font-bold text-primary uppercase tracking-wider">Our Coverage</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We proudly provide professional carpet, sofa, and mattress cleaning services across the <strong className="text-foreground">North West, North East, Yorkshire & the Humber, the East Midlands, the West Midlands,</strong> and <strong className="text-foreground">North Wales.</strong>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                Our coverage includes <strong className="text-foreground">Manchester, Liverpool, Leeds, Sheffield, Bradford, York, Hull, Nottingham, Derby, Stoke-on-Trent, Telford, Newcastle, Chester, Carlisle, Wrexham, Llandudno, Scotland</strong> and the surrounding towns and villages.
              </p>

              {/* 2 coverage images */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                {coverageImages.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-video shadow-sm">
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            <a href="#contact">
              <Button size="lg" className="gap-2 rounded-xl shadow-md">
                Get A Quote <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
