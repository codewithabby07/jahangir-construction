import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import QuoteFormWrapper from "./QuoteFormWrapper";

export const metadata: Metadata = {
  title: "Get a Free Construction Quote | Jahangir Construction",
  description:
    "Request a detailed, transparent construction quote from Jahangir Construction for residential, commercial, or civil projects in Delhi NCR. Call +91 85956 98244.",
  alternates: {
    canonical: "https://www.jahangirconstruction.com/quote",
  },
};

export default function QuotePage() {
  return (
    <>
      <PageHero
        label="Free Site Assessment"
        title="Request a Free Construction Quote"
        subtitle="Share your plot size or building requirement below. We provide transparent estimates with zero hidden charges."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get a Free Quote" },
        ]}
      />

      <section
        className="section-pad bg-[#ffffff] text-[#0f172a]"
        aria-labelledby="quote-form-heading"
      >
        <div className="container-tight">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-8">
              <span className="gold-rule" />
              <h2 id="quote-form-heading" className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-6">
                Tell Us About Your Project
              </h2>
              <Suspense fallback={<div className="h-64 flex items-center justify-center text-[#64748b]">Loading form…</div>}>
                <QuoteFormWrapper />
              </Suspense>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Quick Talk Card */}
              <div className="bg-[#0c0d0e] border border-[#2f333a] p-6 sm:p-8 rounded-lg text-white">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <span>📞</span> Need Instant Discussion?
                </h3>
                <p className="text-xs text-[#cbd5e1] leading-relaxed mb-6">
                  Call our founders directly for on-the-spot technical guidance regarding your site.
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="text-[11px] font-bold tracking-wider uppercase text-[#dfbf6c]">Mr. Jahangir (Founder)</p>
                    <a href="tel:+918595698244" className="text-base font-bold text-white hover:text-[#dfbf6c] transition-colors">
                      +91 85956 98244
                    </a>
                  </div>

                  <div>
                    <p className="text-[11px] font-bold tracking-wider uppercase text-[#dfbf6c]">Mr. Saheel (Managing Director)</p>
                    <a href="tel:+918368015943" className="text-base font-bold text-white hover:text-[#dfbf6c] transition-colors">
                      +91 83680 15943
                    </a>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://wa.me/918595698244?text=Hello%2C%20I%20need%20a%20construction%20quote."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-xs text-center justify-center"
                    >
                      💬 WhatsApp Instant Chat
                    </a>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-[#f8f9fa] border border-[#e2e8f0] p-6 rounded-lg text-[#0f172a]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0f172a] mb-4 border-b border-[#e2e8f0] pb-2">
                  Our Next Steps
                </h3>
                <ol className="space-y-3.5 text-xs sm:text-sm text-[#334155]">
                  <li className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-full bg-[#c5a044] text-black font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                    <span>Review your scope within 2 to 4 business hours.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-full bg-[#c5a044] text-black font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                    <span>Schedule a zero-cost physical inspection of your plot.</span>
                  </li>
                  <li className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-full bg-[#c5a044] text-black font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                    <span>Present a clear, itemised bill of quantities and milestone schedule.</span>
                  </li>
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
