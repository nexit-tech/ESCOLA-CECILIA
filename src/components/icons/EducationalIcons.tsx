type IconProps = { className?: string };

const base = {
  viewBox: '0 0 64 64',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function ValuesIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M32 8 L12 16 V32 C12 44 20 52 32 56 C44 52 52 44 52 32 V16 L32 8 Z" />
      <path d="M32 24 V40 M24 32 H40" strokeWidth="1.8" />
    </svg>
  );
}

export function HolisticIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="14" opacity="0.55" />
      <circle cx="32" cy="32" r="6" opacity="0.3" />
      <circle cx="32" cy="32" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TechIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <rect x="8" y="14" width="48" height="30" rx="2" />
      <path d="M20 50 H44 M28 44 V50 M36 44 V50" />
      <path d="M22 24 L18 28 L22 32 M42 24 L46 28 L42 32 M36 22 L28 34" opacity="0.85" />
    </svg>
  );
}

export function LanguageIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <circle cx="32" cy="32" r="22" />
      <path d="M10 32 H54" />
      <path d="M32 10 C24 18 22 26 22 32 C22 38 24 46 32 54" />
      <path d="M32 10 C40 18 42 26 42 32 C42 38 40 46 32 54" />
    </svg>
  );
}

export function ArtsIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M32 8 L37 24 L54 24 L40 34 L45 52 L32 41 L19 52 L24 34 L10 24 L27 24 Z" />
    </svg>
  );
}

export const educationalIconMap = {
  valores: ValuesIcon,
  integral: HolisticIcon,
  tecnologia: TechIcon,
  idiomas: LanguageIcon,
  movimento: ArtsIcon,
} as const;
