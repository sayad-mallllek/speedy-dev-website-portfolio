import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/submit-proposal', label: 'Submit Proposal' }
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          <span className="text-blue-400">Speedy</span>Dev
        </Link>
        <nav className="flex items-center gap-2 rounded-full border border-blue-100 bg-white p-1 shadow-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
