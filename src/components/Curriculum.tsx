import Image from 'next/image';
import { curriculum } from '@/lib/content';
import { images } from '@/lib/images';

export function Curriculum() {
  return (
    <section className="relative bg-cream">
      <div className="container-wide py-24 md:py-32 grid gap-16 lg:grid-cols-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-ink/5">
            <Image
              src={images.curriculum}
              alt="Matriz curricular Cecília Pinheiro"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain bg-white p-8"
            />
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <p className="eyebrow">{curriculum.eyebrow}</p>
          <h2 className="display-2 mt-5 text-balance">{curriculum.title}</h2>
          <div className="mt-6 space-y-4 text-ink/75 leading-relaxed">
            {curriculum.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {curriculum.subjects.map((subject) => (
              <li
                key={subject}
                className="flex items-center gap-3 rounded-xl bg-white/70 px-4 py-3 ring-1 ring-ink/5"
              >
                <span className="block h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="font-serif italic text-ink/85">{subject}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
