import { defineField, defineType } from 'sanity'

export const eventType = defineType({
    name: 'events',
    title: 'Events',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'focusAreas',
            title: 'Focus Areas',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Select one or more focus areas this event falls under.',
            options: {
                list: [
                    { title: 'Sustainable Urbanism', value: 'Sustainable Urbanism' },
                    { title: 'Sarasota School Legacy', value: 'Sarasota School Legacy' },
                    { title: 'Modern Dwelling', value: 'Modern Dwelling' },
                    { title: 'Environmental Adaptation', value: 'Environmental Adaptation' }
                ],
                layout: 'grid',
            },
            validation: (Rule) => Rule.required().min(1).error('You must select at least one focus area.'),
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'string',
            description: 'Format strictly as mm.dd.yy (e.g., 12.25.24) to match the frontend parser.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'time',
            title: 'Time',
            type: 'string',
            description: 'e.g., 7:00 PM',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'e.g., Main Gallery',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true, // Enables UI for cropping/focal point selection
            },
        }),
        defineField({
            name: 'link',
            title: 'Ticket Link',
            type: 'url',
            description: 'If left blank, frontend will display "INFO COMING SOON".',
        }),
    ],
})