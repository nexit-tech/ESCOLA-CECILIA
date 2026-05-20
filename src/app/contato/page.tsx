import { PageHero } from '@/components/PageHero';
import { school } from '@/lib/content';

export const metadata = {
  title: 'Fale Conosco — Educandário Cecília Pinheiro',
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Fale Conosco"
        title={
          <>
            Estamos prontos para{' '}
            <span className="italic font-accent text-gold-deep">te receber</span>.
          </>
        }
        body="Tire dúvidas, agende uma visita ou faça sua matrícula. Teremos imensa satisfação em conversar com você."
      />

      <section className="bg-cream py-20 md:py-28">
        <div className="container-tight grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-ink">Visite-nos</h2>
            <div className="divider-ornament justify-start mt-4" aria-hidden />
            <address className="not-italic mt-8 space-y-2 text-ink/80 leading-relaxed text-lg">
              <p className="font-serif">{school.address.street}</p>
              <p>{school.address.district}</p>
              <p className="text-ink/60">{school.address.landmark}</p>
              <p>CEP: {school.address.zip}</p>
            </address>

            <h3 className="mt-10 font-serif text-2xl text-ink">Telefones</h3>
            <ul className="mt-4 space-y-2">
              {school.phones.map((p) => (
                <li key={p.number} className="text-lg">
                  <span className="text-ink/60 mr-2">{p.label}:</span>
                  <a
                    href={
                      p.whatsapp
                        ? `https://wa.me/55${p.number.replace(/\D/g, '')}`
                        : `tel:${p.number.replace(/\D/g, '')}`
                    }
                    className="font-serif text-gold-deep hover:text-ink transition-colors"
                  >
                    {p.number}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 font-serif text-2xl text-ink">Envie um e-mail</h3>
            <p className="mt-4 text-ink/75 leading-relaxed">
              Você pode tirar suas dúvidas, fazer uma sugestão e contar sua opinião sobre a escola.
              Teremos imensa satisfação em lhe atender.
            </p>
            <a
              href={`mailto:${school.email}`}
              className="btn-primary mt-6"
            >
              {school.email}
            </a>
          </div>

          <div className="relative aspect-[4/5] lg:aspect-auto overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-ink/10">
            <iframe
              title="Mapa Educandário Cecília Pinheiro"
              src={school.mapEmbedSrc}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
