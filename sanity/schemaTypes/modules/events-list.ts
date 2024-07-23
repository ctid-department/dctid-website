import {MdEvent} from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'events-list',
  title: 'Events list',
  icon: MdEvent,
  type: 'object',
  fields: [
    defineField({
      name: 'isCustom',
      type: 'boolean',
      title: 'Custom',
      initialValue: false,
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
          to: [{type: 'event'}],
        },
      ],
      hidden: ({parent}) => !parent?.isCustom,
    }),
  ],
  preview: {
    select: {},
    prepare: ({}) => ({
      title: 'Events list',
    }),
  },
})
