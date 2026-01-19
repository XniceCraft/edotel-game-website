import TeamSection from '@/components/sections/team-section'
import AboutSection from '@/components/sections/about-section'
import HeroSection from '@/components/sections/hero-section'
import TutorialSection from '@/components/sections/tutorial-section'
import { teamData } from '@/lib/data/team-section'
import { heroData } from '@/lib/data/hero-section'
import { aboutData } from '@/lib/data/about-section'
import { tutorialData } from '@/lib/data/tutorial-section'

export default function Home() {
  return (
    <>
      <HeroSection data={heroData} />
      <TeamSection data={teamData} />
      <AboutSection data={aboutData} />
      <TutorialSection data={tutorialData} />
    </>
  )
}
