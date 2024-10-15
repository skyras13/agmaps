import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#006400', // Dark Green
        accent: '#F27655', // Coral
        secondary: '#83BDB6', // Light Green
        'navbar-footer-bg': '#006400', // Dark Green
        'navbar-footer-text': '#FFFFFF', // White
      },
      backgroundImage: {
        'hero-pattern': "url('/stockFarmer1.jpg')",
      },
    },
  },
  plugins: [
    require('daisyui'), // Add DaisyUI as a plugin
  ],
}

export default config
