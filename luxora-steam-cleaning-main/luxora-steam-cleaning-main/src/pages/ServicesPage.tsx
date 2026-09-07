import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";
import Contact from "../components/Contact";
import { services } from "../data/services";

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Our Services | Luxora Steam Cleaning Ltd";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background" />
        <div className="container mx-auto px-6 relative text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-primary font-semibold text-sm tracking-[0.15em] uppercase mb-3">What We Offer</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Professional Cleaning Services</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Industry-leading steam cleaning solutions for homes and businesses across the UK.
              Affordable prices, guaranteed results, available 24/7.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/#contact">
                <Button size="lg" className="gap-2 rounded-xl px-8">Get Free Quote <ArrowRight className="w-5 h-5" /></Button>
              </a>
              <a href="tel:07543958332">
                <Button variant="outline" size="lg" className="gap-2 rounded-xl px-8">
                  <Phone className="w-4 h-4" /> 07543 958332
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={s.heroImage}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 glass-dark rounded-full px-4 py-1.5">
                    <span className="text-white font-bold text-sm">{s.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="font-bold text-xl mb-2">{s.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.shortDesc}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to={`/services/${s.slug}`} className="flex-1">
                      <Button className="w-full gap-2 rounded-xl" size="sm">
                        Explore More <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <a href="/#contact" className="flex-1">
                      <Button variant="outline" className="w-full rounded-xl" size="sm">
                        Get Quote
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
