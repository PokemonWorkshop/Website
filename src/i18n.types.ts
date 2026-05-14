import I18N from './content/i18n.json';
 
export type i18nKey = keyof typeof I18N;
export type i18nLocale = keyof (typeof I18N)[i18nKey];
