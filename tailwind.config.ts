import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E3A75',
          soft: '#1A4FA0',
          mute: '#4A6FA5',
        },
        cream: {
          DEFAULT: '#F4F8FD',
          deep: '#E6EFFA',
          warm: '#DDE9F5',
        },
        gold: {
          DEFAULT: '#2E8BE6',
          deep: '#1E73D6',
          light: '#7CC0F0',
        },
        sky: {
          soft: '#C8E2F7',
        },
      },
      fontFamily: {
        serif: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-accent)', 'serif'],
      },
      maxWidth: {
        prose: '70ch',
      },
      boxShadow: {
        soft: '0 12px 40px -16px rgba(14, 58, 117, 0.25)',
        ring: '0 0 0 1px rgba(46, 139, 230, 0.35), 0 12px 30px -12px rgba(14, 58, 117, 0.35)',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.05  0 0 0 0 0.05  0 0 0 0 0.05  0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marqueeX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        navSlideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)', clipPath: 'inset(0 0 100% 0)' },
          '60%': { opacity: '1' },
          '100%': { opacity: '1', transform: 'translateY(0)', clipPath: 'inset(0 0 0% 0)' },
        },
        navItemIn: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        backdropIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'marquee-x': 'marqueeX 40s linear infinite',
        'marquee-x-slow': 'marqueeX 60s linear infinite',
        'float-y': 'floatY 6s ease-in-out infinite',
        'nav-slide-down': 'navSlideDown 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
        'nav-item-in': 'navItemIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'backdrop-in': 'backdropIn 0.4s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
