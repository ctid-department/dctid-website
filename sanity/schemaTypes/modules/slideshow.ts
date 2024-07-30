import {defineField, defineType} from 'sanity'
import { LuGalleryThumbnails } from "react-icons/lu";

export default defineType({
  name: 'slideshow',
  title: 'Slideshow',
  icon: LuGalleryThumbnails,
  type: 'object',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {type: 'image-module'}
      ],
    },
  ]
})
