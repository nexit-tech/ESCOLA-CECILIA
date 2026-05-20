import { stats } from '@/lib/content';

export function StatsStrip() {
  return (
    <section className="bg-cream-warm border-y border-gold/20">
      <div className="container-wide grid grid-cols-2 md:grid-cols-4 divide-x divide-gold/15">
        {stats.map((stat) => (
          <div key={stat.label} className="px-6 py-10 text-center">
            <p className="font-serif text-3xl md:text-4xl text-ink">{stat.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.22em] text-ink/55">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
