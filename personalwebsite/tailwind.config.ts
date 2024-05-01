import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
        '7': '64px',
        '8': '96px',
        '9': '128px',
        '10': '160px',
        '11': '192px',
        '12': '224px',
        '13': '256px',
        '14': '288px',
        '15': '320px',
        '16': '352px',
        '17': '384px',
        '18': '416px',
        '19': '448px',
        '20': '480px',
      },
    },
  },
  plugins: [],
};

export default config;