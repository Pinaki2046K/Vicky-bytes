export type ChatMessage = {
  id: string;
  user: string;
  avatar: string;
  text: string;
  time: string;
  isHighlight?: boolean;
};

export const MOCK_MESSAGES: ChatMessage[] = [
  {
    id: "1",
    user: "ravi_x",
    avatar: "RX",
    text: "This is absolutely 🔥🔥🔥",
    time: "21:02",
    isHighlight: false,
  },
  {
    id: "2",
    user: "priya.dev",
    avatar: "PD",
    text: "Can't believe the quality of this stream!",
    time: "21:02",
  },
  {
    id: "3",
    user: "kofi88",
    avatar: "K8",
    text: "Joining from Accra 🇬🇭 big up!",
    time: "21:03",
  },
  {
    id: "4",
    user: "synthwave_fan",
    avatar: "SF",
    text: "That drop was insane wtf",
    time: "21:03",
    isHighlight: true,
  },
  {
    id: "5",
    user: "ananya_k",
    avatar: "AK",
    text: "what's the song name right now???",
    time: "21:04",
  },
  {
    id: "6",
    user: "marcus_lb",
    avatar: "ML",
    text: "Someone put the tracklist in the chat pls",
    time: "21:04",
  },
  {
    id: "7",
    user: "zeynep_t",
    avatar: "ZT",
    text: "Best event of 2026 no contest",
    time: "21:05",
  },
  {
    id: "8",
    user: "dev_srini",
    avatar: "DS",
    text: "Watching while deploying 😂 multitasking pro",
    time: "21:05",
  },
  {
    id: "9",
    user: "ravi_x",
    avatar: "RX",
    text: "LFGGGGG the bass just came back in 🚀",
    time: "21:06",
  },
  {
    id: "10",
    user: "luna_beats",
    avatar: "LB",
    text: "I drove 400km to be here virtually haha",
    time: "21:06",
  },
  {
    id: "11",
    user: "priya.dev",
    avatar: "PD",
    text: "The visuals sync is *chef's kiss*",
    time: "21:07",
    isHighlight: true,
  },
  {
    id: "12",
    user: "kofi88",
    avatar: "K8",
    text: "How many people watching rn?",
    time: "21:07",
  },
  {
    id: "13",
    user: "tae_codes",
    avatar: "TC",
    text: "124K+ concurrent fr insane",
    time: "21:08",
  },
  {
    id: "14",
    user: "synthwave_fan",
    avatar: "SF",
    text: "PEAK",
    time: "21:08",
  },
  {
    id: "15",
    user: "ananya_k",
    avatar: "AK",
    text: "someone drop the merch link i need it",
    time: "21:09",
  },
];

const BOT_MESSAGES = [
  "This is incredible! 🔥",
  "The energy is unreal tonight",
  "First time watching, already hooked",
  "Can someone timestamp this?",
  "❤️❤️❤️",
  "Watching from Tokyo!",
  "This beat slaps harder every time",
  "Stream quality is perfect rn",
  "We need a Part 2 of this!!",
  "My roommate is judging me for screaming at my laptop lol",
  "The production value 👏👏",
  "Shoutout from São Paulo 🇧🇷",
  "This is going in my saved streams forever",
  "How is this FREE",
  "🚀🚀🚀",
];

const BOT_USERS = [
  { user: "wave_rider", avatar: "WR" },
  { user: "nite_owl_99", avatar: "NO" },
  { user: "beats_by_ola", avatar: "BB" },
  { user: "techno_tom", avatar: "TT" },
  { user: "music_maven", avatar: "MM" },
  { user: "live_addict", avatar: "LA" },
  { user: "stream_king", avatar: "SK" },
];

let msgCounter = 100;

export function generateRandomMessage(): ChatMessage {
  const u = BOT_USERS[Math.floor(Math.random() * BOT_USERS.length)];
  const text = BOT_MESSAGES[Math.floor(Math.random() * BOT_MESSAGES.length)];
  const now = new Date();
  msgCounter++;
  return {
    id: String(msgCounter),
    user: u.user,
    avatar: u.avatar,
    text,
    time: `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`,
    isHighlight: Math.random() < 0.08,
  };
}
