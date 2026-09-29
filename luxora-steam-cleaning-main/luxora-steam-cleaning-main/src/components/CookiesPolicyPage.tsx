"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

const CONTACT_EMAIL = "Steamcleaningserviceltd@gmail.com";
const LAST_UPDATED = "29 September 2026";

export default function CookiesPolicyPage() {
  const openPreferences = () => {
    localStorage.removeItem("luxora-cookie-consent");
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/60 to-background" />
        <div className="container mx-auto px-6 relative">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-muted-foreground text-xs mb-6 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground/80">Cookies Policy</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Cookies Policy</h1>
          <p className="text-muted-foreground text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-10 text-foreground/80 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your device (computer, tablet or phone) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners. Cookies cannot access or damage your files.
              </p>
              <p className="mt-3">
                This policy explains how Luxora Steam Cleaning Ltd uses cookies and similar tracking technologies on <strong>luxorasteamcleaning.co.uk</strong>, and how you can manage your preferences.
              </p>
              <p className="mt-3">
                This policy should be read alongside our <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">2. UK Law and Cookie Consent</h2>
              <p>
                Under the Privacy and Electronic Communications Regulations 2003 (PECR) and UK GDPR, we are required to obtain your informed consent before placing non-essential cookies on your device. Essential cookies that are strictly necessary for the website to function do not require consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">3. The Cookies We Use</h2>

              <h3 className="text-base font-bold text-foreground mt-5 mb-3">3.1 Strictly Necessary Cookies</h3>
              <p className="mb-3">These cookies are essential for the website to operate. They do not track you and do not require your consent.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10 text-left">
                      <th className="px-4 py-2.5 font-semibold text-foreground rounded-tl-lg">Cookie name</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Purpose</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground rounded-tr-lg">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/40">
                      <td className="px-4 py-3 font-mono text-xs">luxora-theme</td>
                      <td className="px-4 py-3">Stores your dark/light mode preference so the correct theme is applied on page load.</td>
                      <td className="px-4 py-3">Persistent (localStorage)</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="px-4 py-3 font-mono text-xs">luxora-cookie-consent</td>
                      <td className="px-4 py-3">Records whether you have accepted or declined non-essential cookies.</td>
                      <td className="px-4 py-3">1 year (localStorage)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-bold text-foreground mt-7 mb-3">3.2 Analytics Cookies</h3>
              <p className="mb-3">These cookies help us understand how visitors use our website so we can improve it. They are only set if you accept cookies.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10 text-left">
                      <th className="px-4 py-2.5 font-semibold text-foreground rounded-tl-lg">Cookie name</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Provider</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Purpose</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground rounded-tr-lg">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/40">
                      <td className="px-4 py-3 font-mono text-xs">_ga</td>
                      <td className="px-4 py-3">Google Analytics</td>
                      <td className="px-4 py-3">Distinguishes unique users by assigning a randomly generated number as a client identifier.</td>
                      <td className="px-4 py-3">2 years</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="px-4 py-3 font-mono text-xs">_ga_*</td>
                      <td className="px-4 py-3">Google Analytics</td>
                      <td className="px-4 py-3">Stores and counts page views.</td>
                      <td className="px-4 py-3">2 years</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="px-4 py-3 font-mono text-xs">_gid</td>
                      <td className="px-4 py-3">Google Analytics</td>
                      <td className="px-4 py-3">Distinguishes users for session tracking.</td>
                      <td className="px-4 py-3">24 hours</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-base font-bold text-foreground mt-7 mb-3">3.3 Marketing and Advertising Cookies</h3>
              <p className="mb-3">These cookies are used to measure the effectiveness of advertising campaigns. They are only set if you accept cookies.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10 text-left">
                      <th className="px-4 py-2.5 font-semibold text-foreground rounded-tl-lg">Cookie name</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Provider</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground">Purpose</th>
                      <th className="px-4 py-2.5 font-semibold text-foreground rounded-tr-lg">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/40">
                      <td className="px-4 py-3 font-mono text-xs">_gcl_au</td>
                      <td className="px-4 py-3">Google Ads</td>
                      <td className="px-4 py-3">Used by Google Ads to store and track conversions.</td>
                      <td className="px-4 py-3">90 days</td>
                    </tr>
                    <tr className="border-b border-border/40">
                      <td className="px-4 py-3 font-mono text-xs">IDE</td>
                      <td className="px-4 py-3">Google DoubleClick</td>
                      <td className="px-4 py-3">Used to show Google ads based on browsing habits.</td>
                      <td className="px-4 py-3">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Third-Party Cookies</h2>
              <p>
                Some cookies are set by third-party services we use, such as Google (via Google Tag Manager and Google Ads). These providers have their own privacy policies which govern how they use data collected through their cookies:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5">
                <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Managing Your Cookies</h2>

              <h3 className="text-base font-bold text-foreground mt-4 mb-2">5.1 Our Cookie Consent Tool</h3>
              <p>You can change your cookie preferences at any time using the button below:</p>
              <div className="mt-4">
                <Button onClick={openPreferences} className="rounded-xl">
                  Manage Cookie Preferences
                </Button>
              </div>

              <h3 className="text-base font-bold text-foreground mt-6 mb-2">5.2 Browser Settings</h3>
              <p>
                You can also control cookies through your browser settings. Most browsers allow you to block or delete cookies. Please note that blocking all cookies may affect how our website functions. Links to browser cookie settings:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Safari</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              </ul>

              <h3 className="text-base font-bold text-foreground mt-6 mb-2">5.3 Google Opt-Out</h3>
              <p>
                You can opt out of Google Analytics across all websites by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Analytics Opt-out Browser Add-on</a>. You can also adjust Google ad settings at <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">adssettings.google.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Changes to This Policy</h2>
              <p>
                We may update this Cookies Policy periodically to reflect changes in the cookies we use or applicable law. The "Last updated" date at the top of this page will be revised accordingly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
