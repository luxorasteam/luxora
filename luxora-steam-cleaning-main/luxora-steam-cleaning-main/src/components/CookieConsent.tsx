"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const CONSENT_KEY = "luxora-cookie-consent";

function loadGTM() {
  if (typeof window === "undefined") return;
  // Push consent to dataLayer and fire GTM
  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({ event: "cookie_consent_granted" });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (!stored) {
        setVisible(true);
      } else if (stored === "accepted") {
        loadGTM();
      }
    } catch {
      // localStorage blocked (private browsing) — show the banner
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem(CONSENT_KEY, "accepted"); } catch {}
    loadGTM();
    setVisible(false);
  };

  const decline = () => {
    try { localStorage.setItem(CONSENT_KEY, "declined"); } catch {}
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          role="dialog"
          aria-label="Cookie consent"
          aria-live="polite"
          className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto glass-card rounded-2xl shadow-2xl border border-border/60 p-5 md:p-6">
            <div className="flex gap-4 items-start">
              <div className="hidden sm:flex w-10 h-10 rounded-xl bg-primary/10 items-center justify-center shrink-0 mt-0.5">
                <Cookie className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-sm mb-1">We use cookies</p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  We use cookies to analyse site traffic and measure advertising effectiveness via Google Tag Manager and Google Ads. By clicking <strong>Accept all</strong> you consent to these cookies being stored on your device. You can decline non-essential cookies or learn more in our{" "}
                  <Link href="/cookies-policy" className="text-primary hover:underline font-medium">Cookies Policy</Link>
                  {" "}and{" "}
                  <Link href="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link>.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <Button size="sm" onClick={accept} className="rounded-xl text-xs px-5">
                    Accept all
                  </Button>
                  <Button size="sm" variant="outline" onClick={decline} className="rounded-xl text-xs px-5">
                    Decline
                  </Button>
                  <Link href="/cookies-policy">
                    <Button size="sm" variant="ghost" className="rounded-xl text-xs px-4 text-muted-foreground hover:text-foreground">
                      Manage preferences
                    </Button>
                  </Link>
                </div>
              </div>
              <button
                onClick={decline}
                aria-label="Dismiss cookie banner"
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
