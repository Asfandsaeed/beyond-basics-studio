import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import fs from "fs";

// All sitemap URLs (relative paths) — injected as static <a> tags so crawlers
// can discover every page without executing JavaScript.
const SITEMAP_PATHS: string[] = [
  // Core
  "/", "/work", "/services", "/industries", "/contact",
  // Company
  "/about", "/careers", "/design-for-good", "/accreditations", "/press", "/partners",
  // Resources & content
  "/journal", "/process", "/faq", "/pricing", "/testimonials", "/awards",
  "/newsletter", "/glossary", "/resources",
  // Legal
  "/privacy-policy", "/terms", "/refunds", "/sitemap",
  // Work
  "/work/clear-street", "/work/remote", "/work/multiversx", "/work/phive",
  "/work/floema", "/work/tuu", "/work/redacted", "/work/grabgo",
  "/work/flowcase", "/work/jeton", "/work/keikku", "/work/kozowood",
  "/work/talent-protocol", "/work/flecto", "/work/hematogenix",
  "/work/speedy", "/work/care-to-beauty",
  // Services
  "/services/brand-strategy", "/services/brand-identity",
  "/services/digital-experience", "/services/growth-marketing",
  "/services/content-creative", "/services/brand-strategy-for-fintech",
  "/services/brand-strategy-for-startups", "/services/brand-identity-for-fintech",
  "/services/brand-identity-for-saas", "/services/brand-identity-for-web3",
  "/services/brand-identity-for-startups", "/services/brand-identity-for-healthcare",
  "/services/brand-identity-for-ecommerce", "/services/digital-experience-for-fintech",
  "/services/digital-experience-for-saas", "/services/digital-experience-for-ecommerce",
  "/services/digital-experience-for-web3", "/services/growth-marketing-for-saas",
  "/services/growth-marketing-for-fintech",
  // Industries
  "/industries/saas", "/industries/tech-companies", "/industries/ai-startups",
  "/industries/crypto-projects", "/industries/web3-brands", "/industries/mobile-apps",
  "/industries/software-companies", "/industries/startups", "/industries/ecommerce",
  "/industries/dtc-brands", "/industries/ecommerce-fashion",
  "/industries/subscription-businesses", "/industries/healthcare",
  "/industries/dentists", "/industries/doctors", "/industries/fitness-brands",
  "/industries/gyms", "/industries/local-businesses", "/industries/hvac-companies",
  "/industries/roofers", "/industries/construction-companies",
  "/industries/automotive-businesses", "/industries/franchises",
  "/industries/logistics-companies", "/industries/manufacturing-companies",
  "/industries/lawyers", "/industries/realtors", "/industries/coaches",
  "/industries/consultants", "/industries/agencies", "/industries/influencers",
  "/industries/creators", "/industries/personal-brands", "/industries/photographers",
  "/industries/event-companies", "/industries/restaurants", "/industries/hotels",
  "/industries/hospitality-businesses", "/industries/travel-agencies",
  "/industries/fashion-brands", "/industries/beauty-brands",
  "/industries/skincare-brands", "/industries/food-brands", "/industries/salons",
  "/industries/real-estate-companies", "/industries/interior-designers",
  "/industries/architects", "/industries/financial-services",
  "/industries/educational-institutions", "/industries/nonprofits",
  // Journal
  "/journal/tensor-brand-90-days", "/journal/brand-led-growth",
  "/journal/oura-simplicity-strategy", "/journal/art-of-naming",
  "/journal/moxion-sustainable-brand", "/journal/award-worthy-digital-experience",
  "/journal/photography-as-brand-language", "/journal/pre-launch-brand-building",
  // Glossary
  "/glossary/brand-identity", "/glossary/brand-strategy", "/glossary/visual-identity",
  "/glossary/logo-design", "/glossary/design-system", "/glossary/brand-guidelines",
  "/glossary/typography-system", "/glossary/color-system", "/glossary/motion-identity",
  "/glossary/verbal-identity", "/glossary/brand-architecture",
  "/glossary/brand-positioning", "/glossary/brand-audit", "/glossary/naming-strategy",
  "/glossary/art-direction", "/glossary/design-sprint", "/glossary/brand-equity",
  "/glossary/webgl", "/glossary/ui-ux-design", "/glossary/creative-direction",
  "/glossary/brand-refresh", "/glossary/rebranding", "/glossary/growth-marketing",
  "/glossary/go-to-market", "/glossary/digital-experience",
  // Resources
  "/resources/rebranding-checklist", "/resources/brand-brief-template",
  "/resources/how-to-choose-a-brand-agency", "/resources/brand-audit-guide",
  "/resources/naming-guide", "/resources/website-brief-template",
];

// Injects a visually-hidden <nav> containing static <a> tags for every page
// so non-JS crawlers can discover the full site structure from the HTML source.
// Must run before copyIndexAs404 so the copy picks up the injected links.
const injectSeoLinks: import("vite").Plugin = {
  name: "inject-seo-links",
  closeBundle() {
    const outDir = path.resolve(import.meta.dirname, "dist/public");
    const htmlPath = path.join(outDir, "index.html");
    if (!fs.existsSync(htmlPath)) return;

    const links = SITEMAP_PATHS.map(
      (p) => `<a href="${p}">${p}</a>`
    ).join("\n    ");

    const seoNav = `\n  <nav aria-hidden="true" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap">\n    ${links}\n  </nav>`;

    let html = fs.readFileSync(htmlPath, "utf-8");
    html = html.replace("</body>", `${seoNav}\n</body>`);
    fs.writeFileSync(htmlPath, html, "utf-8");
  },
};

// For GitHub Pages: generates a physical index.html inside every route directory
// so GitHub Pages returns HTTP 200 (not 404) for direct URL access.
// Also writes 404.html as a catch-all for any routes not explicitly listed.
// Must run AFTER injectSeoLinks so the static links are included in every copy.
const generateStaticRoutes: import("vite").Plugin = {
  name: "generate-static-routes",
  closeBundle() {
    const outDir = path.resolve(import.meta.dirname, "dist/public");
    const src = path.join(outDir, "index.html");
    if (!fs.existsSync(src)) return;

    const html = fs.readFileSync(src, "utf-8");

    // Create a directory + index.html for every non-root path
    for (const routePath of SITEMAP_PATHS) {
      if (routePath === "/") continue; // root already exists
      const dir = path.join(outDir, routePath);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, "index.html"), html, "utf-8");
    }

    // 404.html catches anything not explicitly listed (GitHub Pages fallback)
    fs.writeFileSync(path.join(outDir, "404.html"), html, "utf-8");
  },
};

const isBuild = process.argv.includes("build");

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 5173;

const basePath = process.env.BASE_PATH ?? "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    injectSeoLinks,
    generateStaticRoutes,
    ...(process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-runtime-error-modal").then(
            (m) => m.default(),
          ),
          ...(!isBuild
            ? [
                await import("@replit/vite-plugin-cartographer").then((m) =>
                  m.cartographer({
                    root: path.resolve(import.meta.dirname),
                  }),
                ),
                await import("@replit/vite-plugin-dev-banner").then((m) =>
                  m.devBanner(),
                ),
              ]
            : []),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-gsap": ["gsap", "lenis"],
          "vendor-ui": ["lucide-react", "embla-carousel-react"],
          "vendor-query": ["@tanstack/react-query"],
          "vendor-radix": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-aspect-ratio",
            "@radix-ui/react-avatar",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-collapsible",
            "@radix-ui/react-context-menu",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-hover-card",
            "@radix-ui/react-label",
            "@radix-ui/react-menubar",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-progress",
            "@radix-ui/react-radio-group",
            "@radix-ui/react-scroll-area",
            "@radix-ui/react-select",
            "@radix-ui/react-separator",
            "@radix-ui/react-slider",
            "@radix-ui/react-slot",
            "@radix-ui/react-switch",
            "@radix-ui/react-tabs",
            "@radix-ui/react-toast",
            "@radix-ui/react-toggle",
            "@radix-ui/react-toggle-group",
            "@radix-ui/react-tooltip",
          ],
        },
      },
    },
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
    watch: {
      ignored: ["**/public/og/**", "**/dist/**", "**/.git/**"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
