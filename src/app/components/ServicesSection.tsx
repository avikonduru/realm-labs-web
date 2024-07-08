import React from 'react';
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
	Separator,
} from '@radix-ui/themes';

const ServicesSection = () => {
	return (
		<Container maxWidth='1300px'>
			<Box style={{ margin: '10px 0px 10px 0px' }}>
				<Flex
					direction='column'
					justify='center'
					minHeight='300px'>
					<Box style={{ marginBottom: '15px' }}>
						<Text
							size='7'
							className={source_serif.className}
							style={{ fontWeight: '600' }}>
							Our Services
						</Text>
					</Box>

					<Grid
						columns='4'
						gap='7'
						width='auto'
						style={{
							background: '#FFFFFF',
							padding: '30px',
							borderRadius: '15px',
						}}>
						<Box>
							<Box style={{ marginBottom: '7px' }}>
								<Text
									size='4'
									className={source_serif.className}
									style={{ fontWeight: '700' }}>
									Fractional Consulting
								</Text>
							</Box>

							<Box>
								<Text
									color='gray'
									size='3'
									style={{ fontWeight: '500' }}>
									Expert guidance on AI and Web3 integration, tailored
									to your business needs.
								</Text>
							</Box>
						</Box>

						<Box>
							<Box style={{ marginBottom: '7px' }}>
								<Text
									size='4'
									className={source_serif.className}
									style={{ fontWeight: '700' }}>
									Go-to-Market Strategies
								</Text>
							</Box>
							<Box>
								<Text
									color='gray'
									size='3'
									style={{ fontWeight: '500' }}>
									Launch your AI or Web3 product successfully with our
									comprehensive strategies.
								</Text>
							</Box>
						</Box>

						<Box>
							<Box style={{ marginBottom: '7px' }}>
								<Text
									size='4'
									className={source_serif.className}
									style={{ fontWeight: '700' }}>
									Product Development
								</Text>
							</Box>
							<Box>
								<Text
									color='gray'
									size='3'
									style={{ fontWeight: '500' }}>
									Build innovative AI and Web3 solutions from concept
									to launch.
								</Text>
							</Box>
						</Box>

						<Box>
							<Box style={{ marginBottom: '7px' }}>
								<Text
									size='4'
									className={source_serif.className}
									style={{ fontWeight: '700' }}>
									Digital Transformation
								</Text>
							</Box>
							<Box>
								<Text
									color='gray'
									size='3'
									style={{ fontWeight: '500' }}>
									Revolutionize your operations with cutting-edge AI
									and blockchain technologies.
								</Text>
							</Box>
						</Box>
					</Grid>
				</Flex>
			</Box>
		</Container>
	);
};

export default ServicesSection;
