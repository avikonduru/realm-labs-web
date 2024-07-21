import React from 'react';
import { montserrat } from '../fonts';

// radix
import {
	Container,
	Box,
	Flex,
	Button,
	Text,
	Link,
} from '@radix-ui/themes';

const Navbar = () => {
	return (
		<Container
			maxWidth='1300px'
			style={{}}>
			<Flex
				align='center'
				justify='between'
				style={{ padding: '20px 10px' }}>
				<Text
					size='7'
					style={{ paddingLeft: '10px', fontWeight: '900' }}>
					<span style={{ color: '#006D77' }}>realm</span> labs
					<span style={{ color: '#F4A261' }}>.</span>
				</Text>
				<Flex
					align='center'
					gap='9'>
					<Flex
						align='center'
						gap='5'>
						<Link href='#'>
							<Text
								color='gray'
								size='3'
								style={{ fontWeight: '600' }}>
								About Us
							</Text>
						</Link>
						<Link href='#'>
							<Text
								color='gray'
								size='3'
								style={{ fontWeight: '600' }}>
								Services
							</Text>
						</Link>
						<Link href='#'>
							<Text
								color='gray'
								size='3'
								style={{ fontWeight: '600' }}>
								How It Works
							</Text>
						</Link>
						<Link href='#'>
							<Text
								color='gray'
								size='3'
								style={{ fontWeight: '600' }}>
								Testimonals
							</Text>
						</Link>
						<Link href='#'>
							<Text
								color='gray'
								size='3'
								style={{ fontWeight: '600' }}>
								Blog
							</Text>
						</Link>
						<Link href='#'>
							<Text
								color='gray'
								size='3'
								style={{ fontWeight: '600' }}>
								Contact Us
							</Text>
						</Link>
					</Flex>

					<Button
						size='4'
						variant='solid'
						color='orange'>
						<Text
							size='3'
							weight='medium'>
							Book Now
						</Text>
					</Button>
				</Flex>
			</Flex>
		</Container>
	);
};

export default Navbar;
