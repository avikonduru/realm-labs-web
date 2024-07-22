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
import HowItWorks from './components/HowItWorks';

const HomePage = () => {
	return (
		<Box>
			<Navbar />
			<HeroSection />
			<EngagementSection />
			<ServicesSection />
			<AboutUsSection />
			<HowItWorks />
		</Box>
	);
};

export default HomePage;
