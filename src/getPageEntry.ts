import { getEntry, getCollection } from 'astro:content';

export const getPageEntry = async (slugParam: string, locale: 'en' | 'fr') => {
  const [slug, tag] = slugParam.split('_');
  const options = [`${slug}_${locale}`, `${slug}/index_${locale}`];
  const entries = await Promise.all(options.map((o) => getEntry('pages', o)));
  const entry = entries.filter((e) => !!e)[0];

  if (entry.id.endsWith(`/index_${locale}`)) {
    const subPageSlugPrefix = `${slug}/`;
    const subPages = await getCollection('pages', (e) => e.id.startsWith(subPageSlugPrefix) && e.id.endsWith(locale) && e.id !== entry.id);
    if (!tag) return { entry, subPages: subPages.map((e) => e.id), tag };

    const subPagesByTag = subPages.filter((e) => e.data.tags?.includes(tag));
    return { entry, subPages: subPagesByTag.map((e) => e.id), tag };
  }

  return { entry, subPages: [], tag: undefined };
};
