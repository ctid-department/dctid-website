import {defineField, defineType} from 'sanity'
import {TfiLayoutMediaOverlay} from 'react-icons/tfi'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  icon: TfiLayoutMediaOverlay,
  fields: [
    defineField({
      name: 'address',
      type: 'array',
      of: [{type: 'block'}],
      title: 'Address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quickLinks',
      type: 'array',
      of: [{type: 'link'}],
      title: 'Quick Links',
    }),
  ],
  preview: {
    select: {
      address: 'address',
      email: 'email',
      phoneNumber: 'phoneNumber',
    },
    prepare({address, email, phoneNumber}) {
      return {
        title: 'Footer',
        subtitle: `${email ? 'Email: ' + email : ''} ${phoneNumber ? '| Phone: ' + phoneNumber : ''}`,
      }
    },
  },
})
