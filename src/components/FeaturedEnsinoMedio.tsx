import Image from 'next/image';
import Link from 'next/link';
import { featuredEnsinoMedio } from '@/lib/content';
import { images } from '@/lib/images';

const FEATURE_IMAGE = images.structure[20];

export function FeaturedEnsinoMedio() {
  return (
    <section className="relative bg-ink text-cream overflow-hidden" data-nav-theme="dark">
      <div className="absolute inset-0">
        <Image
          src={FEATURE_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/60" />
      </div>

      <div className="container-wide relative py-28 md:py-40 grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow text-gold-light">{featuredEnsinoMedio.badge}</p>
          <h2 className="mt-7 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
            {featuredEnsinoMedio.title}
          </h2>
          <p className="mt-8 max-w-xl text-lg text-cream/80 leading-relaxed">
            {featuredEnsinoMedio.body}
          </p>
          <Link
            href={featuredEnsinoMedio.cta.href}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream text-ink px-7 py-3.5 text-sm font-semibold tracking-wide transition-all hover:bg-gold-light"
          >
            {featuredEnsinoMedio.cta.label}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-cream/15 p-6 bg-white/5 backdrop-blur-sm">
            <p className="font-serif text-4xl text-cream">3</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/60">anos de aprofundamento</p>
          </div>
          <div className="rounded-2xl border border-cream/15 p-6 bg-white/5 backdrop-blur-sm">
            <p className="font-serif text-4xl text-cream">ENEM</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/60">simulados periódicos</p>
          </div>
          <div className="rounded-2xl border border-cream/15 p-6 bg-white/5 backdrop-blur-sm">
            <p className="font-serif text-4xl text-cream">+15</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/60">atividades extras</p>
          </div>
          <div className="rounded-2xl border border-cream/15 p-6 bg-white/5 backdrop-blur-sm">
            <p className="font-serif text-4xl text-cream">1:1</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/60">orientação vocacional</p>
          </div>
        </div>
      </div>
    </section>
  );
}
