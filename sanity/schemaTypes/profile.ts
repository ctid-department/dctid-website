import {defineField, defineType} from 'sanity'
import {TfiFaceSmile} from 'react-icons/tfi'
import {getBlockText} from '../utils'

export default defineType({
  name: 'profile',
  title: 'Profile',
  icon: TfiFaceSmile,
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'array',
      of: [{type: 'block'}],
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
      name: 'name',
    },
    prepare: ({media, content, name}) => ({
      title: 'Profile',
      subtitle: getBlockText(content),
      media,
    }),
  },
})
