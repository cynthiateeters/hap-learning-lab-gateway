# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

HAP Learning Lab Gateway is an Astro 5 static site that serves as the central landing page for HAP (HyBit A. ProtoBot) educational content. It links to standalone Learning Lab sites hosted on Netlify.

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
```

## Architecture

### Technology stack

- **Framework**: Astro 5.x (static site generation)
- **Styling**: Single global CSS file with CSS custom properties
- **Fonts**: Self-hosted variable fonts (Nunito for UI, Source Code Pro for code)
- **Images**: Cloudinary CDN with responsive transformations

### File structure

```
src/
├── pages/index.astro       # Single landing page with lab cards
├── layouts/GatewayLayout.astro  # HTML document structure, SEO, CSP
├── components/
│   ├── Header.astro        # Title, HAP avatar, intro content
│   ├── Footer.astro        # Copyright, trademark notices
│   └── LabCard.astro       # Card for labs (live or coming-soon)
├── styles/
│   └── global.css          # All styles, color palette, typography
public/
└── fonts/                  # Nunito and Source Code Pro variable fonts
```

### Component patterns

- **LabCard**: Supports two card types (`lab` with station count, `project` without) and two statuses (`live` with URL, `coming-soon` disabled)
- **GatewayLayout**: Receives all page metadata via props including OG tags, CSP policy, and Cloudinary preconnect
- Content is passed to components via props, not slots (except the main content slot in GatewayLayout)

## Styling conventions

- **Colors**: Always use `hsl()` format, never hex or rgb
- **Custom properties**: Defined in `:root` in global.css (e.g., `--warm-orange`, `--cream-white`)
- **WCAG AA compliance**: Darker variants exist for accessible text contrast (e.g., `--teal-darker`, `--orange-darkest`)
- **Component styles**: Scoped `<style>` blocks in Astro components for component-specific styles

## External dependencies

- All images served from Cloudinary (`res.cloudinary.com/cynthia-teeters`)
- Labs link to external Netlify-hosted sites (e.g., `hap-computational-thinking.netlify.app`)

## Content guidelines

- HAP character uses first-person voice ("I learned...", "Prof. Teeters always says...")
- Copyright notices required in layout and index page HTML comments
- Educational content is proprietary; visual elements created with AI assistance
