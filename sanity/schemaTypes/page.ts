import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
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
})
