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
      name: 'headline',
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
      name: 'eventType',
      type: 'string',
      title: 'Event type',
      deprecated: {
        reason: 'Use the "Event format" field instead.'
      },
      readOnly: true,
      hidden: true,
      options: {
        list: ['in-person', 'virtual'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'format',
      type: 'string',
      title: 'Event format',
      options: {
        list: ['in-person', 'virtual'],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tickets',
      type: 'url' // url to buy tickets from
    })
  ],
})