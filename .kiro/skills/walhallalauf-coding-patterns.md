---
inclusion: manual
---

# Walhallalauf – Coding Patterns & Konventionen

Dieses Skill beschreibt die konkreten Coding-Patterns, die in diesem Projekt verwendet werden. Immer anwenden, wenn neue Komponenten, Features oder Seiten erstellt werden.

## Komponenten-Struktur

### Server Component (Standard)
```tsx
import { JSX } from 'react';

interface MyComponentProps {
  title: string;
}

async function MyComponent(props: Readonly<MyComponentProps>): Promise<JSX.Element> {
  const { title } = props;
  return <div>{title}</div>;
}

export default MyComponent;
```

### Client Component (nur wenn nötig)
```tsx
'use client';

import { JSX } from 'react';

interface MyComponentProps {
  label: string;
}

function MyComponent(props: Readonly<MyComponentProps>): JSX.Element {
  const { label } = props;
  return <button>{label}</button>;
}

export default MyComponent;
```

Faustregel: Kein `'use client'` ohne Grund. State, Event-Handler oder Browser-APIs → Client Component. Alles andere → Server Component.

## cn() für bedingte Klassen

Immer `cn()` aus `@/lib/cn` verwenden, wenn className-Strings Bedingungen enthalten:

```tsx
import { cn } from '@/lib/cn';

// Gut
<div className={cn('base-class', { 'active-class': isActive, 'disabled-class': isDisabled })} />

// Schlecht
<div className={`base-class ${isActive ? 'active-class' : ''}`} />
```

## Seitenstruktur (App Router)

### Neue Seite anlegen
```
app/meine-seite/
  layout.tsx   ← Metadata hier
  page.tsx     ← Seiteninhalt
```

### layout.tsx Pattern
```tsx
import { Metadata } from 'next';
import HeaderMainLayout from '@/components/HeaderMainLayout/HeaderMainLayout';

export const metadata: Metadata = {
  title: 'Seitentitel | Walhallalauf',
  description: 'Beschreibung der Seite',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <HeaderMainLayout>{children}</HeaderMainLayout>;
}
```

### page.tsx Pattern (Server Component mit Sanity)
```tsx
import { JSX } from 'react';
import PageSection from '@/components/PageSection';

async function MyPage(): Promise<JSX.Element> {
  // Data fetching direkt in der Komponente
  const data = await myService.getData();

  return (
    <>
      <PageSection headline="Überschrift" id="section-id">
        {/* Inhalt */}
      </PageSection>
    </>
  );
}

export default MyPage;
```

## Features vs. Components

- `components/` → Wiederverwendbare, generische UI-Bausteine
- `features/` → Seitenspezifische, zusammengesetzte Komponenten (z.B. `TimingButtons`, `MainContent`)

Features dürfen Komponenten verwenden, aber nicht umgekehrt.

## PageSection verwenden

Für alle Seitenabschnitte `PageSection` aus `@/components/PageSection` nutzen:

```tsx
<PageSection headline="Abschnittstitel" id="eindeutige-id" subSection className="pb-8">
  {/* Inhalt */}
</PageSection>
```

Alternierende Hintergründe für Unterabschnitte:
```tsx
// Heller Abschnitt (Standard)
<PageSection subSection className="pb-8">

// Grauer Abschnitt
<PageSection subSection className="page-section bg-gray-200 pb-8 sm:pb-8 dark:bg-gray-900">
```

## SnackBar verwenden

```tsx
'use client';
import { useSnackBar, SnackBarTypes } from '@/components/SnackBar/SnackBar';

function MyComponent() {
  const { openSnackbar } = useSnackBar();

  const handleSuccess = () => {
    openSnackbar('Erfolgreich gespeichert!', SnackBarTypes.success, 3000);
  };
}
```

## Sanity Data Fetching

Services liegen in `@/lib/`, Typen kommen aus `@/types/sanityTypes`:

```tsx
import myService from '@/lib/MyService';
import { MY_QUERYResult } from '@/types/sanityTypes';

async function getData(): Promise<MY_QUERYResult> {
  return myService.getData();
}
```

Nach Schema-Änderungen: `npm run typegen` ausführen.

## Tailwind Dark Mode

Immer Dark-Mode-Varianten mitdenken:

```tsx
// Text
<p className="text-gray-900 dark:text-gray-300">

// Hintergrund
<div className="bg-white dark:bg-gray-900">

// Grauer Abschnitt
<section className="bg-gray-200 dark:bg-gray-900">
```

## Accessibility-Pflicht

- Interaktive Elemente immer mit `aria-label` wenn kein sichtbarer Text
- `aria-hidden="true"` für dekorative Icons/SVGs
- Mobile-Menü: `aria-expanded`, `aria-controls` setzen
- Modals/Overlays: `useBodyScrollLock` + `useFocusTrap` aus `@/hooks/`

```tsx
import { useBodyScrollLock } from '@/hooks/useBodyScrollLock';
import { useFocusTrap } from '@/hooks/useFocusTrap';
```

## Index-Exports

Jede Komponente bekommt eine `index.ts`:

```ts
export { default } from './MyComponent';
```

## Imports – Reihenfolge

1. React / Next.js
2. Externe Libraries
3. Interne `@/`-Imports (components, features, hooks, lib, types)
4. Relative Imports
