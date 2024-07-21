import React from 'react';
import Image from 'next/image';

// components
import Navbar from './components/Navbar';

// radix
import { Box } from '@radix-ui/themes';
import HeroSection from './components/HeroSection';
import EngagementSection from './components/EngagementSection';

const HomePage = () => {
	return (
		<Box>
			<Navbar />
			<HeroSection />
			<EngagementSection />
		</Box>
	);
};

export default HomePage;
