'use client'

import { useMemo, useRef, useState } from 'react'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'
import { useGSAP } from '@gsap/react'
import { splitText } from '@/lib/splitText'
import { Progress } from '@/components/ui/progress'
import Link from 'next/link'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

interface TeamMember {
  id: number
  role: string
  name: string
  avatar: string
}

interface TeamSectionProps {
  teamData: {
    backgroundImage: string
    section: {
      title: string
      description: string
    }
    ctaButton: {
      title: string
      url: string
    }
    teamMembers: TeamMember[]
  }
}

export default function TeamSection({ teamData }: TeamSectionProps) {
  const [progress, setProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    if (window.innerWidth <= 748 || !sectionRef.current || !wrapperRef.current)
      return

    gsap.set('.leftBox', { opacity: 1, scale: 1 })

    const section = sectionRef.current
    const wrapper = wrapperRef.current

    const rect = wrapper.getBoundingClientRect()
    const totalScroll = rect.x + rect.width - window.innerWidth

    let targetProgress = 0
    let currentProgress = 0

    gsap.ticker.add(() => {
      currentProgress += (targetProgress - currentProgress) * 0.1
      setProgress(currentProgress)
    })

    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: `+=${totalScroll * 2}`,
      scrub: 3,
      pin: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        targetProgress = self.progress * 100
      },
    })

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: `+=${totalScroll * 2}`,
        scrub: 3,
      },
    })

    timeline.fromTo(
      wrapper,
      { x: 0 },
      {
        x: -totalScroll,
        ease: 'none',
      }
    )

    gsap.to('.leftBox', {
      opacity: 0,
      scale: 0,
      ease: 'power4.in',
      scrollTrigger: {
        trigger: section,
        start: '70% 90%',
        end: () => `+=${totalScroll * 1}`,
        scrub: 1,
      },
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-fit sm:min-h-screen bg-gray-50 flex flex-col items-center justify-center overflow-x-hidden sm:h-screen sm:overflow-hidden"
    >
      {/* <div className="hidden md:block w-auto h-auto absolute inset-0 z-0 rounded-4xl bg-gray-100 mx-6 md:my-20 lg:my-10">
        <img
          src={teamData.backgroundImage}
          alt={teamData.section.title}
          className="w-full h-full object-cover opacity-20 rounded-4xl"
        />
      </div> */}

      <div className="w-full flex flex-col sm:flex-row sm:items-center py-10">
        <div className="leftBox min-w-90 lg:min-w-[28%] max-w-86 sm:max-w-96 space-y-5 mb-10 sm:mb-0 mx-5 lg:ml-16 md:mx-20 lg:mr-20">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-albert-sans">
            {teamData.section.title}
          </h1>
          <p className="font-albert-sans text-xs font-medium">
            {teamData.section.description}
          </p>
          <Link
            href={teamData.ctaButton.url}
            className="flex items-center gap-0.5 cursor-pointer group w-fit"
          >
            <HiOutlineArrowUpRight className="w-10 h-10 z-1 sm:z-0 sm:w-14 sm:h-14 text-white sm:text-black bg-black sm:bg-white border border-black rounded-full p-3 sm:p-4 sm:transition-all sm:duration-300 -mr-11.5 sm:mr-0 sm:group-hover:-mr-14.5 sm:group-hover:bg-black sm:group-hover:text-white sm:group-hover:scale-90" />
            <p className="bg-white px-4 sm:px-8 py-2.5 sm:py-4 border border-black rounded-full whitespace-nowrap pl-14 sm:pl-8 sm:transition-all sm:duration-300 sm:group-hover:pl-22.5 font-albert-sans font-medium">
              {teamData.ctaButton.title}
            </p>
          </Link>
        </div>

        <div
          ref={wrapperRef}
          className="relative w-full sm:min-w-max sm:flex-1 overflow-x-auto sm:overflow-visible me-4"
        >
          <div className="flex gap-8 sm:gap-12 px-5 sm:px-0 sm:pr-16 mb-6 pe-4">
            {teamData.teamMembers.slice(0, 5).map((team) => (
              <div key={team.id} className="relative overflow-x-visible">
                <div className="w-fit p-1 sm:p-2.5 rounded-2xl sm:rounded-4xl flex items-center justify-center shadow-md bg-white">
                  <div className="rounded-xl sm:rounded-3xl group overflow-hidden">
                    <img
                      src={team.avatar}
                      alt={team.name}
                      className="object-cover max-w-160 w-96 h-70 max-h-52 md:max-w-none md:max-h-none md:w-160 md:h-110 rounded-xl sm:rounded-3xl transition-transform duration-800 ease-out group-hover:scale-105 group-hover:-rotate-1"
                    />
                  </div>
                </div>

                <p className="absolute text-sm sm:text-base max-w-40 sm:max-w-56 z-10 px-1 sm:px-6 py-1 sm:py-4 bg-white w-fit border border-gray-300 rounded-md sm:rounded-2xl bottom-31 sm:bottom-36 -left-4 sm:-left-7 font-albert-sans">
                  {team.role}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-2 sm:gap-8 mt-5 font-albert-sans">
                  <p className="font-albert-sans font-semibold text-xl sm:text-3xl">
                    {team.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Progress
        value={progress}
        className="hidden sm:block -top-10 w-[90vw] h-1 mt-8 mx-auto"
      />
    </section>
  )
}
