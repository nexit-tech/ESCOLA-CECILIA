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
        body="Do 1º ano do Fundamental à 3ª série do Ensino Médio — três etapas, uma continuidade pedagógica."
      />
      <SegmentsJourney />
      <Curriculum />
    </>
  );
}
