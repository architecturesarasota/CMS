import { defineField, defineType } from 'sanity'

export const eventType = defineType({
    name: 'events',
    title: 'Events',
    type: 'document',
    fields: [
        defineField({
            name: 'seriesName',
            title: 'Series Name',
            type: 'string',
            description: 'The series this event belongs to',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'speakers',
            title: 'Name and Occupation',
            type: 'array',
            description: 'Add the name and occupation of the speaker(s)/lecturer(s). You can add multiple if needed.',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'occupation',
                            title: 'Occupation',
                            type: 'string',
                            description: 'e.g., Architect, Historian',
                        }),
                    ],
                    preview: {
                        select: {
                            title: 'name',
                            subtitle: 'occupation',
                        },
                    },
                },
            ],
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
            description: 'e.g., 7 PM or 7:30 PM',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            description: 'e.g., The Pavilion',
        }),
        defineField({
            name: 'eventCategory',
            title: 'Event Type',
            type: 'string',
            description: 'Free response (e.g., tour, speaker, celebration)',
        }),
        defineField({
            name: 'focusAreas',
            title: 'Focus Area',
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
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'link',
            title: 'Ticket Link',
            type: 'url',
            description: 'If left blank, frontend will display "INFO COMING SOON".',
        }),
        defineField({
            name: 'longDescription',
            title: 'Long Description',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Fill out the extended information for the event here.',
        }),
    ],
})