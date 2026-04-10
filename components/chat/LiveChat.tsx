"use client";

import { useState, useEffect, useRef } from "react";
import { Send, Smile, ChevronDown } from "lucide-react";
import {
  MOCK_MESSAGES,
  generateRandomMessage,
  type ChatMessage,
} from "@/data/chat";
import clsx from "clsx";

const AVATAR_COLORS = [
  "bg-violet-600",
  "bg-blue-600",
  "bg-emerald-600",
  "bg-amber-600",
  "bg-pink-600",
  "bg-cyan-600",
  "bg-rose-600",
];

function avatarColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++)
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

export default function LiveChat({ isLive }: { isLive: boolean }) {
  const [messages, setMessages] = useState<ChatMessage[]>(MOCK_MESSAGES);
  const [input, setInput] = useState("");
  const [atBottom, setAtBottom] = useState(true);
  const [newCount, setNewCount] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Auto-generate messages every 2-4s when live
  useEffect(() => {
    if (!isLive) return;
    const interval = setInterval(
      () => {
        const msg = generateRandomMessage();
        setMessages((prev) => {
          const next = [...prev, msg].slice(-80); // cap at 80
          return next;
        });
        if (!atBottom) setNewCount((c) => c + 1);
      },
      2000 + Math.random() * 2000,
    );
    return () => clearInterval(interval);
  }, [isLive, atBottom]);

  // Auto-scroll if at bottom
  useEffect(() => {
    if (atBottom) {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
      setNewCount(0);
    }
  }, [messages, atBottom]);

  function handleScroll() {
    const el = listRef.current;
    if (!el) return;
    const isNearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 60;
    setAtBottom(isNearBottom);
    if (isNearBottom) setNewCount(0);
  }

  function scrollToBottom() {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    setAtBottom(true);
  }

  function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const now = new Date();
    const msg: ChatMessage = {
      id: `user-${Date.now()}`,
      user: "you",
      avatar: "ME",
      text,
      time: `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`,
      isHighlight: false,
    };
    setMessages((prev) => [...prev, msg].slice(-80));
    setInput("");
    setAtBottom(true);
  }

  return (
    <div className="flex flex-col h-full bg-surface-1 rounded-2xl border border-white/5 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 flex-shrink-0">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-sm text-ink">Live Chat</span>
          {isLive && (
            <span className="flex items-center gap-1 text-[10px] text-brand-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-dot" />
              Active
            </span>
          )}
        </div>
        <span className="text-xs text-ink-muted font-mono">
          {messages.length} msgs
        </span>
      </div>

      {/* Messages list */}
      <div
        ref={listRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto px-3 py-3 space-y-2 min-h-0"
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={clsx(
              "chat-message-enter flex gap-2 group",
              msg.user === "you" && "flex-row-reverse",
            )}
          >
            {/* Avatar */}
            <div
              className={clsx(
                "w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-white",
                avatarColor(msg.avatar),
              )}
            >
              {msg.avatar.slice(0, 2)}
            </div>
            {/* Bubble */}
            <div
              className={clsx(
                "max-w-[75%]",
                msg.user === "you" ? "items-end" : "items-start",
                "flex flex-col gap-0.5",
              )}
            >
              {msg.user !== "you" && (
                <span
                  className={clsx(
                    "text-[10px] font-medium leading-none",
                    msg.isHighlight ? "text-amber-400" : "text-ink-muted",
                  )}
                >
                  {msg.user}
                </span>
              )}
              <div
                className={clsx(
                  "px-3 py-2 rounded-2xl text-xs leading-relaxed break-words",
                  msg.user === "you"
                    ? "bg-brand-500 text-white rounded-tr-sm"
                    : msg.isHighlight
                      ? "bg-amber-500/10 text-ink border border-amber-500/20 rounded-tl-sm"
                      : "bg-surface-3 text-ink rounded-tl-sm",
                )}
              >
                {msg.text}
              </div>
              <span className="text-[9px] text-ink-faint px-1">{msg.time}</span>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Scroll-to-bottom button */}
      {!atBottom && newCount > 0 && (
        <button
          onClick={scrollToBottom}
          className="mx-3 mb-2 flex items-center justify-center gap-1.5 py-1.5 bg-brand-500/20 border border-brand-500/30 rounded-lg text-xs text-brand-400 hover:bg-brand-500/30 transition-colors"
        >
          <ChevronDown size={12} />
          {newCount} new {newCount === 1 ? "message" : "messages"}
        </button>
      )}

      {/* Input */}
      <form
        onSubmit={sendMessage}
        className="px-3 py-3 border-t border-white/5 flex-shrink-0"
      >
        <div className="flex items-center gap-2 bg-surface-2 border border-white/8 rounded-xl px-3 py-2 focus-within:border-brand-500/40 transition-colors">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Say something…"
            maxLength={200}
            className="flex-1 bg-transparent text-xs text-ink placeholder-ink-muted outline-none"
          />
          <button
            type="button"
            className="text-ink-muted hover:text-ink transition-colors p-0.5"
          >
            <Smile size={14} />
          </button>
          <button
            type="submit"
            disabled={!input.trim()}
            className="w-6 h-6 rounded-lg bg-brand-500 flex items-center justify-center disabled:opacity-30 hover:bg-brand-600 transition-all hover:scale-110 active:scale-95"
          >
            <Send size={10} className="text-white" />
          </button>
        </div>
        <p className="text-[9px] text-ink-faint mt-1.5 px-1">
          {isLive
            ? "Chat is live — be respectful 👋"
            : "Chat is paused for offline events"}
        </p>
      </form>
    </div>
  );
}
