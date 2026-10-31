import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import Contact from "./Contact";

const problems = [["Stains and Spills", ["Tea, coffee, food, muddy shoes and everyday spills can leave visible marks on carpet fibres.", "We provide carpet stain removal in Huddersfield for suitable stains and problem areas.", "Not every stain can be completely removed, but we aim for the best realistic result while protecting the carpet fibres."]], ["Pet Marks and Odours", ["Homes with dogs and cats can build up pet hair, muddy marks and unwanted smells over time.", "Professional carpet cleaning can help refresh areas affected by regular pet use.", "If you have a specific pet stain or odour problem, mention it when requesting your quote so it can be assessed properly."]], ["Heavy Traffic Areas", ["Hallways, entrances, stairs and landings often collect more dirt than quieter areas of the home.", "These areas can begin to look darker or flatter as soil is repeatedly pushed deeper into the carpet.", "A deeper clean can help improve the appearance of heavily used areas."]], ["Deep-Set Dirt", ["Some dirt settles below the surface and is difficult to remove with regular vacuuming alone.", "Our deep carpet cleaning in Huddersfield helps loosen and extract built-up soil from the fibres."]], ["Muddy Footprints", ["Wet weather and outdoor dirt can quickly leave visible marks, especially around entrances and busy family areas.", "Correct treatment can help remove surface marks and deeper dirt without unnecessary harsh cleaning."]], ["Dull or Flattened Carpets", ["A carpet does not need to have a major stain to look tired.", "Regular foot traffic can gradually make the fibres appear dull or flattened. Professional cleaning can help refresh the carpet and improve the overall appearance of the room."]]];
const process = [["1. Carpet Inspection", ["We first check the carpet material, condition, stains and heavily used areas.", "This helps us choose a suitable cleaning method."]], ["2. Pre-Treatment", ["Where appropriate, stains and high-traffic areas are treated before the main clean.", "This helps loosen dirt and prepare the carpet for deeper cleaning."]], ["3. Deep Clean and Extraction", ["Professional carpet cleaning equipment is used to clean the carpet fibres and extract loosened dirt.", "The exact method depends on the carpet type and condition."]], ["4. Final Check and Drying Guidance", ["Once the cleaning is complete, the main areas are checked and we provide suitable drying and aftercare guidance.", "Drying time can vary depending on the carpet material, ventilation, room temperature and cleaning method used."]]];
const why = [["Local Huddersfield Service", ["Luxora is based in Huddersfield and provides a local carpet cleaning service for homes and businesses."]], ["Professional Cleaning Equipment", ["We use professional equipment and suitable cleaning methods based on the carpet being treated."]], ["Trained and Insured Team", ["Our team is trained and insured, helping provide extra peace of mind when working inside your property."]], ["Domestic and Commercial Cleaning", ["We provide domestic carpet cleaning in Huddersfield for homes and rental properties, as well as commercial carpet cleaning in Huddersfield for suitable business premises."]], ["Tailored Quotes", ["Every carpet cleaning job is different.", "The number of rooms, carpet size, condition and any stains or heavily used areas can all affect the work required.", "Contact us with your details for a tailored quote."]]];
const related = [["Sofa Cleaning Huddersfield", "/sofa-cleaning-huddersfield", "Professional sofa and upholstery cleaning for fabric seating affected by everyday use, marks and built-up dirt."], ["Mattress Cleaning Huddersfield", "/mattress-cleaning-huddersfield", "Deep mattress cleaning designed to refresh frequently used mattresses and help remove built-up surface dirt."], ["Curtain Cleaning Huddersfield", "/curtain-cleaning-huddersfield", "Cleaning for suitable curtain fabrics to help refresh their appearance."], ["Chair & Dining Cleaning Huddersfield", "/chair-dining-cleaning-huddersfield", "Cleaning for upholstered dining chairs and other fabric seating affected by spills, food marks and regular use."]];
const faqs = [["How much does carpet cleaning cost in Huddersfield?", "The cost of carpet cleaning in Huddersfield depends on factors such as the number and size of rooms, carpet condition and whether there are stains or heavily used areas requiring extra attention.", "Contact Luxora for a tailored quote based on your property."], ["How long do carpets take to dry after cleaning?", "Drying time varies depending on the carpet material, room temperature, ventilation and cleaning method used.", "We will provide suitable drying guidance after the work is complete."], ["Can you remove old carpet stains?", "We can treat many common stains, but no responsible carpet cleaning company in Huddersfield should guarantee that every stain will disappear completely.", "Results depend on the stain type, how long it has been present, the carpet fibres and any previous treatments."], ["Do you clean carpets in homes with pets?", "Yes. We clean carpets in homes with pets and can pay extra attention to areas affected by pet hair, muddy marks and suitable pet-related stains.", "Let us know about any specific problem areas when requesting your quote."], ["Do you clean stairs and landings?", "Yes. Carpeted stairs and landings are often some of the busiest areas in a home.", "They can be included as part of your house carpet cleaning in Huddersfield."], ["Which areas of Huddersfield do you cover?", "We provide local carpet cleaning in Huddersfield and nearby areas.", "Send us your postcode when requesting a quote and we can confirm whether your property is within our current service area."]];

function Paragraphs({ items }: { items: string[] }) {
  return <>{items.map((text) => <p key={text} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">{text}</p>)}</>;
}
function Photo({ name, alt }: { name: string; alt: string }) {
  return <Image sizes="(min-width: 1024px) 550px, 100vw" src={`/images/huddersfield/${name}.webp`} alt={alt} width={1400} height={788} loading="lazy" decoding="async" className="w-full rounded-2xl shadow-lg object-cover aspect-video lg:aspect-auto lg:h-full lg:min-h-0" />;
}
function QuoteButton() {
  return <a href="#contact"><Button size="lg" className="gap-2 rounded-xl px-8">Get a Free Quote <ArrowRight className="w-5 h-5" /></Button></a>;
}
export default function CarpetCleaningHuddersfieldPage() {
 return <div className="min-h-screen bg-background">
  <Navbar />
  <main>
   <section className="relative overflow-hidden">
    <Image sizes="100vw" priority src="/images/huddersfield/carpet-cleaning-huddersfield.webp" alt="Carpet extraction cleaning in a Huddersfield living room" width={1400} height={788} fetchPriority="high" loading="eager" className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/30" />
    <div className="relative px-6 md:px-12 lg:px-20 max-w-7xl mx-auto py-12 md:py-20">
     <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-white/70 text-xs mb-6 flex-wrap">
      <Link href="/" className="hover:text-white">Home</Link><ChevronRight className="w-3 h-3" />
      <Link href="/services" className="hover:text-white">Services</Link><ChevronRight className="w-3 h-3" />
      <Link href="/services/carpet-cleaning" className="hover:text-white">Carpet Cleaning</Link><ChevronRight className="w-3 h-3" />
      <span aria-current="page">Carpet Cleaning Huddersfield</span>
     </nav>
     <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5 max-w-3xl">Professional Carpet Cleaning in Huddersfield</h1>
     <div className="text-white/85 leading-relaxed max-w-2xl space-y-4 mb-8">
      <p>Looking for reliable <strong>carpet cleaning in Huddersfield</strong>? Luxora Steam Cleaning provides deep carpet cleaning for homes, landlords and businesses across Huddersfield and nearby areas.</p>
      <p>Whether you need one room cleaned or several carpets throughout a property, our local team can help.</p>
     </div>
     <div className="flex flex-wrap gap-4 items-center"><QuoteButton /><a href="tel:07543958332" className="inline-flex items-center gap-2 text-white px-5 py-3 rounded-xl border border-white/30"><Phone className="w-4 h-4" />07543 958332</a></div>
    </div>
   </section>
   <section className="py-16 md:py-24"><div className="container mx-auto px-6 max-w-6xl">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Common Carpet Problems We Treat in Huddersfield</h2>
    <div className="max-w-3xl mb-10"><Paragraphs items={["Carpets can collect dirt and marks in different ways depending on how the room is used.","Our carpet cleaning services in Huddersfield can help with many common carpet problems."]} /></div>
    <ul className="space-y-7">
     {problems.map(([title, paragraphs]) => <li key={title as string} className="flex items-start gap-4">
      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
      <div><h3 className="text-xl font-bold mb-3">{title}</h3><Paragraphs items={paragraphs as string[]} /></div>
     </li>)}
    </ul>
   </div></section>
   <section className="py-16 md:py-24 bg-accent/30"><div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-10 items-stretch">
    <div><h2 className="text-3xl md:text-4xl font-extrabold mb-6">Why Huddersfield Carpets Need Regular Deep Cleaning</h2>
     <Paragraphs items={["Living in Huddersfield means carpets often deal with changing West Yorkshire weather.","Wet days can mean more moisture, grit and mud being carried into homes on shoes. Entrances, hallways, stairs and living rooms can collect this dirt quickly, especially in busy households.","Older terraces and family homes can also have heavily used carpeted stairs and landings where dirt becomes more noticeable over time.","Rental properties and student accommodation may need deeper carpet cleaning between occupants, while offices and businesses can experience heavier daily foot traffic.","Regular vacuuming is important, but it mainly deals with loose surface dirt.","A professional carpet cleaner in Huddersfield can provide a deeper clean when dirt has settled further into the fibres.","For suitable carpets, steam carpet cleaning in Huddersfield can help lift built-up dirt and refresh areas that have become heavily used."]} />
    </div><div className="lg:relative lg:min-h-[480px] [&>img]:lg:absolute [&>img]:lg:inset-0"><Photo name="muddy-carpet-deep-cleaning-huddersfield" alt="Deep extraction cleaning of muddy footprints on a hallway carpet" /></div>
   </div></section>
   <section className="py-16 md:py-24"><div className="container mx-auto px-6 max-w-6xl">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Our Carpet Cleaning Process</h2><p className="text-muted-foreground mb-10">We keep our process simple and practical.</p>
    <div className="grid md:grid-cols-2 gap-6">{process.map(([title, paragraphs]) => <article key={title as string} className="glass-card rounded-2xl p-6 md:p-8"><h3 className="text-xl font-bold mb-4">{title}</h3><Paragraphs items={paragraphs as string[]} /></article>)}</div>
   </div></section>
   <section className="py-16 md:py-24 bg-accent/30"><div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-2 gap-10 items-stretch">
    <div><h2 className="text-3xl md:text-4xl font-extrabold mb-6">Areas We Cover Around Huddersfield</h2>
     <Paragraphs items={["Luxora Steam Cleaning provides carpet cleaning services in Huddersfield and surrounding areas.","We work with customers in houses, flats, rental properties and suitable commercial premises.","Our local service can include:"]} />
     <ul className="grid sm:grid-cols-2 gap-3 my-6">{["Living rooms","Bedrooms","Hallways","Stairs and landings","Flats and apartments","Rental properties","Offices","Shops","Other suitable business premises"].map(room => <li key={room} className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />{room}</li>)}</ul>
     <Paragraphs items={["If you are unsure whether we cover your exact area or postcode, contact us with your location and we can confirm availability.","As we expand our local coverage, we only want to list areas we genuinely serve rather than adding place names purely for SEO."]} />
    </div><div className="lg:relative lg:min-h-[480px] [&>img]:lg:absolute [&>img]:lg:inset-0"><Photo name="staircase-carpet-cleaning-huddersfield" alt="Technician cleaning carpeted stairs with an upholstery extraction tool" /></div>
   </div></section>
   <section className="py-16 md:py-24"><div className="container mx-auto px-6 max-w-6xl">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Why Choose Luxora for Carpet Cleaning in Huddersfield?</h2>
    <div className="max-w-3xl mb-10"><Paragraphs items={["When comparing carpet cleaners in Huddersfield, it is important to choose a team that looks at more than just visible dirt.","The carpet material, condition and cleaning method all matter."]} /></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{why.map(([title, paragraphs]) => <article key={title as string} className="glass-card rounded-2xl p-6"><h3 className="text-xl font-bold mb-4">{title}</h3><Paragraphs items={paragraphs as string[]} /></article>)}</div>
   </div></section>
   <section className="py-16 md:py-24 bg-accent/30"><div className="container mx-auto px-6 max-w-6xl">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Related Cleaning Services in Huddersfield</h2>
    <div className="mb-8"><Paragraphs items={["Need more than carpet cleaning?","Luxora also provides other local cleaning services for fabric and upholstered surfaces."]} /></div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">{related.map(([title, href, desc]) => <article key={href} className="glass-card rounded-2xl p-6"><h3 className="font-bold text-lg mb-3"><Link href={href} className="hover:text-primary">{title}</Link></h3><p className="text-muted-foreground leading-relaxed">{desc}</p></article>)}</div>
    <p className="text-muted-foreground">You can ask about combining several cleaning services during the same visit.</p>
   </div></section>
   <section className="py-16 md:py-24"><div className="container mx-auto px-6 max-w-4xl">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Frequently Asked Questions</h2>
    {faqs.map(([question, ...answers]) => <details key={question} className="group border-b border-border py-5"><summary className="cursor-pointer"><h3 className="inline font-semibold text-lg">{question}</h3></summary><div className="pt-4"><Paragraphs items={answers} /></div></details>)}
   </div></section>
   <section className="py-16 bg-primary"><div className="container mx-auto px-6 max-w-4xl text-white">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-5">Get a Carpet Cleaning Quote in Huddersfield</h2>
    <p className="text-white/85 mb-5">If your carpets look stained, dull or heavily used, Luxora Steam Cleaning can help.</p><p className="text-white/85 mb-3">Tell us:</p>
    <ul className="list-disc pl-5 space-y-2 text-white/85 mb-6">{["Your Huddersfield postcode","How many rooms need cleaning","Whether stairs or landings are included","Any stains or problem areas","Whether you also need sofa or upholstery cleaning"].map(item=><li key={item}>{item}</li>)}</ul>
    <p className="text-white/85 mb-7">Get in touch today for a tailored carpet cleaning Huddersfield quote.</p>
    <a href="#contact"><Button size="lg" variant="secondary" className="gap-2 rounded-xl px-8">Get a Free Quote <ArrowRight className="w-5 h-5" /></Button></a>
   </div></section>
   <Contact />
  </main><Footer /><FloatingButtons />
 </div>;
}
