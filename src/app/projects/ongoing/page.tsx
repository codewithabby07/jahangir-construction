import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Ongoing Construction Sites | Jahangir Construction",
  description:
    "Active construction sites currently being executed by Jahangir Construction in Delhi NCR. Multi-storey RCC frames, house construction, and civil work.",
  alternates: {
    canonical: "https://www.jahangirconstruction.com/projects/ongoing",
  },
};

const ongoingProjects = [
  {
    id: "ongoing-1",
    name: "Multi-Storey RCC Structural Frame & Slab Casting",
    location: "Delhi NCR",
    type: "RCC & Civil Construction",
    stage: "Casting & Shuttering in Progress",
    description: "Multi-level concrete frame structure execution. Plywood shuttering, Tata Tiscon Fe 550D reinforcement, machine-pump casting, and daily water curing protocol.",
    imagePath: "/images/hero-header.jpg",
  },
  {
    id: "ongoing-2",
    name: "G+3 Luxury Residential Builder Floor Construction",
    location: "Dwarka Sector 19, Delhi",
    type: "Residential Turnkey",
    stage: "Brickwork & Plastering Stage",
    description: "Independent 4-level builder floor with stilt car parking. Red clay brick partition walls, concealed MEP conduits, and external sand-faced plastering.",
    imagePath: "/images/hero-header.jpg",
  },
  {
    id: "ongoing-3",
    name: "Commercial Complex Basement & Foundation Execution",
    location: "Okhla Industrial Area, New Delhi",
    type: "Commercial Civil Work",
    stage: "Retaining Wall & Raft Casting",
    description: "Deep excavation, soil shoring, raft foundation concrete casting, and heavy-duty double-layer chemical basement waterproofing.",
    imagePath: "/images/hero-header.jpg",
  },
  {
    id: "ongoing-4",
    name: "Comprehensive Bungalow Structural Renovation & Expansion",
    location: "Greater Kailash, South Delhi",
    type: "Structural Renovation",
    stage: "Beam Retrofitting & Additional Floor",
    description: "Structural strengthening of existing ground floor structure, casting of new cantilever beams, and construction of an additional penthouse floor.",
    imagePath: "/images/hero-header.jpg",
  },
];

export default function OngoingProjectsPage() {
  return (
    <>
      <PageHero
        label="Active Execution"
        title="Ongoing Construction Sites"
        subtitle="Live structural and civil projects currently being built by our teams across Delhi NCR."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Ongoing" },
        ]}
      />

      <div className="bg-[#f8f9fa] border-b border-[#e2e8f0]">
        <div className="container-tight py-4">
          <div className="flex gap-4 sm:gap-6">
            <Link
              href="/projects"
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#64748b] hover:text-[#0f172a] pb-1 transition-colors"
            >
              All Projects
            </Link>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0f172a] border-b-2 border-[#c5a044] pb-1">
              Ongoing Sites
            </span>
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
            {ongoingProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#ffffff] border border-[#e2e8f0] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-[#17191c]">
                  <Image
                    src={project.imagePath}
                    alt={project.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#c5a044] text-[#000000] text-xs font-black tracking-wider uppercase px-3 py-1 rounded">
                    {project.stage}
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#9c7b28] mb-1">
                    📍 {project.location} &bull; {project.type}
                  </p>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[#334155] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <Link
                    href="/quote"
                    className="text-xs font-bold uppercase tracking-wider text-[#0f172a] hover:text-[#c5a044] transition-colors"
                  >
                    Enquire for a similar project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Have a Plot in Delhi NCR Ready for Construction?"
        subtext="Talk directly with Mr. Jahangir &amp; Mr. Saheel. We can evaluate your architectural drawings and provide a clear quote."
        primaryLabel="Request a Site Quote"
        primaryHref="/quote"
        dark={true}
      />
    </>
  );
}
