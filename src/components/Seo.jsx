import { useHead } from "@unhead/react";

export default function Seo({ title, description, canonical, ogImage }) {
  useHead({
    title,
    meta: [
      ...(description ? [{ name: "description", content: description }] : []),

      { property: "og:title", content: title },
      ...(description
        ? [{ property: "og:description", content: description }]
        : []),
      ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),

      { name: "twitter:card", content: "summary_large_image" },
    ],
    link: [...(canonical ? [{ rel: "canonical", href: canonical }] : [])],
  });

  return null;
}
