'use client'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import Link from 'next/link'
import { footerData } from '@/lib/data/footer'
import { Separator } from '../ui/separator'
import { FaGithub, FaInstagram, FaReact, FaWhatsapp } from 'react-icons/fa'
import { SiGreensock, SiShadcnui, SiTypescript } from 'react-icons/si'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const track = trackRef.current
    if (!track) return

    const ctx = gsap.context(() => {
      gsap.to(track, {
        xPercent: -50,
        duration: 22,
        ease: 'none',
        repeat: -1,
      })
    }, containerRef)
  }, [])

  return (
    <footer className="bg-black">
      <div className="relative overflow-hidden">
        {/* Fade edge */}
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
                  {footerData.firstText}
                </p>
                {footerData.secondText && (
                  <p className="text-7xl md:text-8xl font-medium px-4 text-transparent text-outline-white">
                    {footerData.secondText}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-10">
        <div className="flex items-start justify-between gap-x-8">
          <div className="max-w-1/2">
            <h1 className="font-bold text-4xl text-white">Edotel How To</h1>
            <h2 className="text-blue-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              repellat obcaecati vel? Nihil illo quam similique et saepe{' '}
            </h2>
            <Separator className="mb-4 mt-10" />
            <div>
              <p className="text-xs text-white">Connect with us</p>
              <div className="flex gap-x-2 mt-6">
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href="#"
                      className="flex text-white p-2 rounded-full border border-white hover:bg-blue-600 transition-all duration-300"
                    >
                      <FaWhatsapp />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>WhatsApp</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href="#"
                      className="flex text-white p-2 rounded-full border border-white hover:bg-blue-600 transition-all duration-300"
                    >
                      <FaInstagram />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      href="#"
                      className="flex text-white p-2 rounded-full border border-white hover:bg-blue-600 transition-all duration-300"
                    >
                      <FaGithub />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </div>

          <div className="">
            <h2 className="text-xl text-white">Navigation</h2>
            <ul className="list-disc list-inside mt-4 text-gray-300">
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-xl text-white">Creator</h2>
            <ul className="list-disc list-inside mt-4 text-gray-300">
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ul>
          </div>

          <div className="">
            <h2 className="text-xl text-white">Resource</h2>
            <div className="mt-4 flex items-center justify-start gap-2">
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href="#"
                    className="flex text-white p-2 rounded-full border border-white"
                  >
                    <SiTypescript size={12} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>TypeScript</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href="#"
                    className="flex text-white p-2 rounded-full border border-white"
                  >
                    <FaReact size={12} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>React</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href="#"
                    className="flex text-white p-2 rounded-full border border-white"
                  >
                    <SiShadcnui size={12} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Shadcn</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href="#"
                    className="flex text-white p-2 rounded-full border border-white"
                  >
                    <SiGreensock size={12} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Gsap</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-white/50 pb-6">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
