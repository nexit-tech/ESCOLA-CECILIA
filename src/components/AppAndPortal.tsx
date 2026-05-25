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
                    <p className="text-[10px] text-cream/75 text-center leading-tight max-w-[96px] font-medium">
                      Baixe com<br />esse QR
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
              <div className="relative hidden sm:grid sm:grid-cols-5 gap-4 p-9 md:p-10 min-h-[520px] md:min-h-[580px]">
                <div className="sm:col-span-3 flex flex-col h-full relative z-10">
                  {/* Bloco superior — título + descrição + botão */}
                  <div>
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

                    <a
                      href="https://onelink.to/tbgh5d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-cream text-ink px-6 py-3.5 text-sm font-semibold tracking-wide transition-all hover:bg-gold-light hover:shadow-soft self-start"
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
                  </div>

                  {/* QR empurrado pra base — bem maior */}
                  <div className="mt-auto pt-10 flex items-center gap-5">
                    <div className="relative h-32 w-32 md:h-36 md:w-36 shrink-0 overflow-hidden rounded-2xl bg-cream p-3 ring-1 ring-cream/25 shadow-soft">
                      <Image
                        src={local.qr}
                        alt="QR Code do app"
                        fill
                        sizes="144px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-gold-light font-semibold">
                        Atalho
                      </p>
                      <p className="mt-1.5 font-serif text-lg md:text-xl text-cream leading-snug">
                        Baixe direto<br />com esse QR
                      </p>
                    </div>
                  </div>
                </div>

                {/* Carol — ancorada no canto inferior, invade a esquerda */}
                <div className="sm:col-span-2 absolute right-0 bottom-0 top-0 w-[58%] sm:w-[55%] md:w-[52%] flex items-end justify-center pointer-events-none">
                  <div className="relative w-full h-[88%] sm:h-[92%] md:h-[96%] animate-float-y -mb-10 md:-mb-12 -ml-2 md:-ml-4">
                    <Image
                      src={local.carol}
                      alt="Mascote Carol com app Agenda Cecília"
                      fill
                      sizes="(max-width: 1280px) 440px, 520px"
                      className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.5)]"
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

              {/* Conteúdo de texto */}
              <div className="relative p-7 sm:p-9 md:p-10 pb-4 sm:pb-5">
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

                <div className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-ink transition-colors group-hover:text-gold-deep">
                  Acessar portal
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-cream transition-all group-hover:bg-gold-deep group-hover:translate-x-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Preview do Portal — encaixado no rodapé, centralizado */}
              <div className="relative mt-auto w-full overflow-hidden bg-gradient-to-b from-transparent via-cream-deep/30 to-cream-deep/60">
                <div className="relative mx-auto w-full max-w-[220px] sm:max-w-[240px] aspect-[10/13] drop-shadow-[0_18px_30px_rgba(14,58,117,0.18)] transition-transform duration-700 ease-out group-hover:-translate-y-2">
                  <Image
                    src={local.portal}
                    alt="Tela de login do Portal do Aluno"
                    fill
                    sizes="(max-width: 1024px) 220px, 240px"
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
