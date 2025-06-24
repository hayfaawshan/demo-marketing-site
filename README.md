# my-v0-project

A modern web application template built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and TypeScript.

## Features

- **Next.js 15** for SSR, SSG, and App Router support
- **Radix UI**: Accessible, composable React primitives (many Radix packages included)
- **Tailwind CSS**: Rapid, utility-first styling with custom config
- **TypeScript** for type safety
- **Jest** and **Testing Library** for unit and integration testing
- **React Hook Form** and **Zod** for advanced forms and validation
- **Lucide-react** for iconography
- **Embla Carousel**, **Recharts**, and other UI/UX libraries
- Custom Next.js config for improved build performance

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your app.

### Building for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

> **Note:** Lint and TypeScript errors are ignored during build (`next.config.js`), but you should still run linters locally for best practices.

### Running Tests

```bash
npm test
```

Test setup is powered by Jest and Testing Library. See `jest.config.js` and `__tests__/` for details.

## Project Structure

- `pages/` — Next.js app pages and routing
- `components/` — Reusable React components
- `hooks/` — Custom React hooks
- `lib/` — Utility libraries and helpers
- `styles/` — Tailwind and global styles
- `public/` — Static assets (images, icons, etc.)
- `__tests__/` — Test files

## Customization

- **Tailwind Config:** See `tailwind.config.js` for theme customization.
- **Next.js Config:** See `next.config.js` for build and optimization options.
- **Component Library:** Extensive use of [Radix UI](https://www.radix-ui.com/) primitives, easily themeable.

## Contributing

PRs and issues are welcome!

## License

[MIT](LICENSE) (add your license if not present)