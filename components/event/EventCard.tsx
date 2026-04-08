'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Share2, Eye, Calendar, Clock, Users } from 'lucide-react'
import { type Event, formatViewers, formatDate } from '@/data/events'
import { LiveBadge, TrendingBadge, CategoryBadge } from '@/components/ui/Badges'
import clsx from 'clsx'

type Props = { event: Event; index?: number }

export default function EventCard({ event, index = 0 }: Props) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(event.likes)
  const [copied, setCopied] = useState(false)

  function handleLike(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    setLiked((v) => !v)
    setLikeCount((c) => liked ? c - 1 : c + 1)
  }

  function handleShare(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(`${window.location.origin}/event/${event.id}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <article
      className="card-hover group relative rounded-2xl overflow-hidden bg-surface-2 border border-white/5"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Image */}
      <Link href={`/event/${event.id}`} className="block relative aspect-video overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface-2 via-transparent to-transparent opacity-80" />

        {/* Badges on image */}
        <div className="absolute top-3 left-3 flex gap-2">
          {event.isLive && <LiveBadge />}
          {event.isTrending && !event.isLive && <TrendingBadge />}
        </div>

        {/* Viewer count */}
        <div className="absolute top-3 right-3 flex items-center gap-1 glass rounded-full px-2 py-0.5">
          <Users size={10} className="text-ink-muted" />
          <span className="text-[10px] font-medium text-ink-muted">{formatViewers(event.viewers)}</span>
        </div>

        {/* Duration */}
        <div className="absolute bottom-3 right-3 glass rounded-md px-1.5 py-0.5">
          <span className="text-[10px] font-mono text-ink-muted">{event.duration}</span>
        </div>
      </Link>

      {/* Card body */}
      <div className="p-4">
        {/* Host row */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full overflow-hidden bg-surface-3 flex-shrink-0">
            <Image
              src={event.hostAvatar}
              alt={event.host}
              width={24}
              height={24}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-xs text-ink-muted truncate">{event.host}</span>
          <CategoryBadge label={event.category} className="ml-auto flex-shrink-0" />
        </div>

        {/* Title */}
        <Link href={`/event/${event.id}`}>
          <h3 className="font-display font-semibold text-base leading-snug text-ink hover:text-brand-400 transition-colors line-clamp-2 mb-3">
            {event.title}
          </h3>
        </Link>

        {/* Date & time */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1.5 text-xs text-ink-muted">
            <Calendar size={11} />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-ink-muted">
            <Clock size={11} />
            <span>{event.time}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-3 border-t border-white/5">
          {/* Like */}
          <button
            onClick={handleLike}
            className={clsx(
              'flex items-center gap-1.5 text-xs font-medium rounded-lg px-2.5 py-1.5 transition-all duration-200',
              liked
                ? 'bg-brand-500/15 text-brand-400 border border-brand-500/30'
                : 'bg-surface-3 text-ink-muted border border-white/5 hover:text-brand-400 hover:border-brand-500/20'
            )}
            aria-label={liked ? 'Unlike' : 'Like'}
          >
            <Heart
              size={12}
              className={clsx('transition-all duration-200', liked ? 'fill-brand-400 scale-110' : '')}
            />
            <span>{formatViewers(likeCount)}</span>
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-xs font-medium rounded-lg px-2.5 py-1.5 bg-surface-3 text-ink-muted border border-white/5 hover:text-ink hover:border-white/10 transition-all duration-200"
            aria-label="Share"
          >
            <Share2 size={12} />
            <span>{copied ? 'Copied!' : 'Share'}</span>
          </button>

          {/* View */}
          <Link
            href={`/event/${event.id}`}
            className="ml-auto flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3 py-1.5 bg-brand-500 text-white hover:bg-brand-600 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Eye size={12} />
            <span>Watch</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
