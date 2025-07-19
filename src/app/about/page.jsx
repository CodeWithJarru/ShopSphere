'use client';

import AboutHero from '@/components/AboutHero';
import AboutMission from '@/components/AboutMission';
import AboutTeam from '@/components/AboutTeam';
import AboutTech from '@/components/AboutTech';
import AboutCTA from '@/components/AboutCTA';

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <AboutHero />
      <AboutMission />
      <AboutTeam />
      <AboutTech />
      <AboutCTA />
    </main>
  );
}
