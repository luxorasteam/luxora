"use client";

import { MessageSquare, Search, Droplets, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: MessageSquare, num: "1", title: "Tell Us What Needs Cleaning", desc: "Contact us by phone, email or online form and describe what you need cleaned." },
  { icon: Search, num: "2", title: "We Assess", desc: "Our technician evaluates the fabric, material or surface and any areas of concern." },
  { icon: Droplets, num: "3", title: "Suitable Treatment Is Used", desc: "We select the right cleaning method and products for the specific fabric or surface." },
  { icon: Sparkles, num: "4", title: "Deep Cleaning", desc: "Using professional steam extraction equipment, we deep clean thoroughly and carefully." },
  { icon: CheckCircle2, num: "5", title: "Final Check", desc: "We inspect the results with you to ensure everything meets the expected standard." },
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">How Our Cleaning Process Works</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
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
              <h3 className="font-bold text-base mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
