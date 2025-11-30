# Agent Context: Walhallalauf

## Projektübersicht

Next.js 16 Website für den Walhallalauf mit App Router, TypeScript und Tailwind CSS 4.

## Tech Stack

- **Framework**: Next.js 16 (App Router, React 19, Server Components)
- **Sprache**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4, Custom UI Library `@salzpate/react-ui`
- **CMS**: Sanity (next-sanity)
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Testing**: Vitest

## Projektstruktur

```
/app                    # Next.js App Router (Seiten & Layouts)
/components             # Wiederverwendbare UI-Komponenten
/features               # Feature-basierte Seitenkomponenten
/hooks                  # Custom React Hooks
/lib                    # Services & Utilities
/data                   # Statische Daten (z.B. MenuData)
/types                  # TypeScript Type Definitions
/styles                 # Globale Styles
/public                 # Statische Assets
```

## Path Aliases

```typescript
@/components/*  → components/*
@/data/*        → data/*
@/features/*    → features/*
@/hooks/*       → hooks/*
@/lib/*         → lib/*
@/styles/*      → styles/*
@/types/*       → types/*
```

## Wichtige Komponenten

### Custom Hooks (hooks/)

- `useBodyScrollLock.ts` - Blockiert Body-Scroll (z.B. bei geöffnetem Menü)
- `useFocusTrap.ts` - Fokus-Management für Modals/Menüs (Accessibility)

### Komponenten (components/)

- `Header/` - Header & Navigation mit Mobile Menu
- `Footer/` - Footer mit Links
- `Contact/` - Kontaktformular
- `Newsletter/` - Newsletter-Anmeldung
- `SponsorGallery/` - Sponsoren-Galerie
- `ImageButtonLink/` - Bild-Button-Links
- `InfoArticle/` - Info-Artikel-Komponente

## Development Commands

```bash
npm run dev          # Development Server (Port 3000)
npm run build        # Production Build
npm run start        # Production Server
npm run lint              # ESLint + TypeScript Check
npm run lint:style        # Stylelint fix für CSS
npm run lint:style:check  # Stylelint check für CSS
npm run format            # Code-Formatierung
npm run format:check      # Code-Formatierung überprüfung
npm run test            # Tests ausführen (Single Run)
npm run test:watch      # Tests im Watch-Mode
npm run test:ui         # Vitest UI
npm run test:coverage   # Coverage Report
npm run typegen      # Sanity Type Generation
```

## Konfiguration

### Next.js (next.config.ts)

- Security Headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)
- Image Optimization (AVIF, WebP)
- Package Imports Optimization für `@salzpate/react-ui`
- Production: Console Logs entfernt (außer error/warn)
- Compression aktiviert
- Source Maps in Production deaktiviert

### TypeScript (tsconfig.json)

- Strict Mode aktiviert
- Path Aliases konfiguriert
- React JSX Transform

### Styling

- Tailwind CSS 4 mit PostCSS
- Dark Mode Support
- Responsive Design

## Besonderheiten

1. **Mehrsprachigkeit**: Primär Deutsch (`lang="de"`)
2. **SEO**: Metadata in `layout.tsx`, robots.ts, sitemap.ts
3. **Accessibility**: Focus Trap, Body Scroll Lock, semantisches HTML
4. **Performance**: Server Components, Image Optimization, Compression
5. **Sanity Integration**: CMS für Content-Management

## Code Style

- Prettier für Formatting
- ESLint mit Next.js Config
- Stylelint für CSS
- Funktionale Komponenten mit TypeScript
- Async Server Components für Data Fetching
- Props mit `Readonly<>` für Immutability
- Falls es Bedingungen im Tailwindcss className String gibt, soll die utility Methode cn() verwendet werden.

## Deployment

- Production Build: `npm run build`
- Trailing Slashes aktiviert
- Source Maps in Production deaktiviert
- Compression aktiviert
