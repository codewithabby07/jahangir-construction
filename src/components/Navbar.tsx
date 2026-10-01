"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  {
    href: "/projects",
    label: "Projects",
    children: [
      { href: "/projects/ongoing", label: "Ongoing Sites" },
      { href: "/projects/completed", label: "Completed Projects" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProjectsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0c0d0e]/95 backdrop-blur-md shadow-lg border-b border-[#2f333a]"
            : "bg-[#0c0d0e] border-b border-[#1f2329]"
        }`}
      >
        <div className="container-tight">
          <nav
            className="flex items-center justify-between h-16 lg:h-20"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-tight group" aria-label="Jahangir Construction Home">
              <span className="text-white font-black text-lg tracking-tight">
                JAHANGIR
              </span>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#dfbf6c]">
                CONSTRUCTION
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.href} className="relative group">
                    <button
                      className={`nav-link flex items-center gap-1.5 ${
                        isActive(link.href) ? "text-[#dfbf6c]" : "text-[#e2e8f0]"
                      }`}
                      aria-expanded={projectsOpen}
                      aria-haspopup="true"
                      onClick={() => setProjectsOpen(!projectsOpen)}
                    >
                      {link.label}
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="currentColor"
                        className="transition-transform duration-200 group-hover:rotate-180"
                      >
                        <path d="M0 0l5 6 5-6z" />
                      </svg>
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-52 bg-[#17191c] border border-[#2f333a] rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-4 py-3 text-xs font-bold tracking-wider uppercase border-b border-[#2f333a] last:border-0 transition-colors duration-150 ${
                            isActive(child.href)
                              ? "text-[#dfbf6c] bg-[#22252a]"
                              : "text-[#cbd5e1] hover:text-[#dfbf6c] hover:bg-[#22252a]"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link ${
                      isActive(link.href) ? "text-[#dfbf6c] font-bold" : "text-[#e2e8f0]"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* Desktop Phone + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+918595698244"
                className="text-[#cbd5e1] hover:text-[#dfbf6c] text-sm font-bold transition-colors flex items-center gap-1.5"
              >
                <span>📞</span> +91 85956 98244
              </a>
              <Link href="/quote" className="btn-primary text-xs py-2.5 px-5">
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-45 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 max-w-[85vw] bg-[#0c0d0e] border-l border-[#2f333a] flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-[#2f333a]">
          <span className="text-white font-extrabold text-sm tracking-tight">
            JAHANGIR <span className="text-[#dfbf6c]">CONSTRUCTION</span>
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white p-2"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className={`block px-6 py-3.5 text-sm font-bold border-b border-[#1f2329] ${
                  isActive(link.href)
                    ? "text-[#dfbf6c] bg-[#17191c]"
                    : "text-[#e2e8f0] hover:text-[#dfbf6c]"
                }`}
              >
                {link.label}
              </Link>
              {link.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={`block px-10 py-2.5 text-xs font-semibold uppercase tracking-wider border-b border-[#1f2329] ${
                    isActive(child.href)
                      ? "text-[#dfbf6c]"
                      : "text-[#94a3b8] hover:text-white"
                  }`}
                >
                  &rarr; {child.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        <div className="p-6 border-t border-[#2f333a] space-y-3 bg-[#17191c]">
          <a
            href="tel:+918595698244"
            className="btn-outline w-full justify-center text-xs"
          >
            📞 Call: 8595698244
          </a>
          <Link
            href="/quote"
            className="btn-primary w-full justify-center text-xs"
            onClick={() => setMobileOpen(false)}
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16 lg:h-20" aria-hidden="true" />
    </>
  );
}
