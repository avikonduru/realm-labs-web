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
		<Box style={{ background: '#D4FAFE' }}>
			<Grid
				columns='9'
				width='auto'
				gap='4'>
				<Box gridColumn='span 5'>
					<Container
						size='1'
						style={{ padding: '120px 0px' }}>
						<Box style={{ marginBottom: '20px' }}>
							<Box>
								<Text
									style={{
										color: '#006D77',
										fontSize: '40px',
										fontWeight: '800',
										lineHeight: '50px',
									}}>
									Transform Your Medical Practice: From Burnout to
									Thriving DPC
								</Text>
							</Box>
							<Box>
								<Text
									style={{
										color: '#E76F51',
										fontSize: '20px',
										fontWeight: '700',
										lineHeight: '50px',
									}}>
									Choose Your Path to Practice Freedom
								</Text>
							</Box>
						</Box>

						<Flex
							direction='column'
							gap='2'>
							<Text style={{ color: '#2A2D34', fontWeight: '400' }}>
								Are you a frustrated physician drowning in paperwork
								and insurance hassles? The bureaucratic healthcare
								system is killing your passion for medicine. But
								there's a better way.
							</Text>
							<Text style={{ color: '#2A2D34', fontWeight: '400' }}>
								Meet <span style={{ fontWeight: '700' }}>Nate</span>{' '}
								and <span style={{ fontWeight: '700' }}>Avi</span>:
								From health tech innovators to your DPC transformation
								partners. We've been where you are, and we've found
								the solution.
							</Text>
						</Flex>
					</Container>
				</Box>
				<Box gridColumn='span 4'>
					<Image
						src='/assets/images/placeholder.png'
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
