import Link from 'next/link';
import { SectionTitle } from './components/section-title';

const offerings = [
  {
    title: 'Custom Web & Product Engineering',
    text: 'From strategy to release, we build resilient products with strong architecture and clean UI systems.'
  },
  {
    title: 'AI Automation & Agent Workflows',
    text: 'We design practical AI copilots and automations that reduce manual effort and increase team throughput.'
  },
  {
    title: 'Fractional CTO & Delivery Leadership',
    text: 'Get technical direction, hiring guidance, and execution rigor without committing to a full-time executive hire.'
  }
];

const stats = [
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Avg. Time to MVP', value: '7 weeks' },
  { label: 'Client Retention', value: '93%' }
];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="card relative overflow-hidden p-8 md:p-12">
        <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-200/60 blur-3xl" />
        <p className="mb-4 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold tracking-wide text-blue-600">
          Software Development + AI Solutions Agency
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
          Build modern software experiences with <span className="text-blue-400">production-ready AI</span>.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          We help startups and enterprises ship product faster with a delivery model inspired by the clean, editorial
          polish of Mintlify—adapted for your business goals.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/proposal"
            className="rounded-xl bg-blue-400 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Submit Your Proposal
          </Link>
          <Link
            href="/portfolio"
            className="rounded-xl border border-blue-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-500"
          >
            Explore Portfolio
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-blue-100 bg-white p-4">
              <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle
          eyebrow="Core Services"
          title="Built for ambitious teams that care about speed and quality"
          description="We combine engineering, product strategy, and applied AI into focused execution pods."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {offerings.map((offering) => (
            <article key={offering.title} className="card p-6">
              <h3 className="mb-3 text-lg font-semibold text-slate-900">{offering.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{offering.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card p-8 md:p-10">
        <SectionTitle
          eyebrow="How We Work"
          title="A transparent process designed for momentum"
          description="Every engagement follows a lightweight, high-clarity system so your team always knows what is shipping next."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ['Discovery Sprint', 'We map the business goal, user journeys, and technical constraints.'],
            ['Build & Iterate', 'Weekly milestones with demos, quality gates, and direct feedback loops.'],
            ['Launch & Optimize', 'We support rollout, metrics, and incremental improvements post-launch.']
          ].map(([title, description], index) => (
            <article key={title} className="rounded-xl border border-blue-100 bg-white p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-500">Step {index + 1}</p>
              <h3 className="text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
