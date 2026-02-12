import { treaty } from '@elysiajs/eden';
import type { App } from '../backend/server';

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3001';

export const eden = treaty<App>(apiBaseUrl);
