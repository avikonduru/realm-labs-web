import React from 'react';
import Image from 'next/image';
import { montserrat } from '../fonts';
import { colors } from '../pallete';

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
	TwitterLogoIcon,
	LinkedInLogoIcon,
} from '@radix-ui/react-icons';

const Footer = () => {
	return (
		<Container
			maxWidth='1300px'
			style={{
				backgroundColor: colors.primary,
				padding: '20px 10px',
			}}>
			<Flex
				align='center'
				justify='between'
				style={{ paddingBottom: '120px' }}>
				<Text
					size='7'
					style={{
						paddingLeft: '10px',
						fontWeight: '900',
						color: 'white',
					}}>
					<span>realm</span> labs
					<span style={{ color: colors.secondary }}>.</span>
				</Text>

				<Flex gap='4'>
					<Button
						radius='full'
						color='orange'>
						<TwitterLogoIcon
							width={20}
							height={20}
						/>
					</Button>
					<Button
						radius='full'
						color='orange'>
						<LinkedInLogoIcon
							width={20}
							height={20}
						/>
					</Button>
				</Flex>
			</Flex>
			<Flex
				align='center'
				justify='center'>
				<Text
					style={{
						fontSize: '12px',
						fontWeight: '500',
						color: 'white',
					}}>
					© 2024 All Rights Reserved.
				</Text>
			</Flex>
		</Container>
	);
};

export default Footer;
