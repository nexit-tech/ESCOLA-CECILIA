import { manifesto } from '@/lib/content';
import { Reveal } from './ui/Reveal';

export function Manifesto() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div
        className="absolute top-1/2 -left-32 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-gold-deep/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="container-wide py-28 md:py-40 relative">
        <div className="mx-auto max-w-5xl text-ink">
          <Reveal direction="up">
            <p className="eyebrow">{manifesto.badge}</p>
          </Reveal>

          <Reveal direction="up" delay={120}>
            <p className="mt-10 font-serif text-3xl md:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight text-balance text-ink">
              {manifesto.statement.split('. ').map((sentence, i, arr) => (
                <span key={i} className="block">
                  {sentence}
                  {i < arr.length - 1 ? '.' : ''}
                </span>
              ))}
            </p>
          </Reveal>

          <Reveal direction="left" delay={300}>
            <div className="mt-14 flex items-center gap-5">
              <span className="block h-px w-16 bg-gold-deep" />
              <p className="font-accent italic text-xl md:text-2xl text-gold-deep">
                {manifesto.signoff}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
