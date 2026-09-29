export interface ServiceFAQ { q: string; a: string; }
export interface ServiceSection { title: string; content: string; }

export interface ServiceData {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  heroImage: string;
  supportingImage: string;
  contentImage: string;
  sections: ServiceSection[];
  faqs: ServiceFAQ[];
  seo: { title: string; description: string; };
}

export const services: ServiceData[] = [
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    slug: "carpet-cleaning",
    shortDesc: "Deep steam cleaning to remove dirt, stains and allergens. We restore your carpets to like-new condition.",
    fullDesc: "Our professional carpet cleaning service uses advanced hot water extraction technology combined with specialist cleaning agents to deliver a truly deep clean. Whether your carpets have suffered everyday foot traffic, pet-related staining or accumulated allergens over time, our certified technicians restore them to their best possible condition — leaving your home healthier, fresher and genuinely cleaner.",
    benefits: ["Residential & commercial properties", "Safe for children and pets", "Eco-friendly, non-toxic solutions", "Advanced steam extraction technology", "Allergen & dust mite removal", "Stain & odour elimination", "Fast drying — 2 to 4 hours", "Satisfaction focused service"],
    heroImage: "/images/services/carpet-services-section.jpg",
    supportingImage: "/images/gallery/gallery-1.jpg",
    contentImage: "/images/gallery/gallery-2.jpg",
    sections: [
      { title: "Deep Carpet Cleaning", content: "Using industrial-grade steam extraction equipment that reaches temperatures of up to 180°C, our deep carpet cleaning process penetrates right down to the base of carpet fibres. Unlike surface-level vacuuming or consumer-grade cleaners, our hot water extraction method breaks down and removes ground-in soil, bacteria and contaminants that have settled deep within the pile — leaving your carpet genuinely clean throughout every fibre." },
      { title: "Stain & Odour Removal", content: "From coffee spills and red wine to pet accidents and food stains, our technicians are trained to treat a wide range of stubborn marks using targeted pre-treatment solutions. Each stain type responds differently, which is why we assess the carpet fabric and stain composition before selecting the appropriate treatment. Our odour neutralisation process eliminates the bacteria responsible at source — not just masking smells." },
      { title: "Regular Maintenance Cleaning", content: "Scheduling regular professional carpet cleaning significantly extends the lifespan of your carpets. Dirt particles that settle into carpet fibres act like sandpaper, gradually breaking down the structure over time. Our maintenance cleaning removes this abrasive buildup before it causes permanent damage. We recommend a professional clean every 6 to 12 months for most households, or more frequently in high-traffic areas." },
    ],
    faqs: [
      { q: "How long does carpet cleaning take?", a: "Most residential carpets take between 1 and 2 hours. Drying time is typically 2 to 4 hours depending on carpet thickness and ventilation." },
      { q: "Is your cleaning solution safe for children and pets?", a: "Absolutely. All our cleaning solutions are eco-friendly, non-toxic and completely safe for children, pets and allergy sufferers." },
      { q: "Can you remove old or set-in stains?", a: "In most cases yes. Even long-standing stains can be significantly reduced or fully removed with our pre-treatment process. Results depend on the stain type and carpet fabric." },
      { q: "How often should carpets be professionally cleaned?", a: "We recommend every 6 to 12 months for most households — more frequently in homes with pets, children or high foot traffic." },
      { q: "Do I need to move furniture before the clean?", a: "We ask you to clear small items and breakables. Our team handles larger, heavier pieces where possible." },
    ],
    seo: { title: "Carpet Cleaning Services | Luxora Steam Cleaning Ltd", description: "Professional carpet steam cleaning. Deep stain removal, allergen extraction and odour neutralisation across the UK. Book your free quote today." },
  },
  {
    id: "sofa-cleaning",
    title: "Sofa Cleaning",
    slug: "sofa-cleaning",
    shortDesc: "Professional sofa and upholstery steam cleaning to refresh and revitalise your furniture.",
    fullDesc: "Your sofa is one of the most frequently used items in your home — and one of the most overlooked when it comes to cleaning. Over time, sofas accumulate body oils, dust mites, food particles, pet dander and bacteria deep within the fabric. Our professional sofa cleaning service restores your upholstery to a hygienic, fresh condition using safe, fabric-appropriate steam cleaning techniques.",
    benefits: ["All fabric types treated", "Leather & faux leather care", "Pet hair & dander removal", "Dust mite elimination", "Body oil & grease removal", "Colour-safe process", "Fast drying — 2 to 4 hours", "Eco-friendly solutions"],
    heroImage: "/images/services/sofa-cleaning-services-section.jpg",
    supportingImage: "/images/gallery/gallery-4.jpg",
    contentImage: "/images/services/sofa-cleaning-3.png",
    sections: [
      { title: "Upholstery Steam Treatment", content: "Our technicians begin each sofa clean with a detailed pre-inspection to identify fabric type, existing stains and areas of concern. We apply a specialist pre-treatment spray before using our hot water extraction system to lift dirt, oils and contaminants from deep within the cushioning. The process is gentle enough not to damage delicate fabrics, yet powerful enough to produce a genuinely transformative clean." },
      { title: "Fabric & Leather Care", content: "Whether your sofa is covered in linen, velvet, microfibre, synthetic blends or leather, our team selects the most appropriate cleaning method. For fabric sofas, we use hot water extraction that lifts embedded dirt without saturating the upholstery. For leather and faux leather surfaces, we apply specialist conditioning treatments that clean while preserving the material's natural integrity and suppleness." },
      { title: "Allergen & Bacteria Elimination", content: "Sofas harbour significant concentrations of dust mites, pet allergens and airborne bacteria that standard surface cleaning simply cannot address. Our steam cleaning process uses temperatures high enough to kill dust mites and neutralise bacterial growth throughout the upholstery — not just on the visible surface. Particularly beneficial for households with allergy sufferers, young children or pets." },
    ],
    faqs: [
      { q: "Can all sofa fabrics be steam cleaned?", a: "We assess each fabric type before treatment and select the safest, most effective method. Most fabrics including velvet, linen, microfibre and synthetic blends are suitable." },
      { q: "How long does sofa cleaning take?", a: "Most sofas take between 1 and 2 hours depending on size and soiling level. A three-piece suite typically takes 2 to 3 hours." },
      { q: "How long until my sofa is dry?", a: "Drying time is usually 2 to 4 hours. We recommend good ventilation — open windows and doors after the clean." },
      { q: "Can you clean leather sofas?", a: "Yes. We use specialist leather cleaning and conditioning products that safely clean the surface while preserving its texture and appearance." },
      { q: "Will the cleaning affect my sofa's colour?", a: "Our colour-safe process is designed to maintain fabric integrity. We carry out a small patch test before proceeding on any delicate or unfamiliar material." },
    ],
    seo: { title: "Sofa & Upholstery Cleaning | Luxora Steam Cleaning Ltd", description: "Professional sofa steam cleaning. Fabric and leather care, allergen removal and stain treatment across the UK. Free quote available." },
  },
  {
    id: "mattress-cleaning",
    title: "Mattress Cleaning",
    slug: "mattress-cleaning",
    shortDesc: "Professional mattress sanitisation and deep steam cleaning for a healthier, fresher sleep.",
    fullDesc: "We spend approximately a third of our lives in bed — yet mattresses are among the least frequently cleaned items in most homes. Over time, mattresses accumulate dust mites, dead skin cells, sweat residue, allergens and bacteria that can affect both sleep quality and overall health. Our professional mattress cleaning service deep cleans and sanitises your mattress, creating a genuinely healthier sleeping environment.",
    benefits: ["Memory foam & pocket sprung", "Dust mite elimination", "Allergen extraction", "Bacteria & mould removal", "Odour neutralisation", "Safe for all mattress types", "Sleep-safe same night", "Eco-friendly solutions"],
    heroImage: "/images/services/mattress-cleaning-service-section.jpg",
    supportingImage: "/images/gallery/gallery-3.jpg",
    contentImage: "/images/services/mattress-cleaning-3.png",
    sections: [
      { title: "Deep Mattress Sanitisation", content: "Our sanitisation process uses high-temperature steam to penetrate deep into mattress layers, killing bacteria, mould spores and other harmful microorganisms that accumulate over time. Unlike standard surface cleaning, our hot water extraction method draws contaminants out from within the mattress core — removing the buildup that causes yellowing, unpleasant odours and potential health concerns. Safe for all mattress types." },
      { title: "Dust Mite & Allergen Removal", content: "A single mattress can harbour millions of dust mites, whose droppings are among the most common triggers for allergic reactions and respiratory issues. Our steam cleaning process reaches temperatures that eliminate dust mites at all life stages, while our extraction system removes allergen particles from deep within the mattress — producing a measurable improvement particularly for allergy and asthma sufferers." },
      { title: "Odour Neutralisation", content: "Sweat, body oils and biological residue accumulate in mattresses over time, producing odours that can affect sleep quality even when the source is not immediately obvious. Our deodorisation treatment uses enzyme-based neutralisers that break down odour-causing compounds at a molecular level — rather than masking them with fragrances. The result is a mattress that smells genuinely clean." },
    ],
    faqs: [
      { q: "How long does mattress cleaning take?", a: "Most mattresses take under an hour to clean. A double or king can take up to 90 minutes depending on the level of soiling." },
      { q: "Is it safe to sleep on the mattress the same night?", a: "Yes. Drying time is typically 2 to 3 hours. We recommend good ventilation after the clean." },
      { q: "Can you remove stains from mattresses?", a: "Most stains including sweat marks, yellowing and biological stains can be significantly reduced or fully removed with our pre-treatment process." },
      { q: "How often should mattresses be professionally cleaned?", a: "We recommend once or twice a year for most households — more frequently for those with allergies, young children or pets." },
      { q: "Do you clean all mattress types?", a: "Yes, including memory foam, pocket sprung, latex and hybrid mattresses. We adjust our technique to suit each material." },
    ],
    seo: { title: "Mattress Cleaning Services | Luxora Steam Cleaning Ltd", description: "Professional mattress steam cleaning. Dust mite removal, allergen extraction and deep sanitisation across the UK. Book a free quote." },
  },
  {
    id: "curtain-cleaning",
    title: "Curtain Cleaning",
    slug: "curtain-cleaning",
    shortDesc: "Specialist curtain steam cleaning that removes dust, allergens and odours without taking them down.",
    fullDesc: "Curtains play a significant role in the atmosphere of any room, but they are often neglected when it comes to regular cleaning. Hanging fabric collects dust, allergens, cooking residue and airborne pollutants continuously. Our in-situ curtain cleaning service refreshes your curtains professionally without the need to take them down, saving time while delivering excellent results.",
    benefits: ["No need to remove curtains", "All fabric types treated", "Dust & pollen removal", "Cooking odour elimination", "Prevents shrinkage & fading", "Velvet, linen & polyester", "Safe for lined curtains", "Eco-friendly process"],
    heroImage: "/images/services/cutain-cleaning-services_section.jpg",
    supportingImage: "/images/services/curtain-cleaning-end.png",
    contentImage: "/images/services/curtain-cleaning-4.png",
    sections: [
      { title: "In-Situ Steam Cleaning", content: "Our specialist curtain cleaning process is performed with your curtains still hanging — avoiding the risks of shrinkage, colour bleeding and fabric distortion that occur with conventional washing. Using a combination of low-moisture steam treatment and professional extraction, our technicians clean curtains from top to bottom, removing dust, surface soiling and biological residue without saturating the fabric." },
      { title: "Dust & Allergen Extraction", content: "Curtains act as passive air filters in the home — trapping airborne dust, pollen, pet dander and allergens as air circulates through the room. Over time, this material is redistributed into the living space with every movement of the curtains. Our extraction process removes this embedded particle load from the fabric, significantly reducing the allergen burden in the room." },
      { title: "Fabric Care & Restoration", content: "In addition to cleaning, our process helps to restore the natural drape and appearance of your curtains. We assess the specific fabric composition before treatment to ensure the most appropriate cleaning method is applied. Our technicians are trained in the care requirements of a wide range of curtain fabrics, using only cleaning agents safe for treated and lined materials." },
    ],
    faqs: [
      { q: "Do you take the curtains down to clean them?", a: "No — we clean them in-situ while they remain hanging. This avoids shrinkage risks and saves significant time." },
      { q: "Which curtain fabrics can be cleaned?", a: "We clean most fabric types including velvet, linen, polyester, silk blends and lined curtains. We assess each fabric before treatment." },
      { q: "Will my curtains shrink?", a: "Our low-moisture steam process is specifically designed to prevent shrinkage. We adjust heat and moisture levels to suit each fabric type." },
      { q: "How long do curtains take to dry?", a: "Most curtains dry within 1 to 3 hours depending on fabric weight and room ventilation." },
      { q: "Can you remove smoke or cooking odours from curtains?", a: "Yes. Our deodorisation process is highly effective at neutralising smoke, cooking and pet odours from curtain fabrics." },
    ],
    seo: { title: "Curtain Cleaning Services | Luxora Steam Cleaning Ltd", description: "Professional in-situ curtain steam cleaning. No need to take them down. Dust, allergen and odour removal across the UK. Free quote." },
  },
  {
    id: "chair-dining-cleaning",
    title: "Chair & Dining Cleaning",
    slug: "chair-dining-cleaning",
    shortDesc: "Expert steam cleaning for dining chairs and upholstered seating — fresh, hygienic and like new.",
    fullDesc: "Dining chairs and upholstered seating accumulate food residue, grease, body oils and everyday staining that regular wiping simply cannot address. Our professional chair and dining cleaning service uses targeted steam treatment and extraction to deep clean upholstered dining chairs, armchairs and occasional seating — restoring them to a hygienic, presentable condition.",
    benefits: ["Entire dining sets cleaned", "Food & grease removal", "Fabric & vinyl treated", "Bacteria elimination", "Odour neutralisation", "Stain pre-treatment", "Fast 15-30 min per chair", "Safe for all households"],
    heroImage: "/images/services/chair_dining-servicesection.jpg",
    supportingImage: "/images/services/dining-cleaning-end.png",
    contentImage: "/images/services/dining-cleaning-2.png",
    sections: [
      { title: "Dining Chair Upholstery Cleaning", content: "The fabric seats of dining chairs are exposed to food spillage, grease and body contact daily. Over time, even regular wiping leaves a residue layer that darkens the fabric and produces odours. Our steam cleaning process penetrates the upholstery fabric to lift embedded grease, food particles and biological matter that surface cleaning cannot reach. We treat each chair individually, assessing fabric type and soiling level." },
      { title: "Stain & Grease Removal", content: "Dining environments produce a range of challenging stains — from sauces and beverages to grease and everyday contact marks. Our pre-treatment stage addresses each stain type specifically, using professional-grade spot treatments that break down the stain compound before our extraction process removes it from the fabric. We treat both fresh and set stains across all common dining chair fabrics." },
      { title: "Sanitisation & Odour Control", content: "Food residue left within upholstery creates an environment where bacteria and odour-causing organisms develop over time. Our sanitisation treatment uses steam temperatures that eliminate bacteria throughout the fabric, while our enzyme-based deodorisation process neutralises food-derived odours at source. The result is dining furniture that is not only clean-looking but genuinely hygienic." },
    ],
    faqs: [
      { q: "How many dining chairs can be cleaned in one visit?", a: "We can clean entire dining sets in a single visit. Most 6-chair sets take approximately 2 to 3 hours." },
      { q: "Can you remove food and grease stains?", a: "Yes. We use specialist pre-treatment products to break down food residue and grease before steam extraction removes them from the fabric." },
      { q: "How long does cleaning take per chair?", a: "Usually 15 to 30 minutes per chair depending on the level of soiling and fabric type." },
      { q: "Do you clean wooden or metal chair frames too?", a: "Our service focuses on upholstered surfaces. We can wipe down chair frames as part of the service at no extra charge." },
      { q: "How long until the chairs are dry?", a: "Most dining chairs are dry within 1 to 2 hours. We recommend leaving them in a well-ventilated area after cleaning." },
    ],
    seo: { title: "Chair & Dining Cleaning Services | Luxora Steam Cleaning Ltd", description: "Professional chair and dining upholstery cleaning. Stain, grease and odour removal. Serving the UK. Book your free quote today." },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
