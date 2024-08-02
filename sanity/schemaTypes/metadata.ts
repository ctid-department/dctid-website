import {defineField, defineType} from 'sanity'
import {TfiLayoutMediaOverlay} from 'react-icons/tfi'

export default defineType({
  name: 'metadata',
  title: 'Metadata',
  type: 'object',
  icon: TfiLayoutMediaOverlay,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({title, description}) {
      return {
        title: 'Metadata',
        subtitle: `${description}`,
      }
    },
  },
})
