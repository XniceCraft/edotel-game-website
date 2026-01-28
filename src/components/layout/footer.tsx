'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import Link from 'next/link'
import { footerData } from '@/lib/data/footer'
import { Separator } from '../ui/separator'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { globalData } from '@/lib/data/global'

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const { current: track } = trackRef
    if (!track) return

    gsap.to(track, {
      xPercent: -50,
      duration: 22,
      ease: 'none',
      repeat: -1,
    })
  }, [])

  return (
    <footer className="bg-black">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-20 bg-linear-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-20 bg-linear-to-l from-black to-transparent" />

        <div ref={containerRef} className="overflow-hidden py-12">
          <div
            ref={trackRef}
            className="flex w-max whitespace-nowrap font-jogging"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                <p className="text-white text-7xl md:text-8xl font-medium px-4">
                  {footerData.runningText.firstText}
                </p>
                {footerData.runningText.secondText && (
                  <p className="text-7xl md:text-8xl font-medium px-4 text-transparent text-outline-white">
                    {footerData.runningText.secondText}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-10">
        <div className="flex flex-col md:flex-row items-start md:ustify-between gap-8">
          <div className="md:max-w-1/2">
            <h1 className="font-bold text-4xl text-white">
              {footerData.brand.title}
            </h1>
            <h2 className="text-blue-400">{footerData.brand.description}</h2>
            <Separator className="mb-4 mt-10" />
            <div>
              <div className="flex gap-x-2 mt-2 md:mt-6">
                {footerData.social.map((item, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger>
                      <Link
                        href={item.href}
                        className="flex text-white p-2 rounded-full border border-white hover:bg-blue-600 transition-all duration-300"
                      >
                        <item.icon />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-x-8">
            <div className="">
              <h2 className="text-xl text-white">
                {footerData.navigation.title}
              </h2>
              <ul className="list-disc list-inside mt-4 text-gray-300">
                {footerData.navigation.items.map((item, index) => (
                  <Link key={index} href={item.href}>
                    <li>{item.label}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          <div className="">
            <h2 className="text-xl text-white">{footerData.resources.title}</h2>
            <div className="mt-4 flex items-center justify-start gap-2">
              {footerData.resources.items.map((item, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <Link
                      href={item.href}
                      className="flex text-white p-2 rounded-full border border-white hover:bg-blue-600 transition-all duration-300"
                    >
                      <item.icon />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-white/50 pb-6 mt-8 md:mt-0">
          © {new Date().getFullYear()} {globalData.brand.name}. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
