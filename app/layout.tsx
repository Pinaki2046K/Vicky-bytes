import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
// @ts-ignore: next.js global CSS side-effect import
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'VickyBytes Live — Stream the Moment',
    template: '%s | VickyBytes Live',
  },
  description: 'Your premium destination for live events, music, esports, tech talks, and more. Watch live streams and upcoming events in real time.',
  keywords: ['live streaming', 'live events', 'music festival', 'esports', 'tech talks', 'vickybytes'],
  authors: [{ name: 'VickyBytes' }],
  creator: 'VickyBytes',
  metadataBase: new URL('https://event-streaming-dusky.vercel.app'),
  openGraph: {
    title: 'VickyBytes Live — Stream the Moment',
    description: 'Watch live music, esports, tech keynotes and more.',
    url: 'https://event-streaming-dusky.vercel.app',
    siteName: 'VickyBytes Live',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VickyBytes Live',
    description: 'Stream the Moment — live events, music, esports & more.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body className="bg-surface text-ink font-body antialiased">
        {children}
      </body>
    </html>
  )
}