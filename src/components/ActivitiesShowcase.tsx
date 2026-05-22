import Image from 'next/image';
import { activitiesShowcase } from '@/lib/content';
import { local } from '@/lib/images';
import { Reveal } from './ui/Reveal';

type Tile = {
  src: string;
  label: string;
  size: 'tall' | 'wide' | 'square' | 'big';
};

const tiles: Tile[] = [
  { src: local.ballet[1], label: 'Ballet', size: 'tall' },
  { src: local.basquete[0], label: 'Basquete', size: 'big' },
  { src: local.eventos[0], label: 'Banda Marcial', size: 'wide' },
  { src: local.ballet[0], label: 'Apresentações', size: 'square' },
  { src: local.basquete[1], label: 'Competições', size: 'square' },
  { src: local.ballet[2], label: 'Ritmos', size: 'wide' },
  { src: local.basquete[2], label: 'Esporte na rotina', size: 'tall' },
];

const sizeClass: Record<Tile['size'], string> = {
  tall: 'row-span-2',
  wide: 'col-span-2',
  square: '',
  big: 'col-span-2 row-span-2',
};

export function ActivitiesShowcase() {
  return (
    <section className="relative bg-cream py-20 md:py-32 overflow-hidden">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end mb-12 md:mb-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">{activitiesShowcase.badge}</p>
            <h2 className="mt-5 md:mt-6 font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance text-ink">
              O que cabe na mensalidade vai{' '}
              <span className="italic font-accent text-gold-deep">muito além</span> da sala de aula.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={200}>
            <p className="text-base md:text-lg text-ink/70 leading-relaxed">
              {activitiesShowcase.body}
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[260px]">
            {tiles.map((tile, i) => (
              <figure
                key={`${tile.src}-${i}`}
                className={`group relative overflow-hidden rounded-2xl ring-1 ring-ink/5 shadow-soft ${sizeClass[tile.size]}`}
              >
                <Image
                  src={tile.src}
                  alt={tile.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold-light">Inclusa</p>
                  <p className="mt-1 font-serif text-lg md:text-2xl text-cream leading-tight">
                    {tile.label}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
