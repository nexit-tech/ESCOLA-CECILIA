import { Reveal } from './ui/Reveal';

type Social = {
  name: string;
  handle: string;
  href: string;
  accent: string;
  icon: React.ReactNode;
};

const socials: Social[] = [
  {
    name: 'Instagram',
    handle: '@ceciliapinheirooficial',
    href: 'https://www.instagram.com/ceciliapinheirooficial',
    accent: 'from-fuchsia-500 via-pink-500 to-amber-400',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: '/educandarioceciliapinheiro',
    href: 'https://www.facebook.com/educandarioceciliapinheiro/',
    accent: 'from-blue-500 via-blue-600 to-blue-700',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '@ceciliapinheirooficial',
    href: 'https://m.youtube.com/channel/UC3xD0Q3Qnzp6QnAInuDi86w',
    accent: 'from-red-500 via-red-600 to-rose-700',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
      </svg>
    ),
  },
];

export function SocialMedia() {
  return (
    <section id="redes-sociais" className="relative bg-ink text-cream py-14 sm:py-20 md:py-28 overflow-hidden scroll-mt-24" data-nav-theme="dark">
      <div
        className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-gold-deep/15 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 -left-20 h-[360px] w-[360px] rounded-full bg-gold/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="container-wide relative">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <p className="eyebrow text-gold-light justify-center">Redes Sociais</p>
            <h2 className="mt-5 md:mt-6 font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight text-cream">
              Acompanhe nosso{' '}
              <span className="italic font-accent text-gold-light">dia a dia</span>.
            </h2>
            <p className="mt-5 text-base md:text-lg text-cream/70 leading-relaxed">
              Eventos, conquistas e bastidores da escola — siga para ficar por dentro.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {socials.map((social, i) => (
            <Reveal key={social.name} delay={i * 120}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block h-full rounded-2xl bg-cream/[0.04] ring-1 ring-cream/10 p-7 sm:p-8 backdrop-blur-sm transition-all hover:bg-cream/[0.07] hover:ring-cream/25 hover:-translate-y-1 overflow-hidden"
              >
                <span
                  className={`absolute top-0 left-0 h-0.5 w-full bg-gradient-to-r ${social.accent} opacity-70 transition-opacity group-hover:opacity-100`}
                  aria-hidden
                />

                <div className="flex flex-col items-center text-center">
                  <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-cream/[0.06] text-cream transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {social.icon}
                  </span>
                  <h3 className="mt-5 font-serif text-2xl sm:text-3xl text-cream">{social.name}</h3>
                  <p className="mt-1 text-sm text-cream/55">{social.handle}</p>

                  <div className="mt-6 pt-5 border-t border-cream/10 w-full">
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold-light transition-all group-hover:gap-3">
                      Seguir
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
