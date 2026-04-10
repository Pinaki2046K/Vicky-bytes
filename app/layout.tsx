import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "VickyBytes Live — Stream the Moment",
    template: "%s | VickyBytes Live",
  },
  description:
    "Your premium destination for live events, music, esports, tech talks, and more. Watch live streams and upcoming events in real time.",
  keywords: [
    "live streaming",
    "live events",
    "music festival",
    "esports",
    "tech talks",
    "vickybytes",
  ],
  authors: [{ name: "VickyBytes" }],
  creator: "VickyBytes",
  metadataBase: new URL("https://event-streaming-dusky.vercel.app"),
  openGraph: {
    title: "VickyBytes Live — Stream the Moment",
    description: "Watch live music, esports, tech keynotes and more.",
    url: "https://event-streaming-dusky.vercel.app",
    siteName: "VickyBytes Live",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VickyBytes Live",
    description: "Stream the Moment — live events, music, esports & more.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
