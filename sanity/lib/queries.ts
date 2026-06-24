// Add this to your existing @/sanity/lib/queries.ts file
// (or create it if it doesn't exist yet)

import { groq } from 'next-sanity'

// Fetch all posts for the blog listing page — ordered newest first
export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readTime,
    category,
    mainImage {
      asset -> { url },
      alt
    },
    author -> {
      name,
      image {
        asset -> { url }
      }
    }
  }
`

// Already exists in your codebase — kept here for reference:
// export const allPostSlugsQuery = groq`*[_type == "post"]{ slug }`
// export const postBySlugQuery   = groq`*[_type == "post" && slug.current == $slug][0]{ ... }`
