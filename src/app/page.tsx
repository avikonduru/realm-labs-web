import React from 'react';
import Image from 'next/image';

// components
// import Navbar from './components/old/Navbar';
// import HeroSection from './components/old/HeroSection';
// import ServicesSection from './components/old/ServicesSection';
import AboutSection from './components/old/AboutSection';
import FooterSection from './components/old/FooterSection';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';

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
		</Box>
	);
};

export default HomePage;
