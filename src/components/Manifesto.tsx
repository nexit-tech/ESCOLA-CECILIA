import { manifesto } from '@/lib/content';
import { Reveal } from './ui/Reveal';

export function Manifesto() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div
        className="absolute top-1/2 -left-32 -translate-y-1/2 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-gold-deep/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="container-wide py-16 sm:py-24 md:py-40 relative">
        <div className="mx-auto max-w-5xl text-ink">
          <Reveal direction="up">
            <p className="eyebrow">{manifesto.badge}</p>
          </Reveal>

          <Reveal direction="up" delay={120}>
            <p className="mt-6 sm:mt-10 font-serif text-2xl sm:text-3xl md:text-5xl lg:text-[3.75rem] leading-[1.12] tracking-tight text-balance text-ink">
              {manifesto.statement.split('. ').map((sentence, i, arr) => (
                <span key={i} className="block">
                  {sentence}
                  {i < arr.length - 1 ? '.' : ''}
                </span>
              ))}
            </p>
          </Reveal>

          <Reveal direction="left" delay={300}>
            <div className="mt-10 sm:mt-14 flex items-center gap-3 sm:gap-5">
              <span className="block h-px w-10 sm:w-16 bg-gold-deep" />
              <p className="font-accent italic text-lg sm:text-xl md:text-2xl text-gold-deep">
                {manifesto.signoff}
              </p>
            </div>
          </Reveal>

          <Reveal direction="up" delay={420}>
            <a
              href="https://www.instagram.com/ceciliapinheirooficial"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 sm:mt-10 inline-flex items-center gap-3 rounded-full bg-ink text-cream px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-semibold tracking-wide transition-all hover:bg-ink-soft hover:shadow-soft"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
              </svg>
              Visite nosso Instagram
              <span className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-cream text-ink transition-transform group-hover:translate-x-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
