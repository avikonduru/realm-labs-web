import { Inter, Source_Serif_4, Montserrat } from 'next/font/google';

export const source_serif = Source_Serif_4({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-source-serif',
});

export const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
});

export const montserrat = Montserrat({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-montserrat',
});
