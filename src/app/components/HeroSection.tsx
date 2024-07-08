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
} from '@radix-ui/themes';
import { CaretRightIcon } from '@radix-ui/react-icons';

const HeroSection = () => {
	return (
		<Container maxWidth='1300px'>
			<Box style={{ margin: '10px 0px 10px 0px' }}>
				<Flex
					direction='column'
					justify='center'
					style={{
						minHeight: '500px',
						borderRadius: '15px',
						backgroundColor: '#7A73FF',
						padding: '60px',
					}}>
					<Box>
						<Box style={{ marginBottom: '15px' }}>
							<Text
								size='9'
								className={source_serif.className}
								style={{ fontWeight: '600', color: 'white' }}>
								AI & Web3 Vanguard
							</Text>
						</Box>

						<Box style={{ marginBottom: '40px', maxWidth: '600px' }}>
							<Text
								color='violet'
								size='4'
								style={{ fontWeight: '500', color: 'white' }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing
								elit, sed do eiusmod tempor incididunt.
							</Text>
						</Box>

						<Box>
							<Button
								size='4'
								variant='surface'>
								<Text
									size='5'
									weight='bold'>
									Book Discovery Call
								</Text>
								<CaretRightIcon
									width='30'
									height='30'
								/>
							</Button>
						</Box>
					</Box>
				</Flex>
			</Box>
		</Container>
	);
};

export default HeroSection;
