"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LuxoraLogo } from "./Icons";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface CityLink {
  label: string;
  href: string;
  available: boolean;
}

interface ServiceLink {
  label: string;
  slug: string;
  cities: CityLink[];
}

const serviceLinks: ServiceLink[] = [
  {
    label: "Carpet Cleaning",
    slug: "carpet-cleaning",
    cities: [{ label: "Huddersfield", href: "/carpet-cleaning-huddersfield", available: true }],
  },
  {
    label: "Sofa Cleaning",
    slug: "sofa-cleaning",
    cities: [{ label: "Huddersfield", href: "/sofa-cleaning-huddersfield", available: true }],
  },
  {
    label: "Mattress Cleaning",
    slug: "mattress-cleaning",
    cities: [{ label: "Huddersfield", href: "/mattress-cleaning-huddersfield", available: true }],
  },
  {
    label: "Curtain Cleaning",
    slug: "curtain-cleaning",
    cities: [{ label: "Huddersfield", href: "/curtain-cleaning-huddersfield", available: true }],
  },
  {
    label: "Chair & Dining Cleaning",
    slug: "chair-dining-cleaning",
    cities: [{ label: "Huddersfield", href: "/chair-dining-cleaning-huddersfield", available: true }],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled]               = useState(false);
  const [mobileOpen, setMobileOpen]           = useState(false);
  const [dropdownOpen, setDropdownOpen]       = useState(false);
  const [activeSubmenu, setActiveSubmenu]     = useState<string | null>(null);
  const [mobileCityOpen, setMobileCityOpen]   = useState<string | null>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileCity = (slug: string) =>
    setMobileCityOpen((prev) => (prev === slug ? null : slug));

  return (
    <>
      {/* Top info bar */}
      <div className="hidden lg:block bg-secondary text-secondary-foreground text-sm">
        <div className="container mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> 24 Thornhill Avenue, HD3 3DR</span>
            <a href="tel:07543958332" className="flex items-center gap-1.5 hover:text-white/80 transition-colors"><Phone className="w-3.5 h-3.5" /> 07543 958332</a>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:Steamcleaningserviceltd@gmail.com" className="flex items-center gap-1.5 hover:text-white/80 transition-colors"><Mail className="w-3.5 h-3.5" /> Steamcleaningserviceltd@gmail.com</a>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 24/7 — All Week</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 transition-all duration-500 glass shadow-lg">
        <div className="container mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
          <Link href="/"><LuxoraLogo /></Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">Home</Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => { setDropdownOpen(false); setActiveSubmenu(null); }}
            >
              <Link href="/services" className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors flex items-center gap-1">
                Services <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </Link>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 pt-2"
                  >
                    <div className="glass-card rounded-xl shadow-xl p-2 min-w-[240px]">
                      {serviceLinks.map((s) => (
                        <div
                          key={s.slug}
                          className="relative"
                          onMouseEnter={() => setActiveSubmenu(s.slug)}
                          onMouseLeave={() => setActiveSubmenu(null)}
                        >
                          <div className="flex items-center rounded-lg hover:bg-primary/5 transition-all">
                            <Link
                              href={`/services/${s.slug}`}
                              className="flex-1 px-4 py-2.5 text-sm text-foreground/70 hover:text-primary"
                              onClick={() => setDropdownOpen(false)}
                            >
                              {s.label}
                            </Link>
                            <span className="pr-3 text-foreground/40">
                              <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          </div>

                          {/* City flyout — opens to the right */}
                          <AnimatePresence>
                            {activeSubmenu === s.slug && (
                              <motion.div
                                initial={{ opacity: 0, x: 6 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 6 }}
                                transition={{ duration: 0.12 }}
                                className="absolute left-full top-0 pl-2"
                              >
                                <div className="glass-card rounded-xl shadow-xl p-2 min-w-[180px]">
                                  <p className="px-3 py-1.5 text-xs font-semibold text-foreground/40 uppercase tracking-wider">By Area</p>
                                  {s.cities.map((city) =>
                                    city.available ? (
                                      <Link
                                        key={city.label}
                                        href={city.href}
                                        className="block px-4 py-2.5 text-sm text-foreground/70 hover:bg-primary/5 hover:text-primary rounded-lg transition-all"
                                        onClick={() => { setDropdownOpen(false); setActiveSubmenu(null); }}
                                      >
                                        {city.label}
                                      </Link>
                                    ) : (
                                      <span
                                        key={city.label}
                                        className="block px-4 py-2.5 text-sm text-foreground/30 rounded-lg cursor-default"
                                      >
                                        {city.label} <span className="text-xs">(soon)</span>
                                      </span>
                                    )
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}

                      <div className="border-t border-border/40 mt-1 pt-1">
                        <Link
                          href="/services"
                          className="block px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5 rounded-lg transition-all"
                          onClick={() => setDropdownOpen(false)}
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about-us" className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">About Us</Link>
            <Link href="/gallery"  className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">Gallery</Link>
            <Link href="/contact"  className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">Contact</Link>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a href="tel:07543958332">
              <Button variant="outline" size="sm" className="gap-2 rounded-xl"><Phone className="w-4 h-4" /> Call Now</Button>
            </a>
            <Link href="/contact">
              <Button size="sm" className="rounded-xl shadow-md">Get Free Quote</Button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button className="p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden glass border-t border-border/30"
            >
              <div className="p-6 space-y-1">
                <Link href="/" onClick={() => setMobileOpen(false)} className="block text-base font-semibold text-foreground/70 hover:text-primary py-2">Home</Link>

                <div className="py-1">
                  <Link href="/services" onClick={() => setMobileOpen(false)} className="block text-base font-semibold text-foreground/70 hover:text-primary py-2">All Services</Link>

                  {serviceLinks.map((s) => (
                    <div key={s.slug} className="ml-2">
                      {/* Service row with toggle arrow */}
                      <div className="flex items-center">
                        <Link
                          href={`/services/${s.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="flex-1 text-sm text-foreground/50 hover:text-primary py-1.5"
                        >
                          {s.label}
                        </Link>
                        <button
                          onClick={() => toggleMobileCity(s.slug)}
                          className="p-1.5 text-foreground/40 hover:text-primary transition-colors"
                          aria-label={`Toggle ${s.label} cities`}
                        >
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileCityOpen === s.slug ? "rotate-180" : ""}`} />
                        </button>
                      </div>

                      {/* City links expand underneath */}
                      <AnimatePresence>
                        {mobileCityOpen === s.slug && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 pb-1 space-y-0.5">
                              <p className="text-xs text-foreground/30 uppercase tracking-wider py-1">By Area</p>
                              {s.cities.map((city) =>
                                city.available ? (
                                  <Link
                                    key={city.label}
                                    href={city.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-sm text-primary py-1 hover:underline"
                                  >
                                    {city.label}
                                  </Link>
                                ) : (
                                  <span key={city.label} className="block text-sm text-foreground/25 py-1">
                                    {city.label} <span className="text-xs">(coming soon)</span>
                                  </span>
                                )
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <Link href="/about-us" onClick={() => setMobileOpen(false)} className="block text-base font-semibold text-foreground/70 hover:text-primary py-2">About Us</Link>
                <Link href="/gallery"  onClick={() => setMobileOpen(false)} className="block text-base font-semibold text-foreground/70 hover:text-primary py-2">Gallery</Link>
                <Link href="/contact"  onClick={() => setMobileOpen(false)} className="block text-base font-semibold text-foreground/70 hover:text-primary py-2">Contact</Link>

                <div className="pt-4 flex flex-col gap-3">
                  <a href="tel:07543958332"><Button variant="outline" className="w-full gap-2 rounded-xl"><Phone className="w-4 h-4" /> Call Now</Button></a>
                  <Link href="/contact" onClick={() => setMobileOpen(false)}><Button className="w-full rounded-xl">Get Free Quote</Button></Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
