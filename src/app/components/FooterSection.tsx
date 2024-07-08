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
	Grid,
	Separator,
} from '@radix-ui/themes';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';

const FooterSection = () => {
	return (
		<Box style={{ background: '#282828' }}>
			<Container maxWidth='1300px'>
				<Box style={{ margin: '40px 0px 40px 0px' }}>
					<Flex
						align='center'
						justify='between'>
						<Flex align='center'>
							<Image
								src='/assets/images/realm_labs_logo.svg'
								width={40}
								height={40}
								alt='Realm Labs logo'
							/>
							<Text
								size='5'
								style={{
									paddingLeft: '10px',
									fontWeight: '900',
									color: 'white',
								}}>
								REALM LABS
							</Text>
						</Flex>
						<Flex gap='3'>
							<Box>
								<Button
									color='green'
									radius='full'
									variant='soft'
									highContrast
									style={{ background: 'white' }}>
									<LinkedInLogoIcon
										width='17'
										height='17'
									/>
								</Button>
							</Box>

							<Box>
								<Button
									color='green'
									radius='full'
									variant='soft'
									highContrast
									style={{ background: 'white' }}>
									<LinkedInLogoIcon
										width='17'
										height='17'
									/>
								</Button>
							</Box>
						</Flex>
					</Flex>
				</Box>
			</Container>
		</Box>
	);
};

export default FooterSection;
