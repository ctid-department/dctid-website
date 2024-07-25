import {defineField, defineType} from 'sanity'
import {TfiFaceSmile} from 'react-icons/tfi'
import {getBlockText} from '../utils'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default defineType({
  name: 'profile',
  title: 'Profile',
  icon: TfiFaceSmile,
  orderings: [orderRankOrdering],
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
    orderRankField({type: 'navigation'}),
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
