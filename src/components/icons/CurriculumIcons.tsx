type IconProps = { className?: string };

const base = {
  viewBox: '0 0 48 48',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.3,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

function Identidade({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <circle cx="24" cy="18" r="6" />
      <path d="M12 38 C12 30, 18 26, 24 26 S 36 30, 36 38" />
    </svg>
  );
}

function Linguagem({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M8 12 H40 V32 H22 L14 38 V32 H8 Z" />
      <path d="M16 20 H32 M16 26 H26" />
    </svg>
  );
}

function Idiomas({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <circle cx="24" cy="24" r="16" />
      <path d="M8 24 H40 M24 8 C18 14, 16 19, 16 24 S 18 34, 24 40 M24 8 C30 14, 32 19, 32 24 S 30 34, 24 40" />
    </svg>
  );
}

function Ambiente({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M24 8 C30 14, 34 20, 34 26 a10 10 0 1 1 -20 0 C14 20, 18 14, 24 8 Z" />
      <path d="M24 22 V36 M20 28 L24 32 L28 28" />
    </svg>
  );
}

function Empreender({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M8 36 L16 26 L22 30 L32 18" />
      <path d="M26 18 H32 V24" />
      <path d="M8 40 H40" />
    </svg>
  );
}

function Artes({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M24 6 C14 6, 6 14, 6 24 C6 32, 12 36, 18 36 C20 36, 21 34, 21 32 C21 30, 19 28, 19 26 C19 24, 21 22, 24 22 H32 C36 22, 40 19, 40 14 C40 9, 32 6, 24 6 Z" />
      <circle cx="14" cy="20" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="20" cy="13" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="30" cy="13" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Natureza({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M10 20 L18 28 L24 22 L34 32" />
      <path d="M10 30 L18 22 L24 28 L34 18" />
      <path d="M6 38 H42" />
    </svg>
  );
}

function Musica({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <path d="M18 32 V12 L34 8 V28" />
      <circle cx="15" cy="32" r="4" />
      <circle cx="31" cy="28" r="4" />
    </svg>
  );
}

function Tecnologia({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden>
      <rect x="6" y="10" width="36" height="22" rx="2" />
      <path d="M14 38 H34 M20 32 V38 M28 32 V38" />
      <path d="M18 20 L14 21 L18 22 M30 20 L34 21 L30 22 M26 18 L22 24" />
    </svg>
  );
}

export const curriculumIconMap = {
  identidade: Identidade,
  linguagem: Linguagem,
  idiomas: Idiomas,
  ambiente: Ambiente,
  empreender: Empreender,
  artes: Artes,
  natureza: Natureza,
  musica: Musica,
  tecnologia: Tecnologia,
} as const;
