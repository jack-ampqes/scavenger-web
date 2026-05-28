# SCAVENGER Website

A modern, responsive website for SCAVENGER built with Next.js, React, and TypeScript.

## Features

- 🚀 Next.js 14 with App Router
- ⚛️ React 18
- 📘 TypeScript
- 🎨 Modern, responsive design
- 📱 Mobile-friendly navigation
- 🎯 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
scavenger/
├── app/
│   ├── layout.tsx      # Root layout with Header and Footer
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer with contact info
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Feature sections
│   └── CTA.tsx         # Call-to-action section
└── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Pages

- `/` - Home page with hero, features, and CTA
- `/inquiry` - New inquiry page (to be created)
- `/about` - About page (to be created)
- `/contact` - Contact page (to be created)
- `/login` - Login page (to be created)

## Customization

The website is built with CSS Modules for component-specific styling. You can customize:

- Colors and typography in `app/globals.css`
- Component styles in respective `.module.css` files
- Content in component `.tsx` files

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

