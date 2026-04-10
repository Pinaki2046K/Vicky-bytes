import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/event/HeroSection";
import LiveTicker from "@/components/event/LiveTicker";
import EventGrid from "@/components/event/EventGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <LiveTicker />
      <HeroSection />

      <main
        className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-14"
        id="events"
      >
        {/* Section header */}
        <div className="mb-8 fade-up-1">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-1">
            All Events
          </h2>
          <p className="text-sm text-ink-muted">
            Discover live streams, upcoming events, and on-demand content.
          </p>
        </div>

        <EventGrid />
      </main>

      <Footer />
    </>
  );
}
