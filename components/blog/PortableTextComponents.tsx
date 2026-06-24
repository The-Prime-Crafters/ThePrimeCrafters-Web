import Image from 'next/image'
import { PortableTextComponents } from '@portabletext/react'

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-10 rounded-2xl overflow-hidden border border-[rgba(212,175,55,0.1)]">
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
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold text-[#f5f5f5] mt-14 mb-5 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl md:text-4xl font-bold text-[#f5f5f5] mt-12 mb-4 leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-[#e5e5e5] mt-8 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-[#d4d4d4] mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-[#a3a3a3] text-lg leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#D4AF37] pl-6 py-2 my-8 bg-[rgba(212,175,55,0.04)] rounded-r-lg">
        <p className="text-[#D4AF37] italic text-lg leading-relaxed">{children}</p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="space-y-3 mb-8 pl-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="space-y-3 mb-8 pl-2 list-decimal list-inside">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex gap-3 text-[#a3a3a3] text-lg leading-relaxed">
        <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
        <span>{children}</span>
      </li>
    ),
    number: ({ children }) => (
      <li className="text-[#a3a3a3] text-lg leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-[#f5f5f5]">{children}</strong>,
    em: ({ children }) => <em className="italic text-[#d4d4d4]">{children}</em>,
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
