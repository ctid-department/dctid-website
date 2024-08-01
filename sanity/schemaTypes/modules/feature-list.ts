import {defineField, defineType} from 'sanity'
import {MdOutlineRecentActors} from 'react-icons/md'

export default defineType({
  name: 'feature-list',
  title: 'Featured Articles',
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
      title: 'Featured Articles',
    }),
  },
})
