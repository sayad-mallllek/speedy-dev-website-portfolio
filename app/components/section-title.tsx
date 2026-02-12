export function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">{eyebrow}</p>
      <h2 className="mb-4 text-3xl font-semibold text-slate-900 md:text-4xl">{title}</h2>
      <p className="text-base leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}
