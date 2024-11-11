import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        montserrat: 'var(--font-montserrat-regular), sans-serif',
        montserratBold: 'var(--font-montserrat-bold), sans-serif',
        montserratBlack: 'var(--font-montserrat-black), sans-serif',
        montserratLight: 'var(--font-montserrat-light), sans-serif',
        montserratSemiBold: 'var(--font-montserrat-semibold), sans-serif',
        montserratThin: 'var(--font-montserrat-thin), sans-serif',
      },
    },
  },
  plugins: [],
} satisfies Config;
