import {defineField, defineType} from 'sanity'
import {MdOutlineRecentActors} from 'react-icons/md'

export default defineType({
  name: 'articles-list',
  title: 'Articles list',
  icon: MdOutlineRecentActors,
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
      title: 'Articles list',
    }),
  },
})
