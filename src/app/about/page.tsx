import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Us | Jahangir Construction New Delhi",
  description:
    "Learn about Jahangir Construction — founded by Mr. Jahangir with over 22 years in the Delhi NCR construction industry. Residential, commercial, civil, and turnkey projects. Office in Jaitpur, New Delhi.",
  alternates: {
    canonical: "https://www.jahangirconstruction.com/about",
  },
};

const process = [
  { step: "01", title: "Direct Site Visit & Discussion", desc: "We meet at your location in Delhi NCR, inspect ground conditions, review architectural blueprints, and listen to your vision." },
  { step: "02", title: "Technical Assessment & Soil Survey", desc: "Evaluation of foundation depth, water level, neighborhood load constraints, and structural specifications." },
  { step: "03", title: "Detailed Bill of Quantities (BOQ)", desc: "Clear, itemised contract specifying exact cement brand, steel grade, sand type, brick specification, and payment schedule." },
  { step: "04", title: "Supervised Civil & RCC Execution", desc: "Daily on-site supervision by our core masters for formwork, rebar tying, machine mixing, vibration, and water curing." },
  { step: "05", title: "Finishing & Formal Key Handover", desc: "Complete walkthrough, plumbing & electrical load tests, wall plaster inspections, and formal project handover." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About the Company"
        title="22+ Years of Solid Construction Across Delhi NCR"
        subtitle="Founded on honesty, experienced on-site civil craftsmanship, and strong client relationships."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />

      {/* ─── COMPANY STORY ────────────────────────────────────────── */}
      <section className="section-pad bg-[#ffffff] text-[#0f172a]" aria-labelledby="story-heading">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="gold-rule" />
              <h2
                id="story-heading"
                className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] mb-6 leading-tight"
              >
                A Legacy of Grounded Experience &amp; Reliable Building Work.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-[#334155] leading-relaxed">
                <p>
                  <strong className="text-[#0f172a]">Jahangir Construction</strong> began over two decades ago as a focused civil and RCC contracting team in Delhi NCR. Under the leadership of <strong className="text-[#0f172a]">Mr. Jahangir</strong>, the company grew through hands-on technical competence, strict site discipline, and unwavering respect for client timelines and budgets.
                </p>
                <p>
                  Today, with Managing Director <strong className="text-[#0f172a]">Mr. Saheel</strong> driving operational coordination and quality benchmarks, we manage complete turnkey house construction, luxury builder floors, commercial office structures, and extensive civil renovations across Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad.
                </p>
                <p>
                  We are not an abstract corporate brokerage. When you work with us, you deal directly with experienced construction supervisors who understand soil loads, structural steel tying, concrete slump tests, and weather curing.
                </p>
              </div>

              <div className="mt-8">
                <Link href="/quote" className="btn-primary">
                  Request Free Site Consultation
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#e2e8f0] shadow-md bg-[#17191c]">
                <Image
                  src="/images/completed-building.jpg"
                  alt="Jahangir Construction completed modern building project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                  <p className="text-xs font-bold text-[#dfbf6c] uppercase">Jahangir Construction</p>
                  <p className="text-xs text-white">Completed Modern 4-Storey Builder Floor in Delhi NCR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP ───────────────────────────────────────────── */}
      <section className="section-pad bg-[#0c0d0e] text-white" aria-labelledby="leadership-heading">
        <div className="container-tight">
          <div className="max-w-2xl mb-12">
            <span className="gold-rule" />
            <h2
              id="leadership-heading"
              className="text-2xl sm:text-4xl font-extrabold text-[#ffffff] mb-3"
            >
              Company Leadership
            </h2>
            <p className="text-base text-[#cbd5e1]">
              Experienced professionals with hands-on roots in structural and civil execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {/* Founder */}
            <div className="bg-[#17191c] border border-[#2f333a] p-8 rounded-lg">
              <div className="w-14 h-14 rounded-full bg-[#22252a] border border-[#c5a044] flex items-center justify-center text-2xl mb-5">
                👷‍♂️
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#dfbf6c]">
                Founder &amp; Chief Contractor
              </span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-3">
                Mr. Jahangir
              </h3>
              <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                Brings over 22 years of direct on-site civil engineering and construction leadership. Oversees foundation engineering, structural RCC integrity, material procurement, and quality enforcement across all ongoing sites in Delhi NCR.
              </p>
            </div>

            {/* Managing Director */}
            <div className="bg-[#17191c] border border-[#2f333a] p-8 rounded-lg">
              <div className="w-14 h-14 rounded-full bg-[#22252a] border border-[#c5a044] flex items-center justify-center text-2xl mb-5">
                📐
              </div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#dfbf6c]">
                Managing Director
              </span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-3">
                Mr. Saheel
              </h3>
              <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
                Manages project scheduling, client coordination, architectural drawing implementation, and turnkey milestone deliveries. Ensures transparent, responsive communication and smooth operational execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────────── */}
      <section className="section-pad bg-[#f8f9fa] text-[#0f172a]" aria-labelledby="process-heading">
        <div className="container-tight">
          <div className="max-w-2xl mb-12">
            <span className="gold-rule" />
            <h2
              id="process-heading"
              className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] mb-3"
            >
              How We Work With You
            </h2>
            <p className="text-base text-[#334155]">
              A disciplined, step-by-step framework to keep your project smooth, on-budget, and stress-free.
            </p>
          </div>

          <div className="space-y-4">
            {process.map((step) => (
              <div key={step.step} className="bg-[#ffffff] border border-[#e2e8f0] p-6 sm:p-7 rounded-lg flex flex-col sm:flex-row gap-5 sm:items-center">
                <div className="w-12 h-12 rounded bg-[#c5a044] text-black font-black flex items-center justify-center text-base flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0f172a] mb-1">{step.title}</h3>
                  <p className="text-sm text-[#334155] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Office Address & Google Rating */}
          <div className="mt-12 bg-[#0c0d0e] text-white p-6 sm:p-8 rounded-lg border border-[#2f333a] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-[#dfbf6c] text-xs font-bold uppercase tracking-wider mb-1">
                <span>⭐</span> 5.0 Star Google Rated Civil &amp; Building Contractor
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Registered Office in Jaitpur, New Delhi
              </h3>
              <p className="text-xs sm:text-sm text-[#cbd5e1]">
                Part-ll, Gali No.3, Khadda Colony, Jaitpur, New Delhi, Delhi 110044
              </p>
            </div>
            <a
              href="https://www.google.com/search?q=jahangir+construction+new+delhi+address&ludocid=4740317264417251491"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs whitespace-nowrap"
            >
              Google Maps Location →
            </a>
          </div>
        </div>
      </section>

      <CTASection
        heading="Discuss Your Project With Mr. Jahangir &amp; Mr. Saheel"
        subtext="Call us directly or send your site details. We are available for site visits across Delhi, Noida, and Gurgaon."
        primaryLabel="Request a Site Visit"
        primaryHref="/quote"
        dark={true}
      />
    </>
  );
}
