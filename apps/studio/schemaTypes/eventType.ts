import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug'
    }),
    defineField({
      name: 'date',
      type: 'datetime'
    }),
    defineField({
      name: 'doorsOpen',
      type: 'number'
    }),
    defineField({
      name: 'venue',
      type: 'reference',
      to: [{type:'venue'}]
    }),
    defineField({
      name: 'headLine',
      type: 'reference',
      to:[{type:'artist'}]
    }),
    defineField({
      name: 'image',
      type: 'image'
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}] // block is a richtext editor
    }),
    defineField({
      name: 'tickets',
      type: 'url' // url to buy tickets from
    })
  ],
})