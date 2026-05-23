'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { heroContent } from '@/lib/content';
import { local } from '@/lib/images';

export function HeroFullbleed() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches) {
      return; // parallax desativado em mobile (performance)
    }
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        setOffset(-rect.top * 0.3);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[88vh] sm:min-h-[78vh] md:min-h-[86vh] flex items-end sm:items-center overflow-hidden text-cream"
      data-nav-theme="dark"
    >
      <div
        className="absolute inset-0 -z-20 will-change-transform"
        style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.08)` }}
      >
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
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/35" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/40 to-ink/20" />

      <div className="container-wide w-full pt-24 pb-12 sm:pt-24 sm:pb-16 md:pt-28 md:pb-24 relative">
        <div className="max-w-4xl">
          <h1 className="font-serif text-cream text-[clamp(2rem,8vw,2.5rem)] leading-[1.05] sm:text-5xl md:text-7xl lg:text-[5.5rem] tracking-tight text-balance animate-fade-up">
            <span className="block">Cecília Pinheiro:</span>
            <span className="block italic font-accent text-gold-light mt-1 sm:mt-2">
              Dedicação plena
            </span>
            <span className="block">ao Ensino.</span>
          </h1>

          <p className="mt-5 sm:mt-7 md:mt-8 max-w-xl text-[15px] sm:text-base md:text-xl text-cream/85 leading-relaxed animate-fade-up [animation-delay:280ms]">
            {heroContent.body}
          </p>

          <div className="mt-8 sm:mt-9 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 animate-fade-up [animation-delay:440ms]">
            <Link
              href={heroContent.primaryCta.href}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-cream text-ink px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-semibold tracking-wide transition-all hover:bg-gold-light hover:shadow-soft"
            >
              {heroContent.primaryCta.label}
              <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover:translate-x-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-semibold tracking-wide text-cream transition-all hover:border-cream hover:bg-cream/5"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-2xl animate-fade-up [animation-delay:620ms]">
            <div>
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-cream">33+</p>
              <p className="mt-1 sm:mt-2 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-cream/60 leading-tight">
                Anos de história
              </p>
            </div>
            <div className="border-l border-cream/15 pl-3 sm:pl-5 md:pl-6">
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-cream">BNCC</p>
              <p className="mt-1 sm:mt-2 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-cream/60 leading-tight">
                Currículo alinhado
              </p>
            </div>
            <div className="border-l border-cream/15 pl-3 sm:pl-5 md:pl-6">
              <p className="font-serif text-xl sm:text-2xl md:text-3xl text-cream">Estrutura</p>
              <p className="mt-1 sm:mt-2 text-[9px] sm:text-[10px] uppercase tracking-[0.18em] sm:tracking-[0.22em] text-cream/60 leading-tight">
                Consolidada
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
