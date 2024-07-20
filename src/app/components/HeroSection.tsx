import React from 'react';
import Image from 'next/image';
import { source_serif } from '../fonts';

// radix
import {
	Container,
	Box,
	Flex,
	Button,
	Text,
	Link,
	Grid,
	Section,
} from '@radix-ui/themes';

const HeroSection = () => {
	return (
		<Box style={{ background: '#221D1E' }}>
			<Grid
				columns='9'
				width='auto'
				gap='4'>
				<Text>hihi</Text>
			</Grid>
		</Box>
	);
};

export default HeroSection;
