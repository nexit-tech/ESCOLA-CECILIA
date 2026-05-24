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
            <a
              href="https://wa.me/5521976236086?text=Ol%C3%A1!%20Venho%20do%20site%20e%20tenho%20interesse%20em%20conhecer%20o%20Cec%C3%ADlia%20Pinheiro."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] text-white px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-semibold tracking-wide transition-all hover:bg-[#1ebe57] hover:shadow-soft"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.695.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/>
              </svg>
              Fale com a gente
            </a>
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
