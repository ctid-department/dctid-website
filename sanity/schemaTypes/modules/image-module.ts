import {defineField, defineType} from 'sanity'
import {MdOutlineImage} from 'react-icons/md'

export default defineType({
  name: 'image-module',
  title: 'Image module',
  icon: MdOutlineImage,
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      caption: 'caption',
      media: 'image.asset',
    },
    prepare: ({media, caption}) => ({
      title: 'Image module',
      subtitle: caption,
      media,
    }),
  },
})
