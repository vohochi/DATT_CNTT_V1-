import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grayCustom: "#7a7a7a", // Màu xám
        blueLight: "#9cd8ff", // Màu xanh dương nhạt
        bluePurple: "#a49cff", // Màu xanh tím
        orangeCustom: "#ce4820", // Màu cam
        greenMint: "#dcffd2", // Màu xanh bạc hà
        bluePastel: "#dfe4ff", // Màu xanh pastel
        pinkLight: "#ff9c9c", // Màu hồng nhạt
        peachPastel: "#ffdae0", // Màu hồng đào
        creamPastel: "#ffeacc", // Màu kem nhạt
        yellowPastel: "#ffedb4", // Màu vàng nhạt
        beigePastel: "#fff3da", // Màu be nhạt
        white: "#ffffff", // Màu trắng
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
