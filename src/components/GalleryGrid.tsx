'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { structureSpaces } from '@/lib/content';
import { images } from '@/lib/images';

const aspectClass = {
  tall: 'aspect-[4/5]',
  wide: 'aspect-[16/10]',
  square: 'aspect-square',
} as const;

export function GalleryGrid() {
  const items = useMemo(
    () =>
      structureSpaces.map((s, i) => ({
        src: images.structure[i] ?? images.structure[0],
        aspect: s.aspect,
      })),
    [],
  );

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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

  const activeItem = lightboxIndex !== null ? items[lightboxIndex] : null;

  return (
    <section className="relative bg-cream py-20 md:py-28">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="eyebrow justify-center">Explore</p>
          <h2 className="display-2 mt-5 text-balance">
            Conheça cada{' '}
            <span className="italic font-accent text-gold-deep">canto da escola</span>.
          </h2>
          <p className="lede mt-5 mx-auto max-w-2xl">
            Toque em qualquer imagem para ampliar e navegue com as setas do teclado.
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [column-fill:_balance]">
          {items.map((item, i) => (
            <button
              key={`${item.src}-${i}`}
              onClick={() => setLightboxIndex(i)}
              aria-label={`Ampliar imagem ${i + 1}`}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl ring-1 ring-ink/5 shadow-soft transition-all hover:shadow-ring hover:ring-gold/40 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream break-inside-avoid animate-fade-up"
              style={{ animationDelay: `${(i % 8) * 50}ms` }}
            >
              <div className={`relative w-full ${aspectClass[item.aspect]}`}>
                <Image
                  src={item.src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
                <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream/90 text-ink opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de imagens"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-xl p-4 sm:p-10 animate-fade-up"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            aria-label="Fechar"
            className="absolute top-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream ring-1 ring-cream/20 backdrop-blur-md transition-all hover:bg-cream hover:text-ink"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            aria-label="Anterior"
            className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-cream/10 text-cream ring-1 ring-cream/20 backdrop-blur-md transition-all hover:bg-cream hover:text-ink"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            aria-label="Próximo"
            className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-cream/10 text-cream ring-1 ring-cream/20 backdrop-blur-md transition-all hover:bg-cream hover:text-ink"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className="relative flex max-h-full w-full max-w-6xl flex-col gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-ink-soft ring-1 ring-cream/10">
              <Image
                key={activeItem.src}
                src={activeItem.src}
                alt=""
                fill
                sizes="100vw"
                className="object-contain animate-fade-up"
              />
            </div>
            <p className="text-center text-[11px] uppercase tracking-[0.3em] text-gold-light">
              {String(lightboxIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
