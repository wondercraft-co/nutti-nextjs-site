import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'recipe',
  title: 'Recipes',
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
      type: 'image',
      name: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      type: 'array',
      name: 'description',
      title: 'Description',
      of: [{type: 'block', name: 'block'}],
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Ingredient',
              name: 'ingredient',
              type: 'reference',
              to: [{type: 'ingredient'}],
            },
            {
              name: 'number',
              title: 'Number',
              type: 'string',
              fieldset: 'amounts',
            },
            {
              name: 'unit',
              title: 'Unit',
              type: 'string',
              options: {
                list: ['gramos', 'taza', 'cucharadita', 'tsp.'],
              },
              fieldset: 'amounts',
            },
          ],
          preview: {
            select: {
              title: 'ingredient.name',
              name: 'ingredient.name',
              media: 'ingredient.image',
              fraction: 'number',
              unit: 'unit',
            },
            prepare({title, media, fraction = '(No fraction set)', unit = '(No unit set)'}) {
              return {
                title,
                subtitle: `${fraction} ${unit}`,
                media,
              }
            },
          },
          fieldsets: [
            {
              name: 'amounts',
              title: 'Amounts',
              // options: {collapsible: true, collapsed: true},
              options: {columns: 2},
            },
          ],
        },
      ],
    }),
  ],
  preview: {select: {title: 'title', media: 'image'}},
})
