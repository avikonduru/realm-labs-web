import React from 'react';

// components
import ServicesCard from './ServicesCard';

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

const ServicesSection = () => {
	return (
		<Flex style={{ background: '#FFFFFF', padding: '60px 0px' }}>
			<Container style={{ color: 'black' }}>
				<Flex
					direction='column'
					align='center'>
					<Box style={{ textAlign: 'center', marginBottom: '20px' }}>
						<Text
							size='5'
							style={{ fontWeight: '600' }}>
							FREE DOWNLOADABLE STARTER KITS
						</Text>
					</Box>

					<Box style={{ textAlign: 'center', marginBottom: '50px' }}>
						<Text
							style={{
								fontSize: '40px',
								fontWeight: '700',
								lineHeight: '50px',
							}}>
							Download one of my powerful free AI starter kits to
							<span
								style={{
									backgroundColor: '#00FF9E',
									padding: '0px 5px',
								}}>
								profit more
							</span>{' '}
							while{' '}
							<span
								style={{
									backgroundColor: '#00FF9E',
									padding: '0px 5px',
								}}>
								working less
							</span>
						</Text>
					</Box>

					<Box>
						<Grid
							columns='4'
							width='auto'
							gap='8'>
							<ServicesCard />
							<ServicesCard />
							<ServicesCard />
							<ServicesCard />
						</Grid>
					</Box>
				</Flex>
			</Container>
		</Flex>
	);
};

export default ServicesSection;
