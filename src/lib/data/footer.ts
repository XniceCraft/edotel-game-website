import { FaGithub, FaInstagram, FaWhatsapp, FaReact } from 'react-icons/fa'
import { SiGreensock, SiShadcnui, SiTypescript } from 'react-icons/si'

export const footerData = {
  runningText: {
    firstText: 'EDOTEL HOW TO',
    secondText: 'LEARN • BUILD • SHARE',
  },

  brand: {
    title: 'Edotel How To',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi repellat obcaecati vel? Nihil illo quam similique et saepe',
    subtitle: 'Connect with us',
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

  creator: {
    title: 'Creator',
    items: [
      {
        label: 'Tio',
        href: '#',
      },
      {
        label: 'Kenzo',
        href: '#',
      },
      {
        label: 'Ino',
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
