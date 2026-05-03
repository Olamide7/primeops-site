import React from 'react';
import { Hero } from '../components/Hero';
import { Trusted } from '../components/Trusted';
import { Services } from '../components/Services';
import { Stats } from '../components/Stats';
import { Demo } from '../components/Demo';
import { AutomationFlow } from '../components/AutomationFlow';
import { BeforeAfter } from '../components/BeforeAfter';
import { Pricing } from '../components/Pricing';
import { WhyWorkWithUs } from '../components/WhyWorkWithUs';
import { Reviews } from '../components/Reviews';
import { CTA } from '../components/CTA';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Trusted />
      <Services />
      <Pricing />
      <WhyWorkWithUs />
      <Stats />
      <Demo />
      <AutomationFlow />
      <BeforeAfter />
      <Reviews />
      <CTA />
    </>
  );
};
