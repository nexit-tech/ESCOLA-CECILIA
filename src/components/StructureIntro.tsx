import Image from 'next/image';
import { local } from '@/lib/images';
import { Reveal } from './ui/Reveal';

const facilities = [
  'Salas climatizadas',
  'Sala Google for Education',
  'Sala de Música',
  'Biblioteca',
  'Laboratório de Informática',
  'Estúdio de Ballet',
  'Quadra de Esportes',
  'Piscina',
  'Playground coberto',
  '2 cantinas',
  'Departamento de Saúde Mental',
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
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 md:mt-12">
            <div className="flex items-center justify-between mb-5 md:mb-7">
              <p className="eyebrow">O que oferecemos</p>
              <p className="font-mono text-[10px] tracking-widest text-ink/40 hidden sm:block">
                {String(facilities.length).padStart(2, '0')} AMBIENTES & MAIS
              </p>
            </div>

            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
              {facilities.map((item, i) => (
                <li
                  key={item}
                  className="group relative flex items-center gap-3 rounded-xl bg-white px-4 py-3.5 sm:py-4 ring-1 ring-ink/5 shadow-soft transition-all hover:-translate-y-0.5 hover:ring-gold-deep/30"
                >
                  <span className="font-mono text-[10px] text-ink/35 tracking-widest tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-serif text-sm sm:text-base text-ink leading-tight">
                    {item}
                  </span>
                </li>
              ))}
              <li className="flex items-center justify-center rounded-xl bg-ink text-cream px-4 py-3.5 sm:py-4 col-span-2 sm:col-span-1">
                <span className="font-accent italic text-sm sm:text-base">e muito mais.</span>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
