/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'main-dark': '#0A0A0A',
			},
			fontFamily: {
				sans: ['"Manrope"', ...defaultTheme.fontFamily.sans],
				be: ['Bebas Neue'],
			},
			fontSize: {
				beh: [
					'6.31rem',
					{
						lineHeight: '5rem',
						letterSpacing: '-0.01em',
						fontWeight: '500',
					},
				],
				bes: [
					'4.75rem',
					{
						lineHeight: '4rem',
						letterSpacing: '0.02em',
						fontWeight: '900',
					},
				],
				bemh: [
					'3.56rem',
					{
						lineHeight: '3rem',
						letterSpacing: '-0.01em',
						fontWeight: '500',
					},
				],
				bems: [
					'2.68rem',
					{
						lineHeight: '2rem',
						letterSpacing: '0.01em',
						fontWeight: '500',
					},
				],
				manh: [
					'2.68rem',
					{
						lineHeight: '2rem',
						letterSpacing: '0.01em',
						fontWeight: '500',
					},
				],
			},
		},
	},
	plugins: [],
};
