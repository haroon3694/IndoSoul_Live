import React from 'react'
import heroImage from '../assets/aboutus/images/aboutUsHeroImage.png'
import Hero from '../components/global/Hero'
import AboutUsVison from '../components/aboutus/AboutUsVison';
import OurJourney from '../components/aboutus/OurJourney';
import AboutKarthikIyer from '../components/aboutus/AboutKarthikIyer';
import Musicians from '../components/aboutus/Musicians';
import TheTeam from '../components/aboutus/TheTeam';

const AboutUs: React.FC = () => {

  const heroText = (
    <h1 className="font-manrope font-bold text-[1.6rem] uppercase tracking-widest">HARMONIZING SOULS, AMPLIFYING EXPERIENCES</h1>
  );

  return (
    <div>
      <Hero singleHeroImage={heroImage} heroText={heroText} logoText={`About Us`} />
      <AboutUsVison />
      <OurJourney />
      <AboutKarthikIyer />
      <Musicians />
      <TheTeam />
    </div>
  )
}

export default AboutUs