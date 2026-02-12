'use client';

import { FormEvent, useMemo, useState } from 'react';
import { eden } from '@/lib/eden';
import { SectionTitle } from '../components/section-title';

type FormData = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  goals: string;
};

const defaults: FormData = {
  name: '',
  email: '',
  company: '',
  projectType: 'Web Platform',
  budgetRange: '$25k - $50k',
  timeline: '1 - 2 months',
  goals: ''
};

export default function ProposalPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(defaults);
  const [status, setStatus] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const progress = useMemo(() => `${(step / 3) * 100}%`, [step]);

  const update = (field: keyof FormData, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  const canAdvance =
    (step === 1 && formData.name.trim().length > 1 && formData.email.trim().length > 5) ||
    step === 2 ||
    (step === 3 && formData.goals.trim().length >= 20);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const submitProposal = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await eden.api.proposals.post(formData);

      if (response.error) {
        setStatus('We could not submit your proposal. Please review your form and try again.');
        return;
      }

      setStatus(response.data.message);
      setFormData(defaults);
      setStep(1);
    } catch {
      setStatus('Backend is unreachable. Start Elysia with `npm run backend:dev` and retry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-8">
      <SectionTitle
        eyebrow="Submit Proposal"
        title="Tell us about your next software or AI initiative"
        description="A short multi-step brief to help us understand scope, urgency, and expected impact."
      />

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <form className="card space-y-6 p-6 md:p-8" onSubmit={submitProposal}>
          <div>
            <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500">
              <span>Step {step} of 3</span>
              <span>{progress}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-blue-100">
              <div className="h-full rounded-full bg-blue-400 transition-all" style={{ width: progress }} />
            </div>
          </div>

          {step === 1 && (
            <section className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-700">Name</span>
                <input
                  required
                  value={formData.name}
                  onChange={(event) => update('name', event.target.value)}
                  className="w-full rounded-xl border border-blue-200 px-4 py-3 outline-none ring-blue-300 focus:ring"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-700">Email</span>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) => update('email', event.target.value)}
                  className="w-full rounded-xl border border-blue-200 px-4 py-3 outline-none ring-blue-300 focus:ring"
                />
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-medium text-slate-700">Company (optional)</span>
                <input
                  value={formData.company}
                  onChange={(event) => update('company', event.target.value)}
                  className="w-full rounded-xl border border-blue-200 px-4 py-3 outline-none ring-blue-300 focus:ring"
                />
              </label>
            </section>
          )}

          {step === 2 && (
            <section className="grid gap-4 md:grid-cols-3">
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-700">Project Type</span>
                <select
                  value={formData.projectType}
                  onChange={(event) => update('projectType', event.target.value)}
                  className="w-full rounded-xl border border-blue-200 px-4 py-3 outline-none ring-blue-300 focus:ring"
                >
                  <option>Web Platform</option>
                  <option>AI Automation</option>
                  <option>Internal Tooling</option>
                  <option>Mobile + Backend</option>
                </select>
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-700">Budget Range</span>
                <select
                  value={formData.budgetRange}
                  onChange={(event) => update('budgetRange', event.target.value)}
                  className="w-full rounded-xl border border-blue-200 px-4 py-3 outline-none ring-blue-300 focus:ring"
                >
                  <option>$10k - $25k</option>
                  <option>$25k - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k+</option>
                </select>
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-700">Timeline</span>
                <select
                  value={formData.timeline}
                  onChange={(event) => update('timeline', event.target.value)}
                  className="w-full rounded-xl border border-blue-200 px-4 py-3 outline-none ring-blue-300 focus:ring"
                >
                  <option>ASAP</option>
                  <option>1 - 2 months</option>
                  <option>3 - 4 months</option>
                  <option>Flexible</option>
                </select>
              </label>
            </section>
          )}

          {step === 3 && (
            <section>
              <label className="space-y-2">
                <span className="text-sm font-medium text-slate-700">What outcomes are you targeting?</span>
                <textarea
                  required
                  minLength={20}
                  value={formData.goals}
                  onChange={(event) => update('goals', event.target.value)}
                  placeholder="Example: We need a customer portal with AI-powered triage and analytics to reduce support load."
                  className="min-h-40 w-full rounded-xl border border-blue-200 px-4 py-3 outline-none ring-blue-300 focus:ring"
                />
              </label>
            </section>
          )}

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prevStep}
                disabled={step === 1 || isSubmitting}
                className="rounded-xl border border-blue-200 px-4 py-2 text-sm font-semibold text-slate-600 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>
              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!canAdvance}
                  className="rounded-xl bg-blue-400 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting || !canAdvance}
                  className="rounded-xl bg-blue-400 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting…' : 'Submit Proposal'}
                </button>
              )}
            </div>
            {status && <p className="text-sm text-slate-600">{status}</p>}
          </div>
        </form>

        <aside className="card h-fit p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-500">What happens next</p>
          <ol className="mt-4 space-y-4 text-sm text-slate-600">
            <li>
              <span className="font-semibold text-slate-900">1. Review within 24 hours.</span> We evaluate scope, risks, and
              expected outcomes.
            </li>
            <li>
              <span className="font-semibold text-slate-900">2. Discovery call.</span> We align on product goals, timeline,
              and constraints.
            </li>
            <li>
              <span className="font-semibold text-slate-900">3. Delivery plan.</span> You receive a clear phased roadmap with
              team shape and budget guidance.
            </li>
          </ol>
        </aside>
      </div>
    </div>
  );
}
