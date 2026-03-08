# Freetown Press Website

Corporate website for **Freetown Press** — a full-service corporate branding, premium printing, professional training, and business supplies company based in Ghana.

**Live tagline:** *Elevating Brands. Delivering Excellence.*

## Tech Stack

- **React** 19
- **Vite** 7
- **CSS** (custom properties, no UI framework)
- **ESLint** 9

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── About/          # Mission, vision, and values
│   ├── Blog/           # Featured blog articles
│   ├── Contact/        # Contact form with embedded map
│   ├── FAQ/            # Expandable FAQ accordion
│   ├── Footer/         # Site footer with links and socials
│   ├── Hero/           # Main hero banner
│   ├── Industries/     # Target industries served
│   ├── Navbar/         # Responsive navigation with mobile menu
│   ├── Process/        # 4-step workflow
│   ├── Quote/          # Quote request form with file upload
│   ├── Services/       # Core service offerings
│   ├── Testimonials/   # Client reviews and ratings
│   ├── Trusted/        # Client trust indicators
│   ├── WhoWeAre/       # Company introduction
│   ├── WhyUs/          # Reasons to choose Freetown Press
│   └── WaveDivider.jsx # Decorative SVG wave divider
├── hooks/
│   ├── useFadeIn.js    # Fade-in animation via IntersectionObserver
│   └── useReveal.js    # Global scroll-triggered reveal animations
├── App.jsx             # Main app layout (single-page)
├── index.css           # Global styles and CSS variables
└── main.jsx            # Entry point
```

## Features

- Single-page layout with smooth scroll navigation
- Mobile-responsive design with hamburger menu
- Scroll-triggered reveal animations (IntersectionObserver)
- Quote request form with file upload
- FAQ accordion with expand/collapse
- Embedded Google Maps
- Blog section with featured articles
- Client testimonials with star ratings

## Services

- Corporate Branding & Marketing
- Premium Printing & Corporate Merchandise
- Professional Training
- Business Supplies
