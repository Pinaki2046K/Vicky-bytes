export type Event = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  longDescription: string;
  image: string;
  date: string;
  time: string;
  duration: string;
  viewers: number;
  likes: number;
  isLive: boolean;
  isTrending: boolean;
  host: string;
  hostAvatar: string;
  youtubeId: string;
};

export const CATEGORIES = [
  "All",
  "Music",
  "Gaming",
  "Tech",
  "Sports",
  "Art",
  "Comedy",
  "Education",
];

export const EVENTS: Event[] = [
  {
    id: "1",
    title: "Neon Nights Music Festival 2026",
    category: "Music",
    tags: ["EDM", "Live DJ", "Festival"],
    description: "The biggest electronic music gathering of the year.",
    longDescription:
      "Neon Nights brings together the world's top electronic music artists for an unforgettable night of beats, visuals, and energy. Featuring headliners from across the globe, cutting-edge light installations, and immersive sound stages that push the boundaries of live music performance.",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    date: "2026-04-12",
    time: "9:00 PM",
    duration: "4h",
    viewers: 124500,
    likes: 8920,
    isLive: true,
    isTrending: true,
    host: "VickyBytes Live",
    hostAvatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80",
    youtubeId: "jfKfPfyJRdk",
  },
  {
    id: "2",
    title: "Global Esports Championship — Finals",
    category: "Gaming",
    tags: ["Esports", "Competitive", "Finals"],
    description: "Watch the best teams battle for the world title.",
    longDescription:
      "The most anticipated esports event of the year. Teams from 32 countries compete in the ultimate showdown. Watch nail-biting matches, pro-player interviews, and expert commentary as the world champion is crowned live.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    date: "2026-04-13",
    time: "3:00 PM",
    duration: "6h",
    viewers: 312000,
    likes: 21400,
    isLive: true,
    isTrending: true,
    host: "EsportsHQ",
    hostAvatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&q=80",
    youtubeId: "fiMAOu0JgSs",
  },
  {
    id: "3",
    title: "React Summit 2026 — Keynote",
    category: "Tech",
    tags: ["React", "Frontend", "Web Dev"],
    description: "The world's biggest React conference goes live.",
    longDescription:
      "React Summit 2026 brings together core team members, framework authors, and the world's leading frontend engineers for a day of talks, demos, and announcements. Expect new feature reveals, performance deep dives, and architectural insights that will shape the future of React.",
    image:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
    date: "2026-04-14",
    time: "11:00 AM",
    duration: "8h",
    viewers: 89000,
    likes: 5300,
    isLive: false,
    isTrending: true,
    host: "GitNation",
    hostAvatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&q=80",
    youtubeId: "BYzp55Th3pU",
  },
  {
    id: "4",
    title: "UEFA Champions League — Semi Final",
    category: "Sports",
    tags: ["Football", "UEFA", "Live Match"],
    description: "The semifinal clash that will define the finalists.",
    longDescription:
      "Two European giants clash in this high-stakes semifinal tie. Goals, drama, and moments of brilliance guaranteed. Watch with full pre-match analysis, live coverage, and post-match breakdown from our expert panel.",
    image:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
    date: "2026-04-15",
    time: "7:45 PM",
    duration: "2h",
    viewers: 2100000,
    likes: 145000,
    isLive: false,
    isTrending: true,
    host: "Sports Central",
    hostAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    youtubeId: "WlRb7-mRfrk",
  },
  {
    id: "5",
    title: "Abstract Worlds — Digital Art Showcase",
    category: "Art",
    tags: ["Digital Art", "NFT", "Creative"],
    description: "Explore boundary-pushing digital art live with the artists.",
    longDescription:
      "Join renowned digital artists as they unveil new collections, discuss creative process, and interact with the audience in real time. Features exclusive premieres, live painting sessions, and panel discussions on the intersection of art and technology.",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80",
    date: "2026-04-16",
    time: "6:00 PM",
    duration: "3h",
    viewers: 34000,
    likes: 2800,
    isLive: false,
    isTrending: false,
    host: "ArtBlock",
    hostAvatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    youtubeId: "ZWyFarqAn4o",
  },
  {
    id: "6",
    title: "Stand-Up Comedy by Samay Raina",
    category: "Comedy",
    tags: ["Stand-up", "Comedy Night", "Live Show"],
    description: "A night of laughs with India's top stand-up comedians.",
    longDescription:
      "Join Samay Raina and a stellar lineup of comedians for a two-hour live stand-up special. Expect sharp social commentary, relatable stories, and the kind of humor that makes you laugh until it hurts.",
    image:
      "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?w=800&q=80",
    date: "2026-04-17",
    time: "8:30 PM",
    duration: "2h 30m",
    viewers: 67000,
    likes: 9100,
    isLive: false,
    isTrending: false,
    host: "ComedyHouse",
    hostAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    youtubeId: "CPO6vsnYk_k",
  },
  {
    id: "7",
    title: "Machine Learning Bootcamp — Day 1",
    category: "Education",
    tags: ["ML", "AI", "Workshop"],
    description: "A hands-on bootcamp for aspiring ML engineers.",
    longDescription:
      "This intensive bootcamp covers everything from foundational linear algebra to deploying production ML models. Day 1 focuses on Python fundamentals, data preprocessing, and your first neural network. Taught by practitioners from top AI labs.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    date: "2026-04-18",
    time: "10:00 AM",
    duration: "7h",
    viewers: 45000,
    likes: 3700,
    isLive: false,
    isTrending: false,
    host: "DeepLearnHub",
    hostAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    youtubeId: "7IgVGSaQPaw",
  },
  {
    id: "8",
    title: "Lo-Fi City Sessions — Vol. 12",
    category: "Music",
    tags: ["Lo-Fi", "Chill", "Jazz"],
    description: "Smooth beats for late night coding and studying.",
    longDescription:
      "The twelfth edition of our beloved Lo-Fi City Sessions. Four hours of original lo-fi beats, city soundscapes, and jazz-infused ambience. Perfect for focus, relaxation, or just vibing.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    date: "2026-04-12",
    time: "11:00 PM",
    duration: "4h",
    viewers: 19000,
    likes: 1540,
    isLive: true,
    isTrending: false,
    host: "Chillhop HQ",
    hostAvatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&q=80",
    youtubeId: "l98w9OSKVNA",
  },
  {
    id: "9",
    title:
      "Complete Devops bootcamp (Beginner friendly) | EC2 Servers, S3, CDNs, nginx & VMs",
    category: "Tech",
    tags: ["DevOps", "Cloud", "Workshop"],
    description: "Master the art of DevOps with this comprehensive bootcamp.",
    longDescription:
      "This intensive bootcamp covers everything from foundational DevOps principles to advanced cloud deployment strategies. Learn to manage EC2 servers, configure S3 storage, set up CDNs, and deploy applications using nginx and VMs. Taught by industry experts with real-world experience.",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    date: "2026-04-19",
    time: "12:00 PM",
    duration: "48h",
    viewers: 221000,
    likes: 18200,
    isLive: false,
    isTrending: true,
    host: "Harkirat Singh",
    hostAvatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&q=80",
    youtubeId: "sSRaakd95Nk",
  },
  {
    id: "10",
    title: "Figma to Code — Advanced UI Workshop",
    category: "Tech",
    tags: ["Design", "Figma", "CSS"],
    description: "Turn complex Figma designs into pixel-perfect components.",
    longDescription:
      "This advanced workshop bridges the gap between design and code. Starting from a complex Figma design, we'll build every component from scratch — handling edge cases, responsiveness, accessibility, and animations. Ideal for intermediate frontend developers.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    date: "2026-04-20",
    time: "2:00 PM",
    duration: "4h",
    viewers: 28000,
    likes: 2100,
    isLive: false,
    isTrending: false,
    host: "DesignCode",
    hostAvatar:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&q=80",
    youtubeId: "RGKi6LSPDLU",
  },
  {
    id: "11",
    title: "Formula E — Monaco ePrix Live",
    category: "Sports",
    tags: ["Racing", "Electric", "Formula E"],
    description: "Electric racing at its finest through Monaco's streets.",
    longDescription:
      "The Formula E Monaco ePrix brings silent speed to the world's most iconic circuit. Watch elite drivers navigate the narrow streets of Monte Carlo in cutting-edge electric single-seaters. Full qualifying coverage, race day broadcast, and paddock access included.",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    date: "2026-04-21",
    time: "1:00 PM",
    duration: "3h",
    viewers: 980000,
    likes: 72000,
    isLive: false,
    isTrending: true,
    host: "Formula E Official",
    hostAvatar:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&q=80",
    youtubeId: "NvUtBAtjwEY",
  },
  {
    id: "12",
    title: "Impressionism Live — Painting Masterclass",
    category: "Art",
    tags: ["Painting", "Masterclass", "Impressionism"],
    description: "Learn impressionist techniques from a master painter.",
    longDescription:
      "Award-winning painter Elena Vasquez guides you through the fundamentals and advanced techniques of impressionist painting. Live Q&A, real-time demonstrations, and critique sessions. No experience needed — all levels welcome.",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    date: "2026-04-22",
    time: "5:00 PM",
    duration: "3h",
    viewers: 12000,
    likes: 980,
    isLive: false,
    isTrending: false,
    host: "ArtStudio Live",
    hostAvatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    youtubeId: "3jhHX_tpy70",
  },
  {
    id: "13",
    title: "Late Night Roast — Comedy Smackdown",
    category: "Comedy",
    tags: ["Roast", "Live", "Celebrity"],
    description: "No one is safe in this hilarious celebrity roast special.",
    longDescription:
      "The most savage evening in streaming history. Celebrity comics and surprise guests take the roast throne in an uncensored night of sharp wit, callbacks, and genuine camaraderie. Live studio audience, special guests, and unscripted chaos.",
    image:
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&q=80",
    date: "2026-04-23",
    time: "10:00 PM",
    duration: "2h",
    viewers: 130000,
    likes: 14500,
    isLive: false,
    isTrending: false,
    host: "ComedyCentral Live",
    hostAvatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80",
    youtubeId: "0cIHhoJcv-M",
  },
  {
    id: "14",
    title: "Space & Cosmos — Live NASA Q&A",
    category: "Education",
    tags: ["Space", "NASA", "Science"],
    description: "Actual NASA scientists answer your space questions live.",
    longDescription:
      "A rare opportunity to ask NASA scientists anything — from Mars colonisation to black holes to daily life on the ISS. Submit questions in real time, watch live space footage, and explore interactive simulations alongside researchers at the frontier of human knowledge.",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80",
    date: "2026-04-24",
    time: "4:00 PM",
    duration: "2h 30m",
    viewers: 560000,
    likes: 41000,
    isLive: false,
    isTrending: true,
    host: "NASA",
    hostAvatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    youtubeId: "Ii_tmJff7LQ",
  },
  {
    id: "15",
    title: "Afrobeats Unplugged — Acoustic Session",
    category: "Music",
    tags: ["Afrobeats", "Acoustic", "Live Music"],
    description: "Stripped-back afrobeats magic from Lagos to the world.",
    longDescription:
      "Five of afrobeats' brightest stars perform acoustic versions of their biggest hits in an intimate live session. Expect raw emotion, improvisation, storytelling, and the kind of performance you can only get without a wall of production behind it.",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    date: "2026-04-25",
    time: "7:00 PM",
    duration: "2h",
    viewers: 78000,
    likes: 6700,
    isLive: false,
    isTrending: false,
    host: "AfroLive Studios",
    hostAvatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    youtubeId: "8x7FHuOtEmo",
  },
{
  id: "16",
  title: "Anthropic just locked down its most powerful model yet...",
  category: "Tech",
  tags: ["AI", "Anthropic", "Live Demo"],
    description: "Browserbase is the simplest way to give your agents access to the whole web.",
    longDescription:
      "Anthropic locked down their new Mythos model because they say it's too dangerous for normies like you and me to use. Let's investigate...",
    image:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
    date: "2026-04-25",
    time: "7:00 PM",
    duration: "2h",
    viewers: 53972,
    likes: 3400,
    isLive: false,
    isTrending: false,
    host: "Anthropic",
    hostAvatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80",
    youtubeId: "d3Qq-rkp_to",
  },
  {
  id: '17',
  title: 'OpenAI\'s o4 Just Changed Everything — Live Breakdown',
  category: 'Tech',
  tags: ['AI', 'OpenAI', 'Analysis'],
  description: 'A deep dive into what o4 actually means for developers and the industry.',
  longDescription: 'OpenAI dropped o4 with almost no warning and the benchmarks are wild. We\'re going line by line through the system card, testing it live, and figuring out what this actually means for people building with AI right now.',
  image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  date: '2026-04-26',
  time: '6:00 PM',
  duration: '1h 30m',
  viewers: 41200,
  likes: 2900,
  isLive: false,
  isTrending: true,
  host: 'Fireship',
  hostAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  youtubeId: 'zjkBMFhNj_g',
},
{
  id: '18',
  title: 'We Built a Full SaaS in 4 Hours Using Only AI Agents',
  category: 'Tech',
  tags: ['AI', 'Agents', 'Coding'],
  description: 'No human wrote a single line of code. Here\'s what happened.',
  longDescription: 'Three engineers, four hours, zero handwritten code. We gave AI agents a product brief and let them loose — Cursor, Claude, and a custom orchestration layer. The result was terrifying and impressive in equal measure. Watch the full uncut session.',
  image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
  date: '2026-04-27',
  time: '9:00 PM',
  duration: '4h',
  viewers: 67800,
  likes: 5100,
  isLive: false,
  isTrending: true,
  host: 'Theo — t3.gg',
  hostAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80',
  youtubeId: 'hRrAwy1Thbs',
},
];

export function formatViewers(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return n.toString();
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
