import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/app/data/projects";

export function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }));
}

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[var(--border-subtle)]">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-3"
                    >
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

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#D4AF37] rounded-full opacity-[0.03] blur-3xl" />
                </div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--border)] mb-6 animate-fade-in">
                        <span className="text-4xl">{project.image}</span>
                        <span className="text-[var(--gold-400)] text-sm font-semibold tracking-wider uppercase">
                            {project.industry}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up delay-100">
                        <span className="text-gradient-gold">{project.title}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12 max-w-3xl leading-relaxed animate-fade-in-up delay-200">
                        {project.description}
                    </p>

                    {/* Impact Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up delay-300">
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

            {/* Screenshot Section */}
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
                            <>
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--text-muted)]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1}
                                        stroke="currentColor"
                                        className="w-20 h-20 mb-6 opacity-30"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                                        />
                                    </svg>
                                    <span className="text-lg font-medium tracking-widest uppercase opacity-50">
                                        Project Screenshot
                                    </span>
                                    <span className="text-sm text-[var(--text-muted)] mt-2 opacity-30">
                                        Add your screenshot here
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/90 to-transparent" />
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-16 px-6">
                <div className="max-w-5xl mx-auto space-y-20">
                    {/* Overview */}
                    <div className="glass-card p-8 md:p-12 rounded-3xl border border-[var(--border)]">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--text-primary)]">
                            Overview
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            {project.fullDescription}
                        </p>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="glass-card p-8 rounded-3xl border border-[var(--border)]">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[var(--gold-500)]/10 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 text-[var(--gold-500)]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                                    The Challenge
                                </h3>
                            </div>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                {project.challenge}
                            </p>
                        </div>

                        {/* Solution */}
                        <div className="glass-card p-8 rounded-3xl border border-[var(--border)]">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[var(--gold-500)]/10 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6 text-[var(--gold-500)]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                                    Our Solution
                                </h3>
                            </div>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                {project.solution}
                            </p>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="glass-card p-8 md:p-12 rounded-3xl border border-[var(--border)]">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--text-primary)]">
                            Key Features
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {project.keyFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-1 w-6 h-6 rounded-lg bg-[var(--gold-500)]/10 flex items-center justify-center flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.5}
                                            stroke="currentColor"
                                            className="w-4 h-4 text-[var(--gold-500)]"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m4.5 12.75 6 6 9-13.5"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-[var(--text-secondary)] leading-relaxed">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="glass-card p-8 md:p-12 rounded-3xl border border-[var(--border)]">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[var(--text-primary)]">
                            Technologies Used
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 rounded-xl glass border border-[var(--border)] text-[var(--gold-400)] font-medium hover:border-[var(--gold-500)] transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-3xl border border-[var(--border)]">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="text-gradient-gold">
                            Ready to Build Something Amazing?
                        </span>
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
                        Let&apos;s discuss how we can help transform your business with AI and
                        automation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/#contact" className="btn-primary">
                            Start Your Project
                        </Link>
                        <Link href="/#projects" className="btn-secondary">
                            View More Projects
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-[var(--border-subtle)]">
                <div className="max-w-7xl mx-auto text-center text-[var(--text-muted)] text-sm">
                    <p>© {new Date().getFullYear()} The Prime Crafters. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}
