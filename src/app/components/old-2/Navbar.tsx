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
} from '@radix-ui/themes';

const Navbar = () => {
	return (
		<Container
			maxWidth='1300px'
			style={{ background: '#221D1E' }}>
			<Flex
				align='center'
				justify='between'
				style={{ padding: '20px 0px 20px 0px' }}>
				<Text
					size='7'
					style={{ paddingLeft: '10px', fontWeight: '900' }}>
					<span style={{ color: '#FF00FF' }}>realm</span> labs
					<span style={{ color: '#00FFFF' }}>.</span>
				</Text>
				<Flex
					align='center'
					gap='9'>
					<Flex align='center'>
						<Link href='#'>
							<Text
								color='gray'
								size='3'
								style={{ paddingRight: '20px', fontWeight: '600' }}>
								Services
							</Text>
						</Link>
						<Link href='#'>
							<Text
								color='gray'
								size='3'
								style={{ fontWeight: '600' }}>
								About
							</Text>
						</Link>
					</Flex>

					<Button
						size='3'
						variant='solid'>
						<Text
							size='3'
							weight='medium'>
							Contact Us
						</Text>
					</Button>
				</Flex>
			</Flex>
		</Container>
	);
};

export default Navbar;
