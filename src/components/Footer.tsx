import Link from 'next/link';
import { navigation, school } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 sm:mt-24 bg-ink text-cream" data-nav-theme="dark">
      <div className="container-wide grid gap-10 sm:gap-12 py-12 sm:py-16 md:grid-cols-3">
        <div>
          <p className="eyebrow text-gold">Educandário</p>
          <h3 className="mt-3 font-serif text-2xl text-cream">Cecília Pinheiro</h3>
          <p className="mt-4 text-cream/70 leading-relaxed max-w-sm">
            Educação completa, valores cristãos e excelência pedagógica desde {school.founded}.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg text-gold">Visite-nos</h4>
          <address className="not-italic mt-4 space-y-1 text-cream/80 text-sm leading-relaxed">
            <p>{school.address.street}</p>
            <p>{school.address.district}</p>
            <p className="text-cream/60">{school.address.landmark}</p>
            <p>CEP: {school.address.zip}</p>
          </address>
          <div className="mt-5 space-y-1 text-sm">
            {school.phones.map((p) => (
              <p key={p.number}>
                <span className="text-cream/60">{p.label}: </span>
                <a
                  href={`tel:${p.number.replace(/\D/g, '')}`}
                  className="text-cream hover:text-gold transition-colors"
                >
                  {p.number}
                </a>
              </p>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg text-gold">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream/80 hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/55 md:flex-row">
          <p>© {year} {school.name}. Todos os direitos reservados.</p>
          <p className="font-serif italic">Educar é semear o futuro.</p>
        </div>
      </div>
    </footer>
  );
}
