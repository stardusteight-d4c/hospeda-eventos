/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // => @media (min-width: 640px) { ... }
      sm: "640px",
      md: "768px",
      mdd: "850px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "content-placeholder": "#171D3580",
        "content-alt-brand": "#2C68F4",
        "content-title": "#171D35",
        "content-base": "#6b6f7e",
        "layout-body": "#ECEEF0",
        "layout-spotlight": "#F5F7F8",
        "interactive-primary": "#2C68F4",
        "interactive-secundary": "#e3e3e6",
        "interactive-destructive": "#FF4E3A",
        "input-border": "#cacad0",
        "success-dark": "#498D12",
        "success-light": "#C2ED79",
        "error-dark": "#8D3012",
        "error-light": "#ED9C79",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
