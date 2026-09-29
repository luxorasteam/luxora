"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "What steam cleaning services do you offer?", a: "We provide professional steam cleaning for carpets, sofas, mattresses, curtains, and chair and dining upholstery. Each service uses specialist equipment and fabric-appropriate techniques to deliver a thorough, hygienic clean." },
  { q: "How do I get a price for cleaning?", a: "We provide free, no-obligation quotes tailored to your specific requirements. The cost depends on the size of the area, level of soiling, and any additional treatments needed. Contact us to get a personalised quote." },
  { q: "Are your cleaning products safe for children and pets?", a: "Yes. We use eco-friendly, non-toxic cleaning solutions that are biodegradable and suitable for households with children, pets, and people with sensitivities. We are happy to discuss products used before any appointment." },
  { q: "How long does a typical cleaning session take?", a: "Most residential cleaning sessions take between one and three hours, depending on the surface type, size, and level of soiling. We will give you a time estimate when we confirm your booking." },
  { q: "What areas do you cover?", a: "We provide professional steam cleaning services across the North West, North East, Yorkshire and the Humber, the East Midlands, the West Midlands, and North Wales. Our coverage includes Manchester, Liverpool, Leeds, Sheffield, Bradford, York, Hull, Nottingham, Derby, Newcastle, Stoke-on-Trent, Chester, Carlisle, Wrexham, Llandudno and surrounding towns. Contact us to confirm availability in your area." },
  { q: "What happens if I am not satisfied with the result?", a: "If you are not satisfied with the outcome, please let us know and we will return to re-clean the area at no additional charge. We aim to resolve any concerns promptly." },
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
