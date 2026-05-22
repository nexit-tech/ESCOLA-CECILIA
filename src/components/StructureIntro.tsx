import Image from 'next/image';
import { local } from '@/lib/images';
import { Reveal } from './ui/Reveal';

const stats = [
  { value: '29', label: 'Ambientes' },
  { value: 'Google', label: 'For Education' },
  { value: 'Piscina', label: 'Aulas inclusas' },
  { value: 'Quadras', label: 'Coberta + ar livre' },
];

export function StructureIntro() {
  return (
    <section className="relative bg-cream pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="container-wide">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:items-end mb-10 sm:mb-12 md:mb-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Nossa estrutura</p>
            <h1 className="mt-5 md:mt-6 font-serif text-[2.25rem] sm:text-4xl md:text-6xl lg:text-7xl leading-[1.06] tracking-tight text-balance text-ink">
              Cada espaço pensado para{' '}
              <span className="italic font-accent text-gold-deep">aprender com presença</span>.
            </h1>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={180}>
            <p className="text-base md:text-lg text-ink/70 leading-relaxed">
              Salas climatizadas, laboratórios, biblioteca, espaços de convivência e áreas externas
              — desenhados para acolher o cotidiano escolar do 1º ano ao Ensino Médio.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative aspect-[3/4] sm:aspect-[16/10] md:aspect-[21/8] w-full overflow-hidden rounded-2xl sm:rounded-[2rem] ring-1 ring-ink/5 shadow-soft">
            <Image
              src={local.facade}
              alt="Fachada do Educandário Cecília Pinheiro"
              fill
              priority
              fetchPriority="high"
              quality={85}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/10 to-transparent sm:from-ink/55" />

            {/* Stats overlay só no desktop */}
            <div className="hidden md:block absolute bottom-0 left-0 right-0 p-10 text-cream">
              <div className="grid grid-cols-4 gap-8 border-t border-cream/20 pt-8 max-w-4xl">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl">{stat.value}</p>
                    <p className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-cream/65">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stats abaixo da imagem em mobile/tablet */}
        <Reveal delay={120}>
          <div className="md:hidden mt-6 grid grid-cols-2 gap-4 bg-white rounded-2xl ring-1 ring-ink/5 shadow-soft p-5">
            {stats.map((stat) => (
              <div key={stat.label} className="text-ink">
                <p className="font-serif text-xl sm:text-2xl">{stat.value}</p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-ink/55 leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
