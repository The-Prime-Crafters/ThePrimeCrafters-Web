// app/blog/page.tsx
import { client } from '@/sanity/lib/client'
import { allPostsQuery } from '@/sanity/lib/queries'
import BlogCard from '@/components/blog/BlogCard'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | The Prime Crafters',
  description: 'Insights, tips, and resources from The Prime Crafters team.',
}

// Revalidate every 60 seconds (ISR)
export const revalidate = 60

export default async function BlogPage() {
  const posts = await client.fetch(allPostsQuery)

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-950 text-white py-24 px-6 text-center">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Our Blog</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Insights & Resources</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Expert tips, industry insights, and behind-the-scenes from The Prime Crafters team.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        {posts.length === 0 ? (
          <p className="text-center text-gray-400 py-20">No posts published yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <BlogCard key={post._id} {...post} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}