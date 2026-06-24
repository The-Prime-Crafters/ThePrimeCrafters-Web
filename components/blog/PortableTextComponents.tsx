import Image from 'next/image'
import { PortableTextComponents } from '@portabletext/react'

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-10 rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.08)]">
        <Image
          src={value.asset.url}
          alt={value.alt || ''}
          width={900}
          height={500}
          className="w-full object-cover"
        />
      </div>
    ),
  },
  block: {
    h2: ({ children, value }) => (
      <h2
        id={(value as { _key?: string })._key}
        className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mt-14 mb-5 leading-snug scroll-mt-28"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3
        id={(value as { _key?: string })._key}
        className="text-2xl font-bold text-[#e0e0e0] mt-10 mb-4 scroll-mt-28"
        style={{ fontFamily: "'Cormorant Garamond', serif" }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-[#d0d0d0] mt-7 mb-3">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-[#8a8a8a] text-[1.05rem] leading-[1.9] mb-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-[#D4AF37] pl-6 py-3 my-10 bg-[rgba(212,175,55,0.03)] rounded-r-xl">
        <p className="text-[#c8a84b] italic text-lg leading-relaxed">{children}</p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 mb-8 pl-1">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-3 mb-8 pl-4 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-3 text-[#8a8a8a] text-[1.05rem] leading-[1.8]">
        <span className="mt-[0.6rem] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-[#8a8a8a] text-[1.05rem] leading-[1.8]">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-[#ebebeb]">{children}</strong>,
    em: ({ children }) => <em className="italic text-[#c8c8c8]">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#D4AF37] underline underline-offset-2 hover:text-[#FFD700] transition-colors"
      >
        {children}
      </a>
    ),
  },
}
