import Image from 'next/image'
import Link from 'next/link'
import { Users, Clock } from 'lucide-react'
import { EVENTS, formatViewers, type Event } from '@/data/events'
import { LiveBadge } from '@/components/ui/Badges'

export default function RelatedEvents({ currentId, category }: { currentId: string; category: string }) {
  const related = EVENTS
    .filter(e => e.id !== currentId && (e.category === category || e.isTrending))
    .slice(0, 5)

  if (related.length === 0) return null

  return (
    <div className="bg-surface-1 rounded-2xl border border-white/5 overflow-hidden">
      <div className="px-4 py-3 border-b border-white/5">
        <h3 className="text-sm font-semibold text-ink">Up Next</h3>
      </div>
      <div className="divide-y divide-white/5">
        {related.map((event: Event) => (
          <Link
            key={event.id}
            href={`/event/${event.id}`}
            className="flex gap-3 p-3 hover:bg-surface-2 transition-colors group"
          >
            
            <div className="relative w-24 aspect-video rounded-lg overflow-hidden flex-shrink-0 bg-surface-3">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="96px"
              />
              {event.isLive && (
                <div className="absolute top-1 left-1">
                  <LiveBadge />
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0 py-0.5">
              <p className="text-xs font-medium text-ink leading-snug line-clamp-2 group-hover:text-brand-400 transition-colors mb-1.5">
                {event.title}
              </p>
              <p className="text-[11px] text-ink-muted mb-1">{event.host}</p>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-[10px] text-ink-faint">
                  <Users size={9} />
                  {formatViewers(event.viewers)}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-ink-faint">
                  <Clock size={9} />
                  {event.duration}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
