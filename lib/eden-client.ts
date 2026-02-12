import { edenTreaty } from '@elysiajs/eden';

export type ProposalPayload = {
  contactName: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  goals: string;
};

const fallbackUrl = process.env.NEXT_PUBLIC_ELYSIA_API_URL ?? 'http://localhost:3001';

export const api = edenTreaty<{ proposals: { post: unknown } }>(fallbackUrl);
