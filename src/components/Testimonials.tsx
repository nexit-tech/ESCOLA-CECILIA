'use client';

import { useCallback, useEffect, useState } from 'react';
import { testimonials } from '@/lib/content';
import { Reveal } from './ui/Reveal';

const AUTO_MS = 8000;

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((a) => (a + 1) % testimonials.length), []);
  const prev = useCallback(
    () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length),
    [],
  );

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(next, AUTO_MS);
    return () => clearTimeout(id);
  }, [active, paused, next]);

  return (
    <section
      className="bg-cream-deep py-14 sm:py-20 md:py-36"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-wide">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <p className="eyebrow justify-center">Famílias Cecília</p>
            <h2 className="mt-5 sm:mt-6 font-serif text-3xl sm:text-4xl md:text-6xl leading-[1.08] tracking-tight text-balance text-ink">
              Quem viveu, conta com{' '}
              <span className="italic font-accent text-gold-deep">propriedade</span>.
            </h2>
          </div>
        </Reveal>

        <div className="relative mx-auto max-w-4xl">
          <span
            className="absolute -top-4 sm:-top-8 left-0 sm:-left-2 md:-left-12 font-serif text-[8rem] sm:text-[12rem] md:text-[18rem] leading-none text-gold/25 pointer-events-none select-none"
            aria-hidden
          >
            “
          </span>

          <div className="relative min-h-[340px] sm:min-h-[280px] md:min-h-[260px]">
            {testimonials.map((t, i) => (
              <blockquote
                key={t.author}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  active === i
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
                aria-hidden={active !== i}
              >
                <p className="font-serif text-xl sm:text-2xl md:text-[1.95rem] leading-[1.4] text-ink text-balance relative">
                  {t.quote}
                </p>
                <footer className="mt-10 flex items-center gap-5">
                  <span className="block h-px w-12 bg-gold-deep" />
                  <div>
                    <p className="font-serif text-lg text-ink">{t.author}</p>
                    <p className="text-sm text-ink/55">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-ink/10 pt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Depoimento ${i + 1}`}
                  className="group relative h-1.5 w-12 overflow-hidden rounded-full bg-ink/10"
                >
                  <span
                    className={`absolute inset-0 origin-left rounded-full bg-gold-deep transition-transform duration-500 ${
                      active === i ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-all hover:bg-ink hover:text-cream"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Próximo"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-all hover:bg-ink hover:text-cream"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
