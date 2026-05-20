

const projects = [
  {
    title: 'Lead Qualification Automation',
    result: 'Reduced response time by 5x',
  },
  {
    title: 'AI Support Chatbot',
    result: 'Automated 70% of customer queries',
  },
  {
    title: 'Workflow Optimization',
    result: 'Saved 40+ operational hours weekly',
  },
];

export default function CaseStudiesPreview() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Success Stories
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-300">
            Real AI systems delivering measurable business results.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-6 text-lg text-[var(--gold-400)]">
                {project.result}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
