import { client } from '@/sanity/lib/client'
import { allPostsQuery } from '@/sanity/lib/queries'
import BlogCard from '@/components/blog/BlogCard'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | The Prime Crafters',
  description: 'Insights, strategies, and expert tips on AI automation, digital transformation, and business growth from The Prime Crafters team.',
  alternates: { canonical: 'https://www.theprimecrafters.com/blog' },
  openGraph: {
    title: 'Blog | The Prime Crafters',
    description: 'Insights, strategies, and expert tips on AI automation and business growth.',
    url: 'https://www.theprimecrafters.com/blog',
    siteName: 'PrimeCrafters',
    type: 'website',
  },
}

export const revalidate = 60

export default async function BlogPage() {
  const posts = await client.fetch(allPostsQuery)

  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen">
        {/* Hero */}
        <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
          {/* Radial glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#D4AF37] rounded-full opacity-[0.04] blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-5 px-4 py-1.5 rounded-full border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.05)]">
              Our Blog
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-[#f5f5f5] mb-6 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Insights &amp; Resources
            </h1>
            <p className="text-[#737373] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Expert tips, industry insights, and behind-the-scenes from The Prime Crafters team — helping you stay ahead in the age of AI.
            </p>
          </div>

          {/* Bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(212,175,55,0.2)] to-transparent" />
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          {posts.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-full bg-[rgba(212,175,55,0.08)] border border-[rgba(212,175,55,0.15)] flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-[#525252] text-lg">No posts published yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <BlogCard key={post._id} {...post} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
