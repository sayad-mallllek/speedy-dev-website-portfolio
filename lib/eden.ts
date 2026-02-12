import { edenTreaty } from '@elysiajs/eden';

export interface ProposalPayload {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  goals: string;
}

export const api = edenTreaty<any>(process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001');
