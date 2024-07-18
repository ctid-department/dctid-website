import {defineField, defineType} from 'sanity'
import {count} from '../utils'
import {GrNavigate} from 'react-icons/gr'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: GrNavigate,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'link'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare: ({title, items}) => ({
      title,
      subtitle: count(items),
    }),
  },
})
