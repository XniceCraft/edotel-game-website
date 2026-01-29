import '@/styles/globals.css'
import { globalData } from '@/lib/data/global'
import { JetBrains_Mono, Outfit, Pixelify_Sans } from 'next/font/google'
import ScrollSmootherLayout from '@/components/layout/scroll-smoother-layout'
import Footer from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'

import type { Metadata } from 'next'

const outfitFont = Outfit({
  variable: '--font-outfit',
  fallback: ['sans-serif'],
  subsets: ['latin'],
})

const pixelifySansFont = Pixelify_Sans({
  variable: '--font-pixelify-sans',
  fallback: ['sans-serif'],
  subsets: ['latin'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  fallback: ['sans-serif'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: `%s - ${globalData.seo.title}`,
    default: globalData.seo.title,
  },
  description: globalData.seo.description,
  openGraph: {
    title: globalData.seo.title,
    description: globalData.seo.description,
    type: 'website',
    siteName: globalData.brand.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: globalData.seo.title,
    description: globalData.seo.description,
    site: globalData.brand.name,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitFont.variable} ${pixelifySansFont.variable} ${jetbrainsMono.variable} antialiased font-sans`}
        suppressHydrationWarning
      >
        <Navbar />
        <ScrollSmootherLayout>
          {children}
          <Footer />
        </ScrollSmootherLayout>
      </body>
    </html>
  )
}
