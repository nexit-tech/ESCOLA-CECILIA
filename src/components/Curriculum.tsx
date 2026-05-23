import { curriculum } from '@/lib/content';
import { curriculumIconMap } from './icons/CurriculumIcons';
import { Reveal } from './ui/Reveal';

export function Curriculum() {
  return (
    <section className="relative bg-cream-deep py-20 md:py-32 overflow-hidden">
      <div
        className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-0 -right-32 h-[360px] w-[360px] rounded-full bg-gold-deep/10 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="container-wide relative">
        <div className="mb-14 md:mb-20">
          <Reveal>
            <p className="eyebrow">{curriculum.eyebrow}</p>
            <h2 className="mt-5 md:mt-6 font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-balance text-ink max-w-3xl">
              Um currículo que dialoga{' '}
              <span className="italic font-accent text-gold-deep">com o mundo</span>.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-px bg-ink/10 rounded-2xl overflow-hidden ring-1 ring-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {curriculum.subjects.map((subject, i) => {
            const Icon = curriculumIconMap[subject.key as keyof typeof curriculumIconMap];
            return (
              <Reveal key={subject.key} delay={i * 60}>
                <article className="group relative h-full flex flex-col bg-cream p-7 md:p-8 transition-colors hover:bg-white">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-gold-deep transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110">
                      <Icon className="h-9 w-9 md:h-10 md:w-10" />
                    </span>
                    <span className="font-mono text-[10px] tracking-widest text-ink/35">
                      {String(i + 1).padStart(2, '0')} / 09
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-lg md:text-xl text-ink leading-tight transition-colors group-hover:text-gold-deep">
                    {subject.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink/65 leading-relaxed flex-1">
                    {subject.body}
                  </p>

                  <span
                    className="absolute bottom-0 left-0 h-px w-0 bg-gold-deep transition-[width] duration-700 group-hover:w-full"
                    aria-hidden
                  />
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 md:mt-20 grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-1 hidden lg:block">
              <span className="block h-px w-12 bg-gold-deep mt-3" aria-hidden />
            </div>
            <p className="lg:col-span-11 font-accent italic text-xl md:text-2xl lg:text-3xl leading-relaxed text-ink/85">
              “Com valores cristãos como alicerce, apostamos em um ensino mediado por
              tecnologia e inovação — com material didático completo e atualizado anualmente.”
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
