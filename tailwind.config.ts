import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				md: '875px',
			},
			colors: {
				primary: "#0F59E2",
				brand: {
					DEFAULT: "#E6F0FF",
					heading: "#1A1A1A", 
				}
			}
		}
	},

	plugins: [typography, forms]
} satisfies Config;
