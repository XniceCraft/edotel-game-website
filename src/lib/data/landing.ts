import type { Landing } from '@/types/landing'

export const landingData: Landing = {
  heroSection: {
    backgroundText: 'Edotel',
    title: 'How To',

    firstSection: {
      title: 'Game Edukasi',
      description: 'Game yang menyenangkan dan mendidik',
    },
    secondSection: {
      title: 'Game Edukasi',
      description: 'Game yang menyenangkan dan mendidik',
    },
  },
  aboutSection: {
    section: {
      title: 'About Edotel',
      description: 'Lorem ipsum sit dolor amer',
    },
    ctaButton: {
      title: 'See Tutorial',
      url: '/tutorial',
    },
    rightImage: '/assets/images/abouts/arya3.jpg',
    leftImage: '/assets/images/abouts/arya4.png',
  },
  teamSection: {
    heading: 'Our Team',
    members: [
      {
        id: 1,
        name: 'Kenzo Ghaisani Mudzakkir',
        backgroundColor: '#E30515',
        role: 'Game Developer',
        avatar: '/assets/image/team/Kenzo.webp',
      },
      {
        id: 2,
        name: 'Kresna Ale Brahmantio',
        backgroundColor: '#111663',
        role: 'Web Developer',
        avatar: '/assets/image/team/Tyo.webp',
      },
      {
        id: 3,
        name: 'Devandika Dzacky Firdansyah',
        backgroundColor: '#70AADB',
        role: 'Promotion Team',
        avatar: '/assets/image/team/Devan.webp',
      },
      {
        id: 4,
        name: 'Fadlan Andry Alfariz',
        backgroundColor: '#E30515',
        role: 'Promotion Team',
        avatar: '/assets/image/team/Fadlan.webp',
      },
      {
        id: 5,
        name: 'Fachrezy Centrino Duo',
        backgroundColor: '#143C76',
        role: 'Asset Team',
        avatar: '/assets/image/team/Ino.webp',
      },
      {
        id: 6,
        name: 'Farel Erdiansyah Widiarta',
        backgroundColor: '#C3171F',
        role: 'Web Developer & Asset Team',
        avatar: '/assets/image/team/Farel.webp',
      },
    ],
  },
  tutorialSection: {
    heading: 'Tutorial',
    video: '/assets/video/tutorial.mp4',
    boxes: [
      {
        header: 'Professional Developers',
        description: 'Our team builds scalable and high-performance solutions.',
      },
      {
        header: 'Creative Designers',
        description: 'Design-first mindset for stunning user experiences.',
      },
    ],
  },
}
