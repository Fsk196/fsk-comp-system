# Custom-Components Library

**Custom-Components** is a React component library built with TypeScript and Vite.  It provides a collection of reusable UI elements and helpers designed to
accelerate development across multiple projects while maintaining consistency
and theming support.

## 🚀 Project Overview

The repository contains a set of foundational components (buttons, inputs,
modals, navigation, etc.) along with utility hooks, context providers, and
theming infrastructure.  It’s structured for easy consumption by other
applications and can be published to npm or linked locally during development.

Key features include:

- Fully typed React components (`.tsx`) and custom hooks.
- Light/dark theme toggling managed via context and CSS variables.
- A modular folder layout separating `components`, `hooks`, `pages`, and
  `layouts` for clarity.
- ESLint and TypeScript configuration optimized for strict typing and
  developer productivity.

## 📁 Repository Structure

```
src/
  components/       # Shared UI components (Navbar, Sidebar, Input, ThemeToggle)
    Reusable/
    Ui/
  context/          # Context providers (e.g. theme.store.ts)
  hooks/            # Custom hooks used across components
  layouts/          # Layout components for pages and dashboards
  pages/            # Example/demo pages for the component library
  themes/           # Color definitions and CSS variables
  utils/            # Utility functions and helpers
  types/            # Shared TypeScript types
```

## 🛠 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Lint and format**
   ```bash
   npm run lint
   npm run format
   ```

## 📚 ESLint Configuration

The project uses a custom ESLint setup tailored for TypeScript and React. You
can expand or modify the rules in `eslint.config.js` as needed.  For example:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

Optional plugins for more React-specific rules:

```js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

// ... in config
extends: [
  reactX.configs['recommended-typescript'],
  reactDom.configs.recommended,
],
```

---

Feel free to customize and expand this library according to your needs!
