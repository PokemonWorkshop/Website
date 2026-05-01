import type { GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';

const LOCALE_CONFIG = {
  en: { idEnd: '_en', indexEnd: '/index_en', idReplReg: /_en$/, indexReplReg: /\/index_en$/ },
  fr: { idEnd: '_fr', indexEnd: '/index_fr', idReplReg: /_fr$/, indexReplReg: /\/index_fr$/ },
}

export const getStaticPagePath = (locale: keyof typeof LOCALE_CONFIG) => {
  const { idEnd, indexEnd, idReplReg, indexReplReg } = LOCALE_CONFIG[locale];

  const getStaticPaths = (async () => {
    const pages = await getCollection('pages', (e) => e.id.endsWith(idEnd));
    const nonIndexPages = pages.filter((e) => !e.id.endsWith(indexEnd)).map((e) => e.id.replace(idReplReg, ''));
    const indexPages = pages.filter((e) => e.id.endsWith(indexEnd)).map((e) => e.id.replace(indexReplReg, ''));
  
    const tags = await getCollection('tags');
    const indexWithTagsPaths = tags.flatMap((t) => indexPages.map((e) => ({ params: { page: `${e}_${t.id}` } })));
    const indexPaths = indexPages.map((e) => ({ params: { page: e } }));
    const nonIndexPaths = nonIndexPages.map((e) => ({ params: { page: e } }));

    return indexWithTagsPaths.concat(indexPaths).concat(nonIndexPaths);
  }) satisfies GetStaticPaths;
  return getStaticPaths;
};
