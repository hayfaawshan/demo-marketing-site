# Next.js Component Library

This project is a component library built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/). It provides a set of reusable components, hooks, and utilities for rapid UI development.

## Table of Contents

- [Getting Started](#getting-started)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [License](#license)

## Getting Started

These instructions will help you set up and run the project on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone &lt;repository-url&gt;
   cd &lt;repository-folder&gt;
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `dev`: Runs the app in development mode.
- `build`: Builds the app for production.
- `start`: Runs the built app in production mode.
- `test`: Runs the test suite using Jest.

Example:

```bash
npm run dev
npm run build
npm run start
npm run test
```

## Project Structure

```
.
├── __tests__/           # Unit and integration tests
├── components.json      # Component metadata/registry
├── components/          # Reusable UI components
├── hooks/               # Custom React hooks
├── lib/                 # Utility libraries and helpers
├── pages/               # Next.js pages
├── public/              # Static assets
├── styles/              # Global and component styles (Tailwind CSS)
├── jest.config.js       # Jest configuration
├── jest.setup.js        # Jest setup file
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## Testing

This project uses [Jest](https://jestjs.io/) for unit and integration testing.

To run tests:

```bash
npm run test
# or
yarn test
```

Test files are located in the `__tests__/` directory.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Happy coding! 🚀**