import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test Blog | The Prime Crafters',
  description: 'A test blog post.',
}

export default function TestBlog() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-32">
          <nav className="flex items-center gap-2 text-xs text-[#555] mb-10 uppercase tracking-widest font-medium">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-[#D4AF37]">Test Blog</span>
          </nav>

          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Test Blog Post
          </h1>

          <p className="text-white text-xl md:text-2xl leading-relaxed mb-8">
            This is a test blog post. Replace this content with your actual article.
          </p>

          <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.05)]">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#D4AF37] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
