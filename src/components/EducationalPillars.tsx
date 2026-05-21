import { educationalPillars } from '@/lib/content';
import { educationalIconMap } from './icons/EducationalIcons';
import { Reveal } from './ui/Reveal';

export function EducationalPillars() {
  return (
    <section className="relative bg-cream py-28 md:py-40 overflow-hidden">
      <div
        className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gold/8 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="container-wide relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end mb-20">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Nossa proposta pedagógica</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance text-ink">
              Cinco pilares que sustentam{' '}
              <span className="italic font-accent text-gold-deep">cada jornada</span>.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={200}>
            <p className="text-lg text-ink/70 leading-relaxed">
              Mais do que um currículo, uma proposta de formação. Cada pilar foi construído ao longo
              de mais de três décadas — e segue evoluindo com o tempo.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {educationalPillars.map((pillar, i) => {
            const Icon = educationalIconMap[pillar.key as keyof typeof educationalIconMap];
            return (
              <Reveal key={pillar.key} delay={i * 100}>
                <article className="group relative pt-6 cursor-default">
                  <span className="absolute top-0 left-0 right-0 h-px bg-ink/15" />
                  <span className="absolute top-0 left-0 h-px bg-gold-deep transition-[width] duration-700 ease-out w-12 group-hover:w-full" />

                  <div className="flex items-center justify-between gap-4">
                    <span className="block text-gold-deep transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                      <Icon className="h-12 w-12" />
                    </span>
                    <span className="font-mono text-xs text-ink/30 tracking-widest">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-8 font-serif text-2xl md:text-[1.7rem] text-ink leading-tight transition-colors group-hover:text-gold-deep">
                    {pillar.label}
                  </h3>
                  <p className="mt-4 text-ink/65 leading-relaxed">{pillar.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
