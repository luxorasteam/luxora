"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

const BASE_URL = "https://luxorasteamcleaning.co.uk";
const CONTACT_EMAIL = "Steamcleaningserviceltd@gmail.com";
const LAST_UPDATED = "29 September 2026";

export default function PrivacyPolicyPage() {
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
            <span className="text-foreground/80">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto prose-custom space-y-10 text-foreground/80 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. Who We Are</h2>
              <p>
                Luxora Steam Cleaning Ltd ("we", "us", "our") is a professional steam cleaning company based at 24 Thornhill Avenue, Huddersfield, HD3 3DR, United Kingdom. We are the data controller for the personal information you provide to us through this website (<a href={BASE_URL} className="text-primary hover:underline">{BASE_URL}</a>) and through direct contact.
              </p>
              <p className="mt-3">
                If you have any questions about how we handle your data, you can contact us at: <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">2. What Information We Collect</h2>
              <p>We may collect the following personal information when you use our website or contact us:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5">
                <li><strong>Contact details</strong> — your name, phone number, email address and postcode when you submit a quote request or contact form.</li>
                <li><strong>Service information</strong> — details about the service you require, such as property type and cleaning needs.</li>
                <li><strong>Communication records</strong> — emails, WhatsApp messages or phone call notes when you contact us directly.</li>
                <li><strong>Technical data</strong> — IP address, browser type, pages visited and referring website, collected automatically via cookies (see our <Link href="/cookies-policy" className="text-primary hover:underline">Cookies Policy</Link>).</li>
              </ul>
              <p className="mt-3">We do not collect sensitive personal data (such as health information) unless you voluntarily provide it in connection with a service request.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
              <p>We use your personal information for the following purposes and on the following legal bases under UK GDPR:</p>
              <div className="mt-3 space-y-3">
                <div className="glass-card rounded-xl p-4">
                  <p className="font-semibold text-foreground text-sm">To respond to your enquiry or provide a quote</p>
                  <p className="text-sm mt-1">Legal basis: <em>Contract</em> (Article 6(1)(b)) — necessary to take steps at your request before entering a contract.</p>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <p className="font-semibold text-foreground text-sm">To deliver the cleaning service you have booked</p>
                  <p className="text-sm mt-1">Legal basis: <em>Contract</em> (Article 6(1)(b)).</p>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <p className="font-semibold text-foreground text-sm">To comply with legal obligations</p>
                  <p className="text-sm mt-1">Legal basis: <em>Legal obligation</em> (Article 6(1)(c)) — such as maintaining financial records for HMRC.</p>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <p className="font-semibold text-foreground text-sm">To analyse website usage and improve our services</p>
                  <p className="text-sm mt-1">Legal basis: <em>Consent</em> (Article 6(1)(a)) — only where you have accepted analytics cookies.</p>
                </div>
                <div className="glass-card rounded-xl p-4">
                  <p className="font-semibold text-foreground text-sm">To send you follow-up communications about your booking</p>
                  <p className="text-sm mt-1">Legal basis: <em>Legitimate interests</em> (Article 6(1)(f)) — to ensure service quality.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. How Long We Keep Your Data</h2>
              <p>We retain personal data only for as long as necessary for the purpose it was collected:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5">
                <li><strong>Enquiry and quote records</strong> — up to 12 months if no booking follows.</li>
                <li><strong>Customer and booking records</strong> — up to 6 years from the date of last service, in line with HMRC requirements for financial records.</li>
                <li><strong>Website analytics data</strong> — in accordance with Google's data retention settings (typically 26 months unless adjusted).</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Who We Share Your Data With</h2>
              <p>We do not sell your personal data. We may share it with:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5">
                <li><strong>Google LLC</strong> — for website analytics and advertising measurement via Google Tag Manager and Google Ads, subject to your cookie consent. Google may process data in the US; we rely on Standard Contractual Clauses and Google's data transfer framework.</li>
                <li><strong>Vercel Inc.</strong> — our website hosting provider, which processes data in the US and EU. Vercel's privacy policy applies to infrastructure-level data.</li>
                <li><strong>Legal and regulatory authorities</strong> — where required by law, such as HMRC or the Police.</li>
              </ul>
              <p className="mt-3">No other third parties have access to your personal data without your explicit consent.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">6. International Transfers</h2>
              <p>
                Some of our third-party service providers (Google, Vercel) are based outside the UK. Where personal data is transferred outside the UK, we ensure adequate protection is in place through UK adequacy decisions, Standard Contractual Clauses or the UK International Data Transfer Agreement (IDTA), as applicable.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Your Rights</h2>
              <p>Under UK GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5">
                <li><strong>Right of access</strong> — to request a copy of the personal data we hold about you.</li>
                <li><strong>Right to rectification</strong> — to ask us to correct inaccurate or incomplete data.</li>
                <li><strong>Right to erasure</strong> — to ask us to delete your data where there is no compelling reason for us to continue processing it.</li>
                <li><strong>Right to restriction</strong> — to ask us to limit how we use your data in certain circumstances.</li>
                <li><strong>Right to data portability</strong> — to receive your data in a structured, machine-readable format where processing is based on consent or contract.</li>
                <li><strong>Right to object</strong> — to processing based on legitimate interests, including direct marketing.</li>
                <li><strong>Right to withdraw consent</strong> — at any time where processing is based on consent, without affecting the lawfulness of earlier processing.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a>. We will respond within one calendar month.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">8. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies on this website. For full details of the cookies we use and how to manage your preferences, please read our <Link href="/cookies-policy" className="text-primary hover:underline">Cookies Policy</Link>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">9. Security</h2>
              <p>
                We take appropriate technical and organisational measures to protect your personal data against unauthorised access, accidental loss or destruction. Our website is served over HTTPS. However, no internet transmission is completely secure, and we cannot guarantee the absolute security of data sent to us electronically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">10. Children's Privacy</h2>
              <p>
                Our services and website are not directed at children under the age of 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">11. Complaints</h2>
              <p>
                If you are unhappy with how we have handled your personal data, you have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK supervisory authority for data protection:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5">
                <li>Website: <a href="https://ico.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a></li>
                <li>Helpline: 0303 123 1113</li>
              </ul>
              <p className="mt-3">We would appreciate the opportunity to address your concern before you contact the ICO, so please reach out to us first.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">12. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page will reflect any changes. We encourage you to review this page periodically.
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
