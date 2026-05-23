'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { segments } from '@/lib/content';
import { local } from '@/lib/images';
import { Reveal } from './ui/Reveal';

const segmentImages: Record<string, string> = {
  fund1: local.fundamentalAlt,
  fund2: local.fundamental,
  medio: local.ensinoMedio,
};

export function SegmentsBand() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  return (
    <section
      className="relative bg-cream border-t border-ink/10 overflow-hidden"
      onMouseMove={(e) => setPointer({ x: e.clientX, y: e.clientY })}
    >
      <div className="container-wide py-14 sm:py-20 md:py-40 relative">
        <div className="grid gap-6 sm:gap-12 lg:grid-cols-12 lg:items-end mb-10 sm:mb-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Segmentos</p>
            <h2 className="mt-5 sm:mt-6 font-serif text-3xl sm:text-4xl md:text-6xl leading-[1.1] tracking-tight text-balance text-ink">
              Do Ensino Fundamental ao{' '}
              <span className="italic font-accent text-gold-deep">Ensino Médio</span>.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={200}>
            <p className="text-lg text-ink/70 leading-relaxed">
              Acompanhamos cada estudante em toda a Educação Básica, com práticas pedagógicas
              próprias para cada fase da vida escolar.
            </p>
          </Reveal>
        </div>

        <ul className="divide-y divide-ink/10 border-y border-ink/10 relative">
          {segments.map((seg, i) => (
            <Reveal key={seg.key} delay={i * 80}>
              <li>
                <Link
                  href="/segmentos"
                  onMouseEnter={() => setHovered(seg.key)}
                  onMouseLeave={() => setHovered(null)}
                  className="group grid grid-cols-12 items-center gap-6 py-8 md:py-10 transition-colors relative"
                >
                  <span className="absolute inset-y-0 left-0 right-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out bg-cream-deep -mx-6 md:-mx-10" />

                  <span className="relative col-span-1 font-mono text-xs tracking-widest text-ink/40 transition-colors group-hover:text-gold-deep">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="relative col-span-11 md:col-span-5 font-serif text-xl sm:text-2xl md:text-4xl text-ink leading-tight transition-transform group-hover:translate-x-2">
                    {seg.label}
                  </h3>
                  <p className="hidden md:block relative md:col-span-3 text-sm uppercase tracking-[0.18em] text-gold-deep">
                    {seg.range}
                  </p>
                  <span className="hidden md:flex relative md:col-span-3 justify-end items-center gap-3 text-ink/55 group-hover:text-gold-deep transition-colors">
                    <span className="text-sm">Saiba mais</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 transition-all group-hover:border-gold-deep group-hover:bg-gold-deep group-hover:text-cream">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>

      {hovered && (
        <div
          className="fixed pointer-events-none z-30 hidden lg:block transition-opacity duration-200"
          style={{
            top: pointer.y - 180,
            left: pointer.x + 30,
            opacity: hovered ? 1 : 0,
          }}
        >
          <div className="relative h-72 w-56 overflow-hidden rounded-2xl shadow-soft ring-1 ring-ink/10">
            <Image
              src={segmentImages[hovered] ?? local.facade}
              alt=""
              fill
              sizes="224px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>
        </div>
      )}
    </section>
  );
}
