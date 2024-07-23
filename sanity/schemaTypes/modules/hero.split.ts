import {defineField, defineType} from 'sanity'
import {TfiLayoutMediaLeft} from 'react-icons/tfi'
import {getBlockText} from '../../utils'

export default defineType({
  name: 'hero.split',
  title: 'Hero (split)',
  icon: TfiLayoutMediaLeft,
  type: 'object',
  fields: [
    defineField({
      name: 'style',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['1', '2'],
      },
      initialValue: '1',
    }),
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
        defineField({
          name: 'height',
          type: 'number',
          initialValue: 400,
        }),
        defineField({
          name: 'width',
          type: 'number',
          initialValue: 400,
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      media: 'image.asset',
      content: 'content',
    },
    prepare: ({media, content}) => ({
      title: 'Hero (split)',
      subtitle: getBlockText(content),
      media,
    }),
  },
})
