import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Contact Us & Google Map Location | Jahangir Construction New Delhi",
  description:
    "Visit Jahangir Construction at Part-ll, Gali No.3, Khadda Colony, Jaitpur, New Delhi 110044. View live Google Map directions, call +91 85956 98244 or +91 83680 15943.",
  alternates: {
    canonical: "https://www.jahangirconstruction.com/contact",
  },
};

export default function ContactPage() {
  const mapEmbedUrl = "https://maps.google.com/maps?q=Part-II,+Gali+No.3,+Khadda+Colony,+Jaitpur,+New+Delhi,+Delhi+110044&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <>
      <PageHero
        label="Direct Contact &amp; Office"
        title="Contact Jahangir Construction"
        subtitle="Speak directly with Mr. Jahangir or Mr. Saheel. We provide quick responses, technical guidance, and free site visits across Delhi NCR."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="section-pad bg-[#ffffff] text-[#0f172a]" aria-labelledby="contact-details-heading">
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="gold-rule" />
                <h2
                  id="contact-details-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-2"
                >
                  Reach Us Directly
                </h2>
                <p className="text-base text-[#334155]">
                  No middle-men or call centers. You will talk directly to our core construction leadership.
                </p>
              </div>

              {/* Office Address Card */}
              <div className="bg-[#f8f9fa] border-2 border-[#c5a044]/50 p-6 rounded-lg space-y-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xl">📍</span>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#9c7b28]">
                    Registered Office Address
                  </p>
                </div>
                <p className="text-base font-bold text-[#0f172a] leading-relaxed">
                  Part-ll, Gali No.3, Khadda Colony, Jaitpur, New Delhi, Delhi 110044
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="https://www.google.com/search?q=jahangir+construction+new+delhi+address&ludocid=4740317264417251491"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-2 px-4"
                  >
                    Open in Google Maps App →
                  </a>
                  <a
                    href="tel:+918595698244"
                    className="btn-outline-dark text-xs py-2 px-4"
                  >
                    📞 Call Office
                  </a>
                </div>
              </div>

              {/* Direct Phone Numbers */}
              <div className="bg-[#f8f9fa] border border-[#e2e8f0] p-6 rounded-lg space-y-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#9c7b28]">
                  Phone Lines (Call Anytime)
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+918595698244"
                    className="flex-1 bg-[#ffffff] border border-[#cbd5e1] p-4 rounded hover:border-[#c5a044] transition-all group"
                  >
                    <p className="text-xs text-[#64748b] font-medium">Primary Contact</p>
                    <p className="text-lg font-bold text-[#0f172a] group-hover:text-[#9c7b28] transition-colors">
                      +91 85956 98244
                    </p>
                  </a>
                  <a
                    href="tel:+918368015943"
                    className="flex-1 bg-[#ffffff] border border-[#cbd5e1] p-4 rounded hover:border-[#c5a044] transition-all group"
                  >
                    <p className="text-xs text-[#64748b] font-medium">Secondary Line</p>
                    <p className="text-lg font-bold text-[#0f172a] group-hover:text-[#9c7b28] transition-colors">
                      +91 83680 15943
                    </p>
                  </a>
                </div>
              </div>

              {/* WhatsApp & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/918595698244?text=Hello%2C%20I%20am%20interested%20in%20a%20construction%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366]/10 border border-[#25D366]/30 p-5 rounded-lg flex items-center gap-3 hover:bg-[#25D366]/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xl flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <p className="text-xs text-[#166534] font-bold uppercase tracking-wider">Instant Chat</p>
                    <p className="text-sm font-bold text-[#0f172a]">WhatsApp Us</p>
                  </div>
                </a>

                <a
                  href="mailto:Jahangir.construction85@gmail.com"
                  className="bg-[#f8f9fa] border border-[#e2e8f0] p-5 rounded-lg flex items-center gap-3 hover:border-[#c5a044] transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#17191c] text-[#dfbf6c] flex items-center justify-center text-xl flex-shrink-0">
                    ✉️
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-[#64748b] font-bold uppercase tracking-wider">Email Inquiry</p>
                    <p className="text-xs font-bold text-[#0f172a] truncate">Jahangir.construction85@gmail.com</p>
                  </div>
                </a>
              </div>

              {/* Instagram & Service Region */}
              <div className="bg-[#f8f9fa] border border-[#e2e8f0] p-6 rounded-lg space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#9c7b28] mb-1">
                    Instagram Handle
                  </p>
                  <a
                    href="https://www.instagram.com/jahangir.construction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#0f172a] hover:text-[#c5a044] transition-colors"
                  >
                    📸 @jahangir.construction
                  </a>
                </div>

                <div className="pt-3 border-t border-[#e2e8f0]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#9c7b28] mb-1">
                    Coverage Area Across Delhi NCR
                  </p>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    South Delhi, West Delhi, North &amp; East Delhi, Dwarka, Rohini, Jaitpur, Badarpur, Noida, Greater Noida, Gurugram (Gurgaon), Faridabad, and Ghaziabad.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Card & Google Reviews */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-[#0c0d0e] border border-[#2f333a] p-8 rounded-lg text-white">
                <span className="text-xs font-bold tracking-widest uppercase text-[#dfbf6c]">
                  Online Lead Form
                </span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-3">
                  Request a Free Site Quote
                </h3>
                <p className="text-sm text-[#cbd5e1] leading-relaxed mb-6">
                  Fill our simple online quotation form. We will review your requirements and get back with clear estimates and site visit scheduling.
                </p>
                <Link href="/quote" className="btn-primary w-full text-center justify-center">
                  Open Free Quote Form
                </Link>
              </div>

              {/* Google Verified Reviews Showcase */}
              <div className="bg-[#f8f9fa] border border-[#e2e8f0] rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-3">
                  <div>
                    <p className="text-sm font-bold text-[#0f172a] flex items-center gap-1.5">
                      <span>⭐</span> 5.0 Star Rated on Google
                    </p>
                    <p className="text-xs text-[#64748b]">Verified Google Reviews for Jahangir Construction</p>
                  </div>
                  <span className="text-xs font-bold text-[#16a34a] bg-[#dcfce7] px-2.5 py-1 rounded">
                    Verified
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-3 bg-white border border-[#e2e8f0] rounded">
                    <p className="text-xs text-[#f59e0b] font-bold mb-1">★★★★★</p>
                    <p className="text-xs text-[#334155] italic">&ldquo;Full satisfaction service hai inki ek.no quality hai.&rdquo;</p>
                  </div>

                  <div className="p-3 bg-white border border-[#e2e8f0] rounded">
                    <p className="text-xs text-[#f59e0b] font-bold mb-1">★★★★★</p>
                    <p className="text-xs text-[#334155] italic">&ldquo;Very good service and fast delivery project and cold cooling&rdquo;</p>
                  </div>

                  <div className="p-3 bg-white border border-[#e2e8f0] rounded">
                    <p className="text-xs text-[#f59e0b] font-bold mb-1">★★★★★</p>
                    <p className="text-xs text-[#334155] italic">&ldquo;Very good work excellent work superb&rdquo;</p>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <a
                    href="https://www.google.com/search?q=jahangir+construction+new+delhi+address&ludocid=4740317264417251491"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#9c7b28] hover:underline"
                  >
                    View all reviews on Google Business Profile →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ─── LIVE INTERACTIVE GOOGLE MAP EMBED ───────────────────── */}
          <div className="mt-16 bg-[#f8f9fa] border border-[#e2e8f0] rounded-xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-[#e2e8f0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">🗺️</span>
                  <h3 className="text-lg font-bold text-[#0f172a]">
                    Interactive Google Map &amp; Office Directions
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#64748b]">
                  Part-ll, Gali No.3, Khadda Colony, Jaitpur, New Delhi, Delhi 110044
                </p>
              </div>

              <a
                href="https://www.google.com/search?q=jahangir+construction+new+delhi+address&ludocid=4740317264417251491"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs whitespace-nowrap"
              >
                Open Full Google Maps →
              </a>
            </div>

            <div className="w-full h-[400px] md:h-[480px] relative bg-[#e2e8f0]">
              <iframe
                title="Jahangir Construction Office Google Map Location"
                src={mapEmbedUrl}
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

      <CTASection
        heading="Let's Build Something Exceptional Together"
        subtext="Contact Mr. Jahangir or Mr. Saheel directly to schedule your free site inspection."
        primaryLabel="Request Free Site Quote"
        primaryHref="/quote"
        dark={true}
      />
    </>
  );
}
