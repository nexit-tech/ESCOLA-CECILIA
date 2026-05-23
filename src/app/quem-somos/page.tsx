import Image from 'next/image';
import { PageHero } from '@/components/PageHero';
import { Pillars } from '@/components/Pillars';
import { aboutContent } from '@/lib/content';
import { local } from '@/lib/images';

export const metadata = {
  title: 'Quem Somos — Educandário Cecília Pinheiro',
};

export default function QuemSomosPage() {
  return (
    <>
      <PageHero
        eyebrow="Nossa História"
        title={
          <>
            Uma escola em{' '}
            <span className="italic font-accent text-gold-deep">constante evolução</span>.
          </>
        }
        body={`Desde 1992, formamos gerações com afeto e responsabilidade pedagógica.`}
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-tight grid gap-14 lg:grid-cols-12 items-start">
          <aside className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-ink/10">
              <Image
                src={local.diretora}
                alt={aboutContent.director}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <p className="mt-6 font-serif text-2xl text-ink">{aboutContent.director}</p>
            <p className="text-sm text-ink/60">{aboutContent.role}</p>
          </aside>

          <article className="lg:col-span-8 prose-stone">
            <p className="font-serif italic text-xl text-gold-deep">
              “Posso dizer que a história da nossa escola está fortemente ligada à minha.”
            </p>
            <div className="mt-8 space-y-6 text-ink/80 text-lg leading-relaxed">
              {aboutContent.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <Pillars />
    </>
  );
}
