import FeaturesSection from '@/components/sections/team-section'
import HeroSection from '@/components/sections/hero-section'
import { teamData } from '@/lib/data/team-section'
import { heroData } from '@/lib/data/hero-section'

export default function Home() {
  return (
    <>
      <HeroSection heroData={heroData} />
      <FeaturesSection teamData={teamData} />
    </>
  )
}
