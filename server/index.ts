import { Elysia, t } from 'elysia';

const app = new Elysia()
  .get('/health', () => ({ status: 'ok' }))
  .post(
    '/proposals',
    ({ body }) => ({
      message: `Thanks ${body.name}, we received your ${body.projectType} proposal and will reach out at ${body.email}.`
    }),
    {
      body: t.Object({
        name: t.String(),
        email: t.String({ format: 'email' }),
        company: t.String(),
        projectType: t.String(),
        budget: t.String(),
        timeline: t.String(),
        goals: t.String()
      })
    }
  )
  .listen(3001);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
