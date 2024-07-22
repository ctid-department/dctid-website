import {MdEvent} from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'events-list',
  title: 'Events list',
  icon: MdEvent,
  type: 'object',
  fields: [
    defineField({
      name: 'display',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {},
    prepare: ({}) => ({
      title: 'Events list',
    }),
  },
})
