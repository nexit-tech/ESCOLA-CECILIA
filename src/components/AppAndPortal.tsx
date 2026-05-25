import Image from 'next/image';
import { local } from '@/lib/images';
import { Reveal } from './ui/Reveal';

export function AppAndPortal() {
  return (
    <section
      id="app-portal"
      className="relative bg-cream-deep py-16 sm:py-24 md:py-32 overflow-hidden scroll-mt-24"
    >
      <div
        className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-gold/15 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 -right-32 h-[460px] w-[460px] rounded-full bg-gold-deep/15 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="container-wide relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="eyebrow justify-center">Acesso rápido</p>
            <h2 className="mt-5 md:mt-6 font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight text-balance text-ink">
              Tudo da escola na{' '}
              <span className="italic font-accent text-gold-deep">palma da mão</span>.
            </h2>
            <p className="mt-5 text-base md:text-lg text-ink/70 leading-relaxed">
              Recados, cronogramas, boletins e informações da rotina escolar — sempre por perto.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:gap-8 lg:grid-cols-5">
          {/* APP AGENDA — card grande (3 cols) */}
          <Reveal className="lg:col-span-3">
            <article className="group relative h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-ink via-ink to-ink-soft text-cream shadow-soft ring-1 ring-ink/20">
              <div
                className="absolute -top-24 -right-16 h-[320px] w-[320px] rounded-full bg-gold-light/20 blur-3xl pointer-events-none"
                aria-hidden
              />
              <div
                className="absolute -bottom-32 -left-10 h-[280px] w-[280px] rounded-full bg-gold/10 blur-3xl pointer-events-none"
                aria-hidden
              />

              {/* MOBILE LAYOUT (até sm) — texto + qr lado a lado + Carol embaixo */}
              <div className="relative sm:hidden p-6 pb-0">
                <p className="text-[10px] uppercase tracking-[0.32em] text-gold-light">
                  Aplicativo
                </p>
                <h3 className="mt-3 font-serif text-3xl leading-[1.05] tracking-tight text-cream">
                  Agenda{' '}
                  <span className="italic font-accent text-gold-light">Cecília</span>
                </h3>
                <p className="mt-3 text-cream/75 text-sm leading-relaxed">
                  Recados, cronogramas & informações importantes da rotina escolar.
                </p>

                <a
                  href="https://onelink.to/tbgh5d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-cream text-ink px-6 py-3.5 text-sm font-semibold tracking-wide transition-all active:bg-gold-light"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <rect x="6" y="2" width="12" height="20" rx="2" />
                    <line x1="12" y1="18" x2="12" y2="18" strokeLinecap="round" />
                  </svg>
                  Baixe nosso app
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-cream">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>

                {/* QR + Carol lado a lado no mobile */}
                <div className="mt-6 grid grid-cols-[auto_1fr] gap-4 items-end">
                  <div className="flex flex-col items-center gap-2 pb-2">
                    <div className="relative h-24 w-24 overflow-hidden rounded-xl bg-cream p-2 ring-1 ring-cream/20">
                      <Image
                        src={local.qr}
                        alt="QR Code do app"
                        fill
                        sizes="96px"
                        className="object-contain p-1"
                      />
                    </div>
                    <p className="text-[10px] text-cream/70 text-center leading-tight max-w-[96px]">
                      Compartilhe<br />ou escaneie
                    </p>
                  </div>

                  <div className="relative h-[280px] -mr-6 -mb-1 animate-float-y">
                    <Image
                      src={local.carol}
                      alt="Mascote Carol com app Agenda Cecília"
                      fill
                      sizes="240px"
                      className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]"
                    />
                  </div>
                </div>
              </div>

              {/* DESKTOP LAYOUT (sm+) — duas colunas */}
              <div className="relative hidden sm:grid sm:grid-cols-5 gap-4 p-9 md:p-10">
                <div className="sm:col-span-3 flex flex-col">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-gold-light">
                    Aplicativo
                  </p>
                  <h3 className="mt-3 font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight text-cream">
                    Agenda{' '}
                    <span className="italic font-accent text-gold-light">Cecília</span>
                  </h3>
                  <p className="mt-4 text-cream/75 text-base leading-relaxed max-w-xs">
                    Recados, cronogramas & informações importantes da rotina escolar.
                  </p>

                  <div className="mt-7 flex flex-col gap-4">
                    <a
                      href="https://onelink.to/tbgh5d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn inline-flex items-center justify-center gap-3 rounded-full bg-cream text-ink px-6 py-3.5 text-sm font-semibold tracking-wide transition-all hover:bg-gold-light hover:shadow-soft self-start"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <rect x="6" y="2" width="12" height="20" rx="2" />
                        <line x1="12" y1="18" x2="12" y2="18" strokeLinecap="round" />
                      </svg>
                      Baixe nosso app
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover/btn:translate-x-1">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </a>

                    <div className="flex items-center gap-3 mt-2">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-cream p-2 ring-1 ring-cream/20">
                        <Image
                          src={local.qr}
                          alt="QR Code do app"
                          fill
                          sizes="80px"
                          className="object-contain p-1"
                        />
                      </div>
                      <p className="text-xs text-cream/65 leading-snug max-w-[140px]">
                        Ou aponte sua câmera <br /> para o QR ao lado.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2 relative flex items-end justify-center -ml-6 md:-ml-10 lg:-ml-14 -mb-9 md:-mb-10 pr-4 md:pr-6 min-h-[360px] md:min-h-[420px]">
                  <div className="relative w-full h-full animate-float-y">
                    <Image
                      src={local.carol}
                      alt="Mascote Carol com app Agenda Cecília"
                      fill
                      sizes="(max-width: 1280px) 360px, 420px"
                      className="object-contain object-bottom drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)]"
                    />
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* PORTAL DO ALUNO — card (2 cols) */}
          <Reveal className="lg:col-span-2" delay={180}>
            <a
              href="https://ceciliapinheiro.siglobal.net.br/si_usuarios/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-full flex flex-col overflow-hidden rounded-[2rem] bg-cream shadow-soft ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:ring-gold-deep/30 hover:shadow-ring"
            >
              <div
                className="absolute -top-20 -right-20 h-[260px] w-[260px] rounded-full bg-gold/10 blur-3xl pointer-events-none"
                aria-hidden
              />
              <div
                className="absolute -bottom-20 -left-16 h-[220px] w-[220px] rounded-full bg-gold-deep/10 blur-3xl pointer-events-none"
                aria-hidden
              />

              <div className="relative flex-1 flex flex-col justify-center p-7 sm:p-9 md:p-10">
                <p className="text-[10px] uppercase tracking-[0.32em] text-gold-deep">
                  Portal
                </p>
                <h3 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
                  Portal do{' '}
                  <span className="italic font-accent text-gold-deep">Aluno</span>
                </h3>
                <p className="mt-5 text-ink/65 text-sm sm:text-base leading-relaxed max-w-sm">
                  Boletins, calendário, comunicados e tudo que você precisa em um só lugar.
                </p>

                <div className="mt-8 inline-flex items-center gap-3 text-sm font-semibold text-ink transition-colors group-hover:text-gold-deep">
                  Acessar portal
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-cream transition-all group-hover:bg-gold-deep group-hover:translate-x-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
