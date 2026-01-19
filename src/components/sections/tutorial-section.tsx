'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

interface TutorialSectionProps {
  data: {
    videoSrc: string
    videoTitle: string
    boxes: {
      header: string
      description?: string
    }[]
  }
}

export default function TutorialSection({ data }: TutorialSectionProps) {
  const sectionAbout = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const boxesRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const section = sectionAbout.current
    const video = videoRef.current
    const wrapper = wrapperRef.current
    const text = textRef.current
    const boxes = boxesRef.current

    if (!section || !video || !wrapper || !text || !boxes) return

    const mm = gsap.matchMedia()

    mm.add('(max-width: 767px)', () => {
      video.play()
    })

    mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
      gsap.set(boxes, { y: 800 })

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: 1,
        onLeaveBack: () => video.pause(),

        animation: gsap
          .timeline()
          .fromTo(
            wrapper,
            { clipPath: 'inset(6% 6% 6% 6% round 24px)' },
            { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none' },
            0
          )
          .call(() => {
            video.play()
          })
          .fromTo(text, { y: '6vw', x: '4vh' }, { y: 0, x: 0, ease: 'none' }, 0)
          .to(boxes, { y: 0, ease: 'power2.out' }, 1),
      })
    })

    mm.add('(min-width: 1024px)', () => {
      gsap.set(boxes, { y: 700 })

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: 1,
        onLeaveBack: () => video.pause(),

        animation: gsap
          .timeline()
          .fromTo(
            wrapper,
            { clipPath: 'inset(12% 6% 12% 6% round 24px)' },
            { clipPath: 'inset(0% 0% 0% 0% round 0px)', ease: 'none' },
            0
          )
          .call(() => {
            video.play()
          })
          .fromTo(
            text,
            { y: '12vh', x: '6vw' },
            { y: 0, x: 0, ease: 'none' },
            0
          )
          .to(boxes, { y: 0, ease: 'power2.out' }, 1),
      })
    })
  }, [])

  return (
    <>
      <div
        ref={sectionAbout}
        className="bg-black w-screen h-screen md:h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="relative w-screen h-screen">
          <div ref={wrapperRef} className="absolute inset-0">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
            >
              <source src={data.videoSrc} type="video/mp4" />
            </video>

            <h1
              ref={textRef}
              className="absolute top-5 left-5 md:top-20 md:left-20 max-w-md text-white font-medium font-rubik text-3xl md:text-4xl z-10"
            >
              {data.videoTitle}
            </h1>
          </div>

          {/* Dekstop & Tablet */}
          <div
            ref={boxesRef}
            className="md:absolute md:bottom-75 md:right-10 lg:bottom-25 lg:right-25 flex flex-row md:flex-col items-end gap-y-14"
          >
            {data.boxes.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className={`bg-gray-100 w-80 px-8 py-6 space-y-2 rounded-3xl ${
                  index === 1 ? 'mr-36' : ''
                }`}
              >
                <h1 className="font-rubik font-medium md:text-md lg:text-xl leading-tight">
                  {item.header}
                </h1>
                <p className="font-inter md:text-xs lg:text-sm mb-5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-full h-full flex bg-black px-5 py-8 gap-x-6 overflow-x-scroll">
        {data.boxes.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 min-w-[95%] min-h-full p-6 space-y-2 rounded-2xl"
          >
            <h1 className="font-rubik font-medium text-xl leading-tight">
              {item.header}
            </h1>
            <p className="font-inter text-sm mb-5">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}
