import { defineField, defineType } from 'sanity'

export const announcementsType = defineType({
    name: 'announcements',
    title: 'Announcements',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Announcement Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text', // 'text' provides a multiline textarea in the Studio
            description: 'The main summary text for the announcement.',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'longDescription',
            title: 'Long Description',
            type: 'text',
            description: 'Optional. Additional details that appear below the short description.',
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            description: 'Text to display on the button (e.g., LEARN MORE)',
            initialValue: 'LEARN MORE',
        }),
        defineField({
            name: 'buttonUrl',
            title: 'Button URL',
            type: 'url',
            description: 'Where the button should link to.',
        }),
        defineField({
            name: 'sliderImages',
            title: 'Slider Images',
            type: 'array',
            description: 'Add one or more images. If multiple are added, the component will crossfade them automatically.',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true, // Enables cropping and focal point selection
                    },
                }
            ],
            validation: (rule) => rule.required().min(1),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'shortDescription',
            media: 'sliderImages.0', // Shows the first image in the Sanity Studio list
        },
    },
})