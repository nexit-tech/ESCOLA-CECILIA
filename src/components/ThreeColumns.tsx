import { threeColumns } from '@/lib/content';
import { Reveal } from './ui/Reveal';

export function ThreeColumns() {
  return (
    <section className="bg-cream-deep">
      <div className="container-wide py-28 md:py-36">
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-3 md:divide-x divide-ink/10">
          {threeColumns.map((col, i) => (
            <Reveal key={col.title} delay={i * 160}>
              <article className={`group ${i === 0 ? '' : 'md:pl-12'}`}>
                <p className="eyebrow">{col.eyebrow}</p>
                <h3 className="mt-6 font-serif text-3xl md:text-4xl text-ink leading-tight transition-colors group-hover:text-gold-deep">
                  {col.title}
                </h3>
                <p className="mt-5 text-ink/70 leading-relaxed">{col.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-gold-deep">
                  <span className="block h-px w-8 bg-gold-deep transition-all group-hover:w-16" />
                  <span className="opacity-70">{String(i + 1).padStart(2, '0')} / 03</span>
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
