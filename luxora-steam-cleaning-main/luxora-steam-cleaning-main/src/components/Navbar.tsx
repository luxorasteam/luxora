import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LuxoraLogo } from "./Icons";
import ThemeToggle from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const serviceLinks = [
  { label: "Carpet Cleaning",       slug: "carpet-cleaning"       },
  { label: "Sofa Cleaning",         slug: "sofa-cleaning"         },
  { label: "Mattress Cleaning",     slug: "mattress-cleaning"     },
  { label: "Curtain Cleaning",      slug: "curtain-cleaning"      },
  { label: "Chair & Dining Cleaning", slug: "chair-dining-cleaning" },
];

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Anchor href: on homepage scroll directly; on other pages go to /#section
  const anchor = (hash: string) => (isHome ? hash : `/${hash}`);

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
          <Link to="/"><LuxoraLogo /></Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">

            {/* Home */}
            <Link to="/" className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">Home</Link>

            {/* Services dropdown */}
            <div className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link to="/services" className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors flex items-center gap-1">
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
                    <div className="glass-card rounded-xl shadow-xl p-2 min-w-[220px]">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="block px-4 py-2.5 text-sm text-foreground/70 hover:bg-primary/5 hover:text-primary rounded-lg transition-all"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {s.label}
                        </Link>
                      ))}
                      <div className="border-t border-border/40 mt-1 pt-1">
                        <Link
                          to="/services"
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

            <a href={anchor("#why-choose-us")} className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">About Us</a>
            <a href={anchor("#gallery")}       className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">Gallery</a>
            <a href={anchor("#contact")}       className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <a href="tel:07543958332">
              <Button variant="outline" size="sm" className="gap-2 rounded-xl"><Phone className="w-4 h-4" /> Call Now</Button>
            </a>
            <a href={anchor("#contact")}>
              <Button size="sm" className="rounded-xl shadow-md">Get Free Quote</Button>
            </a>
          </div>

          {/* Mobile */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button className="p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden glass border-t border-border/30"
            >
              <div className="p-6 space-y-4">
                <Link to="/" onClick={() => setMobileOpen(false)} className="block text-base font-semibold text-foreground/70 hover:text-primary py-2">Home</Link>
                <Link to="/services" onClick={() => setMobileOpen(false)} className="block text-base font-semibold text-foreground/70 hover:text-primary py-2">All Services</Link>
                {serviceLinks.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} onClick={() => setMobileOpen(false)}
                    className="block text-sm text-foreground/50 hover:text-primary pl-4 py-1">
                    {s.label}
                  </Link>
                ))}
                <a href={anchor("#why-choose-us")} onClick={() => setMobileOpen(false)} className="block text-base font-semibold text-foreground/70 hover:text-primary py-2">About Us</a>
                <a href={anchor("#gallery")}       onClick={() => setMobileOpen(false)} className="block text-base font-semibold text-foreground/70 hover:text-primary py-2">Gallery</a>
                <a href={anchor("#contact")}       onClick={() => setMobileOpen(false)} className="block text-base font-semibold text-foreground/70 hover:text-primary py-2">Contact</a>
                <div className="pt-4 flex flex-col gap-3">
                  <a href="tel:07543958332"><Button variant="outline" className="w-full gap-2 rounded-xl"><Phone className="w-4 h-4" /> Call Now</Button></a>
                  <a href={anchor("#contact")} onClick={() => setMobileOpen(false)}><Button className="w-full rounded-xl">Get Free Quote</Button></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
