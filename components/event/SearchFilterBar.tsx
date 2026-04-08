'use client'

import { Search, SlidersHorizontal, X, TrendingUp, Flame } from 'lucide-react'
import { CATEGORIES } from '@/data/events'
import clsx from 'clsx'

type Props = {
  search: string
  setSearch: (v: string) => void
  category: string
  setCategory: (v: string) => void
  showLiveOnly: boolean
  setShowLiveOnly: (v: boolean) => void
  showTrendingOnly: boolean
  setShowTrendingOnly: (v: boolean) => void
  total: number
}

export default function SearchFilterBar({
  search, setSearch,
  category, setCategory,
  showLiveOnly, setShowLiveOnly,
  showTrendingOnly, setShowTrendingOnly,
  total,
}: Props) {
  return (
    <div className="space-y-4">
      
      <div className="relative max-w-xl">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search events, artists, categories…"
          className="w-full pl-11 pr-10 py-3 bg-surface-2 border border-white/8 rounded-xl text-sm text-ink placeholder-ink-muted focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted hover:text-ink"
          >
            <X size={14} />
          </button>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1.5 text-xs text-ink-muted mr-1">
          <SlidersHorizontal size={12} />
          <span>Filter:</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={clsx(
                'px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200',
                category === cat
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                  : 'bg-surface-2 text-ink-muted border border-white/5 hover:border-brand-500/30 hover:text-ink'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="w-px h-5 bg-white/10 hidden sm:block" />

        <button
          onClick={() => setShowLiveOnly(!showLiveOnly)}
          className={clsx(
            'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200',
            showLiveOnly
              ? 'bg-brand-500/20 text-brand-400 border border-brand-500/40'
              : 'bg-surface-2 text-ink-muted border border-white/5 hover:border-brand-500/20'
          )}
        >
          <span className={clsx('w-1.5 h-1.5 rounded-full', showLiveOnly ? 'bg-brand-500 animate-pulse-dot' : 'bg-ink-faint')} />
          Live Now
        </button>

        <button
          onClick={() => setShowTrendingOnly(!showTrendingOnly)}
          className={clsx(
            'flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200',
            showTrendingOnly
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
              : 'bg-surface-2 text-ink-muted border border-white/5 hover:border-amber-500/20'
          )}
        >
          <Flame size={11} className={showTrendingOnly ? 'text-amber-400' : ''} />
          Trending
        </button>

        <span className="ml-auto text-xs text-ink-muted">
          <span className="text-ink font-medium">{total}</span> events
        </span>
      </div>
    </div>
  )
}
