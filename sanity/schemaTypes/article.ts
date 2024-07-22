import {PiArticleMedium} from 'react-icons/pi'
import {defineType} from 'sanity'

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
      validation: (Rule) => Rule.required(),
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
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
      validation: (Rule) => Rule.required(),
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
      media: 'heroImage',
    },
    prepare: ({title, slug, media}) => ({
      title,
      subtitle: '/news/' + slug.current,
      media: media,
    }),
  },
})
