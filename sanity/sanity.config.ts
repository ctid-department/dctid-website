import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {GrNavigate} from 'react-icons/gr'

export default defineConfig({
  name: 'default',
  title: 'CTID Website',

  projectId: 'hnjzgegk',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('article').title('News'),
            orderableDocumentListDeskItem({
              title: 'Navigation',
              type: 'navigation',
              icon: GrNavigate,
              S,
              context,
            }),
            S.documentTypeListItem('page'),
          ]),
    }),

    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
