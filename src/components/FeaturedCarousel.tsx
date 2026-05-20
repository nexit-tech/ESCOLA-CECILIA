'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { featuredSpaces } from '@/lib/content';
import { images } from '@/lib/images';

const AUTOPLAY_MS = 6000;

export function FeaturedCarousel() {
  const slides = featuredSpaces.map((f) => ({
    src: images.structure[f.imageIndex],
    title: f.title,
    description: f.description,
    tag: f.tag,
  }));

  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const goTo = useCallback(
    (i: number) => setActive(((i % slides.length) + slides.length) % slides.length),
    [slides.length],
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => next(), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [active, paused, next]);

  useEffect(() => {
    if (!progressRef.current) return;
    progressRef.current.style.animation = 'none';
    progressRef.current.getBoundingClientRect();
    if (!paused) {
      progressRef.current.style.animation = `progress ${AUTOPLAY_MS}ms linear forwards`;
    }
  }, [active, paused]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  return (
    <section
      className="relative bg-ink"
      data-nav-theme="dark"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Espaços em destaque"
    >
      <div className="relative h-[78vh] min-h-[560px] max-h-[820px] w-full overflow-hidden">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
              active === i ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={active !== i}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              priority={i < 2}
              fetchPriority={i === 0 ? 'high' : 'auto'}
              quality={i < 2 ? 85 : 75}
              sizes="100vw"
              className={`object-cover transition-transform duration-[8000ms] ease-out ${
                active === i ? 'scale-105' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />
          </div>
        ))}

        <div className="absolute inset-0 z-20 flex items-end pb-20 md:pb-28">
          <div className="container-wide w-full">
            <div className="max-w-2xl">
              {slides.map((slide, i) => (
                <div
                  key={slide.src}
                  className={`transition-all duration-700 ${
                    active === i
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 pointer-events-none absolute'
                  }`}
                  aria-hidden={active !== i}
                >
                  <p className="eyebrow text-gold-light">
                    <span>{slide.tag}</span> ·{' '}
                    <span>
                      {String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                    </span>
                  </p>
                  <h2 className="display-1 text-cream mt-6 text-balance">{slide.title}</h2>
                  <p className="lede text-cream/80 mt-5">{slide.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute right-6 bottom-24 md:right-10 md:bottom-28 z-30 flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Espaço anterior"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur-md ring-1 ring-cream/20 transition-all hover:bg-cream hover:text-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Próximo espaço"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream backdrop-blur-md ring-1 ring-cream/20 transition-all hover:bg-cream hover:text-ink"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-30 flex gap-1.5 px-6 md:px-10 pb-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir para o espaço ${i + 1}`}
              className="group relative flex-1 h-1 overflow-hidden rounded-full bg-cream/15"
            >
              <span
                className={`absolute inset-0 origin-left rounded-full bg-gold-light transition-transform ${
                  i < active ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
              {active === i && (
                <span
                  ref={progressRef}
                  className="absolute inset-0 origin-left rounded-full bg-gold-light"
                  style={{ transform: 'scaleX(0)' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}
