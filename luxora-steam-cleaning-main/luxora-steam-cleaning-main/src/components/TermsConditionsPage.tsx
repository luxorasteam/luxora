"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";

const CONTACT_EMAIL = "Steamcleaningserviceltd@gmail.com";
const CONTACT_PHONE = "07543 958332";
const LAST_UPDATED = "29 September 2026";

export default function TermsConditionsPage() {
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
            <span className="text-foreground/80">Terms &amp; Conditions</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Terms &amp; Conditions</h1>
          <p className="text-muted-foreground text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-10 text-foreground/80 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">1. About These Terms</h2>
              <p>
                These Terms and Conditions govern your use of the website at <strong>luxorasteamcleaning.co.uk</strong> and the professional cleaning services provided by <strong>Luxora Steam Cleaning Ltd</strong>, registered in England and Wales, with its principal place of business at 24 Thornhill Avenue, Huddersfield, HD3 3DR.
              </p>
              <p className="mt-3">
                By using this website or booking a service with us, you agree to these Terms. Please read them carefully. If you do not agree, please do not use this website or our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">2. Our Services</h2>
              <p>
                Luxora Steam Cleaning Ltd provides professional domestic and commercial cleaning services including carpet cleaning, sofa and upholstery cleaning, mattress cleaning, curtain cleaning, and chair and dining cleaning, primarily in Huddersfield and surrounding areas.
              </p>
              <p className="mt-3">
                All service descriptions on this website are provided for general information only and do not constitute a binding offer. A contract is formed only when we confirm your booking in writing (including by email or WhatsApp).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">3. Quotes and Pricing</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Quotes provided via this website, email, telephone or WhatsApp are estimates based on the information you supply. Final pricing may be adjusted following an on-site assessment if the actual condition, size or requirements differ significantly from what was described.</li>
                <li>We will notify you of any price adjustment before work begins. You may cancel without charge at that point.</li>
                <li>Quotes are valid for 30 days unless otherwise stated.</li>
                <li>All prices are inclusive of VAT where applicable.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">4. Booking and Confirmation</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>A booking is confirmed when we send you a written confirmation of the date, time and service agreed.</li>
                <li>You are responsible for ensuring the property and items to be cleaned are accessible and reasonably prepared at the agreed time.</li>
                <li>You must inform us of any known hazards, fragile items, or special requirements at the time of booking.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">5. Cancellations and Rescheduling</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>You may cancel or reschedule a booking free of charge if you give us at least 24 hours' notice before the scheduled appointment.</li>
                <li>Cancellations with less than 24 hours' notice may incur a cancellation charge to cover travel costs and lost appointment time. We will notify you of any applicable charge at the time of cancellation.</li>
                <li>We reserve the right to reschedule appointments due to circumstances beyond our control (including severe weather, vehicle breakdown or staff illness). We will notify you as soon as reasonably practicable and offer an alternative date.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">6. Results and Limitations</h2>
              <p>We will carry out all services with reasonable skill and care. However:</p>
              <ul className="list-disc pl-6 mt-3 space-y-1.5">
                <li>We cannot guarantee the complete removal of all stains. Results depend on the stain type, age, fabric, and any prior treatment applied.</li>
                <li>Pre-existing damage, wear, colour fading or fabric deterioration may become more apparent after cleaning; this does not constitute damage caused by us.</li>
                <li>We will assess items before cleaning and advise you of any risks. You are responsible for deciding whether to proceed in light of our assessment.</li>
                <li>Drying times are estimates and depend on environmental conditions outside our control.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">7. Liability</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>We carry appropriate public liability insurance. If our cleaning causes direct damage to your property as a result of our negligence, please notify us in writing within 24 hours of the service being completed so the matter can be assessed.</li>
                <li>We are not liable for damage arising from undisclosed pre-existing conditions, or where you have asked us to proceed despite being advised of a risk.</li>
                <li>Our total liability to you for any claim arising from our services is limited to the total amount paid by you for the specific service to which the claim relates.</li>
                <li>Nothing in these Terms limits or excludes our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded under English law.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">8. Your Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>You must ensure safe access to the property and adequate ventilation where required.</li>
                <li>You must remove or safeguard any fragile, irreplaceable or valuable items before the appointment.</li>
                <li>You must not use areas being cleaned until they are fully dry.</li>
                <li>You agree that information you provide to us (postcode, item descriptions, etc.) is accurate to the best of your knowledge.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">9. Payment</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Payment is due on completion of the service unless otherwise agreed in writing.</li>
                <li>We accept cash, bank transfer and other payment methods as communicated at the time of booking.</li>
                <li>If payment is not received within the agreed timeframe, we reserve the right to charge interest in accordance with the Late Payment of Commercial Debts (Interest) Act 1998 where applicable.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">10. Intellectual Property</h2>
              <p>
                All content on this website, including text, images, logos and design, is the property of Luxora Steam Cleaning Ltd or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute or use any content from this website without our prior written permission.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">11. Website Use</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>This website is provided for informational purposes. We make no warranties about its accuracy, completeness or availability.</li>
                <li>We are not responsible for the content of any third-party websites linked from this site.</li>
                <li>You must not use this website in any way that is unlawful, harmful or that infringes the rights of others.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">12. Consumer Rights</h2>
              <p>
                If you are a consumer (an individual booking for personal, domestic or household purposes), you have additional rights under the Consumer Rights Act 2015. Services must be performed with reasonable care and skill. If a service falls short of this standard, you are entitled to a repeat performance or, if that is not possible, a price reduction.
              </p>
              <p className="mt-3">
                If you book by phone, email, WhatsApp or via the website (i.e. off-premises or at a distance), you may have a right to cancel within 14 days under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, unless the service has already been provided with your agreement before the 14-day period expires.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">13. Governing Law and Disputes</h2>
              <p>
                These Terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales. We are committed to resolving complaints fairly and promptly — please contact us first at <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a> or <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="text-primary hover:underline">{CONTACT_PHONE}</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">14. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. The current version will always be available on this page. Continued use of our website or services after changes are posted constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">15. Contact Us</h2>
              <p>For any questions about these Terms, please contact:</p>
              <div className="mt-3 glass-card rounded-xl p-5 space-y-1.5 text-sm">
                <p><strong>Luxora Steam Cleaning Ltd</strong></p>
                <p>24 Thornhill Avenue, Huddersfield, HD3 3DR</p>
                <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">{CONTACT_EMAIL}</a></p>
                <p>Phone: <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="text-primary hover:underline">{CONTACT_PHONE}</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
}
