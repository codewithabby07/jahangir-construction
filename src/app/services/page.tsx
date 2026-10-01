import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Complete Construction Services in Delhi NCR | Jahangir Construction",
  description:
    "Comprehensive construction services across Delhi NCR — residential house building, commercial spaces, civil work, RCC casting, shuttering, brickwork, plaster, waterproofing, renovation, demolition, excavation, and turnkey projects. Call +91 85956 98244.",
  alternates: {
    canonical: "https://www.jahangirconstruction.com/services",
  },
};

const services = [
  {
    id: "residential",
    title: "Residential House & Villa Construction",
    category: "Full Structure",
    icon: "🏠",
    description:
      "End-to-end residential construction from deep footing foundation to roof casting and final finish. We construct independent villas, duplexes, multi-storey builder floors, and residential apartments with structural certification.",
    details: [
      "Custom house construction from bare plot",
      "Additional floors on existing building foundations",
      "Luxury villa and duplex construction",
      "Complete grey structure & finishing packages",
      "Approved drawings and structural load compliance",
    ],
  },
  {
    id: "commercial",
    title: "Commercial & Office Building Construction",
    category: "Commercial",
    icon: "🏢",
    description:
      "Construction of commercial complexes, office spaces, retail showrooms, warehouses, and industrial sheds. We manage high-strength structural specifications, basements, and scheduled milestone deliveries.",
    details: [
      "Commercial office buildings & IT spaces",
      "Showrooms, retail shops & market complexes",
      "Industrial sheds, warehouses & storage units",
      "Commercial basements & multi-level car parking",
    ],
  },
  {
    id: "building",
    title: "Building & Institutional Construction",
    category: "Civil Structure",
    icon: "🏛️",
    description:
      "General building construction for schools, healthcare clinics, community centers, and institutional facilities with heavy footfall specifications and durable civil engineering.",
    details: [
      "Educational institutions & school buildings",
      "Clinics, hospitals & diagnostic facilities",
      "Community halls & institutional facilities",
    ],
  },
  {
    id: "civil",
    title: "Civil Work & Site Development",
    category: "Civil Engineering",
    icon: "🧱",
    description:
      "Complete civil infrastructure including boundary walls, high-security compound walls, drainage lines, septic tanks, underground rainwater harvesting sumps, and paved driveway surfaces.",
    details: [
      "High boundary & retaining walls",
      "Underground water tanks & septic systems",
      "Rainwater harvesting & drainage pipelines",
      "Interlocking paver blocks & RCC driveways",
    ],
  },
  {
    id: "rcc",
    title: "RCC Structural Framework & Casting",
    category: "Structural Core",
    icon: "🏗️",
    description:
      "Reinforced Cement Concrete (RCC) execution — foundation footings, columns, grade beams, lintels, and roof slabs cast with branded cement, Fe 550D TMT rebar, and mechanical vibration.",
    details: [
      "Heavy footing & column structural casting",
      "Roof slab casting with mechanical pump/mixer",
      "Grade beams, plinth beams & lintels",
      "Proper water curing protocol & cube tests",
    ],
  },
  {
    id: "shuttering",
    title: "Shuttering & Reinforcement Tying",
    category: "Structural Core",
    icon: "⚙️",
    description:
      "Precision shuttering and formwork using waterproof film-faced plywood and MS props. Steel reinforcement is tied with certified lap lengths and cover blocks to ensure zero honeycombing in concrete.",
    details: [
      "Film-faced plywood & steel shuttering",
      "Heavy-duty prop centering systems",
      "Certified rebar tying with cover blocks",
      "Pre-casting inspection for level and plumb",
    ],
  },
  {
    id: "brickwork",
    title: "Brick Work & Masonry",
    category: "Masonry",
    icon: "🧱",
    description:
      "High-standard 9-inch load-bearing exterior walls and 4.5-inch partition walls using premium red clay bricks or autoclaved aerated concrete (AAC) blocks with proper mortar ratios.",
    details: [
      "1st class red clay brick masonry",
      "AAC lightweight block work",
      "Raking of joints for plaster bonding",
      "Lintel band casting on all openings",
    ],
  },
  {
    id: "plaster",
    title: "Plaster Work (Internal & External)",
    category: "Finishing",
    icon: "✨",
    description:
      "Smooth internal cement and gypsum plastering, and double-coat waterproof sand-faced external plastering done true to line and level, ready for paint or stone cladding.",
    details: [
      "Double-coat external waterproof plaster",
      "Smooth internal cement & gypsum plaster",
      "Grooving, corner beading & drip moulds",
      "Curing for maximum surface hardness",
    ],
  },
  {
    id: "waterproofing",
    title: "Comprehensive Waterproofing",
    category: "Protection",
    icon: "💧",
    description:
      "Guaranteed multi-layer chemical and membrane waterproofing for terrace slabs, sunken toilet slabs, basements, and retaining walls using Dr. Fixit, Fosroc, or Sika systems.",
    details: [
      "Terrace roof PU & elastomeric coating",
      "Sunken bathroom & kitchen waterproofing",
      "Basement & retaining wall barrier treatment",
      "Water storage tank polymer waterproofing",
    ],
  },
  {
    id: "renovation",
    title: "Complete Renovation & Remodelling",
    category: "Renovation",
    icon: "🔨",
    description:
      "Full transformation of older residential and commercial properties. Structural strengthening, room enlargement, new floor tiling, facade redesign, and MEP infrastructure updates.",
    details: [
      "Complete home & apartment remodelling",
      "Office fit-outs & commercial redesigns",
      "Structural beam retrofitting & wall removal",
      "Facade modernization & tile replacement",
    ],
  },
  {
    id: "demolition",
    title: "Safe Demolition Services",
    category: "Site Prep",
    icon: "💥",
    description:
      "Controlled manual and mechanical demolition of old buildings, boundary walls, and RCC structures with dust control, neighbor safety protections, and debris clearance.",
    details: [
      "Full building manual & machine demolition",
      "Selective wall & slab removal",
      "Complete debris lifting and municipal disposal",
      "Safety netting and structural propping",
    ],
  },
  {
    id: "excavation",
    title: "Excavation & JCB Earth Work",
    category: "Site Prep",
    icon: "🚜",
    description:
      "Deep foundation excavation, basement earth removal, site leveling, and trenching using modern JCB excavators, hydraulic rock breakers, and experienced operators.",
    details: [
      "Basement & deep footing excavation",
      "Site grading, filling & compaction",
      "JCB / Poclain earth-moving machinery",
      "Soil carting & leveling",
    ],
  },
  {
    id: "turnkey",
    title: "Turnkey Construction Contracts",
    category: "Complete Solution",
    icon: "🔑",
    description:
      "A complete package where Jahangir Construction takes 100% end-to-end responsibility from soil testing and excavation to final painting, lighting, and key handover.",
    details: [
      "Single-point responsibility & transparent billing",
      "All civil, plumbing, electrical & finishing included",
      "Guaranteed material brands & specifications",
      "Dedicated engineer & regular milestone reports",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Deliver"
        title="Complete Construction &amp; Civil Services"
        subtitle="Specialized services across residential, commercial, civil, and turnkey building projects in Delhi NCR."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      <section className="section-pad bg-[#ffffff] text-[#0f172a]" aria-labelledby="services-list-heading">
        <div className="container-tight">
          <div className="max-w-3xl mb-12">
            <span className="gold-rule" />
            <h2 id="services-list-heading" className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] mb-4">
              13 Core Construction Capabilities
            </h2>
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
              Whether you require a full turnkey contract or specific structural execution like RCC, shuttering, brickwork, or waterproofing, our experienced on-site crews deliver guaranteed quality.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-[#f8f9fa] border border-[#e2e8f0] p-6 sm:p-10 rounded-lg hover:border-[#c5a044] transition-all shadow-sm"
              >
                <div className="flex flex-col lg:flex-row gap-8 justify-between">
                  <div className="lg:w-7/12">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{service.icon}</span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#9c7b28] bg-[#ffffff] px-2.5 py-1 border border-[#e2e8f0] rounded">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      href={`/quote?service=${encodeURIComponent(service.title)}`}
                      className="btn-primary text-xs"
                    >
                      Enquire for this service
                    </Link>
                  </div>

                  <div className="lg:w-4/12 bg-[#ffffff] border border-[#e2e8f0] p-5 sm:p-6 rounded-lg self-start w-full">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0f172a] mb-3 border-b border-[#e2e8f0] pb-2">
                      Key Highlights &amp; Scope
                    </p>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#334155]">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#c5a044] font-bold">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Need an Estimate for Any of These Services?"
        subtext="Tell us about your plot or building requirement. We provide clear, itemised estimates without obligations."
        primaryLabel="Get a Free Estimate"
        primaryHref="/quote"
        dark={true}
      />
    </>
  );
}
