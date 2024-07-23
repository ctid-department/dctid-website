import {defineField, defineType} from 'sanity'
import {VscSymbolKeyword} from 'react-icons/vsc'
import {getBlockText} from '../../utils'

export default defineType({
  name: 'richtext-module',
  title: 'Richtext module',
  icon: VscSymbolKeyword,
  type: 'object',
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
    defineField({
      name: 'alignment',
      type: 'string',
      options: {
        list: ['left', 'right', 'center', 'justify'],
      },
      initialValue: 'left',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({content}) => ({
      title: 'Richtext module',
      subtitle: getBlockText(content),
    }),
  },
})
