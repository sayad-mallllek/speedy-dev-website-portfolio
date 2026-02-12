import { portfolioProjects } from '@/lib/portfolio-data';

export default function PortfolioPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">Portfolio</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">Projects that deliver measurable outcomes</h1>
        <p className="mt-4 text-slate-600">
          A selection of software and AI engagements where we blended strategy, design, and engineering to drive business value.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {portfolioProjects.map((project) => (
          <article key={project.title} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-500">{project.category}</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">{project.title}</h2>
            <p className="mt-3 text-slate-600">{project.summary}</p>
            <p className="mt-4 text-sm font-medium text-slate-800">Impact: {project.impact}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
