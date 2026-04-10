"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  Users,
  Tag,
  Share2,
  Bell,
  ArrowLeft,
} from "lucide-react";
import { type Event, formatViewers, formatDate } from "@/data/events";
import {
  LiveBadge,
  TrendingBadge,
  CategoryBadge,
} from "@/components/ui/Badges";

export default function EventDescription({ event }: { event: Event }) {
  return (
    <div className="space-y-6">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs text-ink-muted hover:text-ink transition-colors group"
      >
        <ArrowLeft
          size={13}
          className="group-hover:-translate-x-0.5 transition-transform"
        />
        All Events
      </Link>

      {/* Title + badges */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {event.isLive && <LiveBadge />}
          {event.isTrending && <TrendingBadge />}
          <CategoryBadge label={event.category} />
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-ink leading-tight">
          {event.title}
        </h1>
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-1.5 text-sm text-ink-muted">
          <Calendar size={13} className="text-brand-400" />
          <span>{formatDate(event.date)}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-ink-muted">
          <Clock size={13} className="text-brand-400" />
          <span>
            {event.time} · {event.duration}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-ink-muted">
          <Users size={13} className="text-brand-400" />
          <span>{formatViewers(event.viewers)} watching</span>
        </div>
      </div>

      {/* Host */}
      <div className="flex items-center gap-3 p-4 bg-surface-2 rounded-xl border border-white/5">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-surface-3">
          <Image
            src={event.hostAvatar}
            alt={event.host}
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-ink-muted mb-0.5">Hosted by</p>
          <p className="text-sm font-semibold text-ink truncate">
            {event.host}
          </p>
        </div>
        <button className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-brand-500/10 text-brand-400 border border-brand-500/20 rounded-lg hover:bg-brand-500/20 transition-colors">
          <Bell size={11} />
          Follow
        </button>
      </div>

      {/* Description */}
      <div className="prose prose-sm max-w-none">
        <h2 className="text-base font-semibold text-ink mb-2">
          About this event
        </h2>
        <p className="text-sm text-ink-muted leading-relaxed">
          {event.longDescription}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap items-center gap-2">
        <Tag size={12} className="text-ink-faint" />
        {event.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-surface-2 text-ink-muted border border-white/5 hover:border-brand-500/20 hover:text-brand-400 transition-colors cursor-pointer"
          >
            #{tag.toLowerCase().replace(/\s+/g, "")}
          </span>
        ))}
      </div>

      {/* Share row */}
      <div className="flex items-center gap-3 pt-2">
        <button
          onClick={() => navigator.clipboard.writeText(window.location.href)}
          className="flex items-center gap-2 text-sm font-medium px-4 py-2.5 bg-surface-2 text-ink-muted border border-white/8 rounded-xl hover:border-white/15 hover:text-ink transition-all"
        >
          <Share2 size={14} />
          Share Event
        </button>
        <span className="text-xs text-ink-faint">
          {formatViewers(event.likes)} people liked this
        </span>
      </div>
    </div>
  );
}
