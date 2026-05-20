import Link from 'next/link';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream py-20 md:py-28" data-nav-theme="dark">
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" aria-hidden />
      <div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div className="container-tight relative text-center">
        <p className="eyebrow text-gold">Matrículas abertas</p>
        <h2 className="display-2 text-cream mt-5 text-balance">
          Venha conhecer a escola{' '}
          <span className="italic font-accent text-gold">por dentro</span>.
        </h2>
        <p className="lede mt-6 text-cream/75 mx-auto max-w-2xl">
          Agende uma visita guiada com nossa equipe e veja, pessoalmente, o ambiente, a estrutura e
          o cuidado com cada detalhe da rotina escolar.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cream text-ink px-7 py-3.5 text-sm font-semibold tracking-wide transition-all hover:bg-gold-light hover:text-ink hover:shadow-soft"
          >
            Agendar uma visita
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a
            href="https://wa.me/5521976236086"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm font-semibold tracking-wide text-cream transition-all hover:border-gold hover:text-gold"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
