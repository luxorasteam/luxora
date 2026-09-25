"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const pairs = [
  { label: "Carpet Cleaning",       after: "/carpet.png"       },
  { label: "Sofa Cleaning",         after: "/sofa.png"         },
  { label: "Curtains Cleaning",     after: "/curtain.png"      },
  { label: "Chair & Dining Cleaning", after: "/dining_table.png" },
];

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  };

  const navigate = (dir: number) => {
    setPosition(50);
    setCurrent((c) => (c + dir + pairs.length) % pairs.length);
  };

  const pair = pairs[current];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">Before & After</p>
          <h2 className="text-3xl md:text-4xl font-bold">See The Difference We Make</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          <div
            ref={containerRef}
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-col-resize select-none aspect-video"
            onMouseMove={(e) => handleMove(e.clientX)}
            onTouchMove={(e) => handleMove(e.touches[0].clientX)}
          >
            {/* After */}
            <img src={pair.after} alt={`After — ${pair.label}`} className="absolute inset-0 w-full h-full object-cover" />

            {/* Before */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
              <img src={pair.after} alt={`Before — ${pair.label}`} className="w-full h-full object-cover brightness-50 contrast-125 sepia" />
            </div>

            {/* Divider */}
            <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg" style={{ left: `${position}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xs">↔</span>
              </div>
            </div>

            <span className="absolute bottom-4 left-4 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">Before</span>
            <span className="absolute bottom-4 right-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">After</span>
            <span className="absolute top-4 left-1/2 -translate-x-1/2 glass-dark text-white text-xs font-semibold px-4 py-1.5 rounded-full">{pair.label}</span>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full glass-card shadow flex items-center justify-center hover:bg-primary/10 transition-colors">
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <div className="flex gap-2">
              {pairs.map((_, i) => (
                <button key={i} onClick={() => { setPosition(50); setCurrent(i); }}
                  className={`h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-muted-foreground/30 w-2.5"}`}
                />
              ))}
            </div>
            <button onClick={() => navigate(1)} className="w-10 h-10 rounded-full glass-card shadow flex items-center justify-center hover:bg-primary/10 transition-colors">
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
