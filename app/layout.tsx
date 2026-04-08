import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
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
  title: 'VickyBytes Live — Stream the Moment',
  description: 'Your premium destination for live events, music, esports, tech talks, and more.',
  keywords: ['live streaming', 'events', 'music', 'esports', 'vickybytes'],
  openGraph: {
    title: 'VickyBytes Live',
    description: 'Stream the Moment',
    type: 'website',
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
