'use client'

import { useState } from 'react'
import { Play, Volume2, Maximize, Settings } from 'lucide-react'
import { LiveBadge } from '@/components/ui/Badges'
import { formatViewers } from '@/data/events'
import clsx from 'clsx'

type Props = {
  youtubeId: string
  title: string
  isLive: boolean
  viewers: number
}

export default function VideoPlayer({ youtubeId, title, isLive, viewers }: Props) {
  const [started, setStarted] = useState(false)
  const [quality, setQuality] = useState('1080p')

  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&color=red`

  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-surface-1 border border-white/5">
      <div className="relative aspect-video w-full">
        {started ? (
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <div className="absolute inset-0 group cursor-pointer" onClick={() => setStarted(true)}>
            
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
              }}
            />

            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-500 flex items-center justify-center shadow-2xl shadow-brand-500/40 group-hover:scale-110 group-hover:bg-brand-400 transition-all duration-300">
                <Play size={28} className="text-white fill-current ml-1" />
              </div>
            </div>

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {isLive && <LiveBadge />}
                <div className="glass rounded-full px-2.5 py-1 text-xs font-medium text-ink">
                  {formatViewers(viewers)} watching
                </div>
              </div>
              <div className="glass rounded-md px-2 py-1 text-xs font-mono text-ink-muted">
                {quality}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-sm font-medium text-ink line-clamp-1">{title}</p>
              <p className="text-xs text-ink-muted mt-0.5">Click to play</p>
            </div>
          </div>
        )}
      </div>

      {!started && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-white/5">
          <div className="flex items-center gap-3">
            <button className="text-ink-muted hover:text-ink transition-colors">
              <Volume2 size={16} />
            </button>
            <div className="flex gap-1">
              {['360p', '720p', '1080p', '4K'].map(q => (
                <button
                  key={q}
                  onClick={() => setQuality(q)}
                  className={clsx(
                    'text-[10px] font-mono px-1.5 py-0.5 rounded transition-colors',
                    quality === q ? 'bg-brand-500/20 text-brand-400' : 'text-ink-faint hover:text-ink-muted'
                  )}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-ink-muted hover:text-ink transition-colors">
              <Settings size={14} />
            </button>
            <button className="text-ink-muted hover:text-ink transition-colors">
              <Maximize size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
