import { HeroFullbleed } from '@/components/HeroFullbleed';
import { Manifesto } from '@/components/Manifesto';
import { FeaturedEnsinoMedio } from '@/components/FeaturedEnsinoMedio';
import { TechHighlight } from '@/components/TechHighlight';
import { Mascots } from '@/components/Mascots';
import { ActivitiesShowcase } from '@/components/ActivitiesShowcase';
import { EducationalPillars } from '@/components/EducationalPillars';
import { WhyCecilia } from '@/components/WhyCecilia';
import { EventsGallery } from '@/components/EventsGallery';
import { SegmentsBand } from '@/components/SegmentsBand';
import { Testimonials } from '@/components/Testimonials';
import { DirectorQuote } from '@/components/DirectorQuote';
import { SocialMedia } from '@/components/SocialMedia';
import { AppAndPortal } from '@/components/AppAndPortal';

export default function HomePage() {
  return (
    <>
      <HeroFullbleed />
      <Manifesto />
      <FeaturedEnsinoMedio />
      <TechHighlight />
      <Mascots />
      <ActivitiesShowcase />
      <AppAndPortal />
      <WhyCecilia />
      <EventsGallery />
      <EducationalPillars />
      <SegmentsBand />
      <Testimonials />
      <DirectorQuote />
      <SocialMedia />
    </>
  );
}
