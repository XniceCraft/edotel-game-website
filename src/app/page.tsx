import { landingData } from '@/lib/data/landing'
import TeamSection from './_components/sections/team-section'
import AboutSection from './_components/sections/about-section'
import HeroSection from './_components/sections/hero-section'
import TutorialSection from './_components/sections/tutorial-section'

export default function Home() {
  return (
    <main>
      <HeroSection data={landingData.heroSection} />
      <TeamSection data={landingData.teamSection} />
      <AboutSection data={landingData.aboutSection} />
      <TutorialSection data={landingData.tutorialSection} />
    </main>
  )
}
