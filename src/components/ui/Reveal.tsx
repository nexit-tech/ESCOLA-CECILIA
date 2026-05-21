'use client';

import { useEffect, useRef, useState } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom';

const offsetMap: Record<Direction, string> = {
  up: 'translate-y-10',
  down: '-translate-y-10',
  left: 'translate-x-10',
  right: '-translate-x-10',
  fade: '',
  zoom: 'scale-[0.96]',
};

type Props = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  duration = 900,
  direction = 'up',
  className = '',
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setVisible(true), delay);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: '-40px 0px -10% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, once]);

  const offClass = offsetMap[direction];

  return (
    <div
      ref={ref}
      style={{ transitionDuration: `${duration}ms` }}
      className={`will-change-transform transition-all ease-out ${
        visible
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
          : `opacity-0 ${offClass}`
      } ${className}`}
    >
      {children}
    </div>
  );
}
