import { useEffect } from "react";

function upsertMetaByName(name, content) {
  if (!content) return;
  let element = document.head.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertMetaByProperty(property, content) {
  if (!content) return;
  let element = document.head.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertCanonical(href) {
  if (!href) return;
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export default function Seo({ title, description, canonical, ogImage }) {
  useEffect(() => {
    if (title) document.title = title;
    upsertMetaByName("description", description);
    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:image", ogImage);
    upsertCanonical(canonical);
  }, [title, description, canonical, ogImage]);

  return null;
}
