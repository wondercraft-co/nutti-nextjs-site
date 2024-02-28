import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Ingredients',
  name: 'ingredient',
  type: 'document',
  fields: [
    defineField({
      type: 'string',
      name: 'name',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      //slug
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
      },
    }),
    defineField({
      type: 'image',
      name: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
