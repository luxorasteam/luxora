"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";
import { LuxoraLogo, WhatsAppIcon } from "./Icons";

const services = [
  { label: "Carpet Cleaning",         slug: "carpet-cleaning"        },
  { label: "Sofa Cleaning",           slug: "sofa-cleaning"          },
  { label: "Mattress Cleaning",       slug: "mattress-cleaning"      },
  { label: "Curtains Cleaning",       slug: "curtain-cleaning"       },
  { label: "Chair & Dining Cleaning", slug: "chair-dining-cleaning"  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="mb-5"><LuxoraLogo variant="white" /></div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Professional steam cleaning services you can rely on. We bring cleanliness and freshness to your space.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/447543958332" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <WhatsAppIcon className="w-4 h-4 text-white/70" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/50 hover:text-white text-sm transition-colors">Home</Link></li>
              <li><a href="/#why-choose-us" className="text-white/50 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><Link href="/services" className="text-white/50 hover:text-white text-sm transition-colors">Services</Link></li>
              <li><a href="/#gallery" className="text-white/50 hover:text-white text-sm transition-colors">Gallery</a></li>
              <li><a href="/#contact" className="text-white/50 hover:text-white text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-white/50 hover:text-white text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5">Contact Info</h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 text-white/50 text-sm"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> 24 Thornhill Avenue, HD3 3DR</li>
              <li><a href="tel:07543958332" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors"><Phone className="w-4 h-4 shrink-0" /> 07543 958332</a></li>
              <li><a href="mailto:Steamcleaningserviceltd@gmail.com" className="flex items-center gap-3 text-white/50 hover:text-white text-sm transition-colors break-all"><Mail className="w-4 h-4 shrink-0" /> Steamcleaningserviceltd@gmail.com</a></li>
              <li className="flex items-start gap-3 text-white/50 text-sm"><Clock className="w-4 h-4 mt-0.5 shrink-0" /> 24/7 — All Week</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/30">
          <p>© 2027 Luxora Steam Cleaning Ltd. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/cookies-policy" className="hover:text-white transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
