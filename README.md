# Saheb Das — Portfolio & Distributed Systems Engineer

Modern, responsive personal portfolio for **Saheb Das** (Senior Backend Engineer & Solution Architect), built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed for deployment to GitHub Pages (`whosaheb.github.io`).

## Features

- **Decoupled Data Architecture**: All portfolio content (projects, achievements, biography, work experience, tech stack, articles) is centrally configured in `data.json` for dynamic rendering and zero-code updates.
- **Mobile-First & Responsive**: Built with responsive layouts for phones, tablets, and wide monitors.
- **Theme Toggle**: Light / Dark mode toggle with persistent preference saved to `localStorage`.
- **Navigation & Views**: Clean hash-based client routing (`#/about`, `#/projects`, `#/experience`, `#/architecture`, `#/articles`, `#/contact`).
- **Interactive Project Explorer**: Filter by category (Enterprise, Full-Stack, QA), live text search, tech stack tags, and modal detail views for 16 featured projects.
- **Printable CV Modal**: Quick printable and shareable resume document view.
- **GitHub Pages Ready**: Configured with `gh-pages` and relative asset resolution.

## Project Structure

```
├── public/
│   ├── assets/       # Optimized images, logos, and avatars
│   ├── data.json     # Public runtime data file for dynamic updates
│   └── favicon.ico   # Site favicon
├── src/
│   ├── components/   # Modular React components (Navbar, Hero, About, Projects, etc.)
│   ├── context/      # ThemeContext & PortfolioDataContext
│   ├── data/
│   │   └── data.json # Bundled fallback data
│   ├── App.tsx       # Root layout & view router
│   ├── index.css     # Tailwind CSS entry & base styling
│   └── main.tsx      # Application entry point
├── package.json      # Dependencies and scripts (Vite, gh-pages, React, Tailwind)
└── vite.config.ts    # Vite bundler configuration
```

## Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run local development server
```bash
npm run dev
```
Open `http://localhost:3000` to view the application.

### 3. Build for production
```bash
npm run build
```

### 4. Deploy to GitHub Pages
```bash
npm run deploy
```

## Updating Content

To update projects, experience, achievements, or personal information in the future, simply edit `public/data.json` (or `src/data/data.json`). The UI will dynamically update all tiles and sections.
