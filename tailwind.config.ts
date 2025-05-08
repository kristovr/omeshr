import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				sm: '320px',
				md: '500px',
				lg: '1000px',
				xl: '1200px',
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
