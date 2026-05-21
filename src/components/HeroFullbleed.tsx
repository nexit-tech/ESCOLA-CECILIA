'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { heroContent } from '@/lib/content';
import { images } from '@/lib/images';

const HERO_IMAGE = images.structure[13];

export function HeroFullbleed() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        setOffset(-rect.top * 0.35);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[96vh] flex items-end overflow-hidden text-cream"
      data-nav-theme="dark"
    >
      <div
        className="absolute inset-0 -z-20 will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.08)` }}
      >
        <Image
          src={HERO_IMAGE}
          alt="Estudantes do Educandário Cecília Pinheiro"
          fill
          priority
          fetchPriority="high"
          quality={88}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/65 to-ink/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent" />

      <div className="absolute top-32 right-8 md:right-16 hidden md:flex flex-col items-end gap-2 text-cream/70 animate-fade-up [animation-delay:600ms]">
        <span className="text-[10px] uppercase tracking-[0.4em]">Desde 1992</span>
        <span className="block h-12 w-px bg-cream/40" />
      </div>

      <div className="container-wide w-full pt-32 pb-24 md:pt-44 md:pb-32 relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-gold-light/40 bg-cream/5 backdrop-blur-md px-5 py-2 text-xs uppercase tracking-[0.28em] text-gold-light animate-fade-up">
            <span className="block h-1.5 w-1.5 rounded-full bg-gold-light animate-pulse" />
            {heroContent.eyebrow}
          </div>

          <h1 className="mt-8 font-serif text-cream text-5xl md:text-7xl lg:text-[5.75rem] leading-[1.02] tracking-tight text-balance animate-fade-up [animation-delay:120ms]">
            {heroContent.title}
          </h1>

          <p className="mt-8 max-w-xl text-lg md:text-xl text-cream/85 leading-relaxed animate-fade-up [animation-delay:280ms]">
            {heroContent.body}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:440ms]">
            <Link
              href={heroContent.primaryCta.href}
              className="group inline-flex items-center gap-3 rounded-full bg-cream text-ink px-7 py-4 text-sm font-semibold tracking-wide transition-all hover:bg-gold-light hover:shadow-soft"
            >
              {heroContent.primaryCta.label}
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover:translate-x-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-7 py-4 text-sm font-semibold tracking-wide text-cream transition-all hover:border-cream hover:bg-cream/5"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl animate-fade-up [animation-delay:620ms]">
            <div>
              <p className="font-serif text-3xl text-cream">33+</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-cream/60">
                Anos de história
              </p>
            </div>
            <div className="border-l border-cream/15 pl-6">
              <p className="font-serif text-3xl text-cream">BNCC</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-cream/60">
                Currículo alinhado
              </p>
            </div>
            <div className="border-l border-cream/15 pl-6">
              <p className="font-serif text-3xl text-cream">+20</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-cream/60">
                Atividades extras
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 hidden md:flex items-center gap-3 text-cream/60 text-[10px] uppercase tracking-[0.3em]">
        <span>Scroll</span>
        <span className="relative block h-12 w-px bg-cream/20 overflow-hidden">
          <span className="absolute top-0 left-0 right-0 h-4 bg-gold-light animate-[bounce_2s_ease-in-out_infinite]" />
        </span>
      </div>
    </section>
  );
}
