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
				primary: "#de4644",
				black: "#00000"
			},
      container: {
				center: true,
				screens: {
					sm: "820px",
					lg: "960px",
					xl: "1200px",
					"2xl": "1540px",
				},
			},
    },
  },
  plugins: [],
} satisfies Config;
