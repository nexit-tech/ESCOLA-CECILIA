import Image from 'next/image';
import { mascots } from '@/lib/content';
import { local } from '@/lib/images';
import { Reveal } from './ui/Reveal';

export function Mascots() {
  return (
    <section className="relative bg-white py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="container-wide relative">
        <div className="grid gap-8 lg:gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 text-center lg:text-left">
            <Reveal>
              <p className="eyebrow lg:justify-start justify-center">{mascots.badge}</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 md:mt-6 font-serif text-[1.75rem] sm:text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-balance text-ink">
                Conheça{' '}
                <span className="italic font-accent text-gold-deep">Cecilinha</span> e{' '}
                <span className="italic font-accent text-gold-deep">Lipe</span>.
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-md mx-auto lg:mx-0 text-base md:text-lg text-ink/70 leading-relaxed">
                {mascots.body}
              </p>
            </Reveal>
          </div>

          <Reveal direction="left" className="lg:col-span-7 max-w-md mx-auto lg:max-w-none lg:mx-0 w-full" delay={200}>
            <div className="relative grid grid-cols-2 gap-3 sm:gap-6 md:gap-12 items-end">
              <div className="relative h-[280px] sm:h-[360px] md:h-[480px] animate-float-y">
                <Image
                  src={local.mascotes.cecilinha}
                  alt="Mascote Cecilinha"
                  fill
                  sizes="(max-width: 1024px) 45vw, 25vw"
                  className="object-contain drop-shadow-[0_20px_25px_rgba(14,58,117,0.15)]"
                />
              </div>
              <div
                className="relative h-[280px] sm:h-[360px] md:h-[480px] animate-float-y"
                style={{ animationDelay: '1.2s' }}
              >
                <Image
                  src={local.mascotes.lipe}
                  alt="Mascote Lipe"
                  fill
                  sizes="(max-width: 1024px) 45vw, 25vw"
                  className="object-contain drop-shadow-[0_20px_25px_rgba(14,58,117,0.15)]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
