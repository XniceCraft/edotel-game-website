'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { useIsMobile } from '@/hooks/use-is-mobile'
import { MemberCard } from '../card/member-card'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import type { TeamSection } from '@/types/landing/team-section'

export default function TeamSection({ data }: { data: TeamSection }) {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const progressBarRef = useRef<HTMLDivElement | null>(null)
  const isMobile = useIsMobile()

  useGSAP(
    () => {
      const { current: section } = sectionRef
      if (isMobile || !section) return

      const cards = gsap.utils.toArray<HTMLElement>('.member-card')
      const timeline = gsap.timeline()
      for (let i = 0; i < cards.length; i++) {
        timeline.fromTo(
          cards[i],
          {
            opacity: 0,
            y: 0,
          },
          {
            ease: 'power2.inOut',
            opacity: 1,
            y: 20 * (i % 2 === 0 ? 1 : -1),
            duration: 0.5,
          }
        )
      }
      timeline.fromTo(
        progressBarRef.current,
        {
          scaleX: 0,
        },
        {
          ease: 'power2.inOut',
          scaleX: 1,
          duration: 0.5,
        }
      )

      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'center center',
        scrub: 4,
        animation: timeline,
      })
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center py-8 bg-blue-50"
    >
      <h2 className="text-center text-6xl font-bold">{data.heading}</h2>
      <div className="container my-20 flex md:flex-row flex-col gap-x-5 gap-y-10 md:items-start items-center justify-center">
        {data.members.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            className="member-card"
            style={{ opacity: 0 }}
          />
        ))}
      </div>
      <div
        ref={progressBarRef}
        className="rounded-full bg-black w-96 h-1 mx-auto"
        style={{
          transform: 'scaleX(0)',
        }}
      ></div>
    </section>
  )
}
