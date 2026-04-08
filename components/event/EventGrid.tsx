'use client'

import { useState, useMemo } from 'react'
import { EVENTS } from '@/data/events'
import EventCard from './EventCard'
import SearchFilterBar from './SearchFilterBar'

export default function EventGrid() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [showLiveOnly, setShowLiveOnly] = useState(false)
  const [showTrendingOnly, setShowTrendingOnly] = useState(false)

  const filtered = useMemo(() => {
    return EVENTS.filter((e) => {
      const matchSearch =
        !search ||
        e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.category.toLowerCase().includes(search.toLowerCase()) ||
        e.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
        e.host.toLowerCase().includes(search.toLowerCase())
      const matchCategory = category === 'All' || e.category === category
      const matchLive = !showLiveOnly || e.isLive
      const matchTrending = !showTrendingOnly || e.isTrending
      return matchSearch && matchCategory && matchLive && matchTrending
    })
  }, [search, category, showLiveOnly, showTrendingOnly])

  return (
    <section>
      {/* Search & filters */}
      <div className="mb-8 fade-up-2">
        <SearchFilterBar
          search={search} setSearch={setSearch}
          category={category} setCategory={setCategory}
          showLiveOnly={showLiveOnly} setShowLiveOnly={setShowLiveOnly}
          showTrendingOnly={showTrendingOnly} setShowTrendingOnly={setShowTrendingOnly}
          total={filtered.length}
        />
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((event, i) => (
            <div key={event.id} className="fade-up-3" style={{ animationDelay: `${i * 50}ms` }}>
              <EventCard event={event} index={i} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="text-4xl mb-4">🎭</div>
          <h3 className="font-display text-xl font-semibold text-ink mb-2">No events found</h3>
          <p className="text-sm text-ink-muted max-w-sm">
            Try adjusting your search or filters to discover more events.
          </p>
          <button
            onClick={() => { setSearch(''); setCategory('All'); setShowLiveOnly(false); setShowTrendingOnly(false) }}
            className="mt-6 px-4 py-2 bg-brand-500 text-white text-sm font-medium rounded-xl hover:bg-brand-600 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      )}
    </section>
  )
}
