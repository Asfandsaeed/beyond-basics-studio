import { useEffect } from "react";

const SITE = "Beyond®";
const BASE_URL = "https://beyondbasics.studio";

export function useSeoMeta({
  title,
  description,
  path = "",
  ogImage,
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}) {
  useEffect(() => {
    const fullTitle = title.includes(SITE) ? title : `${title} | ${SITE}`;
    document.title = fullTitle;

    const setMeta = (sel: string, val: string) => {
      let el = document.querySelector<HTMLMetaElement>(sel);
      if (!el) {
        el = document.createElement("meta");
        const attr = sel.includes("[property=") ? "property" : "name";
        el.setAttribute(attr, sel.match(/["']([^"']+)["']/)?.[1] ?? "");
        document.head.appendChild(el);
      }
      el.setAttribute("content", val);
    };

    const canonicalUrl = `${BASE_URL}${path}`;
    const image = ogImage ?? `${BASE_URL}/opengraph.jpg`;

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', fullTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:image"]', image);
    setMeta('meta[property="og:site_name"]', SITE);
    setMeta('meta[property="og:locale"]', "en_US");
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

    return () => {
      document.title = SITE;
    };
  }, [title, description, path, ogImage]);
}
