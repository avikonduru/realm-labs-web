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
	Section,
} from '@radix-ui/themes';

const AboutSection = () => {
	return (
		<Box style={{ background: '#5928E5' }}>
			<Grid
				columns='2'
				width='auto'>
				<Box>
					<Image
						src='/assets/images/about_us_image.jpg'
						height={100}
						width={500}
						alt='Hero Section Realm Labs'
						style={{
							objectFit: 'cover',
							width: '100%',
							height: '100%',
						}}
					/>
				</Box>
				<Flex
					direction='column'
					justify='center'
					style={{ padding: '0px 80px' }}>
					<Box style={{ marginBottom: '20px' }}>
						<Text
							style={{
								fontSize: '40px',
								fontWeight: '700',
								lineHeight: '50px',
							}}>
							<span
								style={{
									backgroundColor: '#221d1e',
									padding: '0px 5px',
								}}>
								Hi!
							</span>{' '}
							I'm web strategist, Wes McDowell.
						</Text>
					</Box>
					<Flex
						direction='column'
						gap='3'>
						<Box>
							<Text
								size='3'
								style={{ fontWeight: '600' }}>
								After 10+ years of creating and testing websites for
								service business owners, I’ve learned what works (and
								what doesn’t) when it comes to automated client
								generation websites.
							</Text>
						</Box>

						<Box>
							<Text
								size='3'
								style={{ fontWeight: '600' }}>
								And believe it or not, it’s hardly ever about adding
								more stuff — it’s about simplifying and clarifying
								your message.
							</Text>
						</Box>

						<Box>
							<Text
								size='3'
								style={{ fontWeight: '600' }}>
								Focusing on the 20% of content, advertising and social
								strategies that will bring in the biggest fish for
								your small business is the secret to scaling your
								business fast — without any of the burnout.
							</Text>
						</Box>

						<Box>
							<Text
								size='3'
								style={{ fontWeight: '600' }}>
								So if you’re ready to discover the simple website and
								digital marketing strategies that will help you do
								more by doing way less, let’s get started!
							</Text>
						</Box>
					</Flex>
				</Flex>
			</Grid>
		</Box>
	);
};

export default AboutSection;
