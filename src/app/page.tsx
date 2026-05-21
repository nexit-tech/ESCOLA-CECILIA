import { HeroFullbleed } from '@/components/HeroFullbleed';
import { Manifesto } from '@/components/Manifesto';
import { FeaturedEnsinoMedio } from '@/components/FeaturedEnsinoMedio';
import { EducationalPillars } from '@/components/EducationalPillars';
import { ThreeColumns } from '@/components/ThreeColumns';
import { SegmentsBand } from '@/components/SegmentsBand';
import { DirectorQuote } from '@/components/DirectorQuote';
import { CTA } from '@/components/CTA';

export default function HomePage() {
  return (
    <>
      <HeroFullbleed />
      <Manifesto />
      <FeaturedEnsinoMedio />
      <EducationalPillars />
      <ThreeColumns />
      <SegmentsBand />
      <DirectorQuote />
      <CTA />
    </>
  );
}
