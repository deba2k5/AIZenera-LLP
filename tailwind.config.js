/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F7F3",
        sand: "#EEEDE7",
        ink: "#171717",
        night: "#151515",
        muted: "#6B6A64",
        line: "#E2E0D8",
        accent: {
          DEFAULT: "#365CFF",
          dark: "#2443D6",
          soft: "#E6EBFF",
        },
        ember: "#F26A1B",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        site: "82rem",
      },
      letterSpacing: {
        label: "0.18em",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        scrolldot: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "80%": { transform: "translateY(14px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "0" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(.2,.7,.2,1) both",
        float: "float 6s ease-in-out infinite",
        scrolldot: "scrolldot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
