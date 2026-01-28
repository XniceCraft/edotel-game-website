import { FaGithub, FaInstagram, FaWhatsapp, FaReact } from 'react-icons/fa'
import { SiGreensock, SiShadcnui, SiTypescript } from 'react-icons/si'

import type { Footer } from '@/types/footer'

export const footerData: Footer = {
  runningText: {
    firstText: 'EDOTEL HOW TO',
    secondText: 'LEARN • BUILD • SHARE',
  },
  brand: {
    title: 'Edotel How To',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi repellat obcaecati vel? Nihil illo quam similique et saepe',
  },
  social: [
    {
      label: 'WhatsApp',
      href: '#',
      icon: FaWhatsapp,
    },
    {
      label: 'Instagram',
      href: '#',
      icon: FaInstagram,
    },
    {
      label: 'GitHub',
      href: '#',
      icon: FaGithub,
    },
  ],
  navigation: {
    title: 'Navigation',
    items: [
      {
        label: 'About',
        href: '#',
      },
      {
        label: 'Team',
        href: '#',
      },
      {
        label: 'Tutorial',
        href: '#',
      },
    ],
  },
  resources: {
    title: 'Resource',
    items: [
      {
        label: 'TypeScript',
        href: '#',
        icon: SiTypescript,
      },
      {
        label: 'React',
        href: '#',
        icon: FaReact,
      },
      {
        label: 'Shadcn UI',
        href: '#',
        icon: SiShadcnui,
      },
      {
        label: 'GSAP',
        href: '#',
        icon: SiGreensock,
      },
    ],
  },
}
