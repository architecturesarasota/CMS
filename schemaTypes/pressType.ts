import { defineField, defineType } from 'sanity'

export const pressType = defineType({
    name: 'press',
    title: 'Press',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Article Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'outlet',
            title: 'Publication / Outlet',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Publication Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM-DD',
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'link',
            title: 'Article Link',
            type: 'url',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string',
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'outlet',
            media: 'image',
        },
    },
})