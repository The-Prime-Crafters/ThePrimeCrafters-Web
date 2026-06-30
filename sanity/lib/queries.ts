import { groq } from 'next-sanity'

export const allPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`

export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [0...7] {
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
    excerpt,
    publishedAt,
    mainImage {
      asset -> { url },
      alt
    },
    categories[] -> {
      _id,
      title
    },
    author -> {
      name,
      image {
        asset -> { url }
      }
    }
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    body,
    metaTitle,
    metaDescription,
    mainImage {
      asset -> { url },
      alt
    },
    categories[] -> {
      _id,
      title,
      slug
    },
    author -> {
      name,
      bio,
      linkedin,
      image {
        asset -> { url }
      }
    }
  }
`