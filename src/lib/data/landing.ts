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
      title: 'Tentang Edotel: How To',
      description:
        'Edotel: How To merupakan game simulasi edukatif yang mengangkat aktivitas PKL di bidang perhotelan. Pemain akan menjalankan tugas pelayanan tamu, pengelolaan kamar, dan laundry dalam lingkungan hotel sekolah yang interaktif dan realistis.',
    },
    ctaButton: {
      title: 'See Tutorial',
      url: '/tutorial',
    },
    rightImage: '/assets/image/Hotel.webp',
    leftImage: '/assets/image/Hotel.webp',
  },
  teamSection: {
    heading: 'Tim Pengembang',
    members: [
      {
        id: 1,
        name: 'Kenzo Ghaisani Mudzakkir',
        backgroundColor: '#E30515',
        role: 'Pengembang Gim',
        avatar: '/assets/image/team/Kenzo.webp',
      },
      {
        id: 2,
        name: 'Kresna Ale Brahmantio',
        backgroundColor: '#111663',
        role: 'Pengembang Web',
        avatar: '/assets/image/team/Tyo.webp',
      },
      {
        id: 3,
        name: 'Devandika Dzacky Firdansyah',
        backgroundColor: '#70AADB',
        role: 'Tim Promosi',
        avatar: '/assets/image/team/Devan.webp',
      },
      {
        id: 4,
        name: 'Fadlan Andry Alfariz',
        backgroundColor: '#E30515',
        role: 'Tim Promosi',
        avatar: '/assets/image/team/Fadlan.webp',
      },
      {
        id: 5,
        name: 'Fachrezy Centrino Duo',
        backgroundColor: '#143C76',
        role: 'Tim Aset',
        avatar: '/assets/image/team/Ino.webp',
      },
      {
        id: 6,
        name: 'Farel Erdiansyah Widiarta',
        backgroundColor: '#C3171F',
        role: 'Pengembang Web & Tim Aset',
        avatar: '/assets/image/team/Farel.webp',
      },
    ],
  },
  tutorialSection: {
    heading: 'Tutorial Edotel: How To',
    video: '/assets/video/tutorial.mp4',
    boxes: [
      {
        header: 'Pemesanan Kamar Hotel',
        description: 'Pemain akan belajar bagaimana cara memesan kamar hotel.',
      },
      {
        header: 'Laundry Pakaian',
        description: 'Pemain akan belajar bagaimana cara mencuci pakaian.',
      },
    ],
  },
}
