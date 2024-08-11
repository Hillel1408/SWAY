import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: { max: "1700px" },
      lg: { max: "1440px" },
      md: { max: "768px" },
      sm: { max: "500px" },
    },
    extend: {},
  },
  plugins: [
    plugin(({ addBase }: { addBase: any }) => {
      addBase({
        "*, *:before, *:after": {
          "-webkitTapHighlightColor": "transparent",
        },
        body: {
          minWidth: "375px",
          fontFamily: '"Century Gothic", sans-serif',
          lineHeight: "1",
        },
        "body.lock": {
          overflow: "hidden",
        },
        main: {
          flex: "1 1 auto",
        },
        "._container": {
          maxWidth: "1274px",
          margin: "0 auto",
          padding: "0 17px",
        },
        "@media (max-width: 1440px)": {},
      });
    }),
  ],
};
export default config;
