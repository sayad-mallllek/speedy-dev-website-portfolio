import { ProposalForm } from '@/components/proposal-form';

export default function SubmitProposalPage() {
  return (
    <main className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:grid-cols-[0.9fr_1.1fr]">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-500">Submit Proposal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">Let's scope your next build</h1>
        <p className="mt-4 text-slate-600">
          Share your requirements in a few quick steps. Our engineering and AI strategy team will send a tailored response.
        </p>
        <ul className="mt-8 space-y-3 text-sm text-slate-600">
          <li className="rounded-2xl border border-slate-100 bg-white p-4">✓ Discovery call and technical planning in 48 hours</li>
          <li className="rounded-2xl border border-slate-100 bg-white p-4">✓ Clear delivery roadmap with milestones and risks</li>
          <li className="rounded-2xl border border-slate-100 bg-white p-4">✓ Recommended stack: Next.js + Tailwind + Elysia + Eden</li>
        </ul>
      </section>
      <section>
        <ProposalForm />
      </section>
    </main>
  );
}
