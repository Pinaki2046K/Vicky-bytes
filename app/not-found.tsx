import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <div className="text-7xl mb-6">📡</div>
        <h1 className="font-display text-4xl font-bold text-ink mb-3">Signal Lost</h1>
        <p className="text-ink-muted text-base max-w-sm mb-8">
          The event you&apos;re looking for doesn&apos;t exist or has ended.
        </p>
        <Link
          href="/"
          className="px-5 py-3 bg-brand-500 text-white text-sm font-semibold rounded-xl hover:bg-brand-600 transition-colors"
        >
          Back to All Events
        </Link>
      </div>
    </>
  )
}
