import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        shadow: "#302824",
        brown1: "#6c3530",
        offwhite: "#deceba",
        lightwhite: "#f3ede3",
        grassgreen: "#a6bb7b",
      },
    },
  },
  plugins: [],
} satisfies Config;
