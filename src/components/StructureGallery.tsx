import Image from 'next/image';
import { images } from '@/lib/images';

export function StructureGallery() {
  const photos = images.structure.slice(0, 12);
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-wide">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((src, i) => (
            <div
              key={src}
              className={`relative overflow-hidden rounded-2xl ring-1 ring-ink/5 shadow-soft ${
                i % 5 === 0 ? 'aspect-[4/5]' : 'aspect-[4/3]'
              }`}
            >
              <Image
                src={src}
                alt={`Espaço Cecília Pinheiro ${i + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
