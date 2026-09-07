import { ShieldCheck, Leaf, Award, BadgePoundSterling } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { icon: ShieldCheck, title: "100% Satisfaction", sub: "Guaranteed" },
  { icon: Leaf, title: "Eco-Friendly", sub: "Cleaning Solutions" },
  { icon: Award, title: "Trained & Insured", sub: "Professionals" },
  { icon: BadgePoundSterling, title: "Affordable", sub: "Pricing" },
];

export default function TrustBar() {
  return (
    <section id="trust" className="relative -mt-16 z-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto max-w-5xl"
      >
        <div className="bg-primary rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-xl">
          {items.map((item, i) => (
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
      </motion.div>
    </section>
  );
}
