import { marqueeItems } from '@/lib/content';
import { Marquee } from './ui/Marquee';

export function MarqueeStrip() {
  return (
    <section className="relative bg-ink text-cream py-10 md:py-14 overflow-hidden" data-nav-theme="dark">
      <Marquee
        items={marqueeItems}
        className="font-serif text-3xl md:text-5xl lg:text-6xl leading-none"
        separator={
          <span className="text-gold-light font-sans not-italic text-3xl md:text-5xl">✦</span>
        }
      />
    </section>
  );
}
