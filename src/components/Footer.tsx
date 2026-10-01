import Link from "next/link";

const services = [
  "Residential House Construction",
  "Commercial & Office Buildings",
  "RCC & Structural Framework",
  "Shuttering & Reinforcement",
  "Brickwork & Fine Plaster",
  "Complete Waterproofing",
  "Renovation & Remodelling",
  "Demolition & JCB Excavation",
  "Turnkey Construction Contracts",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0c0d0e] border-t border-[#2f333a] text-[#cbd5e1]"
      aria-label="Site footer"
    >
      {/* Main Footer */}
      <div className="container-tight py-14 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <span className="block text-white font-black text-xl tracking-tight leading-none">
                JAHANGIR
              </span>
              <span className="block text-xs font-bold tracking-[0.25em] uppercase text-[#dfbf6c] mt-1">
                CONSTRUCTION
              </span>
            </div>
            <p className="text-sm text-[#cbd5e1] leading-relaxed mb-4">
              22+ years of on-ground civil and building construction expertise across Delhi NCR. High quality residential, commercial, and structural execution.
            </p>
            <p className="text-xs text-[#dfbf6c] font-semibold italic">
              &ldquo;Building Your Vision. Creating Your Future.&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/jahangir.construction"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-[#17191c] border border-[#2f333a] flex items-center justify-center text-[#dfbf6c] hover:bg-[#c5a044] hover:text-black transition-colors"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/918595698244"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded bg-[#17191c] border border-[#2f333a] flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.551 4.105 1.513 5.834L0 24l6.335-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.001-1.373l-.359-.214-3.72.886.949-3.618-.233-.37A9.817 9.817 0 012.182 12C2.182 6.56 6.56 2.182 12 2.182S21.818 6.56 21.818 12 17.44 21.818 12 21.818z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xs tracking-[0.15em] uppercase mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Jahangir Construction" },
                { href: "/services", label: "Construction Services" },
                { href: "/projects", label: "Project Showcase" },
                { href: "/projects/ongoing", label: "Ongoing Site Work" },
                { href: "/projects/completed", label: "Completed Projects" },
                { href: "/contact", label: "Contact Details" },
                { href: "/quote", label: "Request a Free Quote" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#cbd5e1] hover:text-[#dfbf6c] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h3 className="text-white font-bold text-xs tracking-[0.15em] uppercase mb-4">
              Core Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-[#cbd5e1] hover:text-[#dfbf6c] transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h3 className="text-white font-bold text-xs tracking-[0.15em] uppercase mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3.5 text-sm">
              <div>
                <p className="text-xs text-[#94a3b8] uppercase tracking-wider font-semibold mb-1">Phone Numbers</p>
                <a
                  href="tel:+918595698244"
                  className="block text-white font-bold hover:text-[#dfbf6c] transition-colors"
                >
                  +91 85956 98244
                </a>
                <a
                  href="tel:+918368015943"
                  className="block text-white font-bold hover:text-[#dfbf6c] transition-colors"
                >
                  +91 83680 15943
                </a>
              </div>

              <div>
                <p className="text-xs text-[#94a3b8] uppercase tracking-wider font-semibold mb-1">Email</p>
                <a
                  href="mailto:Jahangir.construction85@gmail.com"
                  className="block text-[#cbd5e1] hover:text-[#dfbf6c] transition-colors break-all"
                >
                  Jahangir.construction85@gmail.com
                </a>
              </div>

              <div>
                <p className="text-xs text-[#94a3b8] uppercase tracking-wider font-semibold mb-1">Office Address</p>
                <p className="text-xs text-[#ffffff] font-medium leading-relaxed mb-1">
                  Part-ll, Gali No.3, Khadda Colony, Jaitpur, New Delhi, Delhi 110044
                </p>
                <a
                  href="https://www.google.com/search?q=jahangir+construction+new+delhi+address&ludocid=4740317264417251491"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#dfbf6c] hover:underline font-semibold inline-flex items-center gap-1"
                >
                  📍 View on Google Maps &amp; Reviews →
                </a>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/quote"
                className="btn-primary w-full text-xs text-center justify-center py-2.5"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#17191c] bg-[#080809]">
        <div className="container-tight py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#94a3b8]">
          <p>
            &copy; {year} Jahangir Construction. All rights reserved.
          </p>
          <p>
            Registered Civil &amp; Building Contractors | Delhi NCR
          </p>
        </div>
      </div>
    </footer>
  );
}
