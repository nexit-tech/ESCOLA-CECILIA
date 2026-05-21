import { HeroFullbleed } from '@/components/HeroFullbleed';
import { Manifesto } from '@/components/Manifesto';
import { StatsCounter } from '@/components/StatsCounter';
import { MarqueeStrip } from '@/components/MarqueeStrip';
import { FeaturedEnsinoMedio } from '@/components/FeaturedEnsinoMedio';
import { EducationalPillars } from '@/components/EducationalPillars';
import { WhyCecilia } from '@/components/WhyCecilia';
import { ThreeColumns } from '@/components/ThreeColumns';
import { SegmentsBand } from '@/components/SegmentsBand';
import { Testimonials } from '@/components/Testimonials';
import { DirectorQuote } from '@/components/DirectorQuote';
import { CTA } from '@/components/CTA';

export default function HomePage() {
  return (
    <>
      <HeroFullbleed />
      <Manifesto />
      <StatsCounter />
      <FeaturedEnsinoMedio />
      <MarqueeStrip />
      <EducationalPillars />
      <WhyCecilia />
      <ThreeColumns />
      <SegmentsBand />
      <Testimonials />
      <DirectorQuote />
      <CTA />
    </>
  );
}
