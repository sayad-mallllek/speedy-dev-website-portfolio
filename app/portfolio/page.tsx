const projects = [
  {
    name: 'PulseFin Ops Platform',
    category: 'FinTech SaaS',
    summary: 'Rebuilt the customer portal and internal analytics suite, reducing support tickets by 48%.',
    stack: ['Next.js', 'Elysia', 'PostgreSQL', 'OpenAI']
  },
  {
    name: 'MediFlow Intake AI',
    category: 'Healthcare Automation',
    summary: 'Designed an AI-assisted intake process that triages patient requests and cuts manual effort in half.',
    stack: ['TypeScript', 'Eden', 'LangChain', 'Redis']
  },
  {
    name: 'RetailGrid Forecast Engine',
    category: 'Retail Intelligence',
    summary: 'Developed a demand forecasting dashboard with real-time data pipelines and custom scenario planning.',
    stack: ['Next.js', 'Elysia', 'ClickHouse', 'Tailwind CSS']
  }
];

export default function PortfolioPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-500">Portfolio</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">Selected outcomes we've shipped</h1>
        <p className="mt-4 text-slate-600">
          A sample of software and AI implementations we delivered for teams looking for measurable impact.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
            <p className="text-sm font-medium text-blue-500">{project.category}</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">{project.name}</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
