import Image from 'next/image';
import Link from 'next/link';
import { heroContent } from '@/lib/content';
import { heroImage } from '@/lib/images';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute inset-0 bg-noise opacity-40 pointer-events-none" aria-hidden />
      <div className="container-wide grid items-center gap-12 pt-12 pb-20 md:pt-20 md:pb-32 lg:grid-cols-12">
        <div className="lg:col-span-7 animate-fade-up">
          <p className="eyebrow">{heroContent.eyebrow}</p>
          <h1 className="display-1 mt-6 text-balance">
            <span className="text-ink">Uma educação</span>{' '}
            <span className="italic font-accent text-gold-deep">que revela</span>{' '}
            <span className="text-ink">o melhor de cada aluno.</span>
          </h1>
          <p className="lede mt-8 max-w-2xl">{heroContent.body}</p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href={heroContent.primaryCta.href} className="btn-primary">
              {heroContent.primaryCta.label}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href={heroContent.secondaryCta.href} className="btn-ghost">
              {heroContent.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-up [animation-delay:200ms]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-ring">
            <Image
              src={heroImage}
              alt="Estudantes do Cecília Pinheiro"
              fill
              priority
              fetchPriority="high"
              quality={85}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block card-elevated p-5 w-60">
            <p className="font-serif text-3xl text-ink">30+</p>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/60 mt-1">anos formando gerações</p>
          </div>
          <div className="absolute -top-6 -right-4 hidden md:block card-elevated px-4 py-3">
            <p className="font-serif italic text-sm text-ink">
              “Educar com afeto<br />e responsabilidade.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
