import React from 'react';
import Image from 'next/image';

// components
import Navbar from './components/Navbar';

// radix
import { Container, Box, Flex, Button, Text } from '@radix-ui/themes';

const HomePage = () => {
	return (
		<Box style={{ background: '#F6F5F3' }}>
			<Navbar />
		</Box>
	);
};

export default HomePage;
