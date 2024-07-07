import React from 'react';
import Image from 'next/image';

// radix
import { Container, Box, Flex, Button, Text } from '@radix-ui/themes';

const HomePage = () => {
	return (
		<Box
			style={{ background: '#F6F5F3', padding: '20px 0px 20px 0px' }}>
			<Container maxWidth='1300px'>
				<Flex
					align='center'
					justify='between'
					style={{
						background: '#FFFFFF',
						padding: '20px',
						boxShadow: 'var(--shadow-4)',
						borderRadius: '15px',
					}}>
					<Flex align='center'>
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
		</Box>
	);
};

export default HomePage;
