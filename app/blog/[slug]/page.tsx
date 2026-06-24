// app/blog/[slug]/page.tsx
import { client } from '@/sanity/lib/client'
import { postBySlugQuery, allPostSlugsQuery } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@/components/blog/PortableTextComponents'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export const revalidate = 60

// Generate static pages at build time for SEO
export async function generateStaticParams() {
  const slugs = await client.fetch(allPostSlugsQuery)
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }))
}

// Dynamic SEO metadata per post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug })
  if (!post) return {}
  return {
    title: `${post.title} | The Prime Crafters Blog`,
    description: post.excerpt || '',
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage?.asset?.url ? [{ url: post.mainImage.asset.url }] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await client.fetch(postBySlugQuery, { slug: params.slug })

  if (!post) notFound()

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  })

  return (
    <main className="bg-white">
      {/* Hero Image */}
      {post.mainImage?.asset?.url && (
        <div className="relative w-full h-[50vh] md:h-[60vh] bg-gray-900">
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>
      )}

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-600">{post.title}</span>
        </nav>

        {/* Category */}
        {post.categories?.length > 0 && (
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4 block">
            {post.categories[0].title}
          </span>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {post.title}
        </h1>

        {/* Author + Date */}
        <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-100">
          {post.author?.image?.asset?.url && (
            <Image
              src={post.author.image.asset.url}
              alt={post.author.name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          )}
          <div>
            <p className="font-semibold text-gray-900">{post.author?.name}</p>
            <p className="text-sm text-gray-400">{formattedDate}</p>
          </div>
        </div>

        {/* Body Content */}
        <div className="prose-custom">
          <PortableText value={post.body} components={portableTextComponents} />
        </div>

        {/* Back to Blog */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
            ← Back to Blog
          </Link>
        </div>
      </article>
    </main>
  )
}