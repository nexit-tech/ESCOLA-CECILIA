import { PageHero } from '@/components/PageHero';
import { Activities } from '@/components/Activities';

export const metadata = {
  title: 'Atividades — Educandário Cecília Pinheiro',
};

export default function AtividadesPage() {
  return (
    <>
      <PageHero
        eyebrow="Atividades Extras"
        title={
          <>
            Talentos descobertos,{' '}
            <span className="italic font-accent text-gold-deep">horizontes ampliados</span>.
          </>
        }
        body="Atividades educacionais, esportivas e artísticas integradas à rotina escolar — a maior parte incluída na mensalidade."
      />
      <Activities />
    </>
  );
}
