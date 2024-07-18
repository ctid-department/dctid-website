import {defineField, defineType} from 'sanity'
import {TfiLayoutMediaLeft} from 'react-icons/tfi'

export default defineType({
  name: 'hero.split',
  title: 'Hero (split)',
  icon: TfiLayoutMediaLeft,
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alignment',
          type: 'string',
          options: {
            layout: 'radio',
            list: ['left', 'right'],
          },
          initialValue: 'left',
        }),
      ],
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {
      media: 'image.asset',
    },
    prepare: ({media}) => ({
      title: 'Hero (split)',
      media,
    }),
  },
})
