// @ts-check
import { defineConfig } from 'astro/config';

import markdoc from "@astrojs/markdoc";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  "site": "https://pokemonworkshop.com",
  trailingSlash: "ignore",
  output: "static",

  i18n: {
    "locales": ['en', 'fr'],
    "defaultLocale": "en",
    routing: {
      "fallbackType": 'rewrite',
      "prefixDefaultLocale": true,
    }
  },

  integrations: [markdoc({ allowHTML: false }), sitemap()]
});
