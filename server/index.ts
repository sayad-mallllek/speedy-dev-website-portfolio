import { Elysia, t } from 'elysia';
import { cors } from '@elysiajs/cors';

const proposalSchema = t.Object({
  contactName: t.String({ minLength: 2 }),
  email: t.String({ format: 'email' }),
  company: t.String({ minLength: 2 }),
  projectType: t.String({ minLength: 2 }),
  budget: t.String({ minLength: 2 }),
  timeline: t.String({ minLength: 2 }),
  goals: t.String({ minLength: 5 })
});

export const app = new Elysia()
  .use(cors({ origin: true }))
  .get('/health', () => ({ ok: true }))
  .post(
    '/proposals',
    ({ body }) => {
      return {
        message: `Proposal received from ${body.contactName}`,
        receivedAt: new Date().toISOString()
      };
    },
    {
      body: proposalSchema
    }
  )
  .listen(3001);

console.log(`🧠 Elysia backend running at ${app.server?.hostname}:${app.server?.port}`);
