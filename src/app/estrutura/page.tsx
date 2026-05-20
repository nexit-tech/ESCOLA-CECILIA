import { FeaturedCarousel } from '@/components/FeaturedCarousel';
import { GalleryGrid } from '@/components/GalleryGrid';
import { CTA } from '@/components/CTA';

export const metadata = {
  title: 'Estrutura — Educandário Cecília Pinheiro',
};

export default function EstruturaPage() {
  return (
    <>
      <FeaturedCarousel />
      <GalleryGrid />
      <CTA />
    </>
  );
}
