import clsx from 'clsx'

export function LiveBadge({ className }: { className?: string }) {
  return (
    <span className={clsx(
      'inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-500 text-white',
      className
    )}>
      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse-dot" />
      Live
    </span>
  )
}

export function TrendingBadge({ className }: { className?: string }) {
  return (
    <span className={clsx(
      'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/20',
      className
    )}>
      🔥 Trending
    </span>
  )
}

export function CategoryBadge({ label, className }: { label: string; className?: string }) {
  return (
    <span className={clsx(
      'inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-surface-3 text-ink-muted border border-white/5',
      className
    )}>
      {label}
    </span>
  )
}
