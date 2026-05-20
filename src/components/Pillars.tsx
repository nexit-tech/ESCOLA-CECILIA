import { pillars } from '@/lib/content';
import { pillarIconMap } from './icons/PillarIcons';

export function Pillars() {
  return (
    <section className="relative bg-ink text-cream" data-nav-theme="dark">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" aria-hidden />
      <div className="container-wide py-24 md:py-32">
        <div className="text-center text-cream">
          <p className="eyebrow text-gold">Nossos Princípios</p>
          <h2 className="display-2 text-cream mt-5 text-balance">
            O alicerce que sustenta cada jornada escolar.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = pillarIconMap[p.key as keyof typeof pillarIconMap];
            return (
              <article
                key={p.key}
                className="group relative rounded-2xl bg-white/5 ring-1 ring-cream/10 p-8 backdrop-blur-sm transition-all hover:bg-white/8 hover:ring-gold/40 hover:-translate-y-1"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full ring-1 ring-gold/40 bg-gold/5 text-gold-light transition-colors group-hover:text-gold group-hover:ring-gold/70">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="mt-6 text-center font-serif text-2xl text-gold">{p.title}</h3>
                <div className="divider-ornament mt-4" aria-hidden />
                <p className="mt-5 text-center text-cream/85 leading-relaxed">{p.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
