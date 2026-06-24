'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { createClient } from 'next-sanity';
import { Navbar, Footer } from "@/components";

/**
 * SANITY CLIENT CONFIGURATION
 * Replace 'your-project-id' with your actual ID from sanity.io/manage
 */
const client = createClient({
  projectId: 'tvdhipft', 
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false, 
});

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  icon: string;
}

const BlogListingPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const query = `*[_type == "post"] | order(date desc) {
      "slug": slug.current,
      title,
      excerpt,
      date,
      "category": category->title, 
      icon
    }`;

    const fetchPosts = async () => {
      if (client.config().projectId === 'your-project-id') {
        setError("Configuration Error: Please update your Sanity Project ID in the code.");
        setLoading(false);
        return;
      }

      try {
        const data = await client.fetch(query);
        setPosts(data);
        setError(null);
      } catch (err: any) {
        console.error("Sanity fetch error:", err);
        setError("Failed to reach Sanity. Check your Project ID and CORS settings.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(posts.map(p => p.category || 'Insights')));
    return ['All', ...unique];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return posts;
    return posts.filter(p => p.category === activeCategory);
  }, [posts, activeCategory]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0c14] flex flex-col items-center justify-center text-[#C9A84C]">
        <div className="w-12 h-12 border-2 border-[#C9A84C]/20 border-t-[#C9A84C] rounded-full animate-spin mb-4" />
        <p className="tracking-widest uppercase text-xs font-bold font-serif">Syncing with Intelligence...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0b0c14] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center text-4xl mb-6">⚠️</div>
        <h2 className="text-2xl font-serif text-white mb-4">Connection Failed</h2>
        <p className="text-gray-400 max-w-md mb-8 leading-relaxed">{error}</p>
        <button onClick={() => window.location.reload()} className="px-6 py-3 bg-[#C9A84C] text-black rounded-lg font-bold text-sm">Try Again</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0c14] text-[#f5f1e8] selection:bg-[#C9A84C]/30">
      <Navbar />
      
      {/* SPLIT-SCREEN HERO SECTION */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden pt-20">
        <div className="w-full lg:w-1/2 px-8 lg:px-20 py-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C9A84C]">ThePrimeCrafters Insights</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-serif leading-[1.1] tracking-tight">
            The Future of <br />
            <span className="text-[#C9A84C] italic">AI Automation</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-xl mb-12 leading-relaxed font-sans">
            Expert analysis on AI voice agents, workflow optimization, and custom systems engineered to scale your business operations without increasing overhead.
          </p>

          <div className="flex gap-6">
             <Link href="#articles" className="px-8 py-4 bg-[#C9A84C] text-black font-bold rounded-lg hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] transition-all">
                Read Articles
             </Link>
             <Link href="/contact" className="px-8 py-4 border border-white/10 rounded-lg hover:bg-white/5 transition-all">
                Book Strategy Call
             </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[60vh] lg:h-screen relative flex items-center justify-center p-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-[#C9A84C]/5 to-transparent pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#C9A84C 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute top-0 right-0 w-72 h-96 bg-white/[0.03] border border-white/10 rounded-3xl backdrop-blur-xl rotate-12 animate-float-slow p-6 flex flex-col gap-4 shadow-2xl">
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-[#C9A84C] animate-progress" />
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/20 border border-[#C9A84C]/30 animate-pulse" />
                <div className="flex-1 h-8 rounded-lg bg-white/5" />
              </div>
              <div className="flex-1 rounded-2xl bg-white/5 p-4 flex flex-col gap-3">
                <div className="w-full h-2 bg-white/10 rounded-full" />
                <div className="w-4/5 h-2 bg-white/10 rounded-full" />
                <div className="w-3/4 h-2 bg-white/10 rounded-full" />
                <div className="mt-auto h-16 flex items-end gap-1">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="flex-1 bg-[#C9A84C]/40 rounded-t-sm animate-wave" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-0 w-72 h-96 bg-[#C9A84C]/5 border border-[#C9A84C]/20 rounded-3xl backdrop-blur-xl -rotate-6 animate-float-delayed shadow-2xl shadow-[#C9A84C]/10 p-8 flex flex-col items-center justify-center">
              <div className="relative w-32 h-32 mb-8">
                <div className="absolute inset-0 border-2 border-dashed border-[#C9A84C]/30 rounded-full animate-spin-slow" />
                <div className="absolute inset-4 border border-[#C9A84C]/50 rounded-full flex items-center justify-center text-4xl">
                  ✨
                </div>
              </div>
              <div className="text-center">
                <div className="text-[#C9A84C] font-bold text-xl mb-2">System Optimized</div>
                <div className="text-white/40 text-xs uppercase tracking-widest">+250% Efficiency</div>
              </div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 bg-gradient-to-br from-[#C9A84C] to-[#E8C97A] rounded-full blur-[120px] opacity-20 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR & DYNAMIC GRID */}
      <section id="articles" className="py-32 px-6 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                  activeCategory === cat 
                  ? 'bg-[#C9A84C] text-black border-[#C9A84C] shadow-[0_0_15px_rgba(201,168,76,0.3)]' 
                  : 'bg-white/5 text-gray-400 border-white/10 hover:border-[#C9A84C]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts.map((post) => (
              <article key={post.slug} className="group relative perspective-1000">
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="relative h-full bg-gradient-to-br from-white/[0.05] to-transparent rounded-3xl p-8 border border-white/10 backdrop-blur-md transition-all duration-500 group-hover:translate-y-[-12px] group-hover:rotate-x-2 group-hover:shadow-[0_20px_50px_rgba(201,168,76,0.15)] group-hover:border-[#C9A84C]/30 flex flex-col overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                         style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C9A84C]/20 to-transparent border border-[#C9A84C]/30 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#C9A84C]/5">
                      {post.icon || '📄'}
                    </div>
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#C9A84C]">{post.category || 'Insights'}</span>
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">
                        {post.date ? new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently'}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 font-serif group-hover:text-[#C9A84C] transition-colors leading-tight">{post.title}</h3>
                    <p className="text-gray-400 text-sm mb-10 line-clamp-4 leading-relaxed flex-grow">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#C9A84C] group-hover:gap-5 transition-all">
                      Explore Insights
                      <div className="h-[1px] w-8 bg-[#C9A84C]/50 group-hover:w-12 transition-all" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Glass CTA Section */}
      <section className="py-40 px-6 relative overflow-hidden bg-[#08090f]">
        <div className="max-w-5xl mx-auto relative">
          <div className="relative p-12 md:p-24 rounded-[40px] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 backdrop-blur-xl text-center overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C9A84C]/10 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px]" />
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif leading-tight">
              Ready to <span className="italic text-[#C9A84C]">Scale</span> Your Operations?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Explore how AI automation can revolutionize your business—let's build your custom implementation roadmap today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/contact" 
                className="group relative px-10 py-5 bg-[#C9A84C] text-black font-bold rounded-xl hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] transition-all duration-300 active:scale-95"
              >
                Book Strategy Call
              </Link>
              <Link 
                href="/services" 
                className="px-10 py-5 bg-white/5 border border-white/10 font-bold rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />

      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .rotate-x-2 { transform: rotateX(2deg); }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(14deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) rotate(-6deg); }
          50% { transform: translateY(-15px) rotate(-4deg); }
        }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 66%; }
        }
        @keyframes wave {
          0%, 100% { height: 20%; }
          50% { height: 80%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 7s ease-in-out infinite; animation-delay: 1s; }
        .animate-progress { animation: progress 2s ease-out forwards; }
        .animate-wave { animation: wave 1.5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
      `}</style>
    </div>
  );
};

export default BlogListingPage;
