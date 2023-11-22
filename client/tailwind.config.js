/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bk-50": "#041C3B",
        "bk-100": "#14C93E",
        "bk-150": "#ee240e",
        "bk-200": "#172B1A",
        "bk-250": "#61AF71",
        "bk-300": "#4C8455",
      },
      fontFamily: {
        raleway: ["Raleway"],
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
});
