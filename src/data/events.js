import PR1 from "../assets/PR1.JPG";
import PR2 from "../assets/PR2.JPG";
import PR3 from "../assets/PR3.JPG";
import PR4 from "../assets/PR4.JPG";
import TH1 from "../assets/TH1.JPG";
import TH2 from "../assets/TH2.JPG";
import TH3 from "../assets/TH3.JPG";
import TH4 from "../assets/TH4.JPG";
import FF1 from "../assets/FF1.jpg";
import FF2 from "../assets/FF2.jpeg";
import FF3 from "../assets/FF3.jpg";
import FF4 from "../assets/FF4.jpeg";
import KBC1 from "../assets/KBC1.jpg";
import KBC2 from "../assets/KBC2.jpg";
import KBC3 from "../assets/KBC3.jpeg";
import KBC4 from "../assets/KBC4.jpeg";
import SS1 from "../assets/SS1.jpg";
import SS2 from "../assets/SS2.jpg";
import SS3 from "../assets/SS3.jpg";
import SS4 from "../assets/SS4.jpg";
import TreasureHuntPoster from "../assets/TreasureHuntPoster.jpeg";

/**
 * Reusable events data array
 * Used across Events page and EventDetail page
 */
export const eventsData = [
  {
    title: "PIXEL RUSH",
    slug: "pixel-rush",
    date: "July 31, 2025",
    shortDescription: "A fast-paced frontend challenge under real-world pressure.",
    fullDescription: `Pixel Rush is a high-intensity frontend development competition that pushes participants to their limits. Under real-world time pressure, developers race against the clock to build responsive, accessible, and pixel-perfect UI components from scratch.

You'll receive design specs and must implement them with clean, semantic HTML, modern CSS, and minimal JavaScript. No frameworks—just raw skills. Judged on accuracy, performance, and code quality. Whether you're a beginner sharpening your basics or an expert honing your speed, Pixel Rush separates the quick from the curious.`,
    organizers: ["MLSA Community"],
    collaborators: [],
    hashtags: ["PixelRush", "Frontend", "CodingChallenge", "MLSA"],
    heroImage: "/events/PixelRushPoster.jpg",
    galleryImages: [PR1, PR2, PR3, PR4],
  },
  {
    title: "TREASURE HUNT",
    slug: "treasure-hunt",
    date: "August 21, 2025",
    shortDescription: "Logic, clues, and teamwork in an adventurous coding quest.",
    fullDescription: `Treasure Hunt brings together logic, creativity, and collaboration in an unforgettable coding adventure. Teams navigate a series of interconnected challenges—each clue unlocks the next, and every puzzle tests your problem-solving skills.

From decoding cryptic messages to debugging hidden bugs, from algorithmic riddles to system design conundrums, the hunt rewards both individual brilliance and seamless teamwork. Form your squad, sharpen your minds, and embark on a quest where the real treasure is the journey itself.`,
    organizers: ["MLSA Community"],
    collaborators: [],
    hashtags: ["TreasureHunt2025", "Logic", "Teamwork", "Adventure", "MLSA"],
    heroImage: TreasureHuntPoster,
    galleryImages: [TH1, TH2, TH3, TH4],
  },
  {
    title: "FRESHERS FIESTA",
    slug: "freshers-fiesta",
    date: "August 28, 2025",
    shortDescription: "A welcoming celebration for new students with tech, fun, and creativity.",
    fullDescription: `Freshers Fiesta is the perfect welcome for new students—a blend of tech introductions, icebreakers, and creative workshops. Meet your peers, learn about MLSA, and dive into your first hands-on activities. Whether you're into coding, design, or just curious about tech, this event sets the tone for an amazing journey ahead.`,
    organizers: ["MLSA Community"],
    collaborators: [],
    hashtags: ["FreshersFiesta", "Welcome", "Tech", "MLSA"],
    heroImage: "/events/freshers-fiesta-hero.jpg",
    galleryImages: [FF1, FF2, FF3, FF4],
  },
  {
    title: "KBC — Kaun Banega Codepati",
    slug: "kbc-kon-banega-codepati",
    date: "September 18, 2025",
    shortDescription: "A high-energy coding quiz showdown.",
    fullDescription: `Inspired by the legendary quiz show, Kon Banega Codepati is a high-energy coding quiz showdown that puts your technical knowledge to the ultimate test. Compete live in a fast-paced, buzzer-based format where every second counts.

Questions span programming languages, data structures, algorithms, system design, and tech trivia. Quick reflexes, deep knowledge, and a bit of nerve—that's what it takes to become the Codepati. Whether you're a seasoned developer or a passionate learner, KBC is where legends are made.`,
    organizers: ["MLSA Community"],
    collaborators: [],
    hashtags: ["KBC", "KonBanegaCodepati", "Quiz", "Coding", "MLSA"],
    heroImage: "/events/kbc-hero.jpg",
    galleryImages: [KBC1, KBC2, KBC3, KBC4],
  },
  {
    title: "HACK-O-WEEN",
    slug: "hack-o-ween",
    date: "October 30, 2025",
    shortDescription: "A fresher-led tech event built with creativity and teamwork.",
    fullDescription: `🎃 Hack-O-Ween Tambola 2025

The Microsoft Technical Community at Amity University organized Hack-O-Ween Tambola on 30 October 2025, bringing a unique Halloween twist to a classic game. The event blended fun, logic, and technology through a spooky-themed Tambola where participants decoded clues, matched numbers, and competed in an exciting game of luck and strategy.

The event was especially memorable as it was planned and executed by the freshers of the Microsoft Technical Community, with valuable guidance from senior members. From organizing registrations to managing the gameplay, the event highlighted strong teamwork, creativity, and collaboration within the community.

Students enthusiastically participated in the event, making it an engaging and energetic experience. Winners were awarded exciting prizes, and Microsoft certificates were provided to all participants, making the event both fun and rewarding.

Hack-O-Ween Tambola showcased the spirit of the MTC community—bringing students together through innovative, enjoyable, and well-organized tech-community events.`,
    organizers: ["MLSA Freshers"],
    collaborators: ["MLSA Core Team"],
    hashtags: ["HackOWeen", "Hackathon", "Freshers", "Innovation", "MLSA"],
    heroImage: "/events/hack-o-ween-hero.jpg",
    galleryImages: [],
  },
  {
    title: "SITCOM SYNTAX",
    slug: "sitcom-syntax",
    date: "January 8, 2026",
    shortDescription: "A coding + entertainment themed technical showdown.",
    fullDescription: `Sitcom syntax: "Bazinga!" meets Binary Trees: SITCOM SYNTAX Was Absolutely Legendary 🔥

Let's be real - tech events can sometimes feel... predictable. Not this one. On January 8th, we took a crazy idea and turned it into reality:
What if The Office, TBBT, and Young Sheldon could teach Data Structures?
Spoiler alert: It was AMAZING. 🎉

The Scene:
🎬 Teams arrived ready to prove their sitcom knowledge
💻 Then hit them with complex DSA problems disguised as sitcom scenarios
🧠 Watched them connect the dots in the most creative ways
😂 Heard genuine laughter mixed with intense problem-solving

The Vibe:
"Wait, this is actually fun!" - Literally everyone

Shoutout Time 
🏆 To every participant who brought their A-game
🤝 Kapidhwaj Innovations Private Limited - for believing in this wild idea
💪 Our organizing team - who made magic happen
🎓 Winners - who absolutely crushed it

The Best Part?
Watching CS students realize that their "unproductive" screen time actually enhanced their problem-solving skills. Your binge-watching finally paid off. 😎

Delivered:
Microsoft Certificates for all
Prizes & exclusive Microsoft swags
Memories (and memes) that'll last
Proof that learning doesn't have to be boring`,
    organizers: ["MLSA Community"],
    collaborators: [],
    hashtags: ["SitcomSyntax", "Coding","TechWithTwist", "Entertainment", "MLSA"],
    heroImage: "/events/sitcom-syntax-hero.jpg",
    galleryImages: [SS1, SS2, SS3, SS4],
  },
];

export const getEventBySlug = (slug) =>
  eventsData.find((event) => event.slug === slug);
