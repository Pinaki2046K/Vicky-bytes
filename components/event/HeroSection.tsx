import { Play, Zap, Users } from 'lucide-react'
import Link from 'next/link'
import { EVENTS } from '@/data/events'

export default function HeroSection() {
  const liveCount = EVENTS.filter(e => e.isLive).length
  const featured = EVENTS.find(e => e.isLive) || EVENTS[0]

  return (
    <section className="relative overflow-hidden border-b border-white/5 py-16 md:py-24">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-800/8 blur-3xl" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
         
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 mb-6 fade-up-1">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-dot" />
            <span className="text-xs font-medium text-brand-400">{liveCount} events live right now</span>
          </div>

          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-ink mb-5 fade-up-2">
            Stream the
            <br />
            <span className="text-gradient">Moment.</span>
          </h1>

          <p className="text-base sm:text-lg text-ink-muted leading-relaxed mb-8 max-w-xl fade-up-3">
            Music festivals, esports championships, tech keynotes, and live conversations —
            all in one place, all in real time.
          </p>

          
          <div className="flex flex-wrap gap-3 fade-up-4">
            <Link
              href={`/event/${featured.id}`}
              className="inline-flex items-center gap-2 px-5 py-3 bg-brand-500 text-white text-sm font-semibold rounded-xl hover:bg-brand-600 transition-all hover:scale-105 active:scale-95 glow-red"
            >
              <Play size={14} className="fill-current" />
              Watch Live Now
            </Link>
            <Link
              href="#events"
              className="inline-flex items-center gap-2 px-5 py-3 bg-surface-2 text-ink text-sm font-medium rounded-xl border border-white/8 hover:border-white/15 transition-all"
            >
              Browse All Events
            </Link>
          </div>

          
          <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-white/5 fade-up-5">
            {[
              { icon: Zap, label: 'Events live', value: `${liveCount}` },
              { icon: Users, label: 'Watching now', value: '3.2M+' },
              { icon: Play, label: 'Events this week', value: '140+' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-surface-2 border border-white/5 flex items-center justify-center">
                  <Icon size={14} className="text-brand-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{value}</div>
                  <div className="text-xs text-ink-muted">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
