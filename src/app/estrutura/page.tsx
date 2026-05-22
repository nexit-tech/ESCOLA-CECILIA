import { StructureIntro } from '@/components/StructureIntro';
import { GalleryGrid } from '@/components/GalleryGrid';

export const metadata = {
  title: 'Estrutura — Educandário Cecília Pinheiro',
};

export default function EstruturaPage() {
  return (
    <>
      <StructureIntro />
      <GalleryGrid />
    </>
  );
}
