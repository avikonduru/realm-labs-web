import React from 'react';
import Image from 'next/image';

// components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';

// radix
import { Box } from '@radix-ui/themes';

const HomePage = () => {
	return (
		<Box style={{ background: '#F6F5F3' }}>
			<Navbar />
			<HeroSection />
			<ServicesSection />
		</Box>
	);
};

export default HomePage;
