/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
                jakarta: ["Plus Jakarta Sans"],
                playfair: ["Playfair Display"],
            },
            colors: {
                floral: "#f6f4f0",
                valhalla: "#2b2d42",
            },
        },
        // screens: {
        //     // "2xl": { max: "1535px" },
        //     // // => @media (max-width: 1535px) { ... }

        //     // xl: { max: "1279px" },
        //     // // => @media (max-width: 1279px) { ... }

        //     // lg: { max: "1023px" },
        //     // // => @media (max-width: 1023px) { ... }

        //     // md: { max: "767px" },
        //     // // => @media (max-width: 767px) { ... }

        //     // sm: { max: "639px" },
        //     // // => @media (max-width: 639px) { ... }

        //     mobile: { max: "639px" },
        //     // => @media (max-width: 639px) { ... }
        // },
    },
    daisyui: {
        darkTheme: "light",
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("daisyui"),
        require("@tailwindcss/line-clamp"),
    ],
};
