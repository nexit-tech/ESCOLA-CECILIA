'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navigation, school } from '@/lib/content';
import { images } from '@/lib/images';

type NavTheme = 'light' | 'dark';

const NAV_HEIGHT = 80;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<NavTheme>('light');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  const isDark = theme === 'dark';

  const navLinkClass = isDark
    ? 'text-cream/85 hover:text-gold-light after:bg-gold-light'
    : 'text-ink/80 hover:text-gold-deep after:bg-gold';

  const hamburgerClass = isDark
    ? 'border-cream/30 text-cream'
    : 'border-ink/15 text-ink';

  const headerBgClass = scrolled
    ? isDark
      ? 'bg-ink/75 backdrop-blur-md border-b border-cream/10'
      : 'bg-cream/85 backdrop-blur-md border-b border-ink/5'
    : 'bg-transparent';

  return (
    <header
      data-theme={theme}
      className={`sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${headerBgClass}`}
    >
      <div className="container-wide grid grid-cols-2 lg:grid-cols-3 items-center py-4 md:py-5">
        <Link href="/" className="flex items-center justify-self-start" aria-label={school.name}>
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
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className={`lg:hidden justify-self-end inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-500 ${hamburgerClass}`}
        >
          <span className="sr-only">Menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" strokeLinecap="round" />
                <path d="M4 12h16" strokeLinecap="round" />
                <path d="M4 17h16" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          className={`lg:hidden border-t ${
            isDark
              ? 'border-cream/10 bg-ink/95'
              : 'border-ink/10 bg-cream/95'
          } backdrop-blur`}
        >
          <nav className="container-wide flex flex-col py-4" aria-label="Menu mobile">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-base border-b last:border-0 ${
                  isDark
                    ? 'text-cream/85 border-cream/10'
                    : 'text-ink/85 border-ink/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
