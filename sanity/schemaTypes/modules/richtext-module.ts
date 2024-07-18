import {defineArrayMember, defineField, defineType} from 'sanity'
import {VscSymbolKeyword} from 'react-icons/vsc'

export default defineType({
  name: 'richtext-module',
  title: 'Richtext module',
  icon: VscSymbolKeyword,
  type: 'object',
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'options', title: 'Options'},
  ],
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({content}) => ({
      title: 'Richtext module',
    }),
  },
})
