# Next.js Component Library

A modern component library built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [TypeScript](https://www.typescriptlang.org/). Includes reusable components, hooks, and utilities for rapid development.

## Table of Contents

- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

1. **Clone the repository:**

    ```bash
    git clone &lt;your-repo-url&gt;
    cd &lt;project-directory&gt;
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to see the app.

## Available Scripts

- `dev`: Starts the development server.
- `build`: Builds the app for production.
- `start`: Starts the production server.
- `test`: Runs tests using Jest.

Example:

```bash
npm run test
```

## Project Structure

```
components/          # Reusable React components
hooks/               # Custom React hooks
lib/                 # Utility libraries and helpers
pages/               # Next.js pages
public/              # Static assets
styles/              # Tailwind and global styles
__tests__/           # Unit and integration tests
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for utility-first styling.  
Configuration files:
- `tailwind.config.js`
- `postcss.config.mjs`

## TypeScript

TypeScript is enabled via `tsconfig.json`.

## Testing

Tests are written using [Jest](https://jestjs.io/) and are located in the `__tests__/` directory.

To run tests:

```bash
npm test
```

## Contributing

Contributions are welcome! Please open issues and submit pull requests for improvements or bug fixes.

## License

[MIT](LICENSE)

---