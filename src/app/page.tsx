import React from 'react';
import Image from 'next/image';

// components
import Navbar from './components/Navbar';

// radix
import { Box } from '@radix-ui/themes';
import HeroSection from './components/HeroSection';
import EngagementSection from './components/EngagementSection';
import ServicesSection from './components/ServicesSection';
import AboutUsSection from './components/AboutUsSection';

const HomePage = () => {
	return (
		<Box>
			<Navbar />
			<HeroSection />
			<EngagementSection />
			<ServicesSection />
			<AboutUsSection />
		</Box>
	);
};

export default HomePage;
