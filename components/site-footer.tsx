export function SiteFooter() {
  return (
    <footer className="border-t border-blue-100 bg-slate-50/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} SwiftlyAI Studio. All rights reserved.</p>
        <p>NextJS 16 · TailwindCSS · ElysiaJS · Eden</p>
      </div>
    </footer>
  );
}
