'use client'

import { navbarData } from '@/lib/data/navbar'
import { globalData } from '@/lib/data/global'
import { useCallback, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Link from 'next/link'

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement | null>(null)
  const isOpen = useRef(false)

  const { contextSafe } = useGSAP({ scope: navbarRef })

  const scrollToSection = contextSafe((sectionId: string) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: sectionId,
      ease: 'power2.out',
    })
  })

  const showMenuAnimation = contextSafe(() => {
    const routes = gsap.utils.toArray<HTMLElement>('.nav-route')
    const timeline = gsap.timeline()
    routes.forEach((route) => {
      timeline.to(
        route,
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        },
        '-=0.1'
      )
    })
  })

  const hideMenuAnimation = contextSafe(() => {
    const routes = gsap.utils.toArray<HTMLElement>('.nav-route')
    const timeline = gsap.timeline()
    routes.toReversed().forEach((route) => {
      timeline.to(
        route,
        {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.out',
        },
        '-=0.1'
      )
    })
  })

  const toggleMenu = useCallback(() => {
    if (isOpen.current) {
      isOpen.current = false
      return hideMenuAnimation()
    }
    isOpen.current = true
    return showMenuAnimation()
  }, [hideMenuAnimation, showMenuAnimation])

  return (
    <nav ref={navbarRef} className="fixed w-full top-0 left-0 z-10 px-8 py-6">
      <div className="flex items-start md:items-center justify-start md:justfiy-between font-pixelify-sans relative p-4">
        <div className="bg-white absolute w-full h-[2px] top-0 left-0" />
        <div className="bg-white absolute w-[2px] h-8 top-0 left-0" />
        <div className="bg-white absolute w-[2px] h-8 top-0 right-0" />
        <h1 className="block bg-gray-600/40 text-white px-5 py-2 font-medium rounded-md text-sm bg-clip-padding backdrop-filter backdrop-blur-lg">
          {globalData.brand.name}
        </h1>
        <div className="ms-auto md:m-0 flex items-end md:items-center md:flex-row flex-col">
          <button
            onClick={toggleMenu}
            className="block bg-gray-600/40 text-white px-5 py-2 font-medium rounded-md text-sm bg-clip-padding backdrop-filter backdrop-blur-lg ms-6"
          >
            Menu
          </button>
          {navbarData.routes.map((route) =>
            route.url.startsWith('#') ? (
              <button
                key={route.id}
                className="nav-route block bg-gray-600/40 text-white px-5 py-2 font-medium rounded-md text-sm bg-clip-padding backdrop-filter backdrop-blur-lg"
                style={{
                  opacity: 0,
                }}
                onClick={() => scrollToSection(route.url)}
              >
                {route.title}
              </button>
            ) : (
              <Link
                key={route.id}
                href={route.url}
                className="nav-route block bg-gray-600/40 text-white px-5 py-2 font-medium rounded-md text-sm bg-clip-padding backdrop-filter backdrop-blur-lg"
                style={{
                  opacity: 0,
                }}
              >
                {route.title}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  )
}
