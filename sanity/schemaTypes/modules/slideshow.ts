import {defineField, defineType} from 'sanity'
import { LuGalleryThumbnails } from "react-icons/lu";
import {getBlockText} from '../../utils'

export default defineType({
  name: 'slideshow',
  title: 'Slideshow',
  icon: LuGalleryThumbnails,
  type: 'object',
  fields: [
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
      validation: (Rule) => Rule.required(),
    }),
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {type: 'image-module'}
      ],
    },
  ],
  preview: {
    select: {
      images: 'images',
      caption: 'caption'
    },
    prepare: ({images, caption}) => ({
      title: 'Slideshow',
      subtitle: caption,
      media: images[0].image
    }),
  },
})
