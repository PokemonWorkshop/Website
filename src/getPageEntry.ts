import { getEntry, getCollection } from 'astro:content';
import { sortPages } from './sortPages';

const isAValidSubPage = (id: string, entryId: string, subPageSlugPrefix: string, locale: string) => {
  if (!id.startsWith(subPageSlugPrefix)) return false;
  if (!id.endsWith(locale)) return false;
  if (entryId === id) return false;

  const slugSuffix = id.replace(subPageSlugPrefix,'');
  if (!slugSuffix.includes('/')) return true;

  if (slugSuffix.endsWith(`/index_${locale}`)) {
    return slugSuffix.split('/').length === 2
  }

  return false;
}

export const getPageEntry = async (slugParam: string, locale: 'en' | 'fr', noSubPage?: boolean) => {
  const [slug, tag] = (slugParam ?? 'index').split('_');
  const options = [`${slug}_${locale}`, `${slug}/index_${locale}`];
  const entries = await Promise.all(options.map((o) => getEntry('pages', o)));
  const entry = entries.filter((e) => !!e)[0];

  if (!noSubPage && entry.id.endsWith(`/index_${locale}`)) {
    const subPageSlugPrefix = `${slug}/`;
    const subPages = await getCollection('pages', (e) => isAValidSubPage(e.id, entry.id, subPageSlugPrefix, locale));
    if (!tag) return { entry, subPages: sortPages(subPages).map((e) => e.id), tag };

    const subPagesByTag = subPages.filter((e) => e.data.tags?.includes(tag));
    return { entry, subPages: sortPages(subPagesByTag).map((e) => e.id), tag };
  }

  return { entry, subPages: [], tag: undefined };
};
