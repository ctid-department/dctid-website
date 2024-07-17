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
      _type: 'internal._type',
      title: 'internal.title',
      slug: 'internal.metadata.slug.current',
      external: 'external',
    },
    prepare: ({label, _type, title, slug, external}) => {
      let path = external || (slug && (slug === 'index' ? '/' : `/${slug}`))
      let params = ''

      if (path && path.includes('?')) {
        ;[path, params] = path.split('?')
      }

      return {
        title: label || title,
        subtitle: [_type === 'article' ? '/article' : null, path, params ? `?${params}` : null]
          .filter(Boolean)
          .join(''),
      }
    },
  },
})
