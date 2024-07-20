import React from 'react';
import Image from 'next/image';

// components
import Navbar from './components/Navbar';

// radix
import { Box } from '@radix-ui/themes';
import HeroSection from './components/HeroSection';

const HomePage = () => {
	return (
		<Box>
			<Navbar />
			<HeroSection />
		</Box>
	);
};

export default HomePage;
