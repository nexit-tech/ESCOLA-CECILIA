type IconProps = {
  className?: string;
};

const baseProps = {
  viewBox: '0 0 64 64',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.3,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

export function CompassIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden>
      <circle cx="32" cy="32" r="26" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" stroke="none" />
      <path d="M32 8v5M32 51v5M8 32h5M51 32h5" />
      <path d="M32 12 L26 32 L32 52 L38 32 Z" opacity="0.65" />
      <path d="M32 12 L38 32 L32 52 Z" fill="currentColor" fillOpacity="0.18" stroke="none" />
      <text
        x="32"
        y="22"
        textAnchor="middle"
        fontSize="6"
        fill="currentColor"
        stroke="none"
        fontFamily="var(--font-display), serif"
        fontStyle="italic"
      >
        N
      </text>
    </svg>
  );
}

export function EyeIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden>
      <path d="M4 32 C12 18, 22 12, 32 12 S52 18, 60 32 C52 46, 42 52, 32 52 S12 46, 4 32 Z" />
      <circle cx="32" cy="32" r="9" />
      <circle cx="32" cy="32" r="3.5" fill="currentColor" stroke="none" />
      <path d="M28.5 28.5 a1.5 1.5 0 0 0 0 3" stroke="white" strokeWidth="1.2" opacity="0.9" />
      <path d="M14 14 l3 3 M50 14 l-3 3 M14 50 l3 -3 M50 50 l-3 -3" opacity="0.4" />
    </svg>
  );
}

export function ColumnIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden>
      {/* Capital */}
      <path d="M14 12 H50 V16 H14 Z" />
      <path d="M16 16 H48 V20 H16 Z" />
      {/* Shaft with flutes */}
      <path d="M18 20 V48" />
      <path d="M24 20 V48" />
      <path d="M32 20 V48" />
      <path d="M40 20 V48" />
      <path d="M46 20 V48" />
      <path d="M18 20 H46" />
      <path d="M18 48 H46" />
      {/* Base */}
      <path d="M16 48 H48 V52 H16 Z" />
      <path d="M12 52 H52 V56 H12 Z" />
      {/* Ornamental star */}
      <path
        d="M32 28 l1.2 2.6 2.8 .3 -2.1 1.9 .6 2.8 -2.5 -1.4 -2.5 1.4 .6 -2.8 -2.1 -1.9 2.8 -.3 z"
        fill="currentColor"
        fillOpacity="0.25"
        strokeWidth="0.8"
      />
    </svg>
  );
}

export const pillarIconMap = {
  missao: CompassIcon,
  visao: EyeIcon,
  valores: ColumnIcon,
} as const;
