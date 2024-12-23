/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor:{
				"blue-custom": "#11F0FB",
				"blue-custom-light":"#11F0FB"
			},
			colors:{
				"blue-custom": "#11F0FB",
			},
			borderColor:{
				"light-blue":"#11F0FB",
			},
			backgroundImage:{
				"wave": "url('../img/wave.svg')",
				"wave-reverse": "url('../img/wave-reverse.svg')",
				"pixel": "url('../img/pixel.svg')",
				"flybondi": "url('../img/projects/flybondi.png')",
				"monopoly": "url('../img/projects/monopoly.png')",
				"quizquest": "url('../img/projects/quizquest.PNG')",
				"ripple": "url('../img/projects/ripple.jpeg')",
				"knowme": "url('../img/projects/knowme.PNG')",
				"fakefy": "url('../img/projects/fakefy.png')",
				"pokedex": "url('../img/projects/pokedex.png')",
				"arttech": "url('../img/projects/ecommerce-jsp.jpeg')",
				"todo": "url('../img/projects/todo-nodejs.png')"
			},
			fontFamily:{
				"merriweather":'"Merriweather Sans", sans-serif',
				"sourceCode":'"Source Code Pro", monospace'
			},
			boxShadow:{
				"custom": "0px 0px 4px 1px #FFFFFF",
				"custom-black-blue": "2px -1px 0px 2px #11F0FB",
				"custom-black-blue-difumined": "0px 0px 6px 1px #11F0FB",
				"custom-black-blue-difumined-min": "0px 0px 3px 1px #11F0FB",
				"custom-black": "1px -2px 0px 1px #000000",
				"custom-white": "1px -2px 0px 1px #FFFFFF",
				"custom-light-blue": "1px -2px 0px 1px #11F0FB",
				"custom-blue": "0px 0px 15px 10px #11F0FB",
				"custom-blue-hover": "0px 0px 15px 20px #11F0FB",
				"custom-blue-two": "0px 0px 10px 2px #11F0FB",
				"custom-blue-min": "0px 0px 4px 0px #11F0FB",
			},
			dropShadow:{
				'blue-custom': '0 0 20px #5DF7FF',
				'blue-custom-solid': '-6px 0 0px #00C2D7',

			}
		},
	},
	plugins: [],
}
