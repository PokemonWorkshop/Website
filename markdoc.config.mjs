import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  nodes: {
    image: {
      ...nodes.image, // Apply Markdoc's defaults for other options
      render: component('./src/components/MarkdocImage.astro'),
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
      render: component('./src/components/MultiColumnSection.astro')
    },
    column: {
      render: component('./src/components/Column.astro')
    },
    cta: {
      attributes: {
        href: {
          type: String,
          required: false,
        },
      },
      render: component('./src/components/CTA.astro')
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
      render: component('./src/components/PageRef.astro')
    },
    index: {
      render: component('./src/components/Index.astro')
    },
  }
})
