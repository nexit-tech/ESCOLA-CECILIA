import { educationalPillars } from '@/lib/content';
import { educationalIconMap } from './icons/EducationalIcons';
import { Reveal } from './ui/Reveal';

export function EducationalPillars() {
  return (
    <section className="relative bg-cream-deep py-14 sm:py-20 md:py-32 overflow-hidden">
      <div
        className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gold/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="container-wide relative">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-20">
          <Reveal>
            <p className="eyebrow justify-center">Nossa proposta pedagógica</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 md:mt-6 font-serif text-[1.75rem] sm:text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-balance text-ink">
              Cinco pilares que sustentam{' '}
              <span className="italic font-accent text-gold-deep">cada jornada</span>.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 text-base md:text-lg text-ink/70 leading-relaxed">
              Cada pilar foi construído ao longo de mais de três décadas — e segue evoluindo com
              o tempo.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px bg-ink/10 rounded-2xl overflow-hidden ring-1 ring-ink/10 sm:grid-cols-2 lg:grid-cols-5">
          {educationalPillars.map((pillar, i) => {
            const Icon = educationalIconMap[pillar.key as keyof typeof educationalIconMap];
            return (
              <Reveal key={pillar.key} delay={i * 100}>
                <article className="group h-full flex flex-col bg-cream p-7 md:p-8 transition-colors hover:bg-white">
                  <div className="flex items-center justify-between gap-3">
                    <span className="block text-gold-deep transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-10 w-10 md:h-12 md:w-12" />
                    </span>
                    <span className="font-mono text-[10px] text-ink/35 tracking-widest">
                      {String(i + 1).padStart(2, '0')} / 05
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-xl md:text-2xl text-ink leading-tight transition-colors group-hover:text-gold-deep">
                    {pillar.label}
                  </h3>
                  <p className="mt-3 text-sm md:text-[0.95rem] text-ink/65 leading-relaxed flex-1">
                    {pillar.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
