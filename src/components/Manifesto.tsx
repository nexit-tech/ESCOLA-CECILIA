import { manifesto } from '@/lib/content';

export function Manifesto() {
  return (
    <section className="bg-cream">
      <div className="container-wide py-28 md:py-40">
        <div className="mx-auto max-w-5xl">
          <p className="eyebrow">{manifesto.badge}</p>
          <p className="mt-8 font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-balance text-ink">
            {manifesto.statement}
          </p>
          <p className="mt-10 font-accent italic text-xl text-gold-deep">
            — {manifesto.signoff}
          </p>
        </div>
      </div>
    </section>
  );
}
