/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#1F3A5F",
          White: "#F7F9FC",
          charcoal: "#2E2E2E",
          success: "#3CB371",
          warning: "#F59E0B",
          error: "#DC2626",
          info: "#3B82F6",
        },
        secondary: {
          teal: "#2FA4A9",
          amber: "#F4B400",
        },
      },

      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      width: {
        "header-nav": "580px",
      },

      maxWidth: {
        container: "1100px",
      },
    },
  },
  // plugins: [require('@tailwindcss/typography')],
};
