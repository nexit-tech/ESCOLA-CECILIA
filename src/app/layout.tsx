import type { Metadata } from 'next';
import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const accent = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['italic', 'normal'],
  variable: '--font-accent',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Educandário Cecília Pinheiro — Educação Completa',
  description:
    'Da Educação Infantil ao Ensino Médio, formamos cidadãos preparados para os desafios do tempo presente, com tradição pedagógica, valores cristãos e inovação.',
  openGraph: {
    title: 'Educandário Cecília Pinheiro',
    description:
      'Educação completa, valores cristãos e excelência pedagógica desde 1992.',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${accent.variable} ${body.variable}`}>
      <head>
        <link
          rel="preconnect"
          href="https://yata-apix-f86015e4-b0f0-46cb-93d0-ebd6a0cb6dd7.s3-object.locaweb.com.br"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://yata-apix-f86015e4-b0f0-46cb-93d0-ebd6a0cb6dd7.s3-object.locaweb.com.br"
        />
        <link rel="preconnect" href="https://yata.s3-object.locaweb.com.br" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://yata.s3-object.locaweb.com.br" />
        <link
          rel="preconnect"
          href="https://pub-2f61a9552bab449495b240463abcaa31.r2.dev"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://pub-2f61a9552bab449495b240463abcaa31.r2.dev" />
        <link
          rel="preload"
          as="image"
          href="https://yata-apix-f86015e4-b0f0-46cb-93d0-ebd6a0cb6dd7.s3-object.locaweb.com.br/18355a5158e44d5db2b1754c80123e7d.jpg"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-screen bg-cream text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:text-cream focus:px-5 focus:py-2"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
