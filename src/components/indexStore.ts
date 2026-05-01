type IndexStore = {
  subPages: string[];
  tag: string | undefined;
  locale: 'en' | 'fr';
};

export const indexStore: IndexStore = { subPages: [], tag: undefined, locale: 'en' };
