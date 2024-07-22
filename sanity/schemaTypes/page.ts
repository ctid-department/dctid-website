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
      validation: (Rule) => Rule.required(),
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
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
    },
    {
      name: 'modules',
      type: 'array',
      title: 'Modules',
      of: [
        {type: 'richtext-module'},
        {type: 'image-module'},
        {type: 'hero.split'},
        {type: 'articles-list'},
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
      subtitle: slug ? '/' + slug.current : '/',
      media,
    }),
  },
})
