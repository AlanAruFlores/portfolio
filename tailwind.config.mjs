/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor:{
				"blue-custom": "#541dfb",
			},
			colors:{
				"blue-custom": "#541dfb",
			},
			borderColor:{
				"light-blue":"#050C9C"
			},
			backgroundImage:{
				"wave": "url('../img/wave.svg')",
				"wave-reverse": "url('../img/wave-reverse.svg')"
			},
			fontFamily:{
				"merriweather":'"Merriweather Sans", sans-serif'
			},
			boxShadow:{
				"custom": "0px 0px 4px 1px #FFFFFF"
			}
		},
	},
	plugins: [],
}
