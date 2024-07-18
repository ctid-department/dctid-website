import {RiArticleLine} from 'react-icons/ri'
import {PiArticleMedium} from 'react-icons/pi'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  type: 'document',
  title: 'Article',
  icon: PiArticleMedium,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'titleImage',
    },
    prepare: ({title, slug, media}) => ({
      title,
      subtitle: '/article/' + slug.current,
      media: media,
    }),
  },
})
