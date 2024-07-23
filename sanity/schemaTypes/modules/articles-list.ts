import {defineField, defineType} from 'sanity'
import {MdOutlineRecentActors} from 'react-icons/md'

export default defineType({
  name: 'articles-list',
  title: 'Articles list',
  icon: MdOutlineRecentActors,
  type: 'object',
  fields: [
    defineField({
      name: 'isCustom',
      type: 'boolean',
      title: 'Custom',
      initialValue: false,
    }),
    defineField({
      name: 'showButton',
      type: 'boolean',
      title: 'Show View All Button',
      initialValue: true,
    }),
    defineField({
      name: 'maxItems',
      type: 'number',
      initialValue: 99,
      hidden: ({parent}) => parent?.isCustom,
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'article'}],
        },
      ],
      hidden: ({parent}) => !parent?.isCustom,
    }),
  ],
  preview: {
    select: {},
    prepare: ({}) => ({
      title: 'Articles list',
    }),
  },
})
