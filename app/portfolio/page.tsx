import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projectsData } from "@/app/data/projects";

// ✅ Pre-generate all dynamic routes
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

// ✅ SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      robots: { index: false, follow: false },
    };
  }

  const url = `https://www.theprimecrafters.com/case-study/${slug}`;

  return {
    title: `${project.title} | PrimeCrafters`,
    description: project.description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ✅ Page
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log("Slug:", slug);
  console.log("Projects:", projectsData);

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="PrimeCrafters Logo" className="h-8 w-auto" />
          </Link>

          <Link
            href="/#projects"
            className="text-[var(--text-secondary)] hover:text-[var(--gold-500)] transition-colors text-sm"
          >
            View All Projects
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6 flex items-center gap-3">
            <span className="text-4xl">{project.image}</span>
            <span className="text-[var(--gold-400)] text-sm uppercase tracking-wider">
              {project.industry}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-gold">
            {project.title}
          </h1>

          <p className="text-xl text-[var(--text-secondary)] mb-10">
            {project.description}
          </p>

          {/* Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.impact.map((item, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-[var(--gold-500)]">
                  {item.value}
                </div>
                <div className="text-sm text-[var(--text-muted)]">
                  {item.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video rounded-3xl overflow-hidden border">
            {project.screenshot ? (
              <img
                src={project.screenshot}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                No Screenshot
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Overview */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Overview</h2>
            <p className="text-[var(--text-secondary)]">
              {project.fullDescription}
            </p>
          </div>

          {/* Challenge + Solution */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-3">Challenge</h3>
              <p>{project.challenge}</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3">Solution</h3>
              <p>{project.solution}</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-2">
              {project.keyFeatures.map((feature, index) => (
                <li key={index}>✔ {feature}</li>
              ))}
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 border rounded-lg text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-[var(--text-muted)]">
        © {new Date().getFullYear()} The Prime Crafters
      </footer>
    </div>
  );
}