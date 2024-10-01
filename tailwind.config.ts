import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#0D1723',
        'border': 'rgba(255, 255, 255, 0.2)',
        'layout': '#e8ebf0',
      },
      fontFamily: {
        manrope: ['Manrope', 'system-ui'],
        interTight: ['"Inter Tight"', 'system-ui'],
      },
      width: {
        'layout': '1880px',
        'custom-1800': '1800',
      },
      height: {
        'layout': '1080px',
      },
      backgroundImage: {
        'hero-pattern': "url('/hero/bg-hero.png')",
        'paris-pattern': "url('/hero/paris.png')",
        'usa-pattern': "url('/hero/usa.png')",
        'santorini-pattern': "url('/popular/santoni.png')",
        'rome-pattern': "url('/popular/rome.png')",
        'madrid-pattern': "url('/popular/madrid.png')",
        'wood-pattern': "url('/best/woodside.png')",
        'golden-pattern': "url('/best/golden.png')",
        'luxury-pattern': "url('/best/luxury.png')",
        'fly-pattern': "url('/events/fly.png')",
        'clouds-pattern': "url('/about/clouds.png')",
        'about-pattern': "url('/about/about.png')",
        'special-pattern': "url('/about/fly.png')",
        'slider-pattern': "url('/crypto-block/bg-slide.png')",
      },
      borderRadius: {
        'none': '0',
        'sm': '24px',
        'md': '32px',
        'lg': '100px',
        'full': '9999px',
        'large': '12px',
      },
      letterSpacing: {
        tighter: '-0.03em',
      },
      screens: {
        'lg': '1201px',
        'st': '1056px',
        'ms': '768px',
        'md': '640px',
        'smd': '570px',
        'ssd': '472px',
        'sm': '400px',
        'xs': '320px',
      },
    },
  },
  plugins: [],
};
export default config;
