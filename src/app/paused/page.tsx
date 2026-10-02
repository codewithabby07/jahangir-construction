import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Temporarily Paused | Jahangir Construction",
  description: "This website is currently on hold. Please contact the developer or administration.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PausedPage() {
  return (
    <div className="min-h-screen bg-[#0c0d0e] text-white flex flex-col justify-between p-6 sm:p-10 font-sans">
      {/* Top Brand Bar */}
      <div className="container-tight w-full flex items-center justify-between py-4 border-b border-[#2f333a]">
        <div className="flex flex-col leading-tight">
          <span className="text-white font-black text-lg tracking-tight">
            JAHANGIR
          </span>
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#dfbf6c]">
            CONSTRUCTION
          </span>
        </div>
        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 bg-[#22252a] text-[#dfbf6c] border border-[#c5a044]/40 rounded">
          Status: On Hold
        </span>
      </div>

      {/* Center Paused Card */}
      <div className="container-tight my-auto py-16 flex flex-col items-center text-center max-w-xl mx-auto">
        <div className="w-20 h-20 rounded-full bg-[#17191c] border-2 border-[#c5a044] flex items-center justify-center text-3xl mb-6 shadow-xl animate-pulse">
          ⏸️
        </div>

        <span className="text-xs font-bold tracking-widest uppercase text-[#dfbf6c] mb-2 block">
          Notice / सूचना
        </span>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
          Website Temporarily Paused
        </h1>

        <p className="text-base sm:text-lg text-[#cbd5e1] leading-relaxed mb-6">
          यह वेबसाइट वर्तमान में एडमिनिस्ट्रेशन द्वारा अस्थायी रूप से <strong>होल्ड (Paused)</strong> पर रखी गई है।
        </p>

        <div className="bg-[#17191c] border border-[#2f333a] p-6 rounded-lg w-full text-left mb-8 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-[#9c7b28] mb-2 flex items-center gap-1.5">
            <span>ℹ️</span> Important Notice
          </p>
          <p className="text-sm text-[#cbd5e1] leading-relaxed">
            If you are the website owner or need technical support to resume website services, please reach out to the developer directly.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href="tel:+918595698244"
            className="btn-primary justify-center text-xs py-3.5 px-6"
          >
            📞 Contact Developer / Admin
          </a>
          <a
            href="https://wa.me/918595698244?text=Hello%2C%20regarding%20the%20paused%20Jahangir%20Construction%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline justify-center text-xs py-3.5 px-6"
          >
            💬 WhatsApp Developer
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="container-tight w-full text-center py-4 border-t border-[#1f2329] text-xs text-[#64748b]">
        <p>&copy; {new Date().getFullYear()} Jahangir Construction &bull; Service Temporarily Suspended</p>
      </div>
    </div>
  );
}
