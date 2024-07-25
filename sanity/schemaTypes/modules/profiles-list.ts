import {MdFace} from 'react-icons/md'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'profiles-list',
  title: 'Faculty Profiles list',
  icon: MdFace,
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
          to: [{type: 'profile'}],
        },
      ],
      hidden: ({parent}) => !parent?.isCustom,
    }),
  ],
  preview: {
    select: {},
    prepare: ({}) => ({
      title: 'Faculty Profiles list',
    }),
  },
})
