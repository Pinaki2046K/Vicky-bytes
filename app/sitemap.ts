import { MetadataRoute } from "next";
import { EVENTS } from "@/data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const eventRoutes = EVENTS.map((e) => ({
    url: `https://event-streaming-dusky.vercel.app/event/${e.id}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://event-streaming-dusky.vercel.app/",
      lastModified: new Date(),
      priority: 1.0,
    },
    ...eventRoutes,
  ];
}
