import Link from "next/link";

export default function MobileContactBar() {
  return (
    <div className="mobile-contact-bar" role="navigation" aria-label="Quick contact mobile bar">
      <a
        href="tel:+918595698244"
        className="flex flex-col items-center justify-center gap-1 py-3 text-white hover:bg-[#17191c] transition-colors border-r border-[#334155]"
        aria-label="Call Jahangir Construction"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        <span className="text-[11px] font-extrabold tracking-wider uppercase text-white">Call Now</span>
      </a>

      <a
        href="https://wa.me/918595698244?text=Hello%2C%20I%20am%20interested%20in%20a%20construction%20quote."
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 py-3 bg-[#25D366] text-white transition-colors border-r border-[#16a34a]"
        aria-label="WhatsApp Jahangir Construction"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.551 4.105 1.513 5.834L0 24l6.335-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.001-1.373l-.359-.214-3.72.886.949-3.618-.233-.37A9.817 9.817 0 012.182 12C2.182 6.56 6.56 2.182 12 2.182S21.818 6.56 21.818 12 17.44 21.818 12 21.818z"/>
        </svg>
        <span className="text-[11px] font-extrabold tracking-wider uppercase">WhatsApp</span>
      </a>

      <Link
        href="/quote"
        className="flex flex-col items-center justify-center gap-1 py-3 bg-[#c5a044] text-black transition-colors"
        aria-label="Get a free quote"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
        <span className="text-[11px] font-black tracking-wider uppercase">Get Quote</span>
      </Link>
    </div>
  );
}
