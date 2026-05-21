import { threeColumns } from '@/lib/content';

export function ThreeColumns() {
  return (
    <section className="bg-cream">
      <div className="container-wide py-28 md:py-36">
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/10">
          {threeColumns.map((col, i) => (
            <article key={col.title} className={`pt-14 md:pt-0 ${i === 0 ? '' : 'md:pl-12'}`}>
              <p className="eyebrow">{col.eyebrow}</p>
              <h3 className="mt-6 font-serif text-3xl md:text-4xl text-ink leading-tight">
                {col.title}
              </h3>
              <p className="mt-5 text-ink/70 leading-relaxed">{col.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
