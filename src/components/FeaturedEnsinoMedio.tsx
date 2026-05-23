import Image from 'next/image';
import Link from 'next/link';
import { local } from '@/lib/images';
import { Reveal } from './ui/Reveal';

const SEGMENT_PILLS = [
  'Educação Infantil',
  '1º ao 5º ano',
  '6º ao 9º ano',
  'Ensino Médio',
];

export function FeaturedEnsinoMedio() {
  return (
    <section className="relative bg-ink text-cream overflow-hidden" data-nav-theme="dark">
      <div
        className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-gold-deep/20 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -left-20 h-[360px] w-[360px] rounded-full bg-gold/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="container-wide relative py-14 sm:py-20 md:py-28">
        <Reveal>
          <div className="relative mx-auto max-w-2xl aspect-[4/5] sm:aspect-[3/4] md:aspect-[16/9] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ring-1 ring-cream/10 shadow-soft">
            <Image
              src={local.ensinoMedio}
              alt="Estudante"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 max-w-md sm:max-w-none mx-auto">
            {SEGMENT_PILLS.map((label) => (
              <span
                key={label}
                className="rounded-full border border-cream/25 bg-cream/5 px-3 sm:px-5 py-2 text-[11px] sm:text-sm text-center text-cream/90 backdrop-blur-sm whitespace-nowrap"
              >
                {label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-8 sm:mt-10 flex justify-center px-4 sm:px-0">
            <Link
              href="/segmentos"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-cream text-ink px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-semibold tracking-wide transition-all hover:bg-gold-light"
            >
              Conheça nossos segmentos
              <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover:translate-x-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
