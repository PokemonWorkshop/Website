import type { CollectionEntry } from "astro:content";

export const sortPages = (pages: CollectionEntry<'pages'>[]) => {
  const orderedById = pages.slice().sort((a, b) => a.id.localeCompare(b.id));

  return orderedById.sort((a, b) => {
    const aData = a.data;
    const bData = b.data;
    if (aData.publishDate && bData.publishDate) {
      return bData.publishDate.localeCompare(aData.publishDate);
    }
    if (aData.order && bData.order) {
      return aData.order - bData.order;
    }
    // TODO: other combinations
    return 0;
  })
}
