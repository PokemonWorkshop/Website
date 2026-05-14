import { getEntry } from 'astro:content';
import type {i18nKey, i18nLocale } from './i18n.types'

export const i18n = async (key: i18nKey, locale: i18nLocale): Promise<string> => {
  const entry = await getEntry('i18n', key);
  if (!entry?.data) throw new Error('Unable to load i18n entry!');

  return entry.data[locale];
}

export const validLocale = (locale: string | undefined):i18nLocale => {
  switch (locale) {
    case 'fr': return 'fr';
    case 'en': return 'en';
    default: throw new Error(`Invalid locale: ${locale}`);
  }  
}
