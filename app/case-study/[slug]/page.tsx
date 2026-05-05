import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/app/data/projects";

export function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    const project = projectsData.find((p) => p.slug === params.slug);

    // ✅ FIX: handle invalid pages properly
    if (!project) {
        return {
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const url = `https://www.theprimecrafters.com/case-study/${project.slug}`;

    return {
        title: project.title,
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

export default function CaseStudyPage({
    params,
}: {
    params: { slug: string };
}) {
    const { slug } = params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
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

            <section className="pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#D4AF37] rounded-full opacity-[0.03] blur-3xl" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--border)] mb-6">
                        <span className="text-4xl">{project.image}</span>
                        <span className="text-[var(--gold-400)] text-sm font-semibold tracking-wider uppercase">
                            {project.industry}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="text-gradient-gold">{project.title}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12 max-w-3xl leading-relaxed">
                        {project.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {project.impact.map((item, index) => (
                            <div
                                key={index}
                                className="glass-card p-6 rounded-2xl border border-[var(--border)] text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-[var(--gold-500)] mb-2">
                                    {item.value}
                                </div>
                                <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">
                                    {item.metric}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="relative aspect-video rounded-3xl overflow-hidden bg-[var(--surface-elevated)] border border-[var(--border)] shadow-2xl">
                        {project.screenshot ? (
                            <>
                                <img
                                    src={project.screenshot}
                                    alt={`${project.title} Screenshot`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/60 to-transparent pointer-events-none" />
                            </>
                        ) : (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--text-muted)]">
                                <span className="text-lg opacity-50">No Screenshot</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto space-y-20">
                    <div className="glass-card p-8 md:p-12 rounded-3xl border border-[var(--border)]">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Overview
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            {project.fullDescription}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-card p-8 rounded-3xl border border-[var(--border)]">
                            <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
                            <p className="text-[var(--text-secondary)]">
                                {project.challenge}
                            </p>
                        </div>

                        <div className="glass-card p-8 rounded-3xl border border-[var(--border)]">
                            <h3 className="text-2xl font-bold mb-4">Our Solution</h3>
                            <p className="text-[var(--text-secondary)]">
                                {project.solution}
                            </p>
                        </div>
                    </div>

                    <div className="glass-card p-8 md:p-12 rounded-3xl border border-[var(--border)]">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            Key Features
                        </h2>
                        <ul className="space-y-4">
                            {project.keyFeatures.map((feature, index) => (
                                <li key={index}>✔ {feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass-card p-8 md:p-12 rounded-3xl border border-[var(--border)]">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">
                            Technologies Used
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="px-3 py-1 border rounded-lg">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <footer className="py-8 text-center text-sm text-[var(--text-muted)]">
                © {new Date().getFullYear()} The Prime Crafters
            </footer>
        </div>
    );
}