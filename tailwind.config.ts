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
    },
    colors: {
      "back-color": "var(--back-color)",
      "nav-color": "#777",
      "btn-primary": "#2B6DE7",
      white: "white",
    },
    fontFamily: { Poppins: ["Poppins"] },
    fontSize: {},
  },
  plugins: [],
};
export default config;
