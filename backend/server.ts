import { cors } from '@elysiajs/cors';
import { Elysia, t } from 'elysia';

const app = new Elysia({ prefix: '/api' })
  .use(cors())
  .get('/health', () => ({ status: 'ok' }))
  .post(
    '/proposals',
    ({ body }) => ({
      success: true,
      message: `Thanks ${body.name}, we will review your ${body.projectType} proposal shortly.`
    }),
    {
      body: t.Object({
        name: t.String({ minLength: 2 }),
        email: t.String({ format: 'email' }),
        company: t.Optional(t.String()),
        projectType: t.String(),
        budgetRange: t.String(),
        timeline: t.String(),
        goals: t.String({ minLength: 20 })
      })
    }
  );

export type App = typeof app;

app.listen(3001);

console.log('🌀 Elysia backend running on http://localhost:3001/api');
