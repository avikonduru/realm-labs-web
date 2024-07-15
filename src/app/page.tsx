import React from 'react';
import Image from 'next/image';

// components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import FooterSection from './components/FooterSection';

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
