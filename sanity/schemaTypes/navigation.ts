import {defineField, defineType} from 'sanity'
import {count} from '../utils'
import {GrNavigate} from 'react-icons/gr'
import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'
import {fetchFromQuery, getObjectFromRef} from '../../app/lib/sanity.js'
import {link} from 'fs'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon: GrNavigate,
  orderings: [orderRankOrdering],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          {title: 'link', value: 'link'},
          {title: 'dropdown', value: 'dropdown'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      type: 'link',
      hidden: ({parent}) => parent?.type !== 'link',
    }),
    defineField({
      name: 'items',
      type: 'array',
      of: [{type: 'link'}],
      hidden: ({parent}) => parent?.type !== 'dropdown',
    }),
    orderRankField({type: 'navigation'}),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      items: 'items',
      link: 'link',
      internalLink: 'link.internal.slug.current',
    },
    prepare: ({title, type, items, link, internalLink}) => ({
      title,
      subtitle:
        type === 'dropdown'
          ? count(items)
          : link.type === 'internal'
            ? '/' + (internalLink ?? '')
            : link.external,
    }),
  },
})
