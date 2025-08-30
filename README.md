# tm-ui

Lightweight React UI components with styled-components, shipped as modern ESM with TypeScript types. Currently includes a foundational Button component and a Storybook sandbox for development.

**Highlights**
- ESM-only: tree-shakeable builds with sourcemaps and `.d.ts` types.
- Typed: first-class TypeScript support.
- Styling: powered by `styled-components@6`.
- Accessible defaults: sensible `type="button"`, focus-visible styles, and disabled state.

**Peer Dependencies**
- `react` ^18
- `react-dom` ^18
- `styled-components` ^6.1.19

Install peers in your app if not already present.

**Install**
- `npm install tm-ui`
- Ensure peers are installed: `npm install react react-dom styled-components`

**Usage**
```tsx
import React from 'react';
import { Button } from 'tm-ui';

export default function Example() {
  return (
    <>
      <Button onClick={() => console.log('clicked')}>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button disabled>Disabled</Button>
    </>
  );
}
```

The package is ESM-only. Your bundler (Vite, Webpack 5+, Next.js 13+, etc.) must support ESM.

**Components**
- `Button`
  - Props
    - `variant`: "primary" | "secondary" (default: "primary")
    - All standard `button` attributes via `React.ButtonHTMLAttributes<HTMLButtonElement>`
  - Behavior
    - Defaults `type` to `"button"` to prevent accidental form submits
    - Forwards `ref` to the underlying `<button>` for focus/measurement

**Styling & Theming**
- Styles are implemented with `styled-components@6`.
- Colors are currently simple placeholders; you can wrap your app with a ThemeProvider and extend styles in your own components.

**TypeScript**
- Public APIs are typed. Import directly in TS or JS; types are resolved from `dist/index.d.ts`.

**Accessibility**
- Includes `:focus-visible` outlines and a disabled style. You can further customize a11y in your app.

**Development**
- Storybook: `npm run storybook` (starts on port 6006)
- Build: `npm run build` (outputs to `dist/`)

This repo uses tsup for bundling (ESM) and Storybook for local development. The build marks `react`, `react-dom`, and `styled-components` as externals and does not bundle them.

**Testing**
- The project is configured for Vitest + Storybook’s Vitest addon. To enable browser tests, ensure Playwright is installed (dev dependency) and run your Vitest setup as needed.

**Publishing**
- The package exports ESM only via `exports` and `module` fields. Consumers must use tooling that supports ESM.

**Roadmap**
- Expand component set (inputs, form controls, layout primitives)
- Add theming tokens and a design system structure
- Add unit and interaction tests for core components

**License**
- ISC