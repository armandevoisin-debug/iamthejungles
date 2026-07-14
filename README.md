# Prisma - Creative Studio Landing Page

A dark, moody, and cinematic landing page for a creative studio built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Hero Section**: Full-viewport hero with video background, noise overlay, navbar, and giant responsive heading
- **About Section**: Multi-style pull-up text animations with scroll-linked character opacity effects
- **Features Section**: Animated feature cards with video and icon-based layouts
- **Animations**: Scroll-linked opacity, pull-up text effects, card entrance animations
- **Design**: Dark moody aesthetic with warm cream color palette (#DEDBC8)
- **Typography**: Almarai (global) and Instrument Serif (accents) from Google Fonts
- **Responsive**: Fully responsive across mobile, tablet, and desktop

## Tech Stack

- React 18
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:5173`

### Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── WordsPullUp.tsx              # Pull-up text animation component
│   ├── WordsPullUpMultiStyle.tsx    # Multi-style pull-up animations
│   └── AnimatedLetter.tsx           # Scroll-linked letter animation
├── sections/
│   ├── Hero.tsx                     # Hero section with video & navbar
│   ├── About.tsx                    # About section with scroll animations
│   └── Features.tsx                 # Features section with cards
├── App.tsx                          # Main App component
├── main.tsx                         # React entry point
└── index.css                        # Global styles & noise overlays
```

## Design System

### Colors

- **Background**: #000000 (black)
- **Card Background**: #101010 (about), #212121 (features)
- **Primary Text**: #E1E0CC (used in inline styles)
- **Tailwind Primary**: #DEDBC8 (warm cream)
- **Secondary Text**: text-gray-400, text-gray-500

### Typography

- **Global Font**: Almarai (weights: 300, 400, 700, 800)
- **Accent Font**: Instrument Serif (italic only)

### Animations

- Pull-up text: y: 20 → 0, staggered 0.08s delay
- Fade in: opacity 0 → 1
- Card entrance: scale 0.95 → 1, staggered 0.15s delay
- Scroll-linked opacity: character-by-character reveal

## Custom CSS Utilities

### .noise-overlay

Fractal noise texture for hero section overlay
- baseFrequency: 0.85
- numOctaves: 3
- Blended with mix-blend-overlay

### .bg-noise

Subtle noise background for features section
- baseFrequency: 0.9
- numOctaves: 4
- Opacity: 0.15

## License

MIT
