import { PageHero } from '@/components/PageHero';
import { SegmentsJourney } from '@/components/SegmentsJourney';
import { Curriculum } from '@/components/Curriculum';

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
        body="Da Educação Infantil ao Ensino Médio — etapas contínuas, com uma proposta pedagógica integrada."
      />
      <SegmentsJourney />
      <Curriculum />
    </>
  );
}
