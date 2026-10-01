import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Images ──────────────────────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    // Add external domains if serving images from CDN:
    // remotePatterns: [{ hostname: 'your-cdn.com' }],
  },

  // ── Security Headers ─────────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/(.*)\\.(ico|png|jpg|jpeg|gif|webp|svg|woff|woff2|ttf|eot)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ── Redirects ────────────────────────────────────────────────────────────
  async redirects() {
    return [
      // Add URL redirects here as needed
    ];
  },

  // ── Compression ──────────────────────────────────────────────────────────
  compress: true,
};

export default nextConfig;
