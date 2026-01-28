import type { CTAButton } from '@/types/shared/cta-button'
import type { Section } from '@/types/shared/section'

export interface AboutSection {
  section: Section
  ctaButton: CTAButton
  rightImage: string
  leftImage: string
}
