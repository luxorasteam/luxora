import { Phone, MapPin, Sparkles, Smile } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: Phone, num: "1", title: "Book", desc: "Contact us via phone, email or online form." },
  { icon: MapPin, num: "2", title: "We Visit", desc: "Our team arrives on time with professional equipment." },
  { icon: Sparkles, num: "3", title: "We Clean", desc: "We deep steam clean with care and precision." },
  { icon: Smile, num: "4", title: "You Relax", desc: "Enjoy your fresh, clean and healthy space." },
];

export default function Process() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">Our Simple Cleaning Process</h2>
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
              <div className="w-20 h-20 mx-auto rounded-2xl glass-card shadow-md flex items-center justify-center mb-5 relative group hover:shadow-lg transition-shadow">
                <s.icon className="w-8 h-8 text-primary" />
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
  );
}
