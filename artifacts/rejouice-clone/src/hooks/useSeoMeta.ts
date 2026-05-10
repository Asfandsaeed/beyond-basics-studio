import { useEffect } from "react";

const SITE = "Beyond®";
const BASE_URL = "https://beyondbasics.studio";

type SchemaObject = Record<string, unknown>;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface UseSeoMetaOptions {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  /** Override og:type. Defaults to "website". */
  ogType?: "website" | "article";
  /** Crawl directives. Defaults to "index, follow". */
  robots?: string;
  /** Breadcrumb trail for BreadcrumbList JSON-LD. */
  breadcrumbs?: BreadcrumbItem[];
  /** Optional page-specific schema, e.g. Service, Article, DefinedTerm. */
  schema?: SchemaObject | SchemaObject[];
  /** FAQ items to emit a FAQPage schema (great for AI Overviews). */
  faqs?: FaqItem[];
  /** Article freshness signals when ogType === "article". */
  datePublished?: string;
  dateModified?: string;
}

const SCHEMA_ID = "data-page-schema";

function setMeta(sel: string, val: string) {
  let el = document.querySelector<HTMLMetaElement>(sel);
  if (!el) {
    el = document.createElement("meta");
    const attr = sel.includes("[property=") ? "property" : "name";
    el.setAttribute(attr, sel.match(/["']([^"']+)["']/)?.[1] ?? "");
    document.head.appendChild(el);
  }
  el.setAttribute("content", val);
}

function clearPageSchemas() {
  document.querySelectorAll(`script[${SCHEMA_ID}]`).forEach((n) => n.remove());
}

function injectSchema(json: SchemaObject) {
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.setAttribute(SCHEMA_ID, "");
  s.textContent = JSON.stringify(json);
  document.head.appendChild(s);
}

export function useSeoMeta({
  title,
  description,
  path = "",
  ogImage,
  ogType = "website",
  robots = "index, follow",
  breadcrumbs,
  schema,
  faqs,
  datePublished,
  dateModified,
}: UseSeoMetaOptions) {
  useEffect(() => {
    const fullTitle = title.includes(SITE) ? title : `${title} | ${SITE}`;
    document.title = fullTitle;

    const canonicalUrl = `${BASE_URL}${path}`;
    const image = ogImage ?? `${BASE_URL}/opengraph.jpg`;

    setMeta('meta[name="description"]', description);
    setMeta('meta[name="robots"]', robots);
    setMeta('meta[property="og:type"]', ogType);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:image"]', image);
    setMeta('meta[property="og:site_name"]', SITE);
    setMeta('meta[property="og:locale"]', "en_US");
    setMeta('meta[name="twitter:card"]', "summary_large_image");
    setMeta('meta[name="twitter:title"]', fullTitle);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', image);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // ── JSON-LD: clear previous page schemas, emit fresh ones ───────────────
    clearPageSchemas();

    if (breadcrumbs && breadcrumbs.length > 0) {
      injectSchema({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: `${BASE_URL}${b.path}`,
        })),
      });
    }

    if (schema) {
      const arr = Array.isArray(schema) ? schema : [schema];
      arr.forEach(injectSchema);
    }

    if (faqs && faqs.length > 0) {
      injectSchema({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
    }

    if (ogType === "article") {
      if (datePublished) setMeta('meta[property="article:published_time"]', datePublished);
      if (dateModified) setMeta('meta[property="article:modified_time"]', dateModified);
    }

    return () => {
      document.title = SITE;
      clearPageSchemas();
    };
  }, [title, description, path, ogImage, ogType, robots, breadcrumbs, schema, faqs, datePublished, dateModified]);
}
