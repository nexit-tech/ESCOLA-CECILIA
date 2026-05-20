import Image from 'next/image';
import { activities } from '@/lib/content';
import { images } from '@/lib/images';
import { SectionHeader } from './SectionHeader';

const photos = [images.activities.educational, images.activities.sports, images.activities.projects];

export function Activities() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Atividades"
          title={
            <>
              Aprender vai muito além{' '}
              <span className="italic font-accent text-gold-deep">da sala de aula</span>.
            </>
          }
          body="Mais de 20 atividades extracurriculares — a maior parte já incluída na mensalidade — ampliam horizontes, descobrem talentos e formam pessoas completas."
          align="center"
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {activities.map((group, i) => (
            <article key={group.category} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-ink/5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={photos[i]}
                  alt={group.category}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <h3 className="absolute bottom-5 left-6 font-serif text-2xl text-cream">
                  {group.category}
                </h3>
              </div>
              <ul className="flex-1 px-7 py-7 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ink/80 text-[15px]">
                    <span className="mt-2 block h-1 w-1 rounded-full bg-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
