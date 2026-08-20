import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy redirects carried over from the old static site (_redirects).
      { source: "/seedsense.html", destination: "/", permanent: true },
      { source: "/features.html", destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      // Old static pages used .html extensions; preserve inbound links.
      { source: "/:slug.html", destination: "/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
