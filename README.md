# HAP Learning Lab Gateway

Central landing page for HAP (HyBit A. ProtoBot) educational content. This Astro 5 static site serves as the gateway to standalone Learning Lab sites hosted on Netlify.

## Beginner's guide

### What is this project?

HAP Learning Lab Gateway is a website that helps students navigate to various educational labs and resources. HAP is an AI apprentice character who guides students through learning programming concepts.

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher
- npm (comes with Node.js)
- A code editor (VS Code recommended)

### Getting started

1. Clone the repository:

   ```bash
   git clone https://github.com/cynthiateeters/hap-learning-lab-gateway.git
   cd hap-learning-lab-gateway
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:4321`

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start development server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview production build locally             |

## Project structure

```
src/
├── data/
│   └── content.js              # Centralized content data (labs, media, courses)
├── pages/
│   ├── index.astro             # Landing page (all courses)
│   ├── javascript.astro        # JavaScript course page
│   └── webdev2.astro           # Web Dev 2 course page
├── layouts/
│   └── GatewayLayout.astro     # HTML document structure, SEO, CSP
├── components/
│   ├── Header.astro            # Title, HAP avatar, intro content
│   ├── Footer.astro            # Copyright, trademark notices
│   └── LabCard.astro           # Card for labs, projects, podcasts, videos
├── styles/
│   └── global.css              # All styles, color palette, typography
public/
└── fonts/                      # Nunito and Source Code Pro variable fonts
```

## Routes

| Route         | Description                                        |
| ------------- | -------------------------------------------------- |
| `/`           | Landing page showing all content grouped by course |
| `/javascript` | JavaScript Foundations course page                 |
| `/webdev2`    | Web Dev 2 course page                              |

## Adding content

All content is managed in `src/data/content.js`.

### Adding a new lab or project

Add to the `labs` array:

```javascript
{
  slug: 'my-new-lab',           // URL-safe identifier for anchor links
  order: 4,                      // Display sequence (lower = first)
  icon: '🎯',
  title: 'My New Lab',
  description: 'Description of the lab...',
  url: 'https://my-lab.netlify.app',
  stationCount: 6,               // Omit for projects
  difficulty: 'Beginner',
  status: 'live',                // or 'coming-soon'
  cardType: 'lab',               // or 'project'
  course: 'javascript',          // or 'webdev2'
}
```

### Adding media (podcasts/videos)

Add to the `media` array:

```javascript
{
  slug: 'video-my-topic',
  order: 4,
  icon: '🎬',
  title: 'My Video Title',
  description: 'Description...',
  url: 'https://youtube.com/watch?v=...',
  cardType: 'video',             // or 'podcast'
  status: 'live',
  course: 'javascript',
  dateAdded: '2026-01-20',
}
```

## Canvas LMS integration

Each card has an anchor link for direct linking from Canvas assignments:

| Content                        | Anchor URL                         |
| ------------------------------ | ---------------------------------- |
| Computational Thinking Lab     | `/#computational-thinking`         |
| Magic Quotes Project           | `/#magic-quotes`                   |
| Computational Thinking Podcast | `/#podcast-computational-thinking` |

Example Canvas link: `https://hap-learning-lab-gateway.netlify.app/#computational-thinking`

## Technology stack

- **Framework**: [Astro 5.x](https://astro.build/) (static site generation)
- **Styling**: CSS custom properties with hsl() colors
- **Fonts**: Self-hosted variable fonts (Nunito, Source Code Pro)
- **Images**: Cloudinary CDN with responsive transformations
- **Hosting**: Netlify

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Run `npm run build` to verify the build succeeds
5. Commit your changes with a descriptive message
6. Push to your fork and submit a pull request

### Code style

- Use `hsl()` format for all CSS colors
- Use "CSS custom property" terminology (not "CSS variable")
- Follow existing component patterns

## License

MIT License - see [LICENSE](LICENSE) for details.

## Copyright

HAP Educational Content © 2026 Cynthia Teeters. All rights reserved.

HyBit A. ProtoBot (HAP) character and the apprentice learning methodology are proprietary educational innovations. Character concept, teaching methodology, and all written content created by Prof. Cynthia Teeters. Visual elements created with AI assistance.
