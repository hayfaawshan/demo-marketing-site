module.exports = {
 content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // <-- Add this line
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'regreen-brand': 'var(--regreen-brand-color)',
        'regreen-font': 'var(--regreen-font-color)',
      },
      borderRadius: {
        'regreen-board': 'var(--regreen-board-border-radius)',
      },
    },
  },
  plugins: [],
}