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

const EngagementSection = () => {
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
					Choose your level of engagement
				</Text>
				<Text
					style={{
						color: colors.neutral_dark,
						fontSize: '14px',
						fontWeight: '600',
					}}>
					Imagine spending quality time with patients and loving your
					work again. Don't let burnout end your medical career.
				</Text>
			</Flex>
			<Flex
				direction='column'
				align='center'>
				<Grid
					columns='3'
					gap='3'
					style={{ marginBottom: '45px' }}>
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
						<Box style={{ padding: '20px' }}>
							<Flex
								direction='column'
								style={{ marginBottom: '20px' }}>
								<Text
									style={{
										fontSize: '18px',
										fontWeight: '700',
										color: colors.primary,
									}}>
									Quick Start: 15-Minute Free Consultation
								</Text>
								<Text
									style={{
										fontSize: '13px',
										fontWeight: '500',
										color: colors.neutral_dark,
									}}>
									Discover if DPC is right for you
								</Text>
							</Flex>

							<Button
								size='3'
								color='orange'
								style={{ width: '100%' }}>
								<Text style={{ fontSize: '16px', fontWeight: '600' }}>
									Book Your Free 15-Minute Consult
								</Text>
							</Button>
						</Box>
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
						<Box style={{ padding: '20px' }}>
							<Flex
								direction='column'
								style={{ marginBottom: '20px' }}>
								<Text
									style={{
										fontSize: '18px',
										fontWeight: '700',
										color: colors.primary,
									}}>
									Deep Dive: 2-Hour DPC Strategy Session
								</Text>

								<Text
									style={{
										fontSize: '13px',
										fontWeight: '500',
										color: colors.neutral_dark,
									}}>
									Get your customized DPC transition roadmap
								</Text>
								<Text
									style={{
										fontSize: '13px',
										fontWeight: '500',
										color: colors.neutral_dark,
									}}>
									Price: <b>$497</b>
								</Text>
							</Flex>

							<Button
								size='3'
								color='orange'
								style={{ width: '100%' }}>
								<Text style={{ fontSize: '16px', fontWeight: '600' }}>
									Secure Your Strategy Session
								</Text>
							</Button>
						</Box>
					</Box>
					<Box
						style={{
							boxShadow: 'var(--shadow-3)',
						}}>
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
						<Box style={{ padding: '20px' }}>
							<Flex
								direction='column'
								style={{ marginBottom: '20px' }}>
								<Text
									style={{
										fontSize: '18px',
										fontWeight: '700',
										color: colors.primary,
									}}>
									Full Transformation: DPC Launchpad Program
								</Text>
								<Text
									style={{
										fontSize: '13px',
										fontWeight: '500',
										color: colors.neutral_dark,
									}}>
									Complete practice overhaul with our support
								</Text>
							</Flex>

							<Button
								size='3'
								color='orange'
								style={{ width: '100%' }}>
								<Text style={{ fontSize: '16px', fontWeight: '600' }}>
									Apply for Full DPC Launchpad
								</Text>
							</Button>
						</Box>
					</Box>
				</Grid>
			</Flex>

			<Flex
				direction='column'
				align='center'>
				<Flex maxWidth='850px'>
					<Flex
						direction='column'
						align='center'>
						<Text
							style={{
								textAlign: 'center',
								color: colors.neutral_dark,
								fontSize: '14px',
								fontWeight: '600',
							}}>
							Join 100+ physicians who've reclaimed their practices:
						</Text>
						<Text
							style={{
								textAlign: 'center',
								color: colors.neutral_dark,
								fontSize: '20px',
								fontWeight: '600',
							}}>
							"Thanks to DPC Launchpad, I now spend an hour with each
							patient and my income has increased. It's the practice I
							always dreamed of." - Dr. Jane Smith
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Container>
	);
};

export default EngagementSection;
