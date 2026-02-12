import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components/navigation';

export const metadata: Metadata = {
  title: 'Speedy Dev | Software + AI Solutions Agency',
  description: 'Software development and AI solutions agency website built with Next.js, Tailwind, and Elysia.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
