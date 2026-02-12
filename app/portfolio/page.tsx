import { SectionTitle } from '../components/section-title';

const projects = [
  {
    name: 'ClinFlow AI Assistant',
    sector: 'HealthTech',
    result: 'Reduced admin handling time by 37%',
    summary: 'Built an EHR-connected assistant that triages incoming requests and drafts clinician-ready responses.'
  },
  {
    name: 'Nimbus Logistics Platform',
    sector: 'Supply Chain',
    result: 'Cut dispatch lag from 12h to 35m',
    summary: 'Replatformed legacy operations into a live-control dashboard with predictive ETA modeling.'
  },
  {
    name: 'Pulse Studio Commerce',
    sector: 'Retail',
    result: '2.1x increase in conversion',
    summary: 'Designed and launched a composable commerce experience with personalization and AI recommendations.'
  }
];

export default function PortfolioPage() {
  return (
    <div>
      <SectionTitle
        eyebrow="Portfolio"
        title="Selected outcomes from software and AI delivery"
        description="A snapshot of the products and systems we ship for ambitious teams."
      />
      <div className="space-y-5">
        {projects.map((project) => (
          <article key={project.name} className="card grid gap-5 p-6 md:grid-cols-[1.3fr_1fr_1fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-500">{project.sector}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{project.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.summary}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Outcome</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{project.result}</p>
            </div>
            <div>
              <p className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-2 text-center text-sm font-semibold text-blue-500">
                Delivered by Speedy Dev
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
