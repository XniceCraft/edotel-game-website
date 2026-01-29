import type { Navbar } from '@/types/navbar'

export const navbarData: Navbar = {
  logo: '/assets/image/logo.png',
  routes: [
    { id: 0, title: 'Tentang', url: '#about' },
    { id: 1, title: 'Tutorial', url: '#tutorial' },
    { id: 2, title: 'Tim Pengembang', url: '#our-team' },
  ],
}
