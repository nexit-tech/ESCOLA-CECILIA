import Image from 'next/image';
import { activitiesShowcase } from '@/lib/content';
import { local } from '@/lib/images';
import { Reveal } from './ui/Reveal';

const tiles = [
  ...local.ballet.map((src) => ({ src, category: 'Ballet' })),
  ...local.basquete.map((src) => ({ src, category: 'Basquete' })),
];

export function ActivitiesShowcase() {
  return (
    <section className="relative bg-cream py-14 sm:py-20 md:py-32 overflow-hidden">
      <div className="container-wide">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-12 lg:items-end mb-8 sm:mb-12 md:mb-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">{activitiesShowcase.badge}</p>
            <h2 className="mt-5 md:mt-6 font-serif text-[1.75rem] sm:text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-balance text-ink">
              <span className="italic font-accent text-gold-deep">Ballet</span> e{' '}
              <span className="italic font-accent text-gold-deep">Basquete</span> inclusos na
              mensalidade.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={200}>
            <p className="text-base md:text-lg text-ink/70 leading-relaxed">
              Duas modalidades fazem parte da rotina escolar — sem custo extra, sem extras
              escondidos. O movimento e a arte como parte da formação.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {tiles.map((tile, i) => (
              <figure
                key={`${tile.src}-${i}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-ink/5 shadow-soft"
              >
                <Image
                  src={tile.src}
                  alt={tile.category}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.08]"
                />
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-10 text-center text-sm text-ink/55">
            Demais oficinas e atividades culturais acontecem ao longo do ano letivo —{' '}
            <a href="/atividades" className="text-gold-deep underline-offset-4 hover:underline">
              veja a programação completa
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
