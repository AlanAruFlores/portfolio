/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor:{
				"blue-custom": "#071952",
				"blue-custom-light":"#2267F2"
			},
			colors:{
				"blue-custom": "#2267F2",
			},
			borderColor:{
				"light-blue":"#071952",
			},
			backgroundImage:{
				"wave": "url('../img/wave.svg')",
				"wave-reverse": "url('../img/wave-reverse.svg')"
			},
			fontFamily:{
				"merriweather":'"Merriweather Sans", sans-serif',
				"sourceCode":'"Source Code Pro", monospace'
			},
			boxShadow:{
				"custom": "0px 0px 4px 1px #FFFFFF",
				"custom-blue": "0px 0px 15px 10px #071952",
				"custom-blue-hover": "0px 0px 15px 20px #071952"

			}
		},
	},
	plugins: [],
}
