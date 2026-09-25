"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, ArrowRight, Loader2, Send } from "lucide-react";
import { WhatsAppIcon } from "./Icons";
import { motion } from "framer-motion";
import { toast } from "sonner";

async function submitQuote(data: {
  name: string; phone?: string; email: string;
  service?: string; address?: string; message: string;
}) {
  const response = await fetch("/api/submit-quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to submit quote");
  return response.json() as Promise<{ success: boolean; id: string }>;
}

const contactInfo = [
  { icon: MapPin, label: "24 Thornhill Avenue, HD3 3DR" },
  { icon: Phone, label: "07543 958332", href: "tel:07543958332" },
  { icon: Mail, label: "Steamcleaningserviceltd@gmail.com", href: "mailto:Steamcleaningserviceltd@gmail.com" },
  { icon: Clock, label: "24/7 — All Week" },
];

const serviceLabels: Record<string, string> = {
  carpet: "Carpet Cleaning",
  sofa: "Sofa Cleaning",
  mattress: "Mattress Cleaning",
  curtains: "Curtains Cleaning",
  "chair-dining": "Chair & Dining Cleaning",
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", address: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await submitQuote({
        name: form.name,
        phone: form.phone || undefined,
        email: form.email,
        service: form.service ? serviceLabels[form.service] || form.service : undefined,
        address: form.address || undefined,
        message: form.message,
      });
      toast.success("Thank you! We'll get back to you shortly.");
      setForm({ name: "", phone: "", email: "", service: "", address: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/30" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">Request A Free Quote</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">Get in touch today for a free, no-obligation quote. We respond within 2 hours.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card rounded-2xl p-6 md:p-8 shadow-lg space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name *" className="rounded-xl bg-background/60" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              <Input placeholder="Phone Number" className="rounded-xl bg-background/60" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input type="email" placeholder="Email Address *" className="rounded-xl bg-background/60" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              <Select value={form.service} onValueChange={(v) => setForm({ ...form, service: v })}>
                <SelectTrigger className="rounded-xl bg-background/60"><SelectValue placeholder="Select Service" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="carpet">Carpet Cleaning</SelectItem>
                  <SelectItem value="sofa">Sofa Cleaning</SelectItem>
                  <SelectItem value="mattress">Mattress Cleaning</SelectItem>
                  <SelectItem value="curtains">Curtains Cleaning</SelectItem>
                  <SelectItem value="chair-dining">Chair & Dining Cleaning</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Input placeholder="Your Address (Postcode)" className="rounded-xl bg-background/60" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
            <Textarea placeholder="Your Message *" rows={5} className="rounded-xl bg-background/60" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
            <Button type="submit" size="lg" className="gap-2 rounded-xl shadow-md w-full sm:w-auto" disabled={loading}>
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-4 h-4" /><span>Send Message</span><ArrowRight className="w-5 h-5" /></>}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="glass-card rounded-2xl p-6 shadow-sm space-y-5">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5 text-primary" />
                  </div>
                  {c.href ? (
                    <a href={c.href} className="text-sm font-medium mt-2.5 hover:text-primary transition-colors">{c.label}</a>
                  ) : (
                    <p className="text-sm font-medium mt-2.5">{c.label}</p>
                  )}
                </div>
              ))}
              <a
                href="https://wa.me/447543958332?text=Hi%20Luxora%20Steam%20Cleaning!%20I%27d%20like%20to%20book%20a%20cleaning%20service.%20Please%20let%20me%20know%20your%20availability.%20Thanks!"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl transition-colors hover:bg-accent"
                style={{ color: "#25D366" }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "#25D366" }}>
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Chat on WhatsApp</p>
                  <p className="text-xs text-muted-foreground">Quick response guaranteed</p>
                </div>
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-border/50">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2366.5!2d-1.8!3d53.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDM5JzAwLjAiTiAxwrA0OCcwMC4wIlc!5e0!3m2!1sen!2suk!4v1600000000000"
                className="w-full h-48" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
