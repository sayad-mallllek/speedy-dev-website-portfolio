import Link from 'next/link';

const services = [
  {
    title: 'Custom Product Engineering',
    description: 'From MVP to enterprise-grade software, we build stable and scalable digital products.'
  },
  {
    title: 'AI Workflow Automation',
    description: 'We automate business operations with tailored AI agents and LLM-integrated systems.'
  },
  {
    title: 'Modernization & Platform Ops',
    description: 'We redesign outdated systems into reliable cloud-native platforms with rapid release cycles.'
  }
];

export default function HomePage() {
  return (
    <main>
      <section className="grid-fade relative overflow-hidden border-b border-slate-100">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-24 text-center">
          <span className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Software Development + AI Solutions Agency
          </span>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl">
            Elegant digital products powered by <span className="text-blue-400">intelligent systems</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            We design and deliver performant web platforms, internal tools, and AI-enhanced workflows with startup speed and enterprise quality.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/submit-proposal"
              className="rounded-full bg-blue-400 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-blue-500"
            >
              Start a Project
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
            >
              Explore Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-10 flex flex-col gap-2">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">How we help ambitious teams</h2>
          <p className="text-slate-600">Built with clarity, speed, and a deep focus on business outcomes.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
