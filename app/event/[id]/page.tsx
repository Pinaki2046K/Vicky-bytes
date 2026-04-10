import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VideoPlayer from "@/components/event/VideoPlayer";
import EventDescription from "@/components/event/EventDescription";
import RelatedEvents from "@/components/event/RelatedEvents";
import LiveChat from "@/components/chat/LiveChat";
import { EVENTS } from "@/data/events";
import ScrollToTop from '../../../components/ui/scrolltopto';

type Props = { params: { id: string } };

export async function generateStaticParams() {
  return EVENTS.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const event = EVENTS.find((e) => e.id === params.id);
  if (!event) return { title: "Event Not Found" };
  return {
    title: `${event.title} | VickyBytes Live`,
    description: event.longDescription,
    openGraph: {
      title: event.title,
      description: event.longDescription,
      images: [{ url: event.image, width: 800, height: 450 }],
      type: "video.other",
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description: event.description,
      images: [event.image],
    },
  };
}

export default function EventPage({ params }: Props) {
  const event = EVENTS.find((e) => e.id === params.id);
  if (!event) notFound();

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/*
          Layout:
          Desktop: [Video (7/12)] [Chat (5/12)]
                   [Description]  [Related]
          Mobile:  Video → Description → Chat → Related
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* ── LEFT / MAIN COLUMN ── */}
          <div className="lg:col-span-8 space-y-6">
            {/* Video */}
            <div className="fade-up-1">
              <VideoPlayer
                youtubeId={event.youtubeId}
                title={event.title}
                isLive={event.isLive}
                viewers={event.viewers}
              />
            </div>

            {/* Description */}
            <div className="fade-up-2">
              <EventDescription event={event} />
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="lg:col-span-4 space-y-5 fade-up-2">
            {/* Chat — fixed height on desktop, natural on mobile */}
            <div className="h-[480px] lg:h-[520px]">
              <LiveChat isLive={event.isLive} />
            </div>

            {/* Related */}
            <RelatedEvents currentId={event.id} category={event.category} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
