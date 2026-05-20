import Image from 'next/image';
import Link from 'next/link';
import { aboutContent } from '@/lib/content';
import { images } from '@/lib/images';

export function DirectorQuote() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-tight grid gap-12 lg:grid-cols-12 items-center">
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-ink/10">
            <Image
              src={images.director}
              alt={`${aboutContent.director}, diretora geral`}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="eyebrow">{aboutContent.eyebrow}</p>
          <h2 className="display-2 mt-5 text-balance">{aboutContent.title}</h2>

          <blockquote className="mt-8 relative pl-6 border-l-2 border-gold">
            <svg
              className="absolute -left-3 -top-2 h-6 w-6 text-gold/60"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M7 7c-2 0-3 2-3 4v6h6v-6H7c0-2 1-3 3-3V7H7zm10 0c-2 0-3 2-3 4v6h6v-6h-3c0-2 1-3 3-3V7h-3z" />
            </svg>
            <p className="font-serif italic text-lg md:text-xl text-ink/85 leading-relaxed">
              {aboutContent.paragraphs[0]}
            </p>
          </blockquote>

          <p className="mt-8 font-serif text-xl text-ink">{aboutContent.director}</p>
          <p className="text-sm text-ink/60">{aboutContent.role}</p>

          <Link href="/quem-somos" className="btn-ghost mt-8">
            Ler a história completa
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
