import Image from 'next/image';
import { eventsGallery } from '@/lib/content';
import { local } from '@/lib/images';
import { Reveal } from './ui/Reveal';

const events: { src: string; tag: string }[] = [
  { src: local.eventos[0], tag: 'Banda Marcial' },
  { src: local.eventos[1], tag: 'Apresentações' },
  { src: local.eventos[2], tag: 'Festividades' },
  { src: local.eventos[3], tag: 'Comunidade' },
  { src: local.eventos[4], tag: 'Cultura' },
  { src: local.eventos[5], tag: 'Confraternização' },
  { src: local.eventos[6], tag: 'Sarau Literário' },
  { src: local.eventos[7], tag: 'Feira de Ciências' },
  { src: local.eventos[8], tag: 'Encontros' },
];

export function EventsGallery() {
  return (
    <section
      className="relative bg-ink text-cream py-14 sm:py-20 md:py-32 overflow-hidden"
      data-nav-theme="dark"
    >
      <div
        className="absolute top-1/4 -right-32 h-[420px] w-[420px] rounded-full bg-gold-deep/15 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="container-wide relative">
        <div className="grid gap-6 sm:gap-10 lg:grid-cols-12 lg:items-end mb-8 sm:mb-12 md:mb-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-gold-light">{eventsGallery.badge}</p>
            <h2 className="mt-5 md:mt-6 font-serif text-[1.75rem] sm:text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-balance text-cream">
              A escola que vive a{' '}
              <span className="italic font-accent text-gold-light">comunidade</span>.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={200}>
            <p className="text-base md:text-lg text-cream/75 leading-relaxed">
              Banda Marcial, Sarau Literário, Feira de Ciências, festividades e cultura — momentos
              que marcam cada ano letivo.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {events.map((item, i) => (
              <figure
                key={`${item.src}-${i}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-cream/10"
              >
                <Image
                  src={item.src}
                  alt={item.tag}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent opacity-95 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold-light">Evento</p>
                  <p className="mt-1 font-serif text-base md:text-lg text-cream leading-tight">
                    {item.tag}
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
