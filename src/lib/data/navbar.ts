import type { Navbar } from '@/types/navbar'

export const navbarData: Navbar = {
  logo: '/assets/image/logo.png',
  routes: [
    { id: 0, title: 'Home', url: '/' },
    { id: 1, title: 'Our Team', url: '#our-team' },
    { id: 2, title: 'Tutorial', url: '#tutorial' },
  ],
}
