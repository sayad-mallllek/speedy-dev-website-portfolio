'use client';

import { FormEvent, useMemo, useState } from 'react';
import { api, ProposalPayload } from '@/lib/eden';

const initialValues: ProposalPayload = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  budget: '',
  timeline: '',
  goals: ''
};

export function ProposalForm() {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const progress = useMemo(() => `${Math.min((step / 3) * 100, 100)}%`, [step]);

  const canProceedStepOne = values.name && values.email && values.company;
  const canProceedStepTwo = values.projectType && values.budget && values.timeline;

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await api.proposals.post(values);
      const message = response?.data?.message ?? 'Proposal submitted successfully. We will contact you within 24 hours.';
      setStatus(message);
      setValues(initialValues);
      setStep(1);
    } catch {
      setStatus('Could not submit to the API right now. Your form is ready for backend connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
          <span>Step {step} of 3</span>
          <span>{progress}</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-blue-400 transition-all" style={{ width: progress }} />
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <Input label="Name" value={values.name} onChange={(value) => setValues({ ...values, name: value })} />
          <Input label="Work Email" type="email" value={values.email} onChange={(value) => setValues({ ...values, email: value })} />
          <Input label="Company" value={values.company} onChange={(value) => setValues({ ...values, company: value })} />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <Input label="Project Type" value={values.projectType} onChange={(value) => setValues({ ...values, projectType: value })} placeholder="e.g. SaaS app + AI assistant" />
          <Input label="Budget Range" value={values.budget} onChange={(value) => setValues({ ...values, budget: value })} placeholder="e.g. $25k - $50k" />
          <Input label="Timeline" value={values.timeline} onChange={(value) => setValues({ ...values, timeline: value })} placeholder="e.g. 8-12 weeks" />
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-700">
            Project Goals
            <textarea
              value={values.goals}
              onChange={(event) => setValues({ ...values, goals: event.target.value })}
              rows={6}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300"
              placeholder="Tell us what success looks like for your project"
              required
            />
          </label>
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStep((previous) => Math.max(previous - 1, 1))}
          className="rounded-full border border-slate-200 px-5 py-2 text-sm font-medium text-slate-600 disabled:cursor-not-allowed disabled:opacity-40"
          disabled={step === 1 || isSubmitting}
        >
          Back
        </button>

        {step < 3 ? (
          <button
            type="button"
            onClick={() => setStep((previous) => Math.min(previous + 1, 3))}
            className="rounded-full bg-blue-400 px-5 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
            disabled={(step === 1 && !canProceedStepOne) || (step === 2 && !canProceedStepTwo) || isSubmitting}
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            className="rounded-full bg-blue-400 px-6 py-2 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Proposal'}
          </button>
        )}
      </div>

      {status && <p className="mt-4 text-sm text-blue-700">{status}</p>}
    </form>
  );
}

function Input({
  label,
  value,
  onChange,
  type = 'text',
  placeholder
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm font-medium text-slate-700">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-300"
        placeholder={placeholder}
        required
      />
    </label>
  );
}
