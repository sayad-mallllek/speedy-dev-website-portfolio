import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Speedy Dev • Software + AI Solutions',
  description: 'A modern software development and AI solutions agency.'
};

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/proposal', label: 'Submit Proposal' }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/90 backdrop-blur">
          <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
            <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
              Speedy <span className="text-blue-400">Dev</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-blue-500">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl px-6 py-12">{children}</main>
      </body>
    </html>
  );
}
