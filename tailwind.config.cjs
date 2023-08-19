/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			colors: {
				primary: "hsl(38, 61%, 73%)",
				secondary: "hsl(38, 61%, 55%)",
				"zinc-semi-transparent": "rgb(24 24 27 / 0.9)",
			},
			boxShadow: {
				"gold-glow": "0 0 30px 1px hsl(38, 61%, 73%)",
			},
			animation: {
				"shadow-pulse": "shadowPulse 700ms ease-in-out alternate infinite",
			},
			dropShadow: {
				"text-glow": "0px 0px 15px hsl(38, 61%, 73%)",
			},
			keyframes: {
				shadowPulse: {
					"0%": { boxShadow: "0 0 30px 1px hsl(38, 61%, 73%)" },
					"100%": { boxShadow: "0 0 20px 0.5px hsl(38, 61%, 73%)" },
				},
			},
		},
	},
	plugins: [],
};
