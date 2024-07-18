import {defineField, defineType} from 'sanity'
import {MdOutlineArticle} from 'react-icons/md'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: MdOutlineArticle,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of page',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of page',
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
      subtitle: '/' + slug.current,
      media,
    }),
  },
})
