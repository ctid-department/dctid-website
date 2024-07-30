import {defineField, defineType} from 'sanity'
import { LuGalleryThumbnails } from "react-icons/lu";

export default defineType({
  name: 'slideshow',
  title: 'Slideshow',
  icon: LuGalleryThumbnails,
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          type: 'reference',
          to: [{type: 'image-module'}],
        },
      ],
      hidden: ({parent}) => !parent?.isCustom,
    }),
  ],
  /*
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
  */
})
