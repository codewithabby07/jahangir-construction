import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Jahangir Construction | Trusted Building & Civil Contractor in Delhi NCR",
  description:
    "Jahangir Construction — experienced construction contractor in Delhi NCR with 22+ years of on-ground expertise. Residential house construction, commercial buildings, RCC structural work, waterproofing, and turnkey projects. Call +91 85956 98244 for a free site estimate.",
  alternates: {
    canonical: "https://www.jahangirconstruction.com",
  },
};

const services = [
  {
    title: "Residential House Construction",
    description: "Complete house and villa construction from foundation to final paint. Individual builder floors, duplexes, and multi-storey residences with structural guarantee.",
    icon: "🏠",
    tag: "Complete Build",
  },
  {
    title: "Commercial & Office Spaces",
    description: "Office complexes, retail shops, showrooms, warehouses, and commercial basements constructed on tight schedules with professional project management.",
    icon: "🏢",
    tag: "Commercial",
  },
  {
    title: "RCC & Structural Framework",
    description: "Heavy-duty reinforced concrete construction — columns, beams, foundation footings, and roof slabs cast with standard mix grade and vibration.",
    icon: "🏗️",
    tag: "Core Structure",
  },
  {
    title: "Shuttering & Steel Reinforcement",
    description: "Precision plywood and MS shuttering, centering, and certified rebar reinforcement tying to ensure exact alignment and load-bearing strength.",
    icon: "⚙️",
    tag: "Structural",
  },
  {
    title: "Brickwork & Fine Plaster",
    description: "High-grade red clay brick masonry, AAC block work, and smooth internal/external sand-faced cement plastering done plumb and level.",
    icon: "🧱",
    tag: "Masonry",
  },
  {
    title: "Complete Waterproofing",
    description: "Leak-proof chemical and membrane waterproofing for terrace roofs, sunken bathrooms, basements, and underground water storage tanks.",
    icon: "💧",
    tag: "Protection",
  },
  {
    title: "Full Renovation & Remodelling",
    description: "Structural modifications, room additions, facade upgrades, and interior layout redesigns executed with minimal disruption to your daily routine.",
    icon: "🔨",
    tag: "Renovation",
  },
  {
    title: "Demolition & JCB Excavation",
    description: "Controlled manual and mechanical demolition of old structures, deep basement excavation, trenching, and complete debris disposal across Delhi NCR.",
    icon: "🚜",
    tag: "Site Prep",
  },
  {
    title: "Turnkey Construction Contracts",
    description: "Single-point complete responsibility — from soil testing and architectural coordination to material procurement, supervision, and final key handover.",
    icon: "🔑",
    tag: "Turnkey",
  },
];

const reasons = [
  {
    number: "01",
    title: "22+ Years On-Ground Experience",
    desc: "Over two decades of hands-on civil and structural execution in Delhi NCR soils, weather conditions, and municipal building regulations.",
  },
  {
    number: "02",
    title: "Zero Material Compromise",
    desc: "We use only reputable cement, certified Fe 550D TMT steel bars, quality aggregates, and branded construction chemicals with full transparency.",
  },
  {
    number: "03",
    title: "Daily Site Supervision",
    desc: "A dedicated site supervisor monitors alignment, mix ratios, curing, and safety on your site every single working day.",
  },
  {
    number: "04",
    title: "Clear & Itemised Quotation",
    desc: "Detailed bill of quantities with no surprise costs or hidden clauses. You always know what is covered and what stage requires payment.",
  },
  {
    number: "05",
    title: "On-Time Milestone Handover",
    desc: "Structured milestone schedules for excavation, plinth, casting, brickwork, plaster, and finishing ensure your project finishes on time.",
  },
  {
    number: "06",
    title: "Direct Founder Access",
    desc: "Direct access to Mr. Jahangir (Founder) and Mr. Saheel (Managing Director) for quick decisions without corporate bureaucracy.",
  },
];

const process = [
  { step: "01", title: "Site Discussion & Requirement", desc: "We meet at your site or office to understand your plot size, building plan, budget, and timeline expectations." },
  { step: "02", title: "Site Assessment & Soil Scope", desc: "Our technical team inspects site access, water table, existing neighboring structures, and exact civil requirements." },
  { step: "03", title: "Transparent Plan & Quote", desc: "You receive an itemised, transparent quotation with clear material specifications and payment milestones." },
  { step: "04", title: "Quality Site Execution", desc: "Work starts with daily supervision, certified quality checks at every casting stage, and regular video/photo updates." },
  { step: "05", title: "Final Walkthrough & Handover", desc: "Joint comprehensive inspection of every room, surface, and fixture followed by formal key and documentation handover." },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO SECTION WITH REAL ARCHITECTURAL PHOTO ───────────── */}
      <section
        className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center bg-[#0c0d0e] overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-header.jpg"
            alt="Jahangir Construction active building construction site with RCC framework and crane in Delhi NCR"
            fill
            priority
            className="object-cover object-center brightness-75 scale-100"
            sizes="100vw"
          />
          {/* High-Contrast Gradient Overlay to make all text crystal clear */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(12, 13, 14, 0.95) 0%, rgba(12, 13, 14, 0.85) 45%, rgba(12, 13, 14, 0.55) 100%)",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-tight py-20 md:py-28 w-full">
          <div className="max-w-3xl">
            {/* Experience Pill */}
            <div className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full bg-[#17191c]/90 border border-[#c5a044] text-[#dfbf6c]">
              <span className="w-2 h-2 rounded-full bg-[#c5a044] animate-pulse" />
              <span className="text-xs font-bold tracking-wider uppercase">
                22+ Years of Trusted Construction Experience
              </span>
            </div>

            {/* Brand Tagline */}
            <p className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-[#dfbf6c] mb-2">
              Jahangir Construction
            </p>

            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.12] mb-5 tracking-tight"
            >
              <span className="text-white">Building Your Vision.</span>
              <br />
              <span className="text-[#dfbf6c]">Creating Your Future.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#f1f5f9] font-medium leading-relaxed mb-4 max-w-2xl drop-shadow-sm">
              Delhi NCR&apos;s trusted civil contractor for residential houses, builder floors, commercial buildings, RCC structural casting, and turnkey construction.
            </p>

            <p className="text-sm text-[#cbd5e1] mb-8 font-normal flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>📍 Serving: Delhi &bull; Noida &bull; Gurgaon &bull; Faridabad &bull; Ghaziabad</span>
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/quote" className="btn-primary text-sm shadow-lg">
                Get a Free Quote
              </Link>
              <a
                href="https://wa.me/918595698244?text=Hello%2C%20I%20need%20a%20construction%20quote%20for%20my%20site%20in%20Delhi%20NCR."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.551 4.105 1.513 5.834L0 24l6.335-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.001-1.373l-.359-.214-3.72.886.949-3.618-.233-.37A9.817 9.817 0 012.182 12C2.182 6.56 6.56 2.182 12 2.182S21.818 6.56 21.818 12 17.44 21.818 12 21.818z"/>
                </svg>
                WhatsApp Us
              </a>
              <a
                href="tel:+918595698244"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold text-sm px-4 py-3 hover:text-[#dfbf6c] transition-colors"
              >
                📞 Call: 8595698244
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── QUICK METRICS BANNER ─────────────────────────────────── */}
      <section className="bg-[#17191c] border-y border-[#2f333a] py-6 text-white">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-2">
              <p className="text-3xl sm:text-4xl font-black text-[#dfbf6c]">22+</p>
              <p className="text-xs sm:text-sm font-semibold text-[#cbd5e1] uppercase tracking-wider mt-1">Years of On-Site Experience</p>
            </div>
            <div className="p-2 border-l border-[#2f333a]">
              <p className="text-3xl sm:text-4xl font-black text-[#dfbf6c]">100%</p>
              <p className="text-xs sm:text-sm font-semibold text-[#cbd5e1] uppercase tracking-wider mt-1">Verified Materials</p>
            </div>
            <div className="p-2 border-l border-[#2f333a]">
              <p className="text-3xl sm:text-4xl font-black text-[#dfbf6c]">All NCR</p>
              <p className="text-xs sm:text-sm font-semibold text-[#cbd5e1] uppercase tracking-wider mt-1">Delhi, Noida &amp; Gurgaon</p>
            </div>
            <div className="p-2 border-l border-[#2f333a]">
              <p className="text-3xl sm:text-4xl font-black text-[#dfbf6c]">Turnkey</p>
              <p className="text-xs sm:text-sm font-semibold text-[#cbd5e1] uppercase tracking-wider mt-1">Foundation to Handover</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST & LEADERSHIP (HIGH CONTRAST) ───────────────────── */}
      <section className="bg-[#ffffff] section-pad text-[#0f172a]" aria-labelledby="experience-heading">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="gold-rule" />
              <h2
                id="experience-heading"
                className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] leading-tight mb-5"
              >
                Experienced Civil &amp; Building Contractors Built on Word-of-Mouth.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#334155] leading-relaxed">
                <p>
                  <strong className="text-[#0f172a]">Jahangir Construction</strong> has operated in the Delhi NCR construction sector for over <strong className="text-[#0f172a]">22 years</strong>. Founded and led on-site by <strong className="text-[#0f172a]">Mr. Jahangir</strong> together with Managing Director <strong className="text-[#0f172a]">Mr. Saheel</strong>, the firm has built residential homes, builder floors, multi-storey structures, and commercial facilities.
                </p>
                <p>
                  In construction, trust is earned on the slab and at the foundation. We don&apos;t cut corners on cement grades, reinforcement binding, shuttering quality, or water curing time. That is why over 80% of our projects come directly through recommendations from past property owners.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Link href="/about" className="btn-primary">
                  Learn About Our Team
                </Link>
                <Link href="/quote" className="btn-outline-dark">
                  Request Free Site Visit
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#f8f9fa] border border-[#e2e8f0] p-6 sm:p-8 rounded-lg shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-[#0f172a] border-b border-[#e2e8f0] pb-3 flex items-center gap-2">
                  <span>🏗️</span> Key Operational Standards
                </h3>
                <ul className="space-y-4 text-sm sm:text-base text-[#334155]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#c5a044] font-bold">✓</span>
                    <span><strong>Accurate Quantity Estimates:</strong> Clear Bill of Quantities without mid-project price shocks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#c5a044] font-bold">✓</span>
                    <span><strong>Dedicated Site Supervisors:</strong> Qualified supervision on site for every casting and brickwork stage.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#c5a044] font-bold">✓</span>
                    <span><strong>Standard Material Specifications:</strong> UltraTech / Ambuja / ACC Cement, Tata / Jindal Fe 550D TMT Rebar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#c5a044] font-bold">✓</span>
                    <span><strong>Strict Milestone Timelines:</strong> Structured handover schedules with regular client progress reviews.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID (HIGH CONTRAST) ────────────────────────── */}
      <section className="bg-[#0c0d0e] section-pad text-white" aria-labelledby="services-heading">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="gold-rule" />
              <h2 id="services-heading" className="text-2xl sm:text-4xl font-extrabold text-[#ffffff]">
                Our Construction Services
              </h2>
              <p className="text-base text-[#cbd5e1] mt-2 max-w-xl">
                Specialized civil, structural, and finishing solutions tailored for Delhi NCR property owners and commercial developers.
              </p>
            </div>
            <Link
              href="/services"
              className="text-[#dfbf6c] hover:text-[#ffffff] font-bold text-sm transition-colors whitespace-nowrap inline-flex items-center gap-1"
            >
              View All 13 Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-[#17191c] border border-[#2f333a] p-7 rounded-lg hover:border-[#c5a044] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 bg-[#22252a] text-[#dfbf6c] border border-[#2f333a] rounded">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#ffffff] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#cbd5e1] leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#22252a]">
                  <Link
                    href={`/quote?service=${encodeURIComponent(service.title)}`}
                    className="text-xs font-bold text-[#dfbf6c] hover:text-[#ffffff] transition-colors inline-flex items-center gap-1 uppercase tracking-wider"
                  >
                    Enquire for this service →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/quote" className="btn-primary">
              Get an Itemised Project Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ─── REAL PROJECT SHOWCASE WITH HIGH QUALITY IMAGES ───────── */}
      <section className="bg-[#f8f9fa] section-pad text-[#0f172a]" aria-labelledby="projects-heading">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="gold-rule" />
              <h2 id="projects-heading" className="text-2xl sm:text-4xl font-extrabold text-[#0f172a]">
                Featured Construction Projects
              </h2>
              <p className="text-base text-[#334155] mt-2 max-w-xl">
                Active structural execution and completed modern residences across Delhi NCR.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-[#9c7b28] hover:text-[#0f172a] font-bold text-sm transition-colors whitespace-nowrap"
            >
              Explore Full Portfolio →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 - Ongoing RCC & Civil Frame */}
            <div className="bg-[#ffffff] border border-[#e2e8f0] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-video w-full overflow-hidden bg-[#17191c]">
                <Image
                  src="/images/hero-header.jpg"
                  alt="Multi-storey RCC Frame & Shuttering in Delhi NCR"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 bg-[#c5a044] text-[#000000] text-xs font-extrabold tracking-wider uppercase px-3 py-1 rounded">
                  Ongoing Work
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#9c7b28] mb-1">
                  Delhi NCR &bull; RCC Structural Work &bull; Shuttering
                </p>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                  Multi-Storey RCC Structural Framework &amp; Slab Casting
                </h3>
                <p className="text-sm text-[#334155] leading-relaxed mb-4">
                  Full civil execution including heavy deep foundation, column alignment, precision shuttering, high-tensile rebar reinforcement, and machine-mix concrete casting under strict technical supervision.
                </p>
                <Link
                  href="/projects/ongoing"
                  className="text-xs font-bold uppercase tracking-wider text-[#0f172a] hover:text-[#c5a044] transition-colors"
                >
                  View Ongoing Projects →
                </Link>
              </div>
            </div>

            {/* Project 2 - Completed Luxury Builder Floor */}
            <div className="bg-[#ffffff] border border-[#e2e8f0] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-video w-full overflow-hidden bg-[#17191c]">
                <Image
                  src="/images/completed-building.jpg"
                  alt="Completed Modern 4-Storey Builder Floor in Delhi NCR"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 bg-[#0f172a] text-[#ffffff] text-xs font-extrabold tracking-wider uppercase px-3 py-1 rounded border border-[#334155]">
                  Completed Project
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#9c7b28] mb-1">
                  West Delhi &bull; Turnkey Residential Construction
                </p>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                  Modern 4-Storey Luxury Residential Builder Floor &amp; Villa
                </h3>
                <p className="text-sm text-[#334155] leading-relaxed mb-4">
                  Turnkey delivery from excavation to final stone facade, glass railing installation, parking stilt, premium plaster finishes, waterproofing, and electrical/plumbing infrastructure handover.
                </p>
                <Link
                  href="/projects/completed"
                  className="text-xs font-bold uppercase tracking-wider text-[#0f172a] hover:text-[#c5a044] transition-colors"
                >
                  View Completed Projects →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY JAHANGIR CONSTRUCTION ────────────────────────────── */}
      <section className="bg-[#17191c] section-pad text-white" aria-labelledby="why-heading">
        <div className="container-tight">
          <div className="max-w-2xl mb-12">
            <span className="gold-rule" />
            <h2 id="why-heading" className="text-2xl sm:text-4xl font-extrabold text-[#ffffff] mb-3">
              Why Property Owners Trust Us
            </h2>
            <p className="text-base text-[#cbd5e1]">
              Construction is one of your biggest lifetime investments. Here is what we promise and deliver on every single site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason) => (
              <div key={reason.number} className="bg-[#22252a] p-6 rounded-lg border border-[#2f333a]">
                <span className="text-3xl font-black text-[#c5a044] block mb-3 font-mono">
                  {reason.number}
                </span>
                <h3 className="text-base font-bold text-[#ffffff] mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-[#cbd5e1] leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/quote" className="btn-primary">
              Book a Site Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WORKING PROCESS (01 TO 05) ───────────────────────────── */}
      <section className="bg-[#ffffff] section-pad text-[#0f172a]" aria-labelledby="process-heading">
        <div className="container-tight">
          <div className="max-w-2xl mb-12">
            <span className="gold-rule" />
            <h2 id="process-heading" className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] mb-3">
              Our 5-Step Execution Process
            </h2>
            <p className="text-base text-[#334155]">
              Clear, transparent milestones so you never have to wonder what is happening on your plot.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-[#f8f9fa] border border-[#e2e8f0] p-6 rounded-lg flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded bg-[#c5a044] text-[#000000] font-black flex items-center justify-center text-sm mb-4">
                    {p.step}
                  </div>
                  <h3 className="text-base font-bold text-[#0f172a] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VERIFIED GOOGLE REVIEWS & TESTIMONIALS ─────────────── */}
      <section className="bg-[#17191c] section-pad text-white border-t border-[#2f333a]" aria-labelledby="reviews-heading">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="gold-rule" />
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">⭐</span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#dfbf6c]">Verified Google Business Reviews</span>
              </div>
              <h2 id="reviews-heading" className="text-2xl sm:text-4xl font-extrabold text-white">
                What Our Clients Say
              </h2>
              <p className="text-base text-[#cbd5e1] mt-2 max-w-xl">
                Real feedback from property owners and commercial clients across Delhi NCR.
              </p>
            </div>

            <div className="bg-[#22252a] border border-[#2f333a] p-4 rounded-lg flex items-center gap-4 self-start md:self-auto">
              <div className="w-12 h-12 rounded-full bg-[#ffffff] text-black font-black flex items-center justify-center text-xl font-sans">
                G
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#f59e0b] text-sm">
                  ★★★★★
                </div>
                <p className="text-xs text-[#cbd5e1] font-semibold">5.0 Star Rated on Google</p>
                <a
                  href="https://www.google.com/search?q=jahangir+construction+new+delhi+address&ludocid=4740317264417251491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#dfbf6c] hover:underline font-bold"
                >
                  View on Google Business Profile →
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-[#22252a] border border-[#2f333a] p-6 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#ea580c] text-white font-bold flex items-center justify-center text-base">
                      S
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Client Review</p>
                      <p className="text-[11px] text-[#94a3b8]">Google Verified</p>
                    </div>
                  </div>
                  <span className="text-[#f59e0b] text-sm font-bold">★★★★★</span>
                </div>
                <p className="text-sm text-[#f1f5f9] leading-relaxed italic">
                  &ldquo;Full satisfaction service hai inki ek.no quality hai.&rdquo;
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#2f333a] text-xs text-[#94a3b8]">
                ✓ Verified Construction Service
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-[#22252a] border border-[#2f333a] p-6 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#7c3aed] text-white font-bold flex items-center justify-center text-base">
                      Md
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Md (Client)</p>
                      <p className="text-[11px] text-[#94a3b8]">Google Verified</p>
                    </div>
                  </div>
                  <span className="text-[#f59e0b] text-sm font-bold">★★★★★</span>
                </div>
                <p className="text-sm text-[#f1f5f9] leading-relaxed italic">
                  &ldquo;Very good service and fast delivery project and cold cooling&rdquo;
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#2f333a] text-xs text-[#94a3b8]">
                ✓ Timely Milestone Delivery
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-[#22252a] border border-[#2f333a] p-6 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#16a34a] text-white font-bold flex items-center justify-center text-base">
                      J
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Client Feedback</p>
                      <p className="text-[11px] text-[#94a3b8]">Google Verified</p>
                    </div>
                  </div>
                  <span className="text-[#f59e0b] text-sm font-bold">★★★★★</span>
                </div>
                <p className="text-sm text-[#f1f5f9] leading-relaxed italic">
                  &ldquo;Very good work excellent work superb&rdquo;
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#2f333a] text-xs text-[#94a3b8]">
                ✓ Superb Workmanship &amp; Quality
              </div>
            </div>
          </div>

          {/* Office Address & Interactive Google Map */}
          <div className="mt-10 bg-[#0c0d0e] border border-[#c5a044]/40 rounded-lg overflow-hidden">
            <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#dfbf6c]">Registered Office Location</p>
                  <p className="text-sm font-semibold text-white">
                    Part-ll, Gali No.3, Khadda Colony, Jaitpur, New Delhi, Delhi 110044
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/search?q=jahangir+construction+new+delhi+address&ludocid=4740317264417251491"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs whitespace-nowrap"
              >
                Get Directions on Maps →
              </a>
            </div>

            <div className="w-full h-72 sm:h-80 border-t border-[#2f333a] bg-[#17191c]">
              <iframe
                title="Jahangir Construction New Delhi Google Map Location"
                src="https://maps.google.com/maps?q=Part-II,+Gali+No.3,+Khadda+Colony,+Jaitpur,+New+Delhi,+Delhi+110044&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────── */}
      <CTASection
        heading="Have a Plot or Building Project in Delhi NCR?"
        subtext="Speak directly with our team. We'll evaluate your drawings, inspect the site, and give you an honest, competitive quotation."
        primaryLabel="Get a Free Quote Now"
        primaryHref="/quote"
        dark={true}
      />
    </>
  );
}
