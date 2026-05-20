import { segments } from '@/lib/content';
import { SectionHeader } from './SectionHeader';

export function SegmentsGrid({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`bg-cream-deep ${compact ? 'py-20' : 'py-24 md:py-32'}`}>
      <div className="container-wide">
        <SectionHeader
          eyebrow="Segmentos"
          title={
            <>
              Da primeira infância ao Ensino Médio,{' '}
              <span className="italic font-accent text-gold-deep">um caminho contínuo</span>.
            </>
          }
          body="Acompanhamos cada estudante por toda a Educação Básica, com práticas pedagógicas adequadas a cada etapa da formação."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {segments.map((seg, i) => (
            <article
              key={seg.key}
              className="group flex flex-col rounded-2xl bg-white p-8 ring-1 ring-ink/5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-ring"
            >
              <span className="font-serif text-5xl text-gold/40 leading-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-ink">{seg.label}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-gold-deep">{seg.range}</p>
              <p className="mt-5 text-ink/70 leading-relaxed flex-1">{seg.description}</p>

              <ul className="mt-6 space-y-2 border-t border-ink/10 pt-5">
                {seg.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-ink/75">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gold" strokeWidth="2">
                      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
