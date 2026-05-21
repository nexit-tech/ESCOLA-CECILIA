import Image from 'next/image';
import { whyCecilia } from '@/lib/content';
import { images } from '@/lib/images';
import { Reveal } from './ui/Reveal';

export function WhyCecilia() {
  return (
    <section className="bg-cream py-28 md:py-40">
      <div className="container-wide">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <p className="eyebrow">Por que Cecília Pinheiro</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance text-ink">
                Mais que uma escola,{' '}
                <span className="italic font-accent text-gold-deep">uma escolha</span>.
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 text-lg text-ink/70 leading-relaxed max-w-md">
                Cada detalhe da nossa proposta foi pensado para acompanhar as transformações da
                educação sem perder o cuidado que sempre nos definiu.
              </p>
            </Reveal>
            <Reveal direction="zoom" delay={400}>
              <div className="relative mt-10 aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-ink/10 hidden lg:block">
                <Image
                  src={images.structure[5]}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid gap-8">
            {whyCecilia.map((item, i) => (
              <Reveal key={item.number} delay={i * 140} direction="up">
                <article className="group relative border-t border-ink/10 pt-8 transition-colors hover:border-gold-deep">
                  <div className="grid grid-cols-12 gap-6 items-start">
                    <span className="col-span-12 md:col-span-2 font-serif text-5xl text-gold-deep/35 group-hover:text-gold-deep transition-colors">
                      {item.number}
                    </span>
                    <div className="col-span-12 md:col-span-10">
                      <h3 className="font-serif text-2xl md:text-3xl text-ink leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-ink/65 leading-relaxed max-w-xl">{item.body}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
