import { Tv } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface-1 mt-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center">
                <Tv size={14} className="text-white" />
              </div>
              <span className="font-display font-bold text-lg">VickyBytes</span>
            </Link>
            <p className="text-xs text-ink-muted leading-relaxed max-w-xs">
              Your premium destination for live events, music, esports, and
              creator content.
            </p>
          </div>
          {[
            {
              title: "Platform",
              links: ["Events", "Live Now", "Schedule", "Creators"],
            },
            {
              title: "Categories",
              links: ["Music", "Gaming", "Tech", "Sports"],
            },
            { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-ink-muted uppercase tracking-widest mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="text-sm text-ink-muted hover:text-ink transition-colors"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-faint">
            © 2026 VickyBytes. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-ink-faint">
            <Link href="#" className="hover:text-ink-muted transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-ink-muted transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-ink-muted transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
