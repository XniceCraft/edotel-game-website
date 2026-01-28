import type { IconType } from 'react-icons'

interface FooterNavigation {
  title: string
  items: {
    label: string
    href: string
  }[]
}

interface FooterSocial {
  label: string
  href: string
  icon: IconType
}

interface FooterResource {
  title: string
  items: {
    label: string
    href: string
    icon: IconType
  }[]
}

export interface Footer {
  runningText: {
    firstText: string
    secondText?: string
  }
  brand: {
    title: string
    description: string
  }
  social: FooterSocial[]
  navigation: FooterNavigation
  resources: FooterResource
}
