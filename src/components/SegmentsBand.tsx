import Link from 'next/link';
import { segments } from '@/lib/content';

export function SegmentsBand() {
  return (
    <section className="bg-cream border-t border-ink/10">
      <div className="container-wide py-28 md:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end mb-14">
          <div className="lg:col-span-7">
            <p className="eyebrow">Segmentos</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance text-ink">
              Da Educação Infantil ao{' '}
              <span className="italic font-accent text-gold-deep">Ensino Médio</span>.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-ink/70 leading-relaxed">
              Acompanhamos cada estudante em toda a Educação Básica, com práticas pedagógicas
              próprias para cada fase da vida escolar.
            </p>
          </div>
        </div>

        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {segments.map((seg, i) => (
            <li key={seg.key}>
              <Link
                href="/segmentos"
                className="group grid grid-cols-12 items-center gap-6 py-6 md:py-8 transition-colors hover:bg-cream-deep -mx-6 px-6 md:-mx-10 md:px-10"
              >
                <span className="col-span-1 font-mono text-xs tracking-widest text-ink/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="col-span-11 md:col-span-5 font-serif text-2xl md:text-3xl text-ink leading-tight">
                  {seg.label}
                </h3>
                <p className="hidden md:block md:col-span-3 text-sm uppercase tracking-[0.18em] text-gold-deep">
                  {seg.range}
                </p>
                <span className="hidden md:flex md:col-span-3 justify-end items-center gap-2 text-ink/55 group-hover:text-gold-deep transition-colors">
                  <span className="text-sm">Saiba mais</span>
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
