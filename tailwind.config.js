module.exports = {
    // purge: ["./src/**/*.vue", "./src/**/*.html"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                custom: {
                    titanium: "#283030",
                    "dark-theme": "#121212",
                    "dark-element": "#1d1d1d",
                    "dark-titanium": "#1e2323",
                    "steel-black": "#151919",
                    "soft-red": "#fb464d",
                    "light-pink": "#f55186",
                    pink: "#e02662",
                },
            },
            fontFamily: {
                body: ["Open Sans", "sans-serif"],
                code: ["Fira Code", "monospace"],
                resume: ["IBM Plex Serif", "sans-serif"],
            },
        },
    },
    variants: {},
    plugins: [require("@tailwindcss/forms")],
}
