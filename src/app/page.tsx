import React from 'react';
import Image from 'next/image';

// components
import Navbar from './components/old-2/Navbar';
import HeroSection from './components/old-2/HeroSection';
import ServicesSection from './components/old-2/ServicesSection';
import AboutSection from './components/old-2/AboutSection';
import FooterSection from './components/old-2/FooterSection';

// radix
import { Box } from '@radix-ui/themes';

const HomePage = () => {
	return (
		<Box>
			{/* <Navbar />
			<HeroSection />
			<ServicesSection />
			<AboutSection />
			<FooterSection /> */}

			<Navbar />
			<HeroSection />
			<ServicesSection />
			<AboutSection />
			<FooterSection />
		</Box>
	);
};

export default HomePage;
