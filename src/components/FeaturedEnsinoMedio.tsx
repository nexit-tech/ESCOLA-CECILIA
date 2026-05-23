import Image from 'next/image';
import Link from 'next/link';
import { featuredEnsinoMedio } from '@/lib/content';
import { local } from '@/lib/images';
import { Reveal } from './ui/Reveal';

const FEATURE_IMAGE = local.ensinoMedio;

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

      <div className="container-wide relative py-16 sm:py-24 md:py-40 grid gap-10 lg:gap-16 lg:grid-cols-12 items-center">
        <div className="lg:col-span-6 text-cream">
          <Reveal>
            <div className="inline-flex items-center gap-3 rounded-full border border-gold-light/30 bg-cream/5 px-5 py-2 text-[10px] uppercase tracking-[0.32em] text-gold-light backdrop-blur-md">
              <span className="block h-1.5 w-1.5 rounded-full bg-gold-light" />
              {featuredEnsinoMedio.badge}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-5 sm:mt-7 font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-balance text-cream">
              {featuredEnsinoMedio.title.split(' ').map((word, i, arr) =>
                i === arr.length - 1 ? (
                  <span key={i} className="italic font-accent text-gold-light"> {word}</span>
                ) : (
                  <span key={i}>{i === 0 ? '' : ' '}{word}</span>
                ),
              )}
            </h2>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-8 max-w-xl text-lg text-cream/80 leading-relaxed">
              {featuredEnsinoMedio.body}
            </p>
          </Reveal>

          <Reveal delay={400}>
            <Link
              href={featuredEnsinoMedio.cta.href}
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-cream text-ink px-7 py-4 text-sm font-semibold tracking-wide transition-all hover:bg-gold-light"
            >
              {featuredEnsinoMedio.cta.label}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover:translate-x-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </Reveal>

          <Reveal delay={520}>
            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-cream/15 pt-8 max-w-md">
              <div>
                <p className="font-serif text-3xl text-cream">ENEM</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-cream/55">
                  simulados periódicos
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-cream">1:1</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-cream/55">
                  preparando para o futuro
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal direction="left" className="lg:col-span-6" delay={200}>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-cream/10 shadow-soft">
              <Image
                src={FEATURE_IMAGE}
                alt="Estudante do Ensino Médio"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>

            <div className="hidden md:block absolute -bottom-6 -left-6 rounded-2xl bg-cream text-ink px-6 py-5 shadow-soft ring-1 ring-ink/5 max-w-[240px] animate-float-y">
              <p className="font-serif text-xl leading-tight">
                Preparados para o que vem depois.
              </p>
              <p className="mt-2 text-xs text-ink/55">— Equipe pedagógica</p>
            </div>

            <div className="hidden md:flex absolute -top-6 -right-6 h-24 w-24 items-center justify-center rounded-full bg-gold-light text-ink font-serif text-2xl shadow-soft animate-float-y" style={{ animationDelay: '1s' }}>
              ENEM
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
