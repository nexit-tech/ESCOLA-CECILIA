import { Hero } from '@/components/Hero';
import { StatsStrip } from '@/components/StatsStrip';
import { Pillars } from '@/components/Pillars';
import { Curriculum } from '@/components/Curriculum';
import { SegmentsGrid } from '@/components/SegmentsGrid';
import { Activities } from '@/components/Activities';
import { DirectorQuote } from '@/components/DirectorQuote';
import { CTA } from '@/components/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Pillars />
      <Curriculum />
      <SegmentsGrid />
      <Activities />
      <DirectorQuote />
      <CTA />
    </>
  );
}
