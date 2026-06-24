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
    <Link
      href={`/blog/${slug.current}`}
      className="group block bg-[#111111] rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.1)] hover:border-[rgba(212,175,55,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.06)]"
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0a0a0a]">
        {mainImage?.asset?.url ? (
          <Image
            src={mainImage.asset.url}
            alt={mainImage.alt || title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center">
              <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {categories && categories.length > 0 && (
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
            {categories[0].title}
          </span>
        )}

        <h2 className="text-xl font-bold text-[#f5f5f5] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          {title}
        </h2>

        {excerpt && (
          <p className="text-[#737373] text-sm leading-relaxed line-clamp-3 mb-5">
            {excerpt}
          </p>
        )}

        {/* Author + Date */}
        <div className="flex items-center gap-3 pt-5 border-t border-[rgba(255,255,255,0.05)]">
          {author?.image?.asset?.url ? (
            <Image
              src={author.image.asset.url}
              alt={author.name}
              width={32}
              height={32}
              className="rounded-full object-cover ring-1 ring-[rgba(212,175,55,0.2)]"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center flex-shrink-0">
              <span className="text-[#D4AF37] text-xs font-bold">
                {author?.name?.charAt(0) ?? 'A'}
              </span>
            </div>
          )}
          <div>
            {author?.name && (
              <p className="text-sm font-medium text-[#a3a3a3]">{author.name}</p>
            )}
            <p className="text-xs text-[#525252]">{formattedDate}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
