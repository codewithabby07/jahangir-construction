import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Jahangir Construction",
  description: "The page you were looking for was not found. Return to the Jahangir Construction homepage.",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[var(--color-warm-white)]">
      <div className="text-center px-6 py-16">
        <p
          className="text-7xl font-bold mb-4"
          style={{ color: "var(--color-grey-200)" }}
        >
          404
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-text-dark)] mb-3">
          Page Not Found
        </h1>
        <p className="text-base text-[var(--color-text-mid)] mb-8 max-w-sm mx-auto">
          The page you were looking for doesn&apos;t exist. Let&apos;s get you back to something useful.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-outline text-[var(--color-text-dark)]">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
