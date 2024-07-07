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
		<Container maxWidth='1300px'>
			<Flex
				align='center'
				justify='between'
				style={{
					background: '#FFFFFF',
					padding: '20px',
					boxShadow: 'var(--shadow-3)',
					borderRadius: '15px',
					margin: '20px 0px 20px 0px',
				}}>
				<Flex align='center'>
					<Flex
						align='center'
						style={{ paddingRight: '60px' }}>
						<Image
							src='/assets/images/realm_labs_logo.svg'
							width={40}
							height={40}
							alt='Realm Labs logo'
						/>
						<Text
							size='5'
							style={{ paddingLeft: '10px', fontWeight: '900' }}>
							REALM LABS
						</Text>
					</Flex>
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
				</Flex>

				<Box>
					<Button
						size='3'
						variant='solid'>
						<Text
							size='3'
							weight='medium'>
							Contact Us
						</Text>
					</Button>
				</Box>
			</Flex>
		</Container>
	);
};

export default Navbar;
