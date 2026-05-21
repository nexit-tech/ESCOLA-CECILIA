import { educationalPillars } from '@/lib/content';
import { educationalIconMap } from './icons/EducationalIcons';

export function EducationalPillars() {
  return (
    <section className="bg-cream-deep">
      <div className="container-wide py-28 md:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">Nossa proposta pedagógica</p>
            <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance text-ink">
              Cinco pilares que sustentam{' '}
              <span className="italic font-accent text-gold-deep">cada jornada</span>.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-lg text-ink/70 leading-relaxed">
              Mais do que um currículo, uma proposta de formação. Cada pilar foi construído ao longo
              de mais de três décadas — e segue evoluindo com o tempo.
            </p>
          </div>
        </div>

        <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {educationalPillars.map((pillar) => {
            const Icon = educationalIconMap[pillar.key as keyof typeof educationalIconMap];
            return (
              <article key={pillar.key} className="group">
                <div className="flex items-center gap-4">
                  <span className="text-gold-deep">
                    <Icon className="h-10 w-10" />
                  </span>
                  <span className="block h-px flex-1 bg-ink/10" />
                </div>
                <h3 className="mt-6 font-serif text-2xl md:text-[1.7rem] text-ink leading-tight">
                  {pillar.label}
                </h3>
                <p className="mt-4 text-ink/65 leading-relaxed">{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
