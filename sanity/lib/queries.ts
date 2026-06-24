// sanity/lib/queries.ts
import { groq } from 'next-sanity'

// For the blog LISTING page — fetch all posts
export const allPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{ _id, url },
      alt
    },
    categories[]->{ title },
    author->{ name, image { asset->{ url } } }
  }
`

// For the INDIVIDUAL blog post page — fetch one post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{ _id, url },
      alt
    },
    body,
    categories[]->{ title },
    author->{ name, bio, image { asset->{ url } } }
  }
`

// For generateStaticParams — get all slugs
export const allPostSlugsQuery = groq`
  *[_type == "post"] { "slug": slug.current }
`