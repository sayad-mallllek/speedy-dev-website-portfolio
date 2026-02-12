import { ProposalForm } from './proposal-form';

export default function SubmitProposalPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1fr_1.1fr]">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-500">Submit Proposal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">Tell us what you want to build</h1>
        <p className="mt-4 text-slate-600">
          This short multi-step form helps us understand your goals, timeline, and success criteria. We’ll reply with a scoped plan.
        </p>
        <ul className="mt-8 space-y-3 text-sm text-slate-700">
          <li>• Typical response time: under 24 hours.</li>
          <li>• Includes a discovery call and recommended technical path.</li>
          <li>• Stack-ready for NextJS 16, TailwindCSS, ElysiaJS, and Eden.</li>
        </ul>
      </section>
      <ProposalForm />
    </div>
  );
}
