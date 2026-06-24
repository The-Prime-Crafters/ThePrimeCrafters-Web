// components/blog/PortableTextComponents.tsx
import Image from 'next/image'
import { PortableTextComponents } from '@portabletext/react'

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-8 rounded-2xl overflow-hidden">
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
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-3">{children}</h3>
    ),
    normal: ({ children }) => (
      <p className="text-gray-600 text-lg leading-relaxed mb-5">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-500 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-600">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 mb-6 text-gray-600">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
        {children}
      </a>
    ),
  },
}