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

const AboutUsSection = () => {
	return (
		<Container style={{ padding: '60px 10px' }}>
			<Flex
				direction='column'
				style={{ marginBottom: '45px' }}>
				<Text
					className={montserrat.className}
					style={{
						color: colors.accent,
						fontSize: '16px',
						fontWeight: '800',
					}}>
					About Us
				</Text>
			</Flex>

			<Flex
				direction='column'
				gap='9'
				align='center'
				style={{ marginBottom: '45px' }}>
				<Container style={{ maxWidth: '900px' }}>
					<Grid
						columns='2'
						gap='8'>
						<Box style={{ boxShadow: 'var(--shadow-3)' }}>
							<Box>
								<Image
									src='/assets/images/placeholder.png'
									height={100}
									width={400}
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
								style={{ padding: '20px' }}>
								<Text
									style={{
										marginBottom: '15px',
										fontSize: '18px',
										fontWeight: '700',
										color: colors.primary,
									}}>
									Nate's Story
								</Text>
								<Flex
									direction='column'
									gap='2'
									style={{
										fontSize: '13px',
										fontWeight: '500',
										color: colors.neutral_dark,
									}}>
									<Text>
										As a 40-something tech professional, I've seen the
										healthcare system from the inside. Working for the
										second-largest health insurer in the US, I
										witnessed firsthand the frustration of talented
										professionals trapped in a system that prioritizes
										profits over care.
									</Text>
									<Text>
										But it's not just professional - it's personal.
										I've battled high blood pressure and high
										cholesterol, and watched my father suffer a major
										heart event in his 40s. I've seen friends and
										family struggle with weight, stress, and chronic
										conditions, all while navigating a healthcare
										system that seems designed to confuse and
										bankrupt.
									</Text>
								</Flex>
							</Flex>
						</Box>

						<Box style={{ boxShadow: 'var(--shadow-3)' }}>
							<Box>
								<Image
									src='/assets/images/placeholder.png'
									height={100}
									width={400}
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
								style={{ padding: '20px' }}>
								<Text
									style={{
										marginBottom: '15px',
										fontSize: '18px',
										fontWeight: '700',
										color: colors.primary,
									}}>
									Avi’s Story
								</Text>
								<Flex
									direction='column'
									gap='2'
									style={{
										fontSize: '13px',
										fontWeight: '500',
										color: colors.neutral_dark,
									}}>
									<Text>
										My journey to DPC began with my own health
										struggles. Living with Grave's disease, I've
										experienced the patient side of our broken
										healthcare system. But it was my father's cancer
										diagnosis that truly opened my eyes. Despite
										having good insurance, the bills piled up, adding
										financial stress to an already difficult time.
									</Text>
								</Flex>
							</Flex>
						</Box>
					</Grid>
				</Container>
			</Flex>

			<Flex
				direction='column'
				gap='9'
				align='center'>
				<Container style={{ maxWidth: '900px' }}>
					<Flex
						direction='column'
						align='center'
						style={{
							boxShadow: 'var(--shadow-3)',
							padding: '20px',
							background: colors.background_secondary,
						}}>
						<Text
							style={{
								textAlign: 'center',
								marginBottom: '15px',
								fontSize: '18px',
								fontWeight: '700',
								color: colors.primary,
							}}>
							Our Mission
						</Text>
						<Flex
							direction='column'
							gap='2'
							style={{
								textAlign: 'center',
								fontSize: '13px',
								fontWeight: '500',
								color: colors.neutral_dark,
							}}>
							<Text>
								We're here to break down the bureaucratic healthcare
								system and rebuild it, putting the focus back on
								doctors and patients. With our combined experience in
								health tech, marketing, and patient care, we're
								uniquely positioned to guide you through the
								transition to Direct Primary Care.
							</Text>
							<Text>
								Together, we can create a healthcare system that
								serves both doctors and patients, restoring the joy of
								medicine and the quality of care.
							</Text>
						</Flex>
					</Flex>
				</Container>
			</Flex>
		</Container>
	);
};

export default AboutUsSection;
