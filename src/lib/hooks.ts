import { useEffect, useRef } from "react";
import { site } from "../config/site";

export const SITE_URL = "https://aizenera.com";
const HOME_TITLE = `${site.name} — Web Development, Design, AI & IT Consulting Agency`;

function setMeta(attr: "name" | "property", key: string, value: string) {
  let m = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!m) {
    m = document.createElement("meta");
    m.setAttribute(attr, key);
    document.head.appendChild(m);
  }
  m.setAttribute("content", value);
}

/** Sets the page title, description, canonical URL and social-preview tags. */
export function useSeo(title: string, description?: string, opts: { noindex?: boolean } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${site.name}` : HOME_TITLE;
    const path = window.location.pathname === "/" ? "/" : window.location.pathname.replace(/\/$/, "");
    const url = `${SITE_URL}${path}`;
    document.title = fullTitle;
    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:description", description);
      setMeta("name", "twitter:description", description);
    }
    setMeta("property", "og:title", fullTitle);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("property", "og:url", url);
    setMeta("name", "robots", opts.noindex ? "noindex, follow" : "index, follow, max-image-preview:large");
    let c = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!c) {
      c = document.createElement("link");
      c.rel = "canonical";
      document.head.appendChild(c);
    }
    c.href = url;
  }, [title, description, opts.noindex]);
}

/** Adds .is-visible to every .reveal element inside the returned ref when it scrolls into view. */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".reveal:not(.is-visible), .reveal-img:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  });
  return ref;
}
