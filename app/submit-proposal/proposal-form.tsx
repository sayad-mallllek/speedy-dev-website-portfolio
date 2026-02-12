'use client';

import { FormEvent, useMemo, useState } from 'react';
import { api, ProposalPayload } from '@/lib/eden-client';

const steps = ['Contact', 'Project Scope', 'Goals & Submit'];

const initialForm: ProposalPayload = {
  contactName: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  goals: ''
};

export function ProposalForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<string>('');

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);

  function updateField<K extends keyof ProposalPayload>(key: K, value: ProposalPayload[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function next() {
    setStep((current) => Math.min(current + 1, steps.length - 1));
  }

  function previous() {
    setStep((current) => Math.max(current - 1, 0));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('Submitting proposal...');

    try {
      const response = await api.proposals.post(form);
      if (response.error) {
        setStatus('Unable to submit right now. Please retry in a moment.');
        return;
      }

      setForm(initialForm);
      setStep(0);
      setStatus('Proposal submitted! Our team will contact you within one business day.');
    } catch {
      setStatus('Backend unavailable. Start the Elysia server on port 3001 and try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <div className="mb-3 flex justify-between text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          <span>{steps[step]}</span>
          <span>{step + 1}/{steps.length}</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-blue-100">
          <div className="h-full rounded-full bg-blue-400 transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {step === 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Contact Name
            <input
              required
              value={form.contactName}
              onChange={(e) => updateField('contactName', e.target.value)}
              className="mt-2 w-full rounded-lg border border-blue-200 px-3 py-2 outline-none ring-blue-300 focus:ring"
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Email
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => updateField('email', e.target.value)}
              className="mt-2 w-full rounded-lg border border-blue-200 px-3 py-2 outline-none ring-blue-300 focus:ring"
            />
          </label>
          <label className="text-sm font-medium text-slate-700 sm:col-span-2">
            Company
            <input
              required
              value={form.company}
              onChange={(e) => updateField('company', e.target.value)}
              className="mt-2 w-full rounded-lg border border-blue-200 px-3 py-2 outline-none ring-blue-300 focus:ring"
            />
          </label>
        </div>
      )}

      {step === 1 && (
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium text-slate-700">
            Project Type
            <input
              required
              value={form.projectType}
              onChange={(e) => updateField('projectType', e.target.value)}
              placeholder="Web App, AI Agent, Platform Build..."
              className="mt-2 w-full rounded-lg border border-blue-200 px-3 py-2 outline-none ring-blue-300 focus:ring"
            />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Budget Range
            <input
              required
              value={form.budget}
              onChange={(e) => updateField('budget', e.target.value)}
              placeholder="$20k - $50k"
              className="mt-2 w-full rounded-lg border border-blue-200 px-3 py-2 outline-none ring-blue-300 focus:ring"
            />
          </label>
          <label className="text-sm font-medium text-slate-700 sm:col-span-2">
            Desired Timeline
            <input
              required
              value={form.timeline}
              onChange={(e) => updateField('timeline', e.target.value)}
              placeholder="6-8 weeks"
              className="mt-2 w-full rounded-lg border border-blue-200 px-3 py-2 outline-none ring-blue-300 focus:ring"
            />
          </label>
        </div>
      )}

      {step === 2 && (
        <label className="text-sm font-medium text-slate-700">
          What outcomes are most important for your team?
          <textarea
            required
            value={form.goals}
            onChange={(e) => updateField('goals', e.target.value)}
            rows={7}
            className="mt-2 w-full rounded-lg border border-blue-200 px-3 py-2 outline-none ring-blue-300 focus:ring"
            placeholder="Share business goals, technical constraints, and success criteria..."
          />
        </label>
      )}

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          disabled={step === 0}
          onClick={previous}
          className="rounded-lg border border-blue-200 px-4 py-2 text-sm font-medium text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Back
        </button>

        {step < steps.length - 1 ? (
          <button
            type="button"
            onClick={next}
            className="rounded-lg bg-blue-400 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Continue
          </button>
        ) : (
          <button type="submit" className="rounded-lg bg-blue-400 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500">
            Submit Proposal
          </button>
        )}
      </div>

      {status && <p className="mt-4 text-sm text-slate-600">{status}</p>}
    </form>
  );
}
