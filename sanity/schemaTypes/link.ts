import {defineField, defineType} from 'sanity'
import internal from 'stream'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  options: {
    columns: 2,
  },
  fields: [
    defineField({
      name: 'label',
      type: 'string',
    }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'internal', value: 'internal'},
          {title: 'external', value: 'external'},
        ],
      },
    }),
    defineField({
      name: 'internal',
      type: 'reference',
      to: [
        {type: 'page'},
        // {type: 'article'}
      ],
      hidden: ({parent}) => parent?.type !== 'internal',
    }),
    defineField({
      name: 'external',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
          allowRelative: true,
        }),
      hidden: ({parent}) => parent?.type !== 'external',
    }),
  ],
  preview: {
    select: {
      label: 'label',
      title: 'internal.title',
      slug: 'internal.slug.current',
      external: 'external',
      media: 'internal.titleImage',
    },
    prepare: ({label, title, slug, external, media}) => {
      let link = external ? external : '/' + slug

      return {
        title: label || title,
        subtitle: link,
        media,
      }
    },
  },
})
