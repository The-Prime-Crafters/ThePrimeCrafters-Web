import { groq } from 'next-sanity'

export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [0...6] {
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
    author->{ name, bio, linkedin, image { asset->{ url } } }
  }
`

export const allPostSlugsQuery = groq`
  *[_type == "post"] { "slug": slug.current }
`
