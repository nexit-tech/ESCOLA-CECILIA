import { whyCecilia } from '@/lib/content';
import { Reveal } from './ui/Reveal';

export function WhyCecilia() {
  return (
    <section className="bg-cream py-14 sm:py-20 md:py-32">
      <div className="container-wide">
        <div className="grid gap-10 sm:gap-12 lg:gap-20 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Por que Cecília Pinheiro</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 md:mt-6 font-serif text-[1.75rem] sm:text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-balance text-ink">
                Mais que uma escola,{' '}
                <span className="italic font-accent text-gold-deep">uma escolha</span>.
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 md:mt-8 text-base md:text-lg text-ink/70 leading-relaxed">
                Cada detalhe da nossa proposta foi pensado para acompanhar as transformações da
                educação sem perder o cuidado que sempre nos definiu.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {whyCecilia.map((item, i) => (
                <Reveal key={item.number} delay={i * 100}>
                  <li className="group grid grid-cols-12 gap-4 md:gap-6 py-7 md:py-9 transition-colors hover:bg-cream-deep -mx-4 md:-mx-6 px-4 md:px-6 rounded-xl">
                    <span className="col-span-2 md:col-span-2 font-serif text-3xl md:text-4xl text-gold-deep/40 group-hover:text-gold-deep transition-colors">
                      {item.number}
                    </span>
                    <div className="col-span-10">
                      <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-ink leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm md:text-base text-ink/65 leading-relaxed max-w-xl">
                        {item.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
