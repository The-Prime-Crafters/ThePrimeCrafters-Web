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
    year: 'numeric', month: 'short', day: 'numeric',
  })

  return (
    <Link
      href={`/blog/${slug.current}`}
      className="group flex flex-col bg-[#0f0f0f] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] hover:border-[rgba(212,175,55,0.35)] transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(212,175,55,0.08)]"
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0a0a0a] flex-shrink-0">
        {mainImage?.asset?.url ? (
          <>
            <Image
              src={mainImage.asset.url}
              alt={mainImage.alt || title}
              fill
              className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
            {/* gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#111]">
            <div className="w-10 h-10 rounded-full bg-[rgba(212,175,55,0.1)] flex items-center justify-center">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        )}

        {/* Category badge floating on image */}
        {categories && categories.length > 0 && (
          <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest text-black bg-[#D4AF37] px-2.5 py-1 rounded-full">
            {categories[0].title}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Date */}
        <p className="text-[#525252] text-xs font-medium mb-3 tracking-wide">{formattedDate}</p>

        {/* Title */}
        <h3
          className="text-base font-bold text-[#e8e8e8] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-2 leading-snug flex-1"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem' }}
        >
          {title}
        </h3>

        {excerpt && (
          <p className="text-[#5a5a5a] text-sm leading-relaxed line-clamp-2 mb-4">
            {excerpt}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.05)] mt-auto">
          <div className="flex items-center gap-2.5">
            {author?.image?.asset?.url ? (
              <Image
                src={author.image.asset.url}
                alt={author.name}
                width={28}
                height={28}
                className="rounded-full object-cover ring-1 ring-[rgba(212,175,55,0.2)]"
              />
            ) : (
              <div className="w-7 h-7 rounded-full bg-[rgba(212,175,55,0.12)] flex items-center justify-center flex-shrink-0">
                <span className="text-[#D4AF37] text-[10px] font-bold">
                  {author?.name?.charAt(0) ?? 'P'}
                </span>
              </div>
            )}
            {author?.name && (
              <span className="text-[#4a4a4a] text-xs">{author.name}</span>
            )}
          </div>

          <span className="text-[#D4AF37] text-xs font-semibold tracking-wider uppercase flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
            Read
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
