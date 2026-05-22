import Image from 'next/image';
import { local } from '@/lib/images';
import { Reveal } from './ui/Reveal';

export function TechHighlight() {
  return (
    <section className="relative bg-cream-deep py-20 md:py-32 overflow-hidden">
      <div className="container-wide grid gap-10 lg:gap-16 lg:grid-cols-12 items-center">
        <Reveal direction="right" className="lg:col-span-7">
          <div className="relative">
            <div className="relative aspect-[4/3] md:aspect-[5/4] overflow-hidden rounded-[2rem] ring-1 ring-ink/10 shadow-soft">
              <Image
                src={local.fotoImportante}
                alt="Sala Google for Education no Cecília Pinheiro"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 hidden md:flex h-24 w-24 items-center justify-center rounded-full bg-cream text-ink font-serif text-lg shadow-soft ring-1 ring-ink/5 animate-float-y">
              <span className="text-center leading-tight">
                Google<br />Education
              </span>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Tecnologia & Inovação</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 md:mt-6 font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance text-ink">
              Onde a tecnologia{' '}
              <span className="italic font-accent text-gold-deep">ensina</span>.
            </h2>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-6 max-w-xl text-base md:text-lg text-ink/75 leading-relaxed">
              Sala oficial Google for Education com Chromebooks, ferramentas digitais integradas à
              rotina e práticas pedagógicas que preparam alunos para os desafios do tempo presente.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-8 md:mt-10 grid grid-cols-2 gap-5 max-w-md">
              <div className="rounded-2xl bg-white px-5 py-4 ring-1 ring-ink/5 shadow-soft">
                <p className="font-serif text-2xl text-ink">Sala Google</p>
                <p className="mt-1 text-xs text-ink/55">para todos os segmentos</p>
              </div>
              <div className="rounded-2xl bg-white px-5 py-4 ring-1 ring-ink/5 shadow-soft">
                <p className="font-serif text-2xl text-ink">Chromebooks</p>
                <p className="mt-1 text-xs text-ink/55">disponíveis em aula</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
