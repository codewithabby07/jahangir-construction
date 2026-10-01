interface PageHeroProps {
  label?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

import Link from "next/link";

export default function PageHero({ label, title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section
      className="bg-[#0c0d0e] border-b border-[#2f333a] text-white pt-14 pb-12 md:pt-18 md:pb-16"
      aria-labelledby="page-hero-title"
    >
      <div className="container-tight">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-xs text-[#94a3b8]">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true" className="text-[#64748b]">/</span>}
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-[#dfbf6c] transition-colors font-medium"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#e2e8f0] font-semibold">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {label && (
          <p className="text-[#dfbf6c] text-xs font-bold tracking-[0.2em] uppercase mb-2">
            {label}
          </p>
        )}
        <h1
          id="page-hero-title"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#ffffff] max-w-3xl leading-tight"
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg text-[#cbd5e1] max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
