import { EVENTS } from "@/data/events";
import { Zap } from "lucide-react";

export default function LiveTicker() {
  const liveEvents = EVENTS.filter((e) => e.isLive);
  if (liveEvents.length === 0) return null;

  const items = [...liveEvents, ...liveEvents, ...liveEvents, ...liveEvents];

  return (
    <div className="bg-brand-500/10 border-y border-brand-500/20 py-2.5 overflow-hidden">
      <div className="flex items-center">
        <div className="flex-shrink-0 flex items-center gap-1.5 px-4 border-r border-brand-500/20 mr-4 z-10 bg-surface">
          <Zap size={12} className="text-brand-400 fill-current" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-400 whitespace-nowrap">
            Live Now
          </span>
        </div>
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {items.map((e, i) => (
            <span
              key={`${e.id}-${i}`}
              className="inline-flex items-center gap-2 text-xs text-ink-muted"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-dot flex-shrink-0" />
              <span className="font-medium text-ink">{e.title}</span>
              <span className="text-ink-faint">·</span>
              <span>{e.host}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
