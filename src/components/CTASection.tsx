import Link from "next/link";

interface CTASectionProps {
  heading?: string;
  subtext?: string;
  primaryLabel?: string;
  primaryHref?: string;
  whatsapp?: boolean;
  dark?: boolean;
}

export default function CTASection({
  heading = "Ready to Start Your Construction Project?",
  subtext = "Get in touch with Jahangir Construction today. We will visit your site in Delhi NCR, evaluate the scope, and provide a transparent, itemised quote.",
  primaryLabel = "Get a Free Quote",
  primaryHref = "/quote",
  whatsapp = true,
  dark = true,
}: CTASectionProps) {
  return (
    <section
      className={`section-pad ${
        dark ? "bg-[#0c0d0e] text-[#ffffff]" : "bg-[#f8f9fa] text-[#0f172a] border-t border-[#e2e8f0]"
      }`}
      aria-labelledby="cta-heading"
    >
      <div className="container-tight text-center">
        <span className="gold-rule mx-auto" />
        <h2
          id="cta-heading"
          className={`text-2xl sm:text-4xl font-extrabold mb-4 ${
            dark ? "text-[#ffffff]" : "text-[#0f172a]"
          }`}
        >
          {heading}
        </h2>
        <p
          className={`text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed ${
            dark ? "text-[#cbd5e1]" : "text-[#334155]"
          }`}
        >
          {subtext}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href={primaryHref} className="btn-primary w-full sm:w-auto">
            {primaryLabel}
          </Link>
          {whatsapp && (
            <a
              href="https://wa.me/918595698244?text=Hello%2C%20I%20am%20interested%20in%20a%20construction%20quote%20for%20my%20site."
              target="_blank"
              rel="noopener noreferrer"
              className={dark ? "btn-outline w-full sm:w-auto" : "btn-outline-dark w-full sm:w-auto"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.551 4.105 1.513 5.834L0 24l6.335-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.001-1.373l-.359-.214-3.72.886.949-3.618-.233-.37A9.817 9.817 0 012.182 12C2.182 6.56 6.56 2.182 12 2.182S21.818 6.56 21.818 12 17.44 21.818 12 21.818z"/>
              </svg>
              Chat on WhatsApp
            </a>
          )}
          <a
            href="tel:+918595698244"
            className={dark ? "btn-outline w-full sm:w-auto" : "btn-outline-dark w-full sm:w-auto"}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Direct Call: 8595698244
          </a>
        </div>
      </div>
    </section>
  );
}
