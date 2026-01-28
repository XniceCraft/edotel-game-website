import type { AboutSection } from './about-section'
import type { TeamSection } from './team-section'
import type { TutorialSection } from './tutorial-section'
import type { HeroSection } from './hero-section'

export interface Landing {
  heroSection: HeroSection
  aboutSection: AboutSection
  teamSection: TeamSection
  tutorialSection: TutorialSection
}
