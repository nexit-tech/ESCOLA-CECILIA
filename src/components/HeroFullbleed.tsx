import Image from 'next/image';
import Link from 'next/link';
import { heroContent } from '@/lib/content';
import { images } from '@/lib/images';

const HERO_IMAGE = images.structure[13];

export function HeroFullbleed() {
  return (
    <section className="relative isolate min-h-[92vh] flex items-end overflow-hidden" data-nav-theme="dark">
      <Image
        src={HERO_IMAGE}
        alt="Estudantes do Educandário Cecília Pinheiro"
        fill
        priority
        fetchPriority="high"
        quality={85}
        sizes="100vw"
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/70 via-ink/20 to-transparent" />

      <div className="container-wide w-full pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl text-cream animate-fade-up">
          <p className="eyebrow text-gold-light">{heroContent.eyebrow}</p>
          <h1 className="mt-7 font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.04] tracking-tight text-balance">
            {heroContent.title}
          </h1>
          <p className="mt-7 max-w-xl text-lg md:text-xl text-cream/80 leading-relaxed">
            {heroContent.body}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href={heroContent.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-cream text-ink px-7 py-3.5 text-sm font-semibold tracking-wide transition-all hover:bg-gold-light hover:shadow-soft"
            >
              {heroContent.primaryCta.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all hover:border-cream hover:bg-cream/5"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 hidden md:flex items-center gap-3 text-cream/70 text-xs uppercase tracking-[0.3em]">
        <span>Scroll</span>
        <span className="block h-px w-12 bg-cream/40" />
      </div>
    </section>
  );
}
