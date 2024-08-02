import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {GrNavigate, GrUserNew} from 'react-icons/gr'
import {TfiLayoutMediaOverlay} from 'react-icons/tfi'
import {TbFileInfo} from 'react-icons/tb'

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
            S.documentTypeListItem('page').title('Pages'),
            S.documentTypeListItem('article').title('News'),
            S.documentTypeListItem('event').title('Events'),
            orderableDocumentListDeskItem({
              title: 'Faculty Profiles',
              type: 'profile',
              icon: GrUserNew,
              S,
              context,
            }),
            orderableDocumentListDeskItem({
              title: 'Navigation',
              type: 'navigation',
              icon: GrNavigate,
              S,
              context,
            }),
            S.listItem()
              .title('Footer')
              .icon(TfiLayoutMediaOverlay)
              .child(S.document().schemaType('footer').documentId('footer')),
            S.listItem()
              .title('Metadata')
              .icon(TbFileInfo)
              .child(S.document().schemaType('metadata').documentId('metadata')),
          ]),
    }),

    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
