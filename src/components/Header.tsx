'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navigation, school } from '@/lib/content';
import { images } from '@/lib/images';

type NavTheme = 'light' | 'dark';

const NAV_HEIGHT = 80;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<NavTheme>('light');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll quando menu aberto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Fecha menu ao mudar de rota
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Esc fecha menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    const intersecting = new Set<Element>();
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-nav-theme]'),
    );

    if (elements.length === 0) {
      setTheme('light');
      return;
    }

    const evaluate = () => {
      const hasDark = Array.from(intersecting).some(
        (el) => el.getAttribute('data-nav-theme') === 'dark',
      );
      setTheme(hasDark ? 'dark' : 'light');
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersecting.add(entry.target);
          else intersecting.delete(entry.target);
        });
        evaluate();
      },
      {
        rootMargin: `-${NAV_HEIGHT}px 0px -${Math.max(
          0,
          (typeof window !== 'undefined' ? window.innerHeight : 800) - NAV_HEIGHT - 1,
        )}px 0px`,
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Quando menu mobile aberto, força tema dark (painel é dark)
  const isDark = open || theme === 'dark';

  const navLinkClass = isDark
    ? 'text-cream/85 hover:text-gold-light after:bg-gold-light'
    : 'text-ink/80 hover:text-gold-deep after:bg-gold';

  const hamburgerClass = isDark
    ? 'border-cream/30 text-cream'
    : 'border-ink/15 text-ink';

  const headerBgClass = open
    ? 'bg-ink'
    : scrolled
      ? isDark
        ? 'bg-ink/75 backdrop-blur-md border-b border-cream/10'
        : 'bg-cream/85 backdrop-blur-md border-b border-ink/5'
      : 'bg-transparent';

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href.startsWith('/#')) return false;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        data-theme={theme}
        className={`sticky top-0 z-50 transition-[background-color,border-color] duration-500 ${headerBgClass}`}
      >
        <div className="container-wide grid grid-cols-2 lg:grid-cols-3 items-center py-4 md:py-5 relative">
          {/* Logo — quando menu abre no mobile, desliza pro centro */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label={school.name}
            className={`flex items-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:transform-none lg:justify-self-start ${
              open
                ? 'translate-x-[calc(50vw-50%-1.25rem)]'
                : 'translate-x-0 justify-self-start'
            }`}
          >
            <Image
              src={images.logo}
              alt={school.name}
              width={200}
              height={240}
              sizes="(max-width: 768px) 96px, 120px"
              priority
              className="h-14 w-auto md:h-16 object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center justify-center gap-8" aria-label="Menu principal">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap text-sm font-medium transition-colors duration-500 relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:transition-all hover:after:w-full ${navLinkClass}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <span aria-hidden className="hidden lg:block" />

          <button
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className={`relative lg:hidden justify-self-end inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-500 ${hamburgerClass}`}
          >
            <span className="sr-only">Menu</span>
            {/* Hamburger morph → X */}
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 right-0 h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0 rotate-0'
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-current transition-opacity duration-300 ${
                  open ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 right-0 h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-full -translate-y-full rotate-0'
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu — overlay full-screen */}
      <div
        className={`lg:hidden fixed inset-0 z-40 overflow-y-auto overscroll-contain transition-[opacity,visibility] duration-500 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ WebkitOverflowScrolling: 'touch' }}
        aria-hidden={!open}
      >
        {/* Backdrop com blur — fixed pra cobrir mesmo durante scroll */}
        <button
          tabIndex={-1}
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-ink/40 backdrop-blur-md -z-10"
        />

        {/* Painel deslizante */}
        <div
          className={`relative pt-24 px-6 bg-gradient-to-b from-ink via-ink to-ink/95 text-cream ${
            open ? 'animate-nav-slide-down' : ''
          }`}
          style={{
            minHeight: '100dvh',
            paddingBottom: 'calc(3rem + env(safe-area-inset-bottom, 0px))',
          }}
        >
          {/* Decoração — círculo dourado */}
          <div
            className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-gold-deep/20 blur-3xl pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute bottom-0 -left-20 h-[280px] w-[280px] rounded-full bg-gold/10 blur-3xl pointer-events-none"
            aria-hidden
          />

          <div className="container-wide relative">
            <p
              className="eyebrow text-gold-light"
              style={{ animation: open ? 'navItemIn 0.5s cubic-bezier(0.22,1,0.36,1) both' : undefined, animationDelay: '120ms' }}
            >
              Navegação
            </p>

            <nav className="mt-6 flex flex-col" aria-label="Menu mobile">
              {navigation.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{
                      animation: open ? 'navItemIn 0.55s cubic-bezier(0.22,1,0.36,1) both' : undefined,
                      animationDelay: `${180 + i * 70}ms`,
                    }}
                    className={`group flex items-baseline justify-between gap-4 py-5 border-b border-cream/10 transition-colors ${
                      active ? 'text-gold-light' : 'text-cream/90 hover:text-gold-light'
                    }`}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[10px] tracking-widest text-cream/35 tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-serif text-2xl sm:text-3xl leading-tight transition-transform duration-500 group-hover:translate-x-1">
                        {item.label}
                      </span>
                    </span>
                    <span
                      className={`text-cream/40 transition-all duration-500 group-hover:text-gold-light group-hover:translate-x-1 ${
                        active ? 'opacity-100' : 'opacity-60'
                      }`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* CTA rápido WhatsApp */}
            <div
              className="mt-10"
              style={{
                animation: open ? 'navItemIn 0.6s cubic-bezier(0.22,1,0.36,1) both' : undefined,
                animationDelay: `${180 + navigation.length * 70 + 80}ms`,
              }}
            >
              <a
                href="https://wa.me/5521976236086?text=Ol%C3%A1!%20Venho%20do%20site%20e%20tenho%20interesse%20em%20conhecer%20o%20Cec%C3%ADlia%20Pinheiro."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] text-white px-6 py-4 text-sm font-semibold tracking-wide transition-all hover:bg-[#1ebe57]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.695.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"/>
                </svg>
                Fale com a gente
              </a>
            </div>

            {/* Assinatura */}
            <div
              className="mt-10 pt-8 border-t border-cream/10 text-center"
              style={{
                animation: open ? 'navItemIn 0.7s cubic-bezier(0.22,1,0.36,1) both' : undefined,
                animationDelay: `${180 + navigation.length * 70 + 180}ms`,
              }}
            >
              <p className="font-accent italic text-base text-gold-light">
                Dedicação plena ao Ensino.
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-cream/40">
                Educandário Cecília Pinheiro · 1992
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
