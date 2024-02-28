import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'store',
  title: 'Stores',
  description: '',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      //slug
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    }),
    defineField({
      type: 'string',
      name: 'address',
      title: 'Address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'city',
      title: 'City',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'country',
      type: 'string',
      title: 'Country',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'country_iso',
      title: 'Country ISO',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'phone',
      title: 'Phone',
    }),
    defineField({
      type: 'string',
      name: 'url',
      title: 'Url',
    }),
    defineField({
      type: 'geopoint',
      name: 'location',
      title: 'Location',
    }),
  ],
  initialValue: () => ({
    country_iso: 'CO',
    country: 'Colombia',
  }),
  preview: {select: {title: 'title', subtitle: 'city'}},
})
