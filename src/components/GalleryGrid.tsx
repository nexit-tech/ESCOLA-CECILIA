'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { images } from '@/lib/images';

const SWIPE_THRESHOLD = 50;

export function GalleryGrid() {
  const items = useMemo(
    () => images.structure.filter((src): src is string => Boolean(src)),
    [],
  );

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextLightbox = useCallback(
    () => setLightboxIndex((l) => (l === null ? null : (l + 1) % items.length)),
    [items.length],
  );
  const prevLightbox = useCallback(
    () => setLightboxIndex((l) => (l === null ? null : (l - 1 + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextLightbox, prevLightbox]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    // Garantir que é swipe horizontal, não scroll vertical
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) nextLightbox();
      else prevLightbox();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const activeSrc = lightboxIndex !== null ? items[lightboxIndex] : null;

  return (
    <section className="relative bg-cream pb-20 sm:pb-24 md:pb-32">
      <div className="container-wide">
        <div className="mb-8 sm:mb-10 md:mb-14">
          <p className="text-xs sm:text-sm text-ink/60">
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-ink/40 mr-3">
              {String(items.length).padStart(2, '0')} ESPAÇOS
            </span>
            <span className="hidden sm:inline">
              · Toque em qualquer imagem para ampliar — use ← → no teclado para navegar
            </span>
            <span className="sm:hidden">· Toque para ampliar · deslize ⇆</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map((src, i) => (
            <button
              key={src}
              onClick={() => setLightboxIndex(i)}
              aria-label={`Ampliar imagem ${i + 1}`}
              className="touch-tight group relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-ink/5 shadow-soft transition-all hover:shadow-ring hover:ring-gold/40 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream"
              style={{ animationDelay: `${(i % 8) * 50}ms` }}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
              <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-ink opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="absolute bottom-3 left-3 font-mono text-[10px] tracking-widest text-cream/0 group-hover:text-cream/70 transition-colors duration-300">
                {String(i + 1).padStart(2, '0')}
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeSrc && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de imagens"
          className="fixed inset-0 z-[100] bg-ink/95 backdrop-blur-xl animate-fade-up flex flex-col"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold-light tabular-nums">
              {String(lightboxIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </p>
            <button
              onClick={closeLightbox}
              aria-label="Fechar"
              className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-cream/10 text-cream ring-1 ring-cream/20 backdrop-blur-md transition-all hover:bg-cream hover:text-ink"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex items-stretch min-h-0">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevLightbox();
              }}
              aria-label="Anterior"
              className="hidden sm:flex shrink-0 w-16 lg:w-20 items-center justify-center text-cream/70 hover:text-cream hover:bg-cream/5 transition-colors"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/10 ring-1 ring-cream/20 backdrop-blur-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            <button
              onClick={closeLightbox}
              aria-label="Fechar"
              className="flex-1 flex items-center justify-center px-2 sm:px-4 cursor-zoom-out min-h-0 min-w-0"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={activeSrc}
                src={activeSrc}
                alt=""
                onClick={(e) => e.stopPropagation()}
                className="max-w-[90vw] sm:max-w-[78vw] lg:max-w-[68vw] max-h-[78vh] w-auto h-auto object-contain rounded-xl animate-fade-up cursor-default"
              />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextLightbox();
              }}
              aria-label="Próximo"
              className="hidden sm:flex shrink-0 w-16 lg:w-20 items-center justify-center text-cream/70 hover:text-cream hover:bg-cream/5 transition-colors"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream/10 ring-1 ring-cream/20 backdrop-blur-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </div>

          <div className="sm:hidden flex items-center justify-between gap-3 px-4 pb-6 pt-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevLightbox();
              }}
              className="flex-1 flex items-center justify-center gap-2 h-14 rounded-full bg-cream/10 text-cream ring-1 ring-cream/20 backdrop-blur-md font-medium text-sm active:bg-cream/20"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Anterior
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextLightbox();
              }}
              className="flex-1 flex items-center justify-center gap-2 h-14 rounded-full bg-cream text-ink font-semibold text-sm active:bg-gold-light"
            >
              Próxima
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
