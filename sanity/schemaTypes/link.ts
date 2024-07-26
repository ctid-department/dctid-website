import {defineField, defineType} from 'sanity'

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
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'internal',
      type: 'reference',
      to: [
        {type: 'page'},
        // {type: 'article'}
      ],
      validation: (Rule) =>
        Rule.custom((internal, context) => {
          const linkType = (context.parent as {type?: string})?.type ?? ''
          if (linkType === 'internal' && !internal) {
            return 'This field is required'
          }
          return true
        }),
      hidden: ({parent}) => parent?.type !== 'internal',
    }),
    defineField({
      name: 'external',
      type: 'url',
      title: 'URL',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
          allowRelative: true,
        }).custom((external, context) => {
          const linkType = (context.parent as {type?: string})?.type ?? ''
          if (linkType === 'external' && !external) {
            return 'This field is required'
          }
          return true
        }),
      hidden: ({parent}) => (parent as {type?: string})?.type !== 'external',
    }),
  ],
  preview: {
    select: {
      label: 'label',
      title: 'internal.title',
      slug: 'internal.slug.current',
      external: 'external',
      media: 'internal.heroImage',
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
