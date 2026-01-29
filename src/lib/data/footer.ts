import { FaGithub, FaInstagram, FaReact } from 'react-icons/fa'
import { SiGreensock, SiShadcnui, SiTypescript } from 'react-icons/si'

import type { Footer } from '@/types/footer'

export const footerData: Footer = {
  runningText: {
    firstText: 'Edotel:',
    secondText: 'How To',
  },
  description:
    'Edotel: How To merupakan game simulasi edukatif yang mengangkat aktivitas PKL di bidang perhotelan. Pemain akan menjalankan tugas pelayanan tamu, pengelolaan kamar, dan laundry dalam lingkungan hotel sekolah yang interaktif dan realistis.',
  social: [
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
    title: 'Navigasi',
    items: [
      {
        label: 'Tentang',
        href: '#about',
      },
      {
        label: 'Tim Pengembang',
        href: '#our-team',
      },
      {
        label: 'Tutorial',
        href: '#tutorial',
      },
    ],
  },
  resources: {
    title: 'Sumber Daya',
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
