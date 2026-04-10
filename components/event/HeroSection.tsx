'use client'

import { Play, Zap, Users, Radio, Signal } from 'lucide-react'
import Link from 'next/link'
import { EVENTS } from '@/data/events'
import { useEffect, useState } from 'react'

const GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&'

function useGlitchText(target: string, delay = 0) {
  const [display, setDisplay] = useState(target)

  useEffect(() => {
    let frame = 0
    let timeout: ReturnType<typeof setTimeout>
    timeout = setTimeout(() => {
      const interval = setInterval(() => {
        frame++
        setDisplay(
          target.split('').map((char, i) => {
            if (char === ' ') return ' '
            if (i < frame / 2) return char
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
          }).join('')
        )
        if (frame >= target.length * 2) { clearInterval(interval); setDisplay(target) }
      }, 40)
    }, delay)
    return () => clearTimeout(timeout)
  }, [target, delay])

  return display
}

export default function HeroSection() {
  const liveCount = EVENTS.filter(e => e.isLive).length
  const featured = EVENTS.find(e => e.isLive) || EVENTS[0]
  const line1 = useGlitchText('STREAM THE', 200)
  const line2 = useGlitchText('MOMENT.', 600)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(t)
  }, [])

  const now = new Date()
  const timeStr = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String((now.getSeconds() + seconds) % 60).padStart(2,'0')}`

  return (
    <section className="relative overflow-hidden border-b border-white/5 py-16 md:py-20">
      {/* Retro grid bg */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,61,48,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,61,48,0.07) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute inset-0" style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
          opacity: 0.04,
        }} />
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-brand-600/8 blur-[120px]" />
        <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] rounded-full bg-brand-900/15 blur-[100px]" />
        {[
          'top-6 left-6 border-t border-l',
          'top-6 right-6 border-t border-r',
          'bottom-6 left-6 border-b border-l',
          'bottom-6 right-6 border-b border-r',
        ].map((cls, i) => (
          <div key={i} className={`absolute w-5 h-5 ${cls} border-brand-500/25`} />
        ))}
      </div>

      <div className="relative max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT */}
          <div className="lg:col-span-7 space-y-8">

            <div className="flex items-center gap-4 fade-up-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-brand-500/8 border border-brand-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-dot" />
                <span className="font-mono text-[10px] tracking-[0.2em] text-brand-400 uppercase">
                  On Air — {liveCount} Live
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 font-mono text-[10px] text-ink-faint tracking-widest">
                <Signal size={10} />
                <span suppressHydrationWarning>{timeStr}</span>
              </div>
            </div>

            <div className="space-y-1 fade-up-2">
              <h1
                className="font-mono text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-ink leading-none"
                style={{ textShadow: '0.02em 0 0 rgba(255,61,48,0.35), -0.02em 0 0 rgba(0,200,255,0.15)' }}
              >
                {line1}
              </h1>
              <h1
                className="font-mono text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none text-brand-500"
                style={{ textShadow: '0.03em 0 0 rgba(0,200,255,0.25), -0.03em 0 0 rgba(255,61,48,0.15)' }}
              >
                {line2}
              </h1>
            </div>

            <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-lg fade-up-3 border-l-2 border-brand-500/40 pl-4">
              Music festivals, esports championships, tech keynotes, and live conversations —
              all in one place, all in real time.
            </p>

            <div className="flex flex-wrap gap-3 fade-up-4">
              <Link
                href={`/event/${featured.id}`}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-md font-mono text-sm font-bold tracking-wider uppercase text-white transition-all duration-200"
                style={{
                  background: '#ff3d30',
                  border: '1px solid rgba(255,100,90,0.5)',
                  boxShadow: '0 0 20px rgba(255,61,48,0.25), inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <Play size={9} className="fill-white text-white ml-0.5" />
                </div>
                Watch Live
              </Link>
              <Link
                href="#events"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-md font-mono text-sm tracking-wider uppercase text-ink-muted border border-white/10 hover:border-brand-500/35 hover:text-ink hover:bg-brand-500/5 transition-all duration-200"
              >
                Browse Events
              </Link>
            </div>

            <div className="flex flex-wrap fade-up-5">
              {[
                { icon: Zap,   label: 'LIVE NOW',  value: `${liveCount}` },
                { icon: Users, label: 'VIEWERS',   value: '3.2M+' },
                { icon: Radio, label: 'THIS WEEK', value: '140+' },
              ].map(({ icon: Icon, label, value }, i) => (
                <div
                  key={label}
                  className="flex flex-col items-start px-5 py-3 border border-white/6 bg-surface-2/80"
                  style={{
                    borderRadius: i === 0 ? '6px 0 0 6px' : i === 2 ? '0 6px 6px 0' : '0',
                    marginLeft: i > 0 ? '-1px' : 0,
                  }}
                >
                  <Icon size={11} className="text-brand-400 mb-1.5" />
                  <div className="font-mono text-xl font-black text-ink leading-none">{value}</div>
                  <div className="font-mono text-[9px] text-ink-faint tracking-[0.15em] mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Retro monitor */}
          <div className="hidden lg:block lg:col-span-5 fade-up-3">
            <div style={{ perspective: '900px' }}>
              <div
                className="rounded-xl p-3 pb-0 transition-transform duration-500 hover:[transform:rotateY(0deg)_rotateX(0deg)]"
                style={{
                  background: '#18181f',
                  border: '2px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.03), 0 50px 100px rgba(0,0,0,0.7), 0 0 50px rgba(255,61,48,0.05), inset 0 1px 0 rgba(255,255,255,0.05)',
                  transform: 'rotateY(-5deg) rotateX(2deg)',
                }}
              >
                <div className="relative aspect-video rounded-sm overflow-hidden bg-black">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover opacity-75" />
                  <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.25) 2px, rgba(0,0,0,0.25) 4px)',
                  }} />
                  <div className="absolute inset-0 pointer-events-none" style={{
                    background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.75) 100%)',
                  }} />
                  <div className="absolute inset-0 p-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-sm bg-black/50 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-dot" />
                        <span className="font-mono text-[9px] text-brand-400 tracking-widest">LIVE</span>
                      </div>
                      <div className="px-2 py-1 rounded-sm bg-black/50 border border-white/10 font-mono text-[9px] text-ink-muted tracking-widest">
                        CH 01
                      </div>
                    </div>
                    <div>
                      <div className="inline-block px-2 py-0.5 rounded-sm bg-black/50 border border-white/10 mb-2">
                        <span className="font-mono text-[8px] text-ink-muted tracking-widest">{featured.category.toUpperCase()}</span>
                      </div>
                      <p className="font-mono text-xs font-bold text-ink leading-snug line-clamp-2" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.8)' }}>
                        {featured.title}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between px-1 py-2.5 border-t border-white/5 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-dot" style={{ boxShadow: '0 0 6px #ff3d30' }} />
                    <span className="font-mono text-[9px] text-ink-faint tracking-widest">VICKYBYTES LIVE</span>
                  </div>
                  <div className="flex gap-1 items-end">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className={`w-1 rounded-sm ${i < 3 ? 'bg-brand-500' : 'bg-surface-4'}`} style={{ height: i < 3 ? '12px' : '8px' }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}