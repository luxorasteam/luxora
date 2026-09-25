"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "How much does carpet cleaning cost?", a: "Our carpet cleaning starts from £79. The final price depends on the size of the area, level of soiling, and any additional treatments required. Sofa cleaning also starts from £79, mattress cleaning from £69, curtains cleaning from £79, and chair & dining cleaning from £79. Contact us for a free, no-obligation quote." },
  { q: "Are your cleaning products safe for children and pets?", a: "Absolutely. We use eco-friendly, non-toxic cleaning solutions that are safe for children, pets, and people with allergies. Our products are biodegradable and environmentally responsible." },
  { q: "How long does the cleaning process take?", a: "Most residential cleaning sessions take between 1-3 hours depending on the size of the property and services requested. We always arrive on time and work efficiently." },
  { q: "Do I need to be home during the cleaning?", a: "You don't have to be home. Many of our clients provide access arrangements. However, we recommend being present for the initial visit so we can discuss your specific requirements." },
  { q: "What areas do you cover?", a: "We proudly provide professional cleaning services across the North West, North East, Yorkshire & the Humber, the East Midlands, the West Midlands, and North Wales. Our coverage includes Manchester, Liverpool, Leeds, Sheffield, Bradford, York, Hull, Nottingham, Derby, Stoke-on-Trent, Telford, Newcastle, Chester, Carlisle, Wrexham, Llandudno, Scotland and the surrounding towns and villages. Contact us to confirm availability in your area — same-day and next-day appointments available." },
  { q: "Do you offer any guarantees?", a: "Yes! We offer a 100% satisfaction guarantee. If you're not completely happy with our work, we'll return and re-clean the area at no additional cost." },
];

export default function FAQ() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-background" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">Frequently Asked Questions</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b">
                <AccordionTrigger className="text-left font-semibold text-base py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
