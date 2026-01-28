interface NavbarRoute {
  id: number
  title: string
  url: string
}

export interface Navbar {
  logo?: string
  routes: NavbarRoute[]
}
