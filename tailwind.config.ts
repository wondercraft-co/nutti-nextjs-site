import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-hk-grotesk)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "b-back": {
          DEFAULT: "#FDF6EE",
        },
        "b-pink": {
          DEFAULT: "#E35CA9",
          light: "#E991C3",
        },
        "b-teal": {
          DEFAULT: "#31C5BA",
          light: "#B4E7E3",
        },
        "b-green": {
          DEFAULT: "#01A17A",
          light: "#01C9A6",
        },
        "b-yellow": {
          DEFAULT: "#F0B485",
          light: "#F8E99E",
        },
        "b-orange": {
          DEFAULT: "#FFDDC6",
        },
        "b-purple": {
          DEFAULT: "#9376BB",
          light: "#DEC6FF",
        },
        "b-blue": {
          DEFAULT: "#62C2D7",
          light: "#B8DFF0",
        },
      },
    },
  },
  plugins: [],
};
export default config;
