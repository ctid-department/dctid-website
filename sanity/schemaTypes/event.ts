import {MdEvent} from 'react-icons/md'
import {defineType} from 'sanity'

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-PH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default defineType({
  name: 'event',
  type: 'document',
  title: 'Event',
  icon: MdEvent,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of event',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of event',
      options: {
        source: 'title',
      },
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date of event',
      validation: (Rule) => Rule.required(),
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
        {type: 'events-list'},
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
    },
    prepare: ({title, date}) => ({
      title,
      subtitle: formatDate(date),
    }),
  },
})