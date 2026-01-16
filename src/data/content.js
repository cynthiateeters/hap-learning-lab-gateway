/**
 * content.js - Centralized content data for HAP Learning Lab Gateway
 *
 * All labs, projects, and media are defined here with course assignments.
 * This enables filtering by course and timeline-based ordering.
 */

// Course definitions with metadata and HAP introductions
export const courses = {
  javascript: {
    name: 'JavaScript Foundations',
    slug: 'javascript',
    headerTitle: "HAP's JavaScript Labs",
    headerSubtitle: 'Building your coding foundation',
    intro: `
      <p><strong>Welcome to JavaScript Foundations!</strong> I'm HAP, and this is where I learned to turn computational thinking into real code.</p>
      <p class="mt-1">These labs and projects will take you from understanding how programs think to writing your own JavaScript. We'll start with the basics and build up to creating interactive web applications.</p>
      <p class="mt-1">Remember: syntax comes easy once you understand the logic. Let's code!</p>
    `,
  },
  webdev2: {
    name: 'Web Dev 2',
    slug: 'webdev2',
    headerTitle: "HAP's Web Dev 2 Labs",
    headerSubtitle: 'Advanced web development techniques',
    intro: `
      <p><strong>Ready for Web Dev 2?</strong> I've been learning about APIs, advanced CSS, and deployment strategies—and I can't wait to share what I've discovered.</p>
      <p class="mt-1">These labs build on your JavaScript foundations and take you into the world of professional web development. We'll work with real APIs, responsive layouts, and production deployment.</p>
      <p class="mt-1">Prof. Teeters says this is where it all comes together. Let's build something real!</p>
    `,
  },
};

// All labs and projects with course assignments
export const labs = [
  {
    icon: '🧠',
    title: 'Computational Thinking',
    description:
      "Learn to think before you code. I'll take you through the Secret Number Game, where I discovered that describing behavior, writing pseudocode, and tracing logic are more important than memorizing syntax.",
    url: 'https://hap-computational-thinking.netlify.app/',
    stationCount: 6,
    difficulty: 'Beginner',
    status: 'live',
    cardType: 'lab',
    course: 'javascript',
  },
  {
    icon: '✨',
    title: 'Magic Quotes',
    description:
      'A collaborative web application for displaying random quotes—and my first real contribution project! Students learn Git workflows, structured data, and modern web development by adding their own quotes to a live site.',
    url: 'https://magic-quotes.netlify.app',
    difficulty: 'Beginner',
    status: 'live',
    cardType: 'project',
    course: 'javascript',
  },
  {
    icon: '📜',
    title: 'JavaScript Basics',
    description:
      "Once you can think computationally, it's time to write real code! I'll share how I learned JavaScript fundamentals—variables, functions, loops, and more—while building projects that actually do something.",
    stationCount: 6,
    difficulty: 'Beginner',
    status: 'coming-soon',
    cardType: 'lab',
    course: 'javascript',
  },
  // Web Dev 2 labs will be added here in Fall
];

// All media (podcasts and videos) with course assignments and dates
// Sorted by dateAdded descending (newest first) when retrieved
export const media = [
  {
    icon: '🎧',
    title: 'Computational Thinking',
    description:
      "HAP's Learning Lab teaches computational thinking as a foundational mindset. Learn the four pillars—decomposition, pattern recognition, abstraction, and algorithmic thinking—using the Secret Number Game.",
    url: 'https://open.spotify.com/episode/0XHODbHBn04SVjfDN0UzEw?si=y1XmZ6RASk2kSwXQJgQgjQ',
    duration: '12 min',
    showName: 'Deep Dive: The HAP Blog Edition',
    cardType: 'podcast',
    status: 'live',
    course: 'javascript',
    dateAdded: '2026-01-16',
  },
  {
    icon: '🦆',
    title: 'HAP Rubber Ducky Story',
    description:
      'Discover the power of rubber duck debugging! HAP shares how talking through problems out loud—even to a rubber duck—helps untangle complex coding challenges.',
    url: 'https://www.youtube.com/watch?v=Re4suES6sGA',
    cardType: 'video',
    status: 'live',
    course: 'javascript',
    dateAdded: '2026-01-16',
  },
  {
    icon: '📜',
    title: 'HAP Invites You to JavaScript',
    description:
      'Join HAP on the beginning of a JavaScript journey. This introduction sets the stage for learning programming fundamentals with curiosity and patience.',
    url: 'https://www.youtube.com/watch?v=cqyNnAmxTPg',
    cardType: 'video',
    status: 'live',
    course: 'javascript',
    dateAdded: '2026-01-16',
  },
  // Web Dev 2 media will be added here in Fall
];

// Helper functions for filtering and sorting

/**
 * Get all labs/projects for a specific course
 */
export function getLabsByCourse(courseSlug) {
  return labs.filter((lab) => lab.course === courseSlug);
}

/**
 * Get all media for a specific course, sorted by dateAdded (newest first)
 */
export function getMediaByCourse(courseSlug) {
  return media
    .filter((item) => item.course === courseSlug)
    .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
}

/**
 * Get all media sorted by dateAdded (newest first)
 */
export function getAllMediaSorted() {
  return [...media].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
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
