import React from 'react';

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
import {
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from '@radix-ui/react-icons';

const FooterSection = () => {
	return (
		<Box>
			<Container
				maxWidth='1300px'
				style={{
					background: '#FFFFFF',
					padding: '50px 0px 20px 0px',
				}}>
				<Flex direction='column'>
					<Box style={{ paddingBottom: '20px' }}>
						<Text
							size='9'
							style={{
								fontWeight: '900',
								color: '#211D1E',
							}}>
							<span style={{ color: '#FF00FF' }}>realm</span> labs
							<span style={{ color: '#00FFFF' }}>.</span>
						</Text>
					</Box>

					<Box style={{ paddingBottom: '10px' }}>
						<Text
							size='5'
							style={{
								fontWeight: '600',
								color: '#211D1E',
							}}>
							Follow Wes!
						</Text>
					</Box>

					<Flex gap='3'>
						<Button
							size='4'
							radius='full'>
							<LinkedInLogoIcon
								width='22'
								height='22'
							/>
						</Button>
						<Button
							size='4'
							radius='full'>
							<TwitterLogoIcon
								width='22'
								height='22'
							/>
						</Button>
					</Flex>
				</Flex>
			</Container>
			<Container
				maxWidth='1300px'
				style={{ background: '#5967F4', padding: '10px 0px' }}>
				<Flex
					align='center'
					justify='between'>
					<Box>
						<Text>© 2024 All Rights Reserved.</Text>
					</Box>
					<Flex gap='3'>
						<Link
							href='#'
							color='gray'>
							<Text>Contact Us</Text>
						</Link>
						<Link
							href='#'
							color='gray'>
							<Text>Privacy Policy</Text>
						</Link>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
};

export default FooterSection;
