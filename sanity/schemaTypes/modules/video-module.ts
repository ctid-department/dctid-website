import {defineField, defineType} from 'sanity'
import {MdOutlineImage} from 'react-icons/md'

export default defineType({
  name: 'video-module',
  title: 'Video module',
  icon: MdOutlineImage,
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
    }),
  ],
  preview: {
    select: {
      caption: 'caption',
    },
    prepare: ({caption}) => ({
      title: 'Video module',
      subtitle: caption
    }),
  },
})
