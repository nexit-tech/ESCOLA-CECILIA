import { PageHero } from '@/components/PageHero';
import { SegmentsGrid } from '@/components/SegmentsGrid';
import { Curriculum } from '@/components/Curriculum';
import { CTA } from '@/components/CTA';

export const metadata = {
  title: 'Segmentos — Educandário Cecília Pinheiro',
};

export default function SegmentosPage() {
  return (
    <>
      <PageHero
        eyebrow="Segmentos"
        title={
          <>
            Cada etapa,{' '}
            <span className="italic font-accent text-gold-deep">um cuidado próprio</span>.
          </>
        }
        body="Da Educação Infantil ao Ensino Médio, nossa proposta pedagógica acompanha cada fase com atenção, escuta e profundidade."
      />
      <SegmentsGrid compact />
      <Curriculum />
      <CTA />
    </>
  );
}
