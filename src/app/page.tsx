import { HeroFullbleed } from '@/components/HeroFullbleed';
import { Manifesto } from '@/components/Manifesto';
import { Mascots } from '@/components/Mascots';
import { StatsCounter } from '@/components/StatsCounter';
import { FeaturedFundamental } from '@/components/FeaturedFundamental';
import { FeaturedEnsinoMedio } from '@/components/FeaturedEnsinoMedio';
import { TechHighlight } from '@/components/TechHighlight';
import { ActivitiesShowcase } from '@/components/ActivitiesShowcase';
import { EducationalPillars } from '@/components/EducationalPillars';
import { WhyCecilia } from '@/components/WhyCecilia';
import { EventsGallery } from '@/components/EventsGallery';
import { ThreeColumns } from '@/components/ThreeColumns';
import { SegmentsBand } from '@/components/SegmentsBand';
import { Testimonials } from '@/components/Testimonials';
import { DirectorQuote } from '@/components/DirectorQuote';

export default function HomePage() {
  return (
    <>
      <HeroFullbleed />
      <Manifesto />
      <StatsCounter />
      <FeaturedFundamental />
      <FeaturedEnsinoMedio />
      <TechHighlight />
      <ActivitiesShowcase />
      <WhyCecilia />
      <EventsGallery />
      <EducationalPillars />
      <Mascots />
      <ThreeColumns />
      <SegmentsBand />
      <Testimonials />
      <DirectorQuote />
    </>
  );
}
