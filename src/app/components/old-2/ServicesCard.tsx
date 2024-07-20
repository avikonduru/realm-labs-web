import React from 'react';
import Image from 'next/image';

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

const ServicesCard = () => {
	return (
		<Flex
			direction='column'
			align='center'>
			<Image
				src='/assets/images/about_us_image.jpg'
				height={500}
				width={1000}
				alt='Hero Section Realm Labs'
				style={{
					objectFit: 'cover',
				}}
			/>
			<Box style={{ marginTop: '10px' }}>
				<Box style={{ textAlign: 'center', marginBottom: '5px' }}>
					<Text
						size='5'
						style={{
							fontWeight: '600',
						}}>
						Go-to-Market Strategies
					</Text>
				</Box>

				<Box style={{ textAlign: 'center' }}>
					<Text
						size='2'
						style={{
							fontWeight: '500',
						}}>
						Launch your AI or Web3 product successfully with our
						comprehensive strategies.
					</Text>
				</Box>
			</Box>
		</Flex>
	);
};

export default ServicesCard;
