import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';

export default defineMarkdocConfig({
  nodes: {
    image: {
      ...nodes.image, // Apply Markdoc's defaults for other options
      render: component('./src/components/mdoc/MarkdocImage.astro'),
    },
  },
  tags: {
    row: {
      attributes: {
        bottom_margin: {
          type: String,
          required: false,
          matches: ['margin-l', 'margin-s', 'margin-m','margin-xl','margin-xxl']
        },
        centered_content: {
          type: Boolean,
          required: false,
        },
        centered_items: {
          type: Boolean,
          required: false,
        },
        centered_text: {
          type: Boolean,
          required: false,
        },
        last_to_bottom: {
          type: Boolean,
          required: false,
        },
        columns: {
          type: String,
          required: true,
          matches: ['1/1', '1/2' , '1/3 1/3 1/3' , '1/3 2/3' , '2/3 1/3' , '1/4 1/4 1/4 1/4', '1/4 3/4' , '3/4 1/4']
        }
      },
      render: component('./src/components/mdoc/MultiColumnSection.astro')
    },
    column: {
      render: component('./src/components/mdoc/Column.astro')
    },
    cta: {
      attributes: {
        href: {
          type: String,
          required: false,
        },
        align: {
          type: String,
          required: false,
          matches: ['left', 'right', 'center']
        }
      },
      render: component('./src/components/mdoc/CTA.astro')
    },
    pageRef: {
      attributes: {
        id: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: false,
        },
      },
      render: component('./src/components/mdoc/PageRef.astro')
    },
    video: {
      attributes: {
        src: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: false,
        },
        caption: {
          type: String,
          required: false,
        },
        width: {
          type: Number,
          required: false,
        },
        height: {
          type: Number,
          required: false,
        },
      },
      render: component('./src/components/mdoc/Video.astro')
    },
    index: {
      render: component('./src/components/mdoc/Index.astro')
    },
  },
  extends: [
    shiki({
      // Choose from Shiki's built-in themes (or add your own)
      // Default: 'github-dark'
      // https://shiki.style/themes
      theme: 'dark-plus',
      // Enable word wrap to prevent horizontal scrolling
      // Default: false
      wrap: true,
      // Pass custom languages
      // Note: Shiki has countless langs built-in, including `.astro`!
      // https://shiki.style/languages
      langs: [],
      
    }),
  ]
})
