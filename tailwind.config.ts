import type { Config } from "tailwindcss";
import colors from 'tailwindcss/colors';
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    
    colors: {
      ...colors,
      prime: '#155783',
      dark: '#3D3D3D',
      bgColor: '#F5F5F5',
      achiev: '#155783',
    }
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
