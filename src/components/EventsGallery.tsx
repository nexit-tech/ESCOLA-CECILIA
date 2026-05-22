'use client';

import Image from 'next/image';
import { eventsGallery } from '@/lib/content';
import { local } from '@/lib/images';
import { Reveal } from './ui/Reveal';

const layout: { src: string; cls: string }[] = [
  { src: local.eventos[0], cls: 'col-span-2 md:col-span-2 row-span-2 aspect-[3/4]' },
  { src: local.eventos[7], cls: 'col-span-2 md:col-span-1 aspect-[4/3]' },
  { src: local.eventos[4], cls: 'col-span-2 md:col-span-1 aspect-[4/3]' },
  { src: local.eventos[2], cls: 'col-span-1 aspect-square' },
  { src: local.eventos[3], cls: 'col-span-1 aspect-square' },
  { src: local.eventos[1], cls: 'col-span-2 md:col-span-2 aspect-[3/2]' },
  { src: local.eventos[5], cls: 'col-span-1 aspect-square' },
  { src: local.eventos[6], cls: 'col-span-1 aspect-square' },
  { src: local.eventos[8], cls: 'col-span-2 aspect-[16/9]' },
];

export function EventsGallery() {
  return (
    <section className="relative bg-ink text-cream py-20 md:py-32 overflow-hidden" data-nav-theme="dark">
      <div
        className="absolute top-1/3 -left-32 h-[460px] w-[460px] rounded-full bg-gold-deep/20 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="container-wide relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end mb-12 md:mb-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow text-gold-light">{eventsGallery.badge}</p>
            <h2 className="mt-5 md:mt-6 font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance text-cream">
              A escola que vive a{' '}
              <span className="italic font-accent text-gold-light">comunidade</span>.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={200}>
            <p className="text-base md:text-lg text-cream/75 leading-relaxed">
              {eventsGallery.body}
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {layout.map((item, i) => (
              <figure
                key={`${item.src}-${i}`}
                className={`group relative overflow-hidden rounded-2xl ring-1 ring-cream/10 ${item.cls}`}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-all duration-[1000ms] ease-out group-hover:scale-[1.08] grayscale-[0.1] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-ink/15 transition-colors duration-500 group-hover:bg-ink/0" />
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
