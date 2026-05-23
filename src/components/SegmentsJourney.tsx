import { segments } from '@/lib/content';
import { Reveal } from './ui/Reveal';

export function SegmentsJourney() {
  return (
    <section className="relative bg-cream py-16 md:py-24">
      <div className="container-wide">
        <div className="space-y-20 md:space-y-28">
          {segments.map((seg, i) => {
            const reversed = i % 2 === 1;
            const isMedio = seg.key === 'medio';
            return (
              <article key={seg.key} id={seg.key} className="relative scroll-mt-28">
                <div className={`grid gap-10 lg:gap-20 lg:grid-cols-12 items-start`}>
                  <Reveal
                    className={`lg:col-span-5 ${reversed ? 'lg:order-2' : ''}`}
                  >
                    <div className="lg:sticky lg:top-28">
                      <p className="mt-2 font-serif text-[5rem] md:text-[7rem] lg:text-[9rem] leading-none tracking-tight text-gold-deep/15">
                        {String(i + 1).padStart(2, '0')}
                      </p>
                      <h3 className="-mt-4 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-balance text-ink">
                        {seg.label}
                      </h3>
                      <p className="mt-5 font-accent italic text-xl md:text-2xl text-gold-deep">
                        {isMedio ? 'Última etapa da Educação Básica.' : seg.tagline}
                      </p>

                      <dl className="mt-8 border-t border-ink/10 pt-6">
                        <div>
                          <dt className="text-[10px] uppercase tracking-[0.22em] text-ink/55">Séries</dt>
                          <dd className="mt-2 font-serif text-base text-ink">{seg.range}</dd>
                        </div>
                      </dl>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {seg.pillars.map((p) => (
                          <span
                            key={p}
                            className="rounded-full bg-cream-deep px-3 py-1 text-xs text-ink/70 ring-1 ring-ink/5"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>

                  <div className={`lg:col-span-7 ${reversed ? 'lg:order-1' : ''}`}>
                    <Reveal delay={150}>
                      <p className="text-base md:text-lg text-ink/75 leading-relaxed">
                        {seg.description}
                      </p>
                    </Reveal>

                    <Reveal delay={300}>
                      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                        {seg.highlights.map((h, idx) => (
                          <li
                            key={h.title}
                            className="group relative rounded-2xl bg-white p-6 ring-1 ring-ink/5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-ring"
                          >
                            <span className="font-mono text-[10px] tracking-widest text-ink/30">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <h4 className="mt-3 font-serif text-lg text-ink leading-tight">
                              {h.title}
                            </h4>
                            <p className="mt-2 text-sm text-ink/65 leading-relaxed">{h.body}</p>
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
