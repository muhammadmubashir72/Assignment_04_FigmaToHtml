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
        myPink:"#F98585",
        myBlack:"#21243D",
        recentPost:"#F4E2E2",
        background: "#f6f0f0",
        FooterBackground:"#FAF5F5",
        heroEllipse:"#dfd8d8",
      foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
