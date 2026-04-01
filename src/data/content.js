/**
 * content.js - Centralized content data for HAP Learning Lab Gateway
 *
 * All labs, projects, and media are defined here with course assignments.
 * This enables filtering by course and timeline-based ordering.
 */

// Course definitions with metadata and HAP introductions
export const courses = {
  javascript: {
    name: "JavaScript Foundations",
    slug: "javascript",
    headerTitle: "HAP's JavaScript Labs",
    headerSubtitle: "Building your coding foundation",
    intro: `
      <p><strong>Welcome to JavaScript Foundations!</strong> I'm HAP, and this is where I learned to turn computational thinking into real code.</p>
      <p class="mt-1">These labs and projects will take you from understanding how programs think to writing your own JavaScript. We'll start with the basics and build up to creating interactive web applications.</p>
      <p class="mt-1">Remember: syntax comes easy once you understand the logic. Let's code!</p>
    `,
  },
  robotcard: {
    name: "HAP's Robot ID Card",
    slug: "robotcard",
    headerTitle: "HAP's Robot ID Card Apps",
    headerSubtitle: "Interactive demos built across the labs",
    intro: `
      <p><strong>These are the apps I built!</strong> As I worked through the JavaScript and DOM labs, I created Robot ID Card apps that grew more interactive at each step.</p>
      <p class="mt-1">Each project below is a standalone demo showing the final result of what I learned. You can explore the code, remix it, or use it as a reference while working through the labs.</p>
    `,
  },
  webdev2: {
    name: "Web Dev 2",
    slug: "webdev2",
    headerTitle: "HAP's Web Dev 2 Labs",
    headerSubtitle: "Advanced web development techniques",
    intro: `
      <p><strong>Ready for Web Dev 2?</strong> I've been learning about APIs, advanced CSS, and deployment strategies—and I can't wait to share what I've discovered.</p>
      <p class="mt-1">These labs build on your JavaScript foundations and take you into the world of professional web development. We'll work with real APIs, responsive layouts, and production deployment.</p>
      <p class="mt-1">Prof. Teeters says this is where it all comes together. Let's build something real!</p>
    `,
  },
};

// All labs and projects with course assignments
// - order: Controls display sequence within course (lower numbers first)
// - slug: URL-safe identifier for anchor links (e.g., #computational-thinking)
export const labs = [
  {
    slug: "computational-thinking",
    order: 1,
    icon: "🧠",
    title: "Computational Thinking",
    description:
      "Learn to think before you code. I'll take you through the Secret Number Game, where I discovered that describing behavior, writing pseudocode, and tracing logic are more important than memorizing syntax.",
    url: "https://hap-computational-thinking.netlify.app/",
    stationCount: 6,
    difficulty: "Beginner",
    status: "live",
    cardType: "lab",
    course: "javascript",
    dateAdded: "2026-01-01",
  },
  {
    slug: "magic-quotes",
    order: 2,
    icon: "✨",
    title: "Magic Quotes",
    description:
      "A collaborative web application for displaying random quotes—and my first real contribution project! Students learn Git workflows, structured data, and modern web development by adding their own quotes to a live site.",
    url: "https://magic-quotes.netlify.app",
    difficulty: "Beginner",
    status: "live",
    cardType: "project",
    course: "javascript",
    dateAdded: "2026-01-01",
  },
  {
    slug: "javascript-foundations",
    order: 3,
    icon: "📜",
    title: "JavaScript Foundations",
    description:
      "Once you can think computationally, it's time to write real code! Follow me through 6 stations where I learned JavaScript fundamentals—variables, data types, operators, and more—while building a Robot ID Card that grows with each concept.",
    url: "https://hap-js-foundations.netlify.app/",
    stationCount: 6,
    difficulty: "Beginner",
    status: "live",
    cardType: "lab",
    course: "javascript",
    dateAdded: "2026-01-01",
  },
  {
    slug: "javascript-control-flow",
    order: 4,
    icon: "🔀",
    title: "JavaScript Control Flow",
    description:
      "Ready to make decisions in code? Join me as I learn truthy/falsy values, logical operators, conditionals, functions, and loops—all while extending our Robot ID Card with smarter, more dynamic behavior.",
    url: "https://hap-js-control-flow.netlify.app/",
    stationCount: 6,
    difficulty: "Beginner",
    status: "live",
    cardType: "lab",
    course: "javascript",
    dateAdded: "2026-01-01",
  },
  {
    slug: "living-in-the-terminal",
    order: 5,
    icon: "💻",
    title: "Living in the Terminal",
    description:
      "The terminal used to scare me. I watched my AI agent run commands and had no idea what was happening. Now I can navigate files, deploy a live site, shape how my agent behaves, and understand MCP servers — all from that blinking cursor.",
    url: "https://hap-and-terminal.netlify.app/",
    stationCount: 6,
    difficulty: "Beginner",
    status: "live",
    cardType: "lab",
    course: "javascript",
    dateAdded: "2026-01-01",
  },
  {
    slug: "the-dom",
    order: 6,
    icon: "🌳",
    title: "The DOM",
    description:
      "I thought my Robot ID Card was finished the moment I saved the HTML file. Then Prof. Teeters showed me the browser builds a living tree called the DOM — and JavaScript can reshape it without touching the original file. Six stations on finding, reading, changing, and building DOM elements.",
    url: "https://hap-dom.netlify.app/",
    stationCount: 6,
    difficulty: "Beginner",
    status: "live",
    cardType: "lab",
    course: "javascript",
    dateAdded: "2026-03-26",
  },
  {
    slug: "the-living-page",
    order: 7,
    icon: "⚡",
    title: "The Living Page",
    description:
      "My robot card looked amazing after the DOM lab — but when I clicked on it, nothing happened. Events are what bring a page to life. Six stations covering addEventListener, callbacks, view switching, forms, delegation, and AI code review.",
    url: "https://hap-events.netlify.app/",
    stationCount: 6,
    difficulty: "Beginner",
    status: "live",
    cardType: "lab",
    course: "javascript",
    dateAdded: "2026-04-01",
  },
  // Robot ID Card projects
  {
    slug: "robot-id-card-starter",
    order: 1,
    icon: "🤖",
    title: "Ready Build Starter",
    description:
      "A professional JavaScript tooling harness — clone it and start building. Vite dev server, ESLint, Prettier, Husky pre-commit hooks, Vitest, and GitHub Actions CI are all pre-configured.",
    url: "https://hap-7000.netlify.app/",
    difficulty: "Beginner",
    status: "live",
    cardType: "project",
    course: "robotcard",
    dateAdded: "2026-01-01",
  },
  {
    slug: "robot-id-card-events-demo",
    order: 2,
    icon: "🎯",
    title: "Robot ID Card — Events Demo",
    description:
      "The finished app from The Living Page lab. A fully interactive Robot ID Card built with addEventListener, callbacks, event delegation, view switching, forms, and safe DOM construction — all in vanilla JS.",
    url: "https://hap-7000-events.netlify.app/",
    difficulty: "Beginner",
    status: "live",
    cardType: "project",
    course: "robotcard",
    dateAdded: "2026-01-01",
  },
  // Web Dev 2 labs will be added here in Fall
];

// All media (podcasts and videos) with course assignments and dates
// - order: Controls display sequence within course (lower numbers first)
// - slug: URL-safe identifier for anchor links (e.g., #podcast-computational-thinking)
// - dateAdded: Used for "newest first" sorting in combined views
export const media = [
  {
    slug: "podcast-computational-thinking",
    order: 2,
    icon: "🎧",
    title: "Computational Thinking",
    description:
      "HAP's Learning Lab teaches computational thinking as a foundational mindset. Learn the four pillars—decomposition, pattern recognition, abstraction, and algorithmic thinking—using the Secret Number Game.",
    url: "https://open.spotify.com/episode/0XHODbHBn04SVjfDN0UzEw?si=y1XmZ6RASk2kSwXQJgQgjQ",
    duration: "12 min",
    showName: "Deep Dive: The HAP Blog Edition",
    cardType: "podcast",
    status: "live",
    course: "javascript",
    dateAdded: "2026-01-16",
  },
  {
    slug: "video-rubber-ducky",
    order: 3,
    icon: "🦆",
    title: "HAP's Rubber Ducky Story",
    description:
      "Discover the power of rubber duck debugging! HAP shares how talking through problems out loud—even to a rubber duck—helps untangle complex coding challenges.",
    url: "https://www.youtube.com/watch?v=Re4suES6sGA",
    cardType: "video",
    status: "live",
    course: "javascript",
    dateAdded: "2026-01-16",
  },
  {
    slug: "video-javascript-intro",
    order: 1,
    icon: "📜",
    title: "HAP Invites You to JavaScript",
    description:
      "Join HAP on the beginning of a JavaScript journey. This introduction sets the stage for learning programming fundamentals with curiosity and patience.",
    url: "https://www.youtube.com/watch?v=cqyNnAmxTPg",
    cardType: "video",
    status: "live",
    course: "javascript",
    dateAdded: "2026-01-16",
  },
  // Web Dev 2 media will be added here in Fall
];

// Helper functions for filtering and sorting

/**
 * Get all labs/projects for a specific course, sorted by order
 */
export function getLabsByCourse(courseSlug) {
  return labs.filter((lab) => lab.course === courseSlug).sort((a, b) => a.order - b.order);
}

/**
 * Get all media for a specific course, sorted by order
 */
export function getMediaByCourse(courseSlug) {
  return media.filter((item) => item.course === courseSlug).sort((a, b) => a.order - b.order);
}

/**
 * Get all media sorted by order
 */
export function getAllMediaSorted() {
  return [...media].sort((a, b) => a.order - b.order);
}

/**
 * Get all labs grouped by course
 */
export function getLabsGroupedByCourse() {
  const grouped = {};
  for (const [slug, course] of Object.entries(courses)) {
    grouped[slug] = {
      ...course,
      labs: getLabsByCourse(slug),
    };
  }
  return grouped;
}
