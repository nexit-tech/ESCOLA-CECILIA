import { statsCounter } from '@/lib/content';
import { CountUp } from './ui/CountUp';
import { Reveal } from './ui/Reveal';

export function StatsCounter() {
  return (
    <section className="relative bg-cream-deep border-y border-ink/10 overflow-hidden">
      <div className="container-wide py-20 md:py-28">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end mb-14">
            <div className="lg:col-span-7">
              <p className="eyebrow">Educandário em números</p>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05] tracking-tight text-balance text-ink">
                Três décadas de história contadas em{' '}
                <span className="italic font-accent text-gold-deep">números</span>.
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-y-12 gap-x-8 grid-cols-2 lg:grid-cols-4 divide-x divide-ink/10">
          {statsCounter.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 120}>
              <div className={`${i === 0 ? '' : 'pl-8'} text-ink`}>
                <p className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight">
                  <CountUp to={stat.number} suffix={stat.suffix} duration={2200} />
                </p>
                <p className="mt-5 text-xs md:text-sm uppercase tracking-[0.22em] text-ink/55">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
