import Image from 'next/image';
import Link from 'next/link';
import { featuredFundamental } from '@/lib/content';
import { local } from '@/lib/images';
import { Reveal } from './ui/Reveal';

export function FeaturedFundamental() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="container-wide py-14 sm:py-20 md:py-32 grid gap-10 lg:gap-12 lg:grid-cols-12 items-center">
        <Reveal direction="right" className="lg:col-span-6 order-2 lg:order-1">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-ink/10 shadow-soft">
              <Image
                src={local.fundamental}
                alt="Aluno do Ensino Fundamental"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -top-5 -right-5 hidden md:block rounded-2xl bg-ink text-cream px-5 py-4 shadow-soft animate-float-y">
              <p className="text-[10px] uppercase tracking-[0.28em] text-gold-light">Do 1º ao 9º ano</p>
              <p className="mt-1 font-serif text-xl">Base sólida.</p>
            </div>

            <div className="hidden md:block absolute -bottom-6 -left-6 rounded-2xl bg-cream-deep px-5 py-4 shadow-soft ring-1 ring-ink/10 max-w-[220px]">
              <p className="font-serif text-lg leading-tight text-ink">
                Leitura ativa, projetos e tecnologia.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:pl-8 order-1 lg:order-2">
          <Reveal>
            <p className="eyebrow">{featuredFundamental.badge}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 sm:mt-6 font-serif text-[1.75rem] sm:text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-balance text-ink">
              {featuredFundamental.title}
            </h2>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-ink/75 leading-relaxed">
              {featuredFundamental.body}
            </p>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-8 md:mt-10 grid grid-cols-2 gap-6 max-w-md">
              <div className="border-t border-ink/15 pt-4">
                <p className="font-serif text-3xl text-ink">Fund. I</p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-ink/55">
                  1º ao 5º ano
                </p>
              </div>
              <div className="border-t border-ink/15 pt-4">
                <p className="font-serif text-3xl text-ink">Fund. II</p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-ink/55">
                  6º ao 9º ano
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <Link
              href={featuredFundamental.cta.href}
              className="group mt-8 md:mt-10 inline-flex items-center gap-3 rounded-full bg-ink text-cream px-6 md:px-7 py-3.5 md:py-4 text-sm font-semibold tracking-wide transition-all hover:bg-ink-soft"
            >
              {featuredFundamental.cta.label}
              <span className="flex h-6 w-6 md:h-7 md:w-7 items-center justify-center rounded-full bg-cream text-ink transition-transform group-hover:translate-x-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
