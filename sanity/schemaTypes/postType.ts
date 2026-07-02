import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      group: 'content',
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
      group: 'content',
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ],
      group: 'content',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
      group: 'content',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      group: 'content',
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      group: 'content',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      group: 'content',
    }),

    // ── KEY TAKEAWAYS ──
    defineField({
      name: 'keyTakeaways',
      title: 'Key Takeaways',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: 'Bullet points summarizing the article. Aim for 5-6, max 10. Rendered as a callout box right after the intro paragraph.',
      validation: (Rule) => Rule.max(10).warning('Keep this to 10 points or fewer for readability'),
      group: 'content',
    }),

    // ── FAQS ──
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      description: 'Frequently asked questions shown at the bottom of the post. Also used to generate FAQ rich-snippet markup for Google.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faq',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {title: 'question'},
          },
        }),
      ],
      group: 'content',
    }),

    // ── SEO FIELDS ──
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title shown in search engine results and browser tabs. Keep under 60 characters. Falls back to the post title if left empty.',
      validation: (Rule) => Rule.max(60).warning('Longer titles may be truncated in search results'),
      group: 'seo',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description shown in search engine results. Keep under 160 characters. Falls back to the excerpt if left empty.',
      validation: (Rule) => Rule.max(160).warning('Longer descriptions may be truncated in search results'),
      group: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})