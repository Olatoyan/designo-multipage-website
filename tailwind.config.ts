import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: { max: "90em" },
        miniDesktop: { max: "75em" },
        laptop: { max: "64em" },
        tablet: { max: "43.75em" },
        mobile: { max: "30em" },
      },
    },
  },
  plugins: [],
};
export default config;
