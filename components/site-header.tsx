import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/submit-proposal', label: 'Submit Proposal' }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-blue-100/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-blue-500">
          SwiftlyAI Studio
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-slate-700">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-blue-500">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
