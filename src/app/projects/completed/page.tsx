import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Completed Construction Projects | Jahangir Construction",
  description:
    "Delivered residential builder floors, modern villas, commercial spaces, and civil projects completed by Jahangir Construction in Delhi NCR.",
  alternates: {
    canonical: "https://www.jahangirconstruction.com/projects/completed",
  },
};

const completedProjects = [
  {
    id: "completed-1",
    name: "Modern 4-Storey Luxury Residential Builder Floor & Villa",
    location: "Vikas Puri, West Delhi",
    type: "Turnkey Residential",
    description: "Complete turnkey construction of an ultra-modern 4-storey residential builder floor. Featured Italian stone cladding facade, glass balconies, stilt parking, and premium waterproofing.",
    imagePath: "/images/completed-building.jpg",
  },
  {
    id: "completed-2",
    name: "Commercial Office Complex & Retail Showroom Building",
    location: "Sector 62, Noida",
    type: "Commercial Construction",
    description: "Multi-level commercial structure designed for high footfall. Included basement car parking, high-load RCC columns, double-height ground floor showroom, and exterior facade finishes.",
    imagePath: "/images/completed-building.jpg",
  },
  {
    id: "completed-3",
    name: "Independent 3-Storey Luxury Bungalow",
    location: "Sushant Lok, Gurugram",
    type: "Residential Villa",
    description: "Architectural turnkey villa build with expansive open-plan living, terrace garden waterproofing, stone tile elevation, and concealed VRV air-conditioning provisions.",
    imagePath: "/images/completed-building.jpg",
  },
  {
    id: "completed-4",
    name: "Industrial Warehouse Shed & Heavy Civil Pavement",
    location: "Faridabad Industrial Area",
    type: "Civil & Industrial",
    description: "Heavy-duty industrial flooring with trimix concrete, boundary wall enclosure, drainage network, and steel portal frame foundation casting.",
    imagePath: "/images/completed-building.jpg",
  },
];

export default function CompletedProjectsPage() {
  return (
    <>
      <PageHero
        label="Track Record"
        title="Completed Construction Projects"
        subtitle="A snapshot of delivered residential, commercial, and civil structures across Delhi NCR."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Completed" },
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
            <Link
              href="/projects/ongoing"
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#64748b] hover:text-[#0f172a] pb-1 transition-colors"
            >
              Ongoing Sites
            </Link>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#0f172a] border-b-2 border-[#c5a044] pb-1">
              Completed Projects
            </span>
          </div>
        </div>
      </div>

      <section className="section-pad bg-[#ffffff] text-[#0f172a]">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {completedProjects.map((project) => (
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
                  <div className="absolute top-3 left-3 bg-[#0f172a] text-[#ffffff] text-xs font-black tracking-wider uppercase px-3 py-1 rounded border border-[#334155]">
                    Delivered &amp; Handed Over
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
                    Discuss your construction project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Build Your Home or Commercial Property?"
        subtext="Contact our team for a free structural estimate and on-site consultation anywhere in Delhi NCR."
        primaryLabel="Get a Free Estimate"
        primaryHref="/quote"
        dark={true}
      />
    </>
  );
}
