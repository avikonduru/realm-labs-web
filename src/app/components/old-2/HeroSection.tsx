import React from 'react';
import Image from 'next/image';
import { source_serif } from '../../fonts';

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
				<Box gridColumn='span 5'>
					<Container
						size='1'
						style={{ padding: '120px 0px 120px 0px' }}>
						<Box style={{ marginBottom: '20px' }}>
							<Text
								style={{
									fontSize: '50px',
									fontWeight: '700',
									color: 'white',
									lineHeight: '50px',
								}}>
								Helping Service Business Entrepreneurs Crack The Code
								To{' '}
								<span
									style={{
										backgroundColor: '#7A73FF',
										padding: '0px 5px',
									}}>
									Automated Client Generation.
								</span>
							</Text>
						</Box>

						<Box style={{ marginBottom: '50px' }}>
							<Text
								size='4'
								style={{
									fontWeight: '400',
									color: 'white',
								}}>
								Hey, I’m Wes! I make videos, courses and resources to
								get your{' '}
								<span style={{ fontWeight: '800' }}>marketing</span>{' '}
								in gear, your{' '}
								<span style={{ fontWeight: '800' }}>website</span>{' '}
								optimized, and your business running better with{' '}
								<span style={{ fontWeight: '800' }}>AI</span>.
							</Text>
						</Box>

						<Box>
							<Button
								size='4'
								variant='solid'
								style={{ width: '100%' }}>
								<Text
									size='4'
									weight='bold'>
									CONTACT US
								</Text>
							</Button>
						</Box>
					</Container>
				</Box>
				<Box gridColumn='span 4'>
					<Image
						src='/assets/images/about_us_image.jpg'
						height={100}
						width={500}
						alt='Hero Section Realm Labs'
						style={{
							objectFit: 'cover',
							width: '100%',
							height: '100%',
						}}
					/>
				</Box>
			</Grid>
		</Box>
	);
};

export default HeroSection;
