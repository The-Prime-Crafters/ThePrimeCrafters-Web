// components/blog/BlogCard.tsx
import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  mainImage?: { asset: { url: string }; alt?: string }
  categories?: { title: string }[]
  author?: { name: string; image?: { asset: { url: string } } }
}

export default function BlogCard({ title, slug, publishedAt, excerpt, mainImage, categories, author }: BlogCardProps) {
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Link href={`/blog/${slug.current}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      {/* Image */}
      {mainImage?.asset?.url && (
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={mainImage.asset.url}
            alt={mainImage.alt || title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        {categories && categories.length > 0 && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-600 mb-3">
            {categories[0].title}
          </span>
        )}

        <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h2>

        {excerpt && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
            {excerpt}
          </p>
        )}

        {/* Author + Date */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
          {author?.image?.asset?.url && (
            <Image
              src={author.image.asset.url}
              alt={author.name}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          )}
          <div>
            {author?.name && (
              <p className="text-sm font-medium text-gray-800">{author.name}</p>
            )}
            <p className="text-xs text-gray-400">{formattedDate}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}