import Link from 'next/link';
import { portfolioProjects } from '@/lib/portfolio-data';

const capabilities = [
  {
    title: 'Product Engineering',
    description: 'From discovery to deployment, we ship modern apps that feel premium and scale cleanly.'
  },
  {
    title: 'AI Solutions',
    description: 'We integrate LLMs, automations, and custom AI workflows to create measurable business impact.'
  },
  {
    title: 'Delivery Partnership',
    description: 'Senior-led collaboration with transparent execution, milestones, and business-first outcomes.'
  }
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-blue-100 bg-grid-blue bg-[size:36px_36px]">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
          <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Software Development + AI Solutions
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Build faster with an agency that ships crisp software and practical AI systems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            Inspired by the clean momentum of Mintlify, we help teams move from idea to production with focused execution.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/submit-proposal"
              className="rounded-xl bg-blue-400 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-blue-500"
            >
              Start a Project
            </Link>
            <Link
              href="/portfolio"
              className="rounded-xl border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-500"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
        {capabilities.map((item) => (
          <article key={item.title} className="gradient-border rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Selected Work</h3>
          <Link href="/portfolio" className="text-sm font-semibold text-blue-500 hover:text-blue-600">
            Explore all projects →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {portfolioProjects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-blue-100 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-500">{project.category}</p>
              <h4 className="mt-3 text-lg font-semibold text-slate-900">{project.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
              <p className="mt-4 text-sm font-medium text-slate-800">{project.impact}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
