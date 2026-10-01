import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Projects Portfolio | Jahangir Construction",
  description:
    "Explore residential, commercial, RCC structural, and civil construction projects executed by Jahangir Construction across Delhi NCR.",
  alternates: {
    canonical: "https://www.jahangirconstruction.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Our Portfolio"
        title="Featured Construction Projects"
        subtitle="Active structural sites and completed turnkey projects across Delhi NCR."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects" },
        ]}
      />

      {/* Filter Tabs */}
      <div className="bg-[#f8f9fa] border-b border-[#e2e8f0]">
        <div className="container-tight py-4">
          <div className="flex gap-4 sm:gap-6">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0f172a] border-b-2 border-[#c5a044] pb-1">
              All Projects
            </span>
            <Link
              href="/projects/ongoing"
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#64748b] hover:text-[#0f172a] pb-1 transition-colors"
            >
              Ongoing Sites
            </Link>
            <Link
              href="/projects/completed"
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#64748b] hover:text-[#0f172a] pb-1 transition-colors"
            >
              Completed Projects
            </Link>
          </div>
        </div>
      </div>

      <section className="section-pad bg-[#ffffff] text-[#0f172a]">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 - Active Site */}
            <div className="bg-[#ffffff] border border-[#e2e8f0] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-video w-full overflow-hidden bg-[#17191c]">
                <Image
                  src="/images/hero-header.jpg"
                  alt="Active Multi-Storey RCC Construction Site Delhi NCR"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 bg-[#c5a044] text-[#000000] text-xs font-black tracking-wider uppercase px-3 py-1 rounded">
                  Active Site
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#9c7b28] mb-1">
                  Delhi NCR &bull; RCC Framework &bull; Shuttering
                </p>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                  Multi-Storey RCC Structural Framework &amp; Concrete Casting
                </h3>
                <p className="text-sm text-[#334155] leading-relaxed mb-4">
                  Full civil execution including heavy deep foundation, column alignment, precision shuttering, high-tensile rebar reinforcement, and machine-mix concrete casting under strict technical supervision.
                </p>
                <Link
                  href="/projects/ongoing"
                  className="text-xs font-bold uppercase tracking-wider text-[#0f172a] hover:text-[#c5a044] transition-colors"
                >
                  View Ongoing Sites →
                </Link>
              </div>
            </div>

            {/* Project 2 - Completed Villa / Builder Floor */}
            <div className="bg-[#ffffff] border border-[#e2e8f0] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-video w-full overflow-hidden bg-[#17191c]">
                <Image
                  src="/images/completed-building.jpg"
                  alt="Completed Modern 4-Storey Builder Floor in Delhi NCR"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3 bg-[#0f172a] text-[#ffffff] text-xs font-black tracking-wider uppercase px-3 py-1 rounded border border-[#334155]">
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

      <CTASection
        heading="Want to Visit Any of Our Active or Completed Sites?"
        subtext="We are proud of our build quality. We can arrange a guided walkthrough of our active construction sites in Delhi NCR."
        primaryLabel="Schedule a Site Walkthrough"
        primaryHref="/quote"
        dark={true}
      />
    </>
  );
}
