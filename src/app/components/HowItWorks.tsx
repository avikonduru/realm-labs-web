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

const HowItWorks = () => {
	return (
		<Container
			style={{
				padding: '60px 10px',
				background: colors.background_primary,
			}}>
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
					How It Works
				</Text>
				<Text
					style={{
						color: colors.neutral_dark,
						fontSize: '14px',
						fontWeight: '600',
					}}>
					Transitioning to DPC with DPC Launchpad: Your Step-by-Step
					Guide
				</Text>
			</Flex>

			<Grid
				columns='6'
				gap='8'
				style={{ marginBottom: '20px' }}>
				<Box gridColumn='span 2'>
					<Image
						src='/assets/images/placeholder.png'
						height={100}
						width={2000}
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
					gap='6'
					gridColumn='span 4'>
					<Flex
						direction='column'
						style={{
							width: '100%',
							padding: '20px',
							background: 'white',
							boxShadow: 'var(--shadow-3)',
						}}>
						<Text
							style={{
								marginBottom: '15px',
								fontSize: '18px',
								fontWeight: '700',
								color: colors.primary,
							}}>
							Initial Consultation
						</Text>
						<Flex
							direction='column'
							gap='1'
							style={{
								fontSize: '13px',
								fontWeight: '500',
								color: colors.neutral_dark,
							}}>
							<Text>
								- Free 15-minute call to assess your DPC potential
							</Text>
							<Text>- Discuss your goals and challenges</Text>
							<Text>
								- Determine if you're ready for the next step
							</Text>
						</Flex>
					</Flex>

					<Flex
						direction='column'
						style={{
							width: '100%',
							padding: '20px',
							background: 'white',
							boxShadow: 'var(--shadow-3)',
						}}>
						<Text
							style={{
								marginBottom: '15px',
								fontSize: '18px',
								fontWeight: '700',
								color: colors.primary,
							}}>
							DPC Strategy Session
						</Text>
						<Flex
							direction='column'
							gap='1'
							style={{
								fontSize: '13px',
								fontWeight: '500',
								color: colors.neutral_dark,
							}}>
							<Text>- 2-hour deep dive into your practice</Text>
							<Text>- Develop a custom DPC transition roadmap</Text>
							<Text>- Financial projections and timeline</Text>
						</Flex>
					</Flex>

					<Flex
						direction='column'
						style={{
							width: '100%',
							padding: '20px',
							background: 'white',
							boxShadow: 'var(--shadow-3)',
						}}>
						<Text
							style={{
								marginBottom: '15px',
								fontSize: '18px',
								fontWeight: '700',
								color: colors.primary,
							}}>
							Full DPC Launchpad Program (if you choose to proceed)
						</Text>
						<Flex
							direction='column'
							gap='3'>
							<Flex
								direction='column'
								gap='1'
								style={{
									fontSize: '13px',
									fontWeight: '500',
									color: colors.neutral_dark,
								}}>
								<Text style={{ fontWeight: '700' }}>
									a. Practice Analysis and Goal Setting
								</Text>
								<Flex
									direction='column'
									gap='1'
									style={{ marginLeft: '20px' }}>
									<Text>- 2-hour deep dive into your practice</Text>
									<Text>
										- Develop a custom DPC transition roadmap
									</Text>
									<Text>- Financial projections and timeline</Text>
								</Flex>
							</Flex>

							<Flex
								direction='column'
								gap='1'
								style={{
									fontSize: '13px',
									fontWeight: '500',
									color: colors.neutral_dark,
								}}>
								<Text style={{ fontWeight: '700' }}>
									b. Technology Implementation
								</Text>
								<Flex
									direction='column'
									gap='1'
									style={{ marginLeft: '20px' }}>
									<Text>
										- Custom DPC Practice Management Software setup
									</Text>
									<Text>- Tech stack optimization</Text>
									<Text>- Training for you and your staff</Text>
								</Flex>
							</Flex>

							<Flex
								direction='column'
								gap='1'
								style={{
									fontSize: '13px',
									fontWeight: '500',
									color: colors.neutral_dark,
								}}>
								<Text style={{ fontWeight: '700' }}>
									c. Marketing and Patient Acquisition
								</Text>
								<Flex
									direction='column'
									gap='1'
									style={{ marginLeft: '20px' }}>
									<Text>- Develop your unique value proposition</Text>
									<Text>- Create and launch marketing campaigns</Text>
									<Text>- Set up patient acquisition funnel</Text>
								</Flex>
							</Flex>

							<Flex
								direction='column'
								gap='1'
								style={{
									fontSize: '13px',
									fontWeight: '500',
									color: colors.neutral_dark,
								}}>
								<Text style={{ fontWeight: '700' }}>
									d. DPC Model Implementation
								</Text>
								<Flex
									direction='column'
									gap='1'
									style={{ marginLeft: '20px' }}>
									<Text>- Pricing strategy development</Text>
									<Text>- Patient communication plan</Text>
									<Text>- Legal and compliance review</Text>
								</Flex>
							</Flex>

							<Flex
								direction='column'
								gap='1'
								style={{
									fontSize: '13px',
									fontWeight: '500',
									color: colors.neutral_dark,
								}}>
								<Text style={{ fontWeight: '700' }}>
									e. Launch and Optimization
								</Text>
								<Flex
									direction='column'
									gap='1'
									style={{ marginLeft: '20px' }}>
									<Text>- Official launch of your DPC practice</Text>
									<Text>- Ongoing support and troubleshooting</Text>
									<Text>
										- Regular performance reviews and optimizations
									</Text>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Grid>

			<Flex justify='center'>
				<Text
					style={{
						fontSize: '11px',
						fontWeight: '700',
						textAlign: 'center',
					}}>
					Timeline: Most practices complete the transition within 3-6
					months, depending on their starting point and goals.
				</Text>
			</Flex>
		</Container>
	);
};

export default HowItWorks;
